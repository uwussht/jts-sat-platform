/* ==========================================================================
   Unit 3 · Linear Equations and Inequalities in One Variable

   Everything about this unit except its practice questions: where it sits
   in the course, its title and summary in each language, and the written
   lesson. The lesson between the GENERATED markers is rebuilt from the
   course page by tools/html2teach.py; edit the course, not those lines.
   The practice questions are listed by code in js/data/lesson-questions.js.
   ========================================================================== */
JTS.data.unit({
  code: "U3", unit: "m-alg", n3: 3, n2: 3, week: 1,
  t: { en: "Linear Equations and Inequalities in One Variable",
      ru: "Линейные уравнения и неравенства с одной переменной",
      kk: "Бір айнымалысы бар сызықтық теңдеулер мен теңсіздіктер" },
  skills: { en: "The solving sequence, no solution and infinitely many, word problems, the Desmos shortcut",
           ru: "Порядок решения, нет решений и бесконечно много, текстовые задачи, приём с Desmos",
           kk: "Шешу реті, шешімі жоқ және шексіз көп, мәтінді есептер, Desmos тәсілі" },
  /* GENERATED: lesson (tools/html2teach.py) */
  lesson: {
    lead: "<p>Your first Math class. These questions are the backbone of the Algebra domain. They show up as “what is the value of <i>x</i>?”, “which equation represents this situation?”, and inequality word problems. One of the most reliable Desmos shortcuts in the course lives here too.</p>",
    parts: [
      {"title": "Part 1 · The core idea", "mins": "about 3 min", "html": "<p>A linear equation is any equation where the unknown appears to the first power: no <i>x</i>², no √<i>x</i>, no 1/<i>x</i>. Examples: 3<i>x</i> + 7 = 22 or 5(<i>x</i> − 2) = 3<i>x</i> + 4.</p>\n<p>Solving is one idea: <b>undo what was done to <i>x</i>, in reverse order, doing the same thing to both sides.</b> The equals sign is a promise that both sides weigh the same. If <i>x</i> was multiplied by 3, divide by 3. If 7 was added, subtract 7. Everything else is organization.</p>"},
      {"title": "Part 2 · The solving sequence", "mins": "about 6 min", "html": "<ol>\n<li><b>Clear fractions and parentheses.</b> Multiply both sides by the common denominator and distribute any parentheses. Messy equations are usually clean equations in disguise.</li>\n<li><b>Collect all <i>x</i> terms on one side.</b> Move every <i>x</i> term to one side and every number to the other. A term that crosses the equals sign changes its sign.</li>\n<li><b>Combine and divide.</b> Combine like terms, then divide by the coefficient of <i>x</i>.</li>\n</ol>\n<blockquote><b>Example.</b> Solve <i>x</i>/3 + 5 = <i>x</i>/2 − 1.\n<div class=\"lw-work\"><div>Step 1: multiply everything by 6 → 2x + 30 = 3x − 6</div><div>Step 2: subtract 2x from both sides → 30 = x − 6</div><div>Step 3: add 6 → x = 36</div><div>Check: 36/3 + 5 = 17 and 36/2 − 1 = 17</div></div></blockquote>\n<p>The check takes 10 seconds and catches almost every sign error.</p>\n<p><b>Inequalities</b> work the same way with one extra rule: when you multiply or divide both sides by a negative number, the sign flips. −2<i>x</i> &gt; 10 becomes <i>x</i> &lt; −5. Forgetting the flip is the most common error in this topic. Also read the question carefully: the SAT sometimes asks which <i>value</i> is in the solution set, so test each choice in your solved inequality.</p>\n<p class=\"lw-note lw-mistake\"><b>Common mistake.</b> Sign errors when moving terms across the equals sign. 5<i>x</i> + 3 = 2<i>x</i> + 11 becomes 5<i>x</i> − 2<i>x</i> = 11 − 3, not 11 + 3: the +3 that crossed becomes −3 on the right. Write the intermediate step down instead of doing it in your head.</p>"},
      {"title": "Part 3 · The two special answers", "mins": "about 4 min", "html": "<p>Sometimes simplifying removes <i>x</i> entirely, and the result tells you something.</p>\n<ul>\n<li><b>No solution:</b> you end with a false statement. 2(<i>x</i> + 3) = 2<i>x</i> + 10 simplifies to 2<i>x</i> + 6 = 2<i>x</i> + 10, then 6 = 10, which is never true. No value of <i>x</i> works.</li>\n<li><b>Infinitely many solutions:</b> you end with a true statement. 2(<i>x</i> + 3) = 2<i>x</i> + 6 simplifies to 6 = 6. Every value of <i>x</i> works, because both sides were the same expression.</li>\n</ul>\n<p>The SAT often asks “how many solutions does the equation have?” If both sides say the same thing in different clothes, it is infinitely many. If the clothing hides a contradiction, it is no solution.</p>"},
      {"title": "Part 4 · Word problems", "mins": "about 3 min", "html": "<p>Word problems here are translation exercises. Learn the dictionary:</p>\n<div class=\"lw-table\"><table>\n<thead><tr><th>Words</th><th>Meaning</th></tr></thead>\n<tbody>\n<tr><td>is</td><td>=</td></tr>\n<tr><td>more than, sum</td><td>add</td></tr>\n<tr><td>less than</td><td>subtract, in the order said: “5 less than <i>x</i>” is <i>x</i> − 5, not 5 − <i>x</i></td></tr>\n<tr><td>per</td><td>divide or multiply, depending on the setup</td></tr>\n<tr><td>at least</td><td>≥</td></tr>\n<tr><td>at most</td><td>≤</td></tr>\n</tbody></table></div>\n<p>Two traps. “Less than” flips the order, and it is the most-tested translation trap. And some questions ask for an expression, not a solution: after translating, stop. Do not solve something that is not asked.</p>"},
      {"title": "Part 5 · The Desmos shortcut", "mins": "about 2 min", "html": "<p>For a “what is the value of <i>x</i>” question, type the left side into Desmos as one expression and the right side as another. Desmos draws two lines and puts a dot where they cross. Click the dot: its <i>x</i>-coordinate is the answer. Ten seconds, no sign errors.</p>\n<p>Use algebra for “how many solutions” questions, since they ask about the structure of the equation. Desmos is the visual check there: parallel lines mean no solution, identical lines mean infinitely many.</p>"}
    ]
  }
  /* END GENERATED */
});
