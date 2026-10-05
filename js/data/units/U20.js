/* ==========================================================================
   Unit 20 · Geometry Part 1: Lines, Angles, Triangles, Area and Volume

   Everything about this unit except its practice questions: where it sits
   in the course, its title and summary in each language, and the written
   lesson. The lesson between the GENERATED markers is rebuilt from the
   course page by tools/html2teach.py; edit the course, not those lines.
   The practice questions are listed by code in js/data/lesson-questions.js.
   ========================================================================== */
JTS.data.unit({
  code: "U20", unit: "m-geo", n3: 20, n2: 20, week: 7,
  t: { en: "Geometry Part 1: Lines, Angles, Triangles, Area and Volume",
      ru: "Геометрия, часть 1: прямые, углы, треугольники, площадь и объём",
      kk: "Геометрия, 1-бөлім: түзулер, бұрыштар, үшбұрыштар, аудан және көлем" },
  skills: { en: "The reference sheet, lines and angles, similar triangles, area and scaling, volume",
           ru: "Справочный лист, прямые и углы, подобные треугольники, площадь и масштаб, объём",
           kk: "Анықтамалық парақ, түзулер мен бұрыштар, ұқсас үшбұрыштар, аудан және масштаб, көлем" },
  /* GENERATED: lesson (tools/html2teach.py) */
  lesson: {
    lead: "<p>Geometry and Trigonometry is about 15% of the Math section, so it gets two classes. This one covers the reference sheet, angle rules, similar triangles, and area and volume. Right triangles, trigonometry and circles come in Class 24. The Digital SAT is consistent in this domain: you are not expected to memorize every formula, but you are expected to know when to use the reference sheet and how to work with shapes.</p>",
    parts: [
      {"title": "Part 1 · The reference sheet", "mins": "about 2 min", "html": "<p>The reference sheet in Bluebook gives you:</p>\n<ul>\n<li><b>Area and circumference:</b> circle, rectangle, triangle.</li>\n<li><b>Pythagorean theorem:</b> <i>a</i>² + <i>b</i>² = <i>c</i>².</li>\n<li><b>Special right triangles:</b> the 30-60-90 and 45-45-90 side ratios.</li>\n<li><b>Volume:</b> rectangular prism, cylinder, sphere, cone, pyramid.</li>\n<li><b>Facts:</b> a circle has 360° or 2π radians; the angles of a triangle add to 180°.</li>\n</ul>\n<p class=\"lw-note lw-tip\"><b>Tip.</b> Do not compute an area or volume from memory. Take the formula from the reference sheet, so you never mix up 2π<i>r</i> (circumference) and π<i>r</i>² (area).</p>"},
      {"title": "Part 2 · Lines and angles", "mins": "about 4 min", "html": "<div class=\"lw-table\"><table>\n<thead><tr><th>Rule</th><th>What it says</th></tr></thead>\n<tbody>\n<tr><td>Vertical angles</td><td>Angles opposite each other where two lines cross are equal.</td></tr>\n<tr><td>Angles on a straight line</td><td>They add to 180°.</td></tr>\n<tr><td>Parallel lines and a transversal</td><td>Corresponding angles are equal. Alternate interior angles are equal. Same-side interior angles add to 180°.</td></tr>\n<tr><td>Exterior angle of a triangle</td><td>It equals the sum of the two interior angles that are not next to it.</td></tr>\n<tr><td>Polygon angle sum</td><td>The interior angles of an <i>n</i>-sided polygon add to (<i>n</i> − 2) × 180°.</td></tr>\n</tbody></table></div>\n<p>With two parallel lines and a transversal there are only two angle sizes. All the acute angles are equal, all the obtuse angles are equal, and one of each adds to 180°.</p>\n<blockquote>Polygon angle sums\n<div class=\"lw-work\"><div>Triangle: (3 − 2) × 180° = 180°</div><div>Quadrilateral: (4 − 2) × 180° = 360°</div><div>Hexagon: (6 − 2) × 180° = 720°, so each angle of a regular hexagon is 720° / 6 = 120°</div></div></blockquote>"},
      {"title": "Part 3 · Similar triangles", "mins": "about 5 min", "html": "<p><b>Similar triangles</b> have the same angles, even at different sizes, so their side lengths are <b>proportional</b>.</p>\n<ul>\n<li>If triangle A has sides 3, 4, 5 and triangle B is similar with a scale factor of 2, its sides are 6, 8, 10.</li>\n<li>Areas scale by the square of the factor: triangle B has 2² = 4 times the area of triangle A.</li>\n<li><b>The SAT trick:</b> similar triangles are hidden by nesting, a small triangle inside a larger one. Redraw them as two separate triangles to see the ratios.</li>\n</ul>"},
      {"title": "Part 4 · Area and scaling", "mins": "about 4 min", "html": "<p>Area questions are direct substitution from the reference sheet: rectangle = length × width, triangle = ½ × base × height, circle = π<i>r</i>².</p>\n<p><b>Scaling.</b> When every length of a shape is multiplied by <i>k</i>, the perimeter is multiplied by <i>k</i>, the area by <i>k</i>², and the volume by <i>k</i>³.</p>\n<blockquote>A square has side 5. Each side is tripled. What happens to the area?\n<div class=\"lw-work\"><div>Scale factor 3 → area × 3² = 9</div><div>Check: 5² = 25 and 15² = 225 = 9 × 25</div></div></blockquote>"},
      {"title": "Part 5 · Volume", "mins": "about 4 min", "html": "<p>Volume questions are direct substitution if you use the reference sheet.</p>\n<p><b>The trap is units.</b> The question gives the radius in inches and asks for the volume in cubic feet. <b>Convert the lengths before you plug them into the formula.</b> Converting a radius is one step. Converting a finished volume means using the conversion factor three times (1 cubic foot = 12 × 12 × 12 cubic inches).</p>"}
    ]
  }
  /* END GENERATED */
});
