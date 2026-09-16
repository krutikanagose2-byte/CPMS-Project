export const visualization2DTo3DQuestions = [
  { id: 241, text: 'A square folded into a box represents:', options: ['Circle', 'Cube', 'Cone', 'Cylinder'], answer: 1 },
  { id: 242, text: 'A rectangle rolled from its longer side can form a:', options: ['Cylinder', 'Cube', 'Pyramid', 'Sphere'], answer: 0 },
  { id: 243, text: 'A triangle rotated around one of its sides forms a:', options: ['Cone', 'Cube', 'Cylinder', 'Prism'], answer: 0 },
  { id: 244, text: 'A square has how many dimensions?', options: ['1', '2', '3', '4'], answer: 1 },
  { id: 245, text: 'A cube has how many dimensions?', options: ['1', '2', '3', '4'], answer: 2 },
  { id: 246, text: 'A circle rotated around its diameter forms a:', options: ['Sphere', 'Cube', 'Cone', 'Prism'], answer: 0 },
  { id: 247, text: 'A rectangle has:', options: ['Length and width', 'Length only', 'Length, width and height', 'Radius only'], answer: 0 },
  { id: 248, text: 'A cuboid has:', options: ['Length, breadth, height', 'Radius only', 'Diameter only', 'Angle only'], answer: 0 },
  { id: 249, text: 'Which 3D object has two circular faces?', options: ['Cone', 'Cylinder', 'Sphere', 'Cube'], answer: 1 },
  { id: 250, text: 'Which 3D object has one circular base and one curved surface?', options: ['Cone', 'Cube', 'Cuboid', 'Prism'], answer: 0 },
  { id: 251, text: 'A cube can be unfolded into how many squares?', options: ['4', '5', '6', '8'], answer: 2 },
  { id: 252, text: 'A cuboid has how many rectangular faces?', options: ['4', '6', '8', '12'], answer: 1 },
  { id: 253, text: 'A pyramid has a base and:', options: ['Circular surface only', 'Triangular side faces', 'No faces', 'Only curved faces'], answer: 1 },
  { id: 254, text: 'Which is a 3D object?', options: ['Triangle', 'Square', 'Cube', 'Circle'], answer: 2 },
  { id: 255, text: 'Which object has no edges or vertices?', options: ['Cube', 'Cone', 'Sphere', 'Cuboid'], answer: 2 }
];

export const spatialOrientationQuestions = [
  { id: 256, text: 'A is above B. B is above C. Who is highest?', options: ['A', 'B', 'C', 'Cannot say'], answer: 0 },
  { id: 257, text: 'P is left of Q. Q is left of R. Who is farthest right?', options: ['P', 'Q', 'R', 'Same'], answer: 2 },
  { id: 258, text: 'X is below Y. Y is below Z. Who is lowest?', options: ['X', 'Y', 'Z', 'Same'], answer: 0 },
  { id: 259, text: 'A is right of B. B is right of C. Who is leftmost?', options: ['A', 'B', 'C', 'Cannot say'], answer: 2 },
  { id: 260, text: 'M is above N and N is right of O. M is:', options: ['Upper-right of O', 'Lower-left of O', 'Below O', 'Left of O'], answer: 0 },
  { id: 261, text: 'If you face North and turn right, you face:', options: ['West', 'East', 'South', 'North'], answer: 1 },
  { id: 262, text: 'Facing East, turn left. Direction?', options: ['North', 'South', 'West', 'East'], answer: 0 },
  { id: 263, text: 'Facing South, turn right. Direction?', options: ['East', 'West', 'North', 'South'], answer: 1 },
  { id: 264, text: 'Facing West, turn left. Direction?', options: ['South', 'North', 'East', 'West'], answer: 0 },
  { id: 265, text: 'A is above B. C is right of B. A is where relative to C?', options: ['Upper-left', 'Upper-right', 'Lower-left', 'Lower-right'], answer: 0 },
  { id: 266, text: 'D is left of E and F is below E. D is:', options: ['Upper-left of F', 'Lower-left of F', 'Right of F', 'Above F'], answer: 0 },
  { id: 267, text: 'If A is north of B, B is north of C, then A is:', options: ['South of C', 'North of C', 'East of C', 'West of C'], answer: 1 },
  { id: 268, text: 'A person moves 5 m north and then 5 m east. Final position is:', options: ['North-west', 'South-east', 'North-east', 'South-west'], answer: 2 },
  { id: 269, text: 'A person moves west and then south. Final direction from starting point is:', options: ['NE', 'NW', 'SE', 'SW'], answer: 3 },
  { id: 270, text: 'Which direction is exactly opposite to North-East?', options: ['North-West', 'South-East', 'South-West', 'West'], answer: 2 }
];

export const imageComparisonQuestions = [
  { id: 271, text: '○△□ and ○△□ are:', options: ['Same', 'Different', 'Reverse', 'Rotated'], answer: 0 },
  { id: 272, text: '★○▲ and ★▲○ are:', options: ['Same', 'Different', 'Mirror only', 'None'], answer: 1 },
  { id: 273, text: '□○△ and △○□ differ mainly in:', options: ['Number', 'Order', 'Shape count', 'Nothing'], answer: 1 },
  { id: 274, text: '▲▲○ and ▲▲○ are:', options: ['Same', 'Different', 'Opposite', 'Mirror'], answer: 0 },
  { id: 275, text: '→○ and ←○ differ in:', options: ['Shape', 'Direction', 'Number', 'Size'], answer: 1 },
  { id: 276, text: 'Which pair is different?', options: ['○□ / ○□', '△★ / △★', '□○ / ○□', '▲● / ▲●'], answer: 2 },
  { id: 277, text: '★■○ vs ★■○ — number of symbols?', options: ['2', '3', '4', '5'], answer: 1 },
  { id: 278, text: '△□○ vs △□★ differ in:', options: ['First symbol', 'Second', 'Third', 'All'], answer: 2 },
  { id: 279, text: '○○△ vs ○△○ differ in:', options: ['Order', 'Count', 'Number of shapes', 'Size'], answer: 0 },
  { id: 280, text: '▲□▲ and ▲□▲ are:', options: ['Identical', 'Different', 'Reverse', 'Mirror'], answer: 0 },
  { id: 281, text: '←★→ and →★← are:', options: ['Same', 'Reverse', 'Same direction', 'None'], answer: 1 },
  { id: 282, text: '□△★○ vs □△○★ differ in:', options: ['First two', 'Last two', 'All', 'None'], answer: 1 },
  { id: 283, text: '●●○ vs ●●○ are:', options: ['Identical', 'Different', 'Reverse', 'Rotated'], answer: 0 },
  { id: 284, text: '★▲■ vs ■▲★ are:', options: ['Same', 'Reverse order', 'Different count', 'Same direction'], answer: 1 },
  { id: 285, text: '○□△★ vs ○□△★ are:', options: ['Same', 'Different', 'Reverse', 'Rotated'], answer: 0 }
];

export const visualMemoryQuestions = [
  { id: 286, text: 'Remember: ▲ ○ ★ □. What is the second symbol?', options: ['▲', '○', '★', '□'], answer: 1 },
  { id: 287, text: '★ □ ○ △. What is last?', options: ['★', '□', '○', '△'], answer: 3 },
  { id: 288, text: '○ ▲ □ ★. What is first?', options: ['○', '▲', '□', '★'], answer: 0 },
  { id: 289, text: '■ ○ △ ★. Which is third?', options: ['■', '○', '△', '★'], answer: 2 },
  { id: 290, text: '★ ▲ ○ ■. Which comes before ○?', options: ['★', '▲', '■', 'None'], answer: 1 },
  { id: 291, text: '△ □ ★ ○. Which comes after □?', options: ['△', '★', '○', 'None'], answer: 1 },
  { id: 292, text: '○ ★ □ ▲. Which is between ★ and ▲?', options: ['○', '□', '★', 'None'], answer: 1 },
  { id: 293, text: '■ △ ○ ★. What is second?', options: ['■', '△', '○', '★'], answer: 1 },
  { id: 294, text: '★ ○ ▲ □. What is immediately before □?', options: ['★', '○', '▲', 'None'], answer: 2 },
  { id: 295, text: '▲ ■ ★ ○. What is immediately after ■?', options: ['▲', '■', '★', '○'], answer: 2 },
  { id: 296, text: '○ □ △ ★. What is the position of △?', options: ['1st', '2nd', '3rd', '4th'], answer: 2 },
  { id: 297, text: '★ ○ ■ ▲. Which symbol is first?', options: ['★', '○', '■', '▲'], answer: 0 },
  { id: 298, text: '△ ★ □ ○. Which is last?', options: ['△', '★', '□', '○'], answer: 3 },
  { id: 299, text: '□ ▲ ○ ★. Which symbol is between ▲ and ★?', options: ['□', '▲', '○', '★'], answer: 2 },
  { id: 300, text: '★ ■ △ ○. Which comes immediately after ★?', options: ['■', '△', '○', 'None'], answer: 0 }
];

export const positionDirectionQuestions = [
  { id: 301, text: 'A is 5 m north of B. A is in which direction from B?', options: ['South', 'North', 'East', 'West'], answer: 1 },
  { id: 302, text: 'P is 4 m east of Q. P is:', options: ['West', 'North', 'East', 'South'], answer: 2 },
  { id: 303, text: 'X is 3 m south of Y. X is:', options: ['North', 'South', 'East', 'West'], answer: 1 },
  { id: 304, text: 'A walks 5 m north and 5 m south. Distance from start?', options: ['0 m', '5 m', '10 m', '25 m'], answer: 0 },
  { id: 305, text: 'A walks 4 m east and 3 m north. Shortest distance from start?', options: ['5 m', '7 m', '1 m', '12 m'], answer: 0 },
  { id: 306, text: 'B is west of C and D is east of C. B is relative to D:', options: ['East', 'West', 'North', 'South'], answer: 1 },
  { id: 307, text: 'A is north of B and C is south of B. A is relative to C:', options: ['South', 'North', 'East', 'West'], answer: 1 },
  { id: 308, text: 'Facing North, turn 180°. Direction?', options: ['East', 'West', 'South', 'North'], answer: 2 },
  { id: 309, text: 'Facing East, turn 180°.', options: ['West', 'North', 'South', 'East'], answer: 0 },
  { id: 310, text: 'Facing South, turn left.', options: ['East', 'West', 'North', 'South'], answer: 0 },
  { id: 311, text: 'Facing West, turn right.', options: ['South', 'North', 'East', 'West'], answer: 1 },
  { id: 312, text: 'A travels 10 m east and 10 m west. Final position:', options: ['10 m east', '10 m west', 'Starting point', '20 m east'], answer: 2 },
  { id: 313, text: 'A travels 6 m north and 8 m east. Shortest distance?', options: ['10 m', '12 m', '14 m', '8 m'], answer: 0 },
  { id: 314, text: 'If P is south-west of Q, Q is in which direction from P?', options: ['NE', 'NW', 'SE', 'SW'], answer: 0 },
  { id: 315, text: 'Opposite direction of South-East is:', options: ['NE', 'NW', 'SW', 'East'], answer: 1 }
];

export const symmetryQuestions = [
  { id: 316, text: 'A square has how many lines of symmetry?', options: ['2', '3', '4', '5'], answer: 2 },
  { id: 317, text: 'A rectangle has how many lines of symmetry?', options: ['1', '2', '3', '4'], answer: 1 },
  { id: 318, text: 'An equilateral triangle has:', options: ['1', '2', '3', '4'], answer: 2 },
  { id: 319, text: 'A circle has:', options: ['1 line', '2 lines', '4 lines', 'Infinitely many'], answer: 3 },
  { id: 320, text: 'Which has no line of symmetry?', options: ['Circle', 'Square', 'Scalene triangle', 'Rectangle'], answer: 2 },
  { id: 321, text: 'A regular pentagon has how many symmetry lines?', options: ['3', '4', '5', '6'], answer: 2 },
  { id: 322, text: 'A regular hexagon has:', options: ['4', '5', '6', '8'], answer: 2 },
  { id: 323, text: 'Which shape has exactly one line of symmetry?', options: ['Isosceles triangle', 'Square', 'Circle', 'Regular hexagon'], answer: 0 },
  { id: 324, text: 'A vertical mirror divides a symmetric figure into:', options: ['Unequal halves', 'Equal mirror halves', 'Three parts', 'Four parts'], answer: 1 },
  { id: 325, text: 'Which letter generally has vertical symmetry?', options: ['A', 'F', 'G', 'R'], answer: 0 },
  { id: 326, text: 'Which capital letter has horizontal symmetry?', options: ['B', 'F', 'L', 'P'], answer: 0 },
  { id: 327, text: 'Which shape has rotational symmetry of order 4?', options: ['Square', 'Triangle', 'Rectangle', 'Circle'], answer: 0 },
  { id: 328, text: 'A rectangle is symmetric about:', options: ['Only diagonal', 'Horizontal and vertical central lines', 'One side', 'No line'], answer: 1 },
  { id: 329, text: 'A rhombus generally has:', options: ['0', '1', '2', '4 lines of symmetry'], answer: 2 },
  { id: 330, text: 'Which shape has the greatest number of symmetry lines?', options: ['Square', 'Circle', 'Triangle', 'Rectangle'], answer: 1 }
];

export const hiddenFiguresQuestions = [
  { id: 331, text: 'Which simple shape can be hidden inside △□○?', options: ['Triangle', 'Circle', 'Both', 'None'], answer: 2 },
  { id: 332, text: 'A small triangle is hidden inside a larger triangle. This is an example of:', options: ['Hidden figure', 'Direction', 'Counting', 'Symmetry'], answer: 0 },
  { id: 333, text: 'In □△, which basic shape is clearly present?', options: ['Square', 'Triangle', 'Both', 'Circle'], answer: 2 },
  { id: 334, text: 'If a large square contains a small circle, the hidden figure is:', options: ['Circle', 'Triangle', 'Star', 'Arrow'], answer: 0 },
  { id: 335, text: 'Which shape is hidden in ○▲□?', options: ['Circle', 'Triangle', 'Square', 'All three'], answer: 3 },
  { id: 336, text: 'A triangle drawn inside a square is:', options: ['Hidden/embedded figure', 'Dice', 'Mirror image', 'Water image'], answer: 0 },
  { id: 337, text: 'Find the shape present in ★○△:', options: ['Circle', 'Triangle', 'Star', 'All three'], answer: 3 },
  { id: 338, text: 'If a line pattern contains a complete triangle, the triangle is:', options: ['Embedded', 'Missing', 'Rotated', 'Reflected'], answer: 0 },
  { id: 339, text: 'A square can contain a smaller:', options: ['Square', 'Triangle', 'Circle', 'Any of these'], answer: 3 },
  { id: 340, text: 'In △○□★, how many basic figures are visible?', options: ['2', '3', '4', '5'], answer: 2 },
  { id: 341, text: 'A hidden figure means:', options: ['Figure is completely absent', 'Figure is present within a larger pattern', 'Figure is upside down only', 'Figure is colored'], answer: 1 },
  { id: 342, text: 'Which is NOT a basic geometric figure?', options: ['Circle', 'Triangle', 'Square', 'Sentence'], answer: 3 },
  { id: 343, text: 'If a star contains a triangle inside it, the triangle is:', options: ['Hidden figure', 'Direction', 'Number', 'Mirror'], answer: 0 },
  { id: 344, text: 'In □ + △ + ○, which is hidden/embedded?', options: ['Square', 'Triangle', 'Circle', 'All'], answer: 3 },
  { id: 345, text: 'The main skill tested in hidden-figure questions is:', options: ['Finding a shape within a complex figure', 'Calculation', 'Grammar', 'Memory only'], answer: 0 }
];

export const matrixBasedFiguresQuestions = [
  { id: 346, text: 'Complete the pattern:\n○  ○  ○\n△  △  ?', options: ['○', '△', '□', '★'], answer: 1 },
  { id: 347, text: '▲ □ ▲\n▲ □ ?', options: ['▲', '□', '○', '★'], answer: 1 },
  { id: 348, text: '○ △ □\n○ △ ?', options: ['○', '△', '□', '★'], answer: 2 },
  { id: 349, text: '★ ○ ★\n○ ★ ○\n★ ○ ?', options: ['★', '○', '△', '□'], answer: 0 },
  { id: 350, text: '□ △ □\n△ □ △\n□ △ ?', options: ['□', '△', '○', '★'], answer: 0 },
  { id: 351, text: '▲ ▲ ○\n○ ▲ ▲\n▲ ○ ?', options: ['▲', '○', '□', '★'], answer: 0 },
  { id: 352, text: '○ □ ○\n□ ○ □\n○ □ ?', options: ['○', '□', '△', '★'], answer: 0 },
  { id: 353, text: '★ ▲ ■\n▲ ■ ★\n■ ★ ?', options: ['▲', '■', '★', '○'], answer: 0 },
  { id: 354, text: '1 2 3\n2 3 4\n3 4 ?', options: ['3', '4', '5', '6'], answer: 2 },
  { id: 355, text: 'A B A\nB A B\nA B ?', options: ['A', 'B', 'C', 'D'], answer: 0 },
  { id: 356, text: '△ ○ △\n○ △ ○\n△ ○ ?', options: ['△', '○', '□', '★'], answer: 0 },
  { id: 357, text: '□ □ ○\n□ ○ □\n○ □ ?', options: ['□', '○', '△', '★'], answer: 0 },
  { id: 358, text: '★ ★ ○\n★ ○ ★\n○ ★ ?', options: ['★', '○', '□', '△'], answer: 0 },
  { id: 359, text: '▲ ○ □\n○ □ ▲\n□ ▲ ?', options: ['▲', '○', '□', '★'], answer: 1 },
  { id: 360, text: '● ○ ●\n○ ● ○\n● ○ ?', options: ['●', '○', '▲', '□'], answer: 0 }
];

export const shapeTransformationQuestions = [
  { id: 361, text: '▲ rotated 180° becomes:', options: ['▲', '▼', '◀', '▶'], answer: 1 },
  { id: 362, text: '→ rotated 180° becomes:', options: ['↑', '↓', '←', '→'], answer: 2 },
  { id: 363, text: '↑ rotated 90° clockwise becomes:', options: ['←', '→', '↓', '↑'], answer: 1 },
  { id: 364, text: '→ rotated 90° clockwise becomes:', options: ['↑', '↓', '←', '→'], answer: 1 },
  { id: 365, text: '↓ rotated 90° clockwise becomes:', options: ['→', '←', '↑', '↓'], answer: 1 },
  { id: 366, text: 'A square rotated 90° remains:', options: ['Square', 'Triangle', 'Circle', 'Rectangle'], answer: 0 },
  { id: 367, text: 'A circle rotated any angle remains:', options: ['Circle', 'Square', 'Triangle', 'Oval only'], answer: 0 },
  { id: 368, text: 'Mirror of → is:', options: ['↑', '↓', '←', '→'], answer: 2 },
  { id: 369, text: 'Mirror of ↑ across a vertical mirror is:', options: ['↓', '↑', '←', '→'], answer: 1 },
  { id: 370, text: 'If ▲ is flipped vertically, it becomes:', options: ['▲', '▼', '◀', '▶'], answer: 1 },
  { id: 371, text: 'If ◀ is rotated 180°, it becomes:', options: ['▶', '▲', '▼', '◀'], answer: 0 },
  { id: 372, text: 'A rectangle rotated 90° becomes:', options: ['Circle', 'Rectangle', 'Triangle', 'Square'], answer: 1 }, // Technically still a rectangle
  { id: 373, text: 'If a figure is enlarged but its shape stays the same, this is:', options: ['Scaling', 'Rotation', 'Reflection', 'Cutting'], answer: 0 },
  { id: 374, text: 'If a triangle is changed from ▲ to ▼, this is mainly:', options: ['Vertical flipping', 'Enlargement', 'Counting', 'Addition'], answer: 0 },
  { id: 375, text: 'If → becomes ←, the transformation is:', options: ['180° rotation', '90° rotation', 'Scaling', 'No change'], answer: 0 }
];
