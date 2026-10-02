/* ==========================================================================
   A whiteboard for a class: JTS.whiteboard.create(key)

   The teacher draws and writes on it while walking through the lesson, the
   way they would at the front of a room: pen, highlighter, eraser, text,
   six colours, three widths, undo and redo, clear, full screen, and a PNG of
   the board to keep.

   The board is kept as a list of strokes and text items in a fixed 1600×900
   space rather than as pixels, so it redraws sharply at any size — on a
   laptop, on a projector in full screen, after the window is resized — and
   undo is simply dropping the last item. Each class has its own board, saved
   in this browser under its key, so reopening the class brings back what was
   on it. Storage can be unavailable (a private window, blocked site data);
   the board then still works, it just does not come back.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t;

  var W = 1600, H = 900;
  var COLORS = ['#1f2937', '#2563eb', '#dc2626', '#16a34a', '#ea580c', '#7c3aed'];
  var SIZES = [3, 6, 12];
  var PREFIX = 'jts.whiteboard.v1.';

  function load(key) {
    try {
      var raw = window.localStorage.getItem(PREFIX + key);
      var items = raw ? JSON.parse(raw) : [];
      return Array.isArray(items) ? items : [];
    } catch (e) { return []; }
  }

  function save(key, items) {
    try { window.localStorage.setItem(PREFIX + key, JSON.stringify(items)); return true; }
    catch (e) { return false; }
  }

  function fontSize(size) { return 18 + size * 4; }

  /** Draw one item onto a context already scaled to the 1600×900 space. */
  function paint(ctx, it) {
    ctx.save();
    if (it.t === 'text') {
      ctx.fillStyle = it.c;
      ctx.font = '600 ' + fontSize(it.s) + 'px system-ui, -apple-system, Segoe UI, sans-serif';
      ctx.textBaseline = 'top';
      String(it.text).split('\n').forEach(function (line, i) {
        ctx.fillText(line, it.x, it.y + i * fontSize(it.s) * 1.25);
      });
      ctx.restore();
      return;
    }
    var p = it.p;
    if (!p || p.length < 2) { ctx.restore(); return; }
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    if (it.tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.strokeStyle = '#000';
      ctx.lineWidth = it.s * 4;
    } else if (it.tool === 'hl') {
      ctx.globalAlpha = 0.3;
      ctx.strokeStyle = it.c;
      ctx.lineWidth = it.s * 4;
      ctx.lineCap = 'square';
    } else {
      ctx.strokeStyle = it.c;
      ctx.lineWidth = it.s;
    }
    ctx.beginPath();
    ctx.moveTo(p[0], p[1]);
    if (p.length === 2) {
      ctx.lineTo(p[0] + 0.1, p[1] + 0.1);      /* a tap is a dot */
    } else {
      /* Midpoint smoothing: a quadratic through each sampled point keeps
         handwriting from looking like a polyline. */
      for (var i = 2; i < p.length - 2; i += 2) {
        var mx = (p[i] + p[i + 2]) / 2, my = (p[i + 1] + p[i + 3]) / 2;
        ctx.quadraticCurveTo(p[i], p[i + 1], mx, my);
      }
      ctx.lineTo(p[p.length - 2], p[p.length - 1]);
    }
    ctx.stroke();
    ctx.restore();
  }

  function create(key) {
    var items = load(key);
    var redo = [];
    var tool = 'pen', color = COLORS[0], size = SIZES[1];
    var live = null;              /* the stroke being drawn */
    var saveTimer = null;

    var root = U.el('div.wb', { tabindex: '0' });
    var stage = U.el('div.wb-stage');
    var canvas = U.el('canvas.wb-canvas', { 'aria-label': t('wb.title') });
    var status = U.el('span.wb-status.xsmall.muted');
    stage.appendChild(canvas);
    var ctx = canvas.getContext('2d');

    /* ------------------------------------------------------------ drawing */
    function scale() { return canvas.width / W; }

    function render() {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var k = scale();
      ctx.setTransform(k, 0, 0, k, 0, 0);
      items.forEach(function (it) { paint(ctx, it); });
      if (live) paint(ctx, live);
      undoBtn.disabled = !items.length;
      redoBtn.disabled = !redo.length;
      clearBtn.disabled = !items.length;
    }

    function fit() {
      var w = stage.clientWidth;
      if (!w) return;
      var h = stage.clientHeight || Math.round(w * H / W);
      /* Keep the 16:9 space whole inside whatever box the stage is. */
      var cw = Math.min(w, h * W / H);
      var dpr = window.devicePixelRatio || 1;
      canvas.style.width = cw + 'px';
      canvas.style.height = (cw * H / W) + 'px';
      canvas.width = Math.round(cw * dpr);
      canvas.height = Math.round(cw * H / W * dpr);
      render();
    }

    function persist() {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(function () {
        status.textContent = save(key, items) ? t('wb.saved') : t('wb.notSaved');
      }, 300);
    }

    function commit(it) {
      items.push(it);
      redo = [];
      render();
      persist();
    }

    function toBoard(ev) {
      var r = canvas.getBoundingClientRect();
      return [
        Math.round((ev.clientX - r.left) / r.width * W * 10) / 10,
        Math.round((ev.clientY - r.top) / r.height * H * 10) / 10
      ];
    }

    canvas.addEventListener('pointerdown', function (ev) {
      if (ev.button > 0) return;
      ev.preventDefault();
      root.focus({ preventScroll: true });
      var pt = toBoard(ev);
      if (tool === 'text') { openText(pt); return; }
      canvas.setPointerCapture(ev.pointerId);
      live = { t: 'stroke', tool: tool, c: color, s: size, p: pt.slice() };
      render();
    });

    canvas.addEventListener('pointermove', function (ev) {
      if (!live) return;
      var evs = ev.getCoalescedEvents ? ev.getCoalescedEvents() : [ev];
      (evs.length ? evs : [ev]).forEach(function (e) {
        var pt = toBoard(e);
        var n = live.p.length;
        if (Math.abs(pt[0] - live.p[n - 2]) + Math.abs(pt[1] - live.p[n - 1]) < 1.5) return;
        live.p.push(pt[0], pt[1]);
      });
      render();
    });

    function endStroke() {
      if (!live) return;
      var it = live;
      live = null;
      commit(it);
    }
    canvas.addEventListener('pointerup', endStroke);
    canvas.addEventListener('pointercancel', endStroke);

    /* --------------------------------------------------------------- text */
    function openText(pt) {
      var k = canvas.getBoundingClientRect().width / W;
      var input = U.el('textarea.wb-text-input', {
        rows: 1, placeholder: t('wb.typeHere'),
        style: 'left:' + (canvas.offsetLeft + pt[0] * k) + 'px;top:' + (canvas.offsetTop + pt[1] * k) + 'px;' +
               'color:' + color + ';font-size:' + Math.max(12, fontSize(size) * k) + 'px'
      });
      var done = false;
      function finish(keep) {
        if (done) return;
        done = true;
        var text = input.value.replace(/\s+$/, '');
        input.remove();
        if (keep && text) commit({ t: 'text', x: pt[0], y: pt[1], c: color, s: size, text: text });
        root.focus({ preventScroll: true });
      }
      input.addEventListener('keydown', function (e) {
        e.stopPropagation();
        if (e.key === 'Escape') finish(false);
        else if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); finish(true); }
      });
      input.addEventListener('blur', function () { finish(true); });
      stage.appendChild(input);
      setTimeout(function () { input.focus(); }, 0);
    }

    /* ------------------------------------------------------------ toolbar */
    function toolBtn(id, icon) {
      var b = U.el('button.btn.btn-sm.wb-tool', {
        type: 'button', text: icon + ' ' + t('wb.' + id), 'aria-pressed': String(tool === id),
        onclick: function () { tool = id; syncTools(); }
      });
      b.dataset.tool = id;
      return b;
    }
    var tools = [toolBtn('pen', '✏️'), toolBtn('hl', '🖍️'), toolBtn('eraser', '🧽'), toolBtn('text', 'T')];
    function syncTools() {
      tools.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.tool === tool)); });
      swatches.forEach(function (s) { s.setAttribute('aria-pressed', String(s.dataset.color === color)); });
      sizeBtns.forEach(function (s) { s.setAttribute('aria-pressed', String(Number(s.dataset.size) === size)); });
      canvas.dataset.tool = tool;
    }

    var swatches = COLORS.map(function (c) {
      var b = U.el('button.wb-swatch', {
        type: 'button', title: t('wb.color'), 'aria-label': t('wb.color') + ' ' + c,
        style: 'background:' + c,
        onclick: function () { color = c; if (tool === 'eraser') tool = 'pen'; syncTools(); }
      });
      b.dataset.color = c;
      return b;
    });

    var sizeBtns = SIZES.map(function (s, i) {
      var b = U.el('button.btn.btn-sm.wb-size', {
        type: 'button', title: t('wb.size'), 'aria-label': t('wb.size') + ' ' + (i + 1),
        onclick: function () { size = s; syncTools(); }
      }, [U.el('span.wb-dot', { style: 'width:' + (4 + i * 4) + 'px;height:' + (4 + i * 4) + 'px' })]);
      b.dataset.size = s;
      return b;
    });

    function undo() {
      if (!items.length) return;
      redo.push(items.pop());
      render(); persist();
    }
    function redoOne() {
      if (!redo.length) return;
      items.push(redo.pop());
      render(); persist();
    }

    var undoBtn = U.el('button.btn.btn-sm', { type: 'button', text: '↶', title: t('wb.undo'), 'aria-label': t('wb.undo'), onclick: undo });
    var redoBtn = U.el('button.btn.btn-sm', { type: 'button', text: '↷', title: t('wb.redo'), 'aria-label': t('wb.redo'), onclick: redoOne });
    var clearBtn = U.el('button.btn.btn-sm', {
      type: 'button', text: t('wb.clear'),
      onclick: function () {
        JTS.ui.confirm({ title: t('wb.clear'), message: t('wb.clearConfirm'), okText: t('wb.clear') })
          .then(function (ok) {
            if (!ok) return;
            /* Clearing is one undoable step, so a mis-tap is not the end of
               a board. */
            redo = items.slice().reverse();
            items = [];
            render(); persist();
          });
      }
    });

    var saveBtn = U.el('button.btn.btn-sm', {
      type: 'button', text: t('wb.download'),
      onclick: function () {
        /* The image gets the board's white, not a transparent background. */
        var out = document.createElement('canvas');
        out.width = W; out.height = H;
        var o = out.getContext('2d');
        o.fillStyle = '#ffffff';
        o.fillRect(0, 0, W, H);
        var layer = document.createElement('canvas');
        layer.width = W; layer.height = H;
        var l = layer.getContext('2d');
        items.forEach(function (it) { paint(l, it); });
        o.drawImage(layer, 0, 0);
        var a = U.el('a', { href: out.toDataURL('image/png'), download: 'whiteboard-' + key + '.png' });
        document.body.appendChild(a); a.click(); a.remove();
      }
    });

    var fsBtn = U.el('button.btn.btn-sm', {
      type: 'button', text: '⛶ ' + t('wb.fullscreen'),
      onclick: function () {
        if (isFull()) exitFull(); else enterFull();
      }
    });
    function isFull() {
      return document.fullscreenElement === root || root.classList.contains('wb-max');
    }
    function enterFull() {
      if (root.requestFullscreen) {
        root.requestFullscreen().catch(function () { root.classList.add('wb-max'); onFull(); });
      } else { root.classList.add('wb-max'); onFull(); }
    }
    function exitFull() {
      if (document.fullscreenElement === root) document.exitFullscreen();
      root.classList.remove('wb-max');
      onFull();
    }
    function onFull() {
      fsBtn.textContent = '⛶ ' + t(isFull() ? 'wb.exitFullscreen' : 'wb.fullscreen');
      setTimeout(fit, 50);
    }
    document.addEventListener('fullscreenchange', onFull);

    root.addEventListener('keydown', function (e) {
      var mod = e.ctrlKey || e.metaKey;
      if (mod && (e.key === 'z' || e.key === 'Z') && !e.shiftKey) { e.preventDefault(); undo(); }
      else if (mod && (e.key === 'y' || ((e.key === 'z' || e.key === 'Z') && e.shiftKey))) { e.preventDefault(); redoOne(); }
      else if (e.key === 'Escape' && root.classList.contains('wb-max')) exitFull();
    });

    root.appendChild(U.el('div.wb-tools', null, [
      U.el('div.wb-group', null, tools),
      U.el('div.wb-group', null, swatches),
      U.el('div.wb-group', null, sizeBtns),
      U.el('div.wb-group', null, [undoBtn, redoBtn, clearBtn]),
      U.el('div.wb-group', null, [saveBtn, fsBtn])
    ]));
    root.appendChild(stage);
    root.appendChild(status);
    syncTools();

    /* The canvas is sized from the stage, which only has a size once it is
       in the document; observing it covers the first layout, window resizes
       and full screen alike. */
    if (window.ResizeObserver) new ResizeObserver(fit).observe(stage);
    else window.addEventListener('resize', fit);
    setTimeout(fit, 0);
    render();
    return root;
  }

  JTS.whiteboard = { create: create };
})();
