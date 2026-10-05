/* ==========================================================================
   Unit 24 · Geometry Part 2: Right Triangles, Trigonometry, Circles

   Everything about this unit except its practice questions: where it sits
   in the course, its title and summary in each language, and the written
   lesson. The lesson between the GENERATED markers is rebuilt from the
   course page by tools/html2teach.py; edit the course, not those lines.
   The practice questions are listed by code in js/data/lesson-questions.js.
   ========================================================================== */
JTS.data.unit({
  code: "U24", unit: "m-geo", n3: 24, n2: 24, week: 8,
  t: { en: "Geometry Part 2: Right Triangles, Trigonometry, Circles",
      ru: "Геометрия, часть 2: прямоугольные треугольники, тригонометрия, окружности",
      kk: "Геометрия, 2-бөлім: тікбұрышты үшбұрыштар, тригонометрия, шеңберлер" },
  skills: { en: "Right triangles, trigonometry, circle equations, arcs, sectors and radians, circle theorems, Desmos",
           ru: "Прямоугольные треугольники, тригонометрия, уравнения окружности, дуги, секторы и радианы, теоремы об окружности, Desmos",
           kk: "Тікбұрышты үшбұрыштар, тригонометрия, шеңбер теңдеулері, доғалар, секторлар және радиандар, шеңбер теоремалары, Desmos" },
  /* GENERATED: lesson (tools/html2teach.py) */
  lesson: {
    lead: "<p>This is the final content lesson. It builds on Class 20 and covers the harder half of the geometry domain: right triangles, trigonometry and circles. These are the geometry topics that appear most often in the hard second module.</p>",
    parts: [
      {"title": "Part 1 · Right triangles", "mins": "about 5 min", "html": "<p><b>Pythagorean theorem.</b> In a right triangle with legs <i>a</i> and <i>b</i> and hypotenuse <i>c</i>, <i>a</i>² + <i>b</i>² = <i>c</i>². It is on the reference sheet. The hypotenuse is always the side opposite the right angle, and it is the longest side.</p>\n<p>Common whole-number triples save time: 3-4-5, 5-12-13, 8-15-17, and their multiples such as 6-8-10.</p>\n<p><b>Special right triangles.</b> Know the ratios, and check them on the reference sheet.</p>\n<div class=\"lw-table\"><table>\n<thead><tr><th>Triangle</th><th>Sides</th></tr></thead>\n<tbody>\n<tr><td>45-45-90</td><td><i>x</i>, <i>x</i>, <i>x</i>√2</td></tr>\n<tr><td>30-60-90</td><td><i>x</i>, <i>x</i>√3, 2<i>x</i>, where <i>x</i> is opposite the 30° angle</td></tr>\n</tbody></table></div>"},
      {"title": "Part 2 · Trigonometry", "mins": "about 5 min", "html": "<p><b>Trigonometry.</b> SOH-CAH-TOA is the foundation.</p>\n<div class=\"lw-table\"><table>\n<thead><tr><th>Ratio</th><th>Definition</th></tr></thead>\n<tbody>\n<tr><td>sin θ</td><td>opposite / hypotenuse</td></tr>\n<tr><td>cos θ</td><td>adjacent / hypotenuse</td></tr>\n<tr><td>tan θ</td><td>opposite / adjacent</td></tr>\n</tbody></table></div>\n<p><b>Key property:</b> sin <i>x</i>° = cos (90 − <i>x</i>)°. Since sin 30° = 0.5, cos 60° is also 0.5. If a question says sin <i>a</i>° = cos <i>b</i>°, then <i>a</i> + <i>b</i> = 90.</p>"},
      {"title": "Part 3 · Circle equations", "mins": "about 4 min", "html": "<p><b>Circle equations.</b> The standard form is (<i>x</i> − <i>h</i>)² + (<i>y</i> − <i>k</i>)² = <i>r</i>², where (<i>h</i>, <i>k</i>) is the center and <i>r</i> is the radius.</p>\n<p>When the equation is not in that form, <b>complete the square</b> for both <i>x</i> and <i>y</i> (the method from Class 11). This is a common hard Module 2 question.</p>\n<blockquote><i>x</i>² + 6<i>x</i> + <i>y</i>² − 4<i>y</i> = 12\n<div class=\"lw-work\"><div>(x² + 6x + 9) + (y² − 4y + 4) = 12 + 9 + 4</div><div>(x + 3)² + (y − 2)² = 25</div><div>Center (−3, 2), radius 5</div></div></blockquote>"},
      {"title": "Part 4 · Arcs, sectors and radians", "mins": "about 3 min", "html": "<p><b>Arcs and sectors.</b> An arc or sector is a fraction of the whole circle, set by its central angle.</p>\n<blockquote><div class=\"lw-work\"><div>Arc length = (angle / 360) × 2πr</div><div>Sector area = (angle / 360) × πr²</div><div>Degrees to radians: multiply by π / 180</div></div></blockquote>"},
      {"title": "Part 5 · Circle theorems", "mins": "about 4 min", "html": "<p>Beyond the reference sheet, the SAT tests these four properties.</p>\n<div class=\"lw-table\"><table>\n<thead><tr><th>Theorem</th><th>What it says</th><th>How it is used</th></tr></thead>\n<tbody>\n<tr><td>Tangent–radius</td><td>A tangent line is perpendicular (90°) to the radius at the point of tangency.</td><td>It creates a right triangle, so the Pythagorean theorem applies.</td></tr>\n<tr><td>Inscribed angle</td><td>An inscribed angle is half the central angle that intercepts the same arc.</td><td>A 100° central angle gives a 50° inscribed angle on the same arc.</td></tr>\n<tr><td>Tangents from one point</td><td>Two tangent segments from the same external point are equal in length.</td><td>Set the two lengths equal to find an unknown.</td></tr>\n<tr><td>Diameter rule</td><td>A triangle inscribed in a circle with the diameter as one side is a right triangle.</td><td>The right angle is opposite the diameter, which is the hypotenuse.</td></tr>\n</tbody></table></div>\n<blockquote>A tangent from point P touches a circle of radius 5 at T. P is 13 from the center O. How long is PT?\n<div class=\"lw-work\"><div>The radius OT is perpendicular to PT → right triangle with hypotenuse OP</div><div>PT² = 13² − 5² = 144 → PT = 12</div></div></blockquote>"},
      {"title": "Part 6 · The Desmos application", "mins": "about 3 min", "html": "<ul>\n<li><b>Circle equations:</b> type (<i>x</i> − 2)² + (<i>y</i> + 3)² = 16 directly, or the expanded form without rearranging. Desmos draws the circle. Click the highest, lowest, leftmost and rightmost points: the center is midway between them, and half the width is the radius.</li>\n<li><b>Trigonometry:</b> to evaluate something like cos 45°, check the angle mode first (the wrench icon). Use Degrees if the question uses degrees and Radians if it uses radians.</li>\n</ul>"}
    ]
  }
  /* END GENERATED */
});
