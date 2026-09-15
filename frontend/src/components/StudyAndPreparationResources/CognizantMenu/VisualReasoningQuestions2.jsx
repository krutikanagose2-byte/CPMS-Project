export const paperFoldingQuestions = [
  { id: 121, text: 'A paper is folded once in half. One hole is punched through it. After unfolding, how many holes?', options: ['1', '2', '3', '4'], answer: 1 },
  { id: 122, text: 'A paper is folded twice, producing 4 layers. One hole is punched through all layers. Holes after unfolding?', options: ['2', '3', '4', '8'], answer: 2 },
  { id: 123, text: 'A paper is folded three times into 8 layers. One hole is punched. Number of holes after unfolding?', options: ['4', '6', '8', '16'], answer: 2 },
  { id: 124, text: 'A square paper is folded vertically once. A hole is punched near the folded edge. After unfolding, holes appear:', options: ['Only left', 'Only right', 'Symmetrically on both sides', 'At the center only'], answer: 2 },
  { id: 125, text: 'Paper folded horizontally once. Hole punched near upper edge of folded paper. After unfolding:', options: ['Two vertically symmetric holes', 'One hole', 'Four holes', 'No hole'], answer: 0 },
  { id: 126, text: 'Paper folded twice into four layers. Two holes are punched through all layers. Total holes after unfolding?', options: ['4', '6', '8', '10'], answer: 2 },
  { id: 127, text: 'If a paper is folded into 8 layers and 3 holes are punched through all layers, total holes?', options: ['8', '16', '24', '32'], answer: 2 },
  { id: 128, text: 'A rectangular sheet is folded in half twice. Number of layers?', options: ['2', '3', '4', '6'], answer: 2 },
  { id: 129, text: 'A paper is folded once and two holes are punched. Each punch passes through both layers. Number of holes after unfolding?', options: ['2', '3', '4', '6'], answer: 2 },
  { id: 130, text: 'A paper folded three times has how many layers?', options: ['4', '6', '8', '12'], answer: 2 },
  { id: 131, text: 'If 4 layers are formed and one hole is punched through all layers, unfolding produces:', options: ['1', '2', '4', '8'], answer: 2 },
  { id: 132, text: 'If a paper is folded twice and 5 holes are punched, each through every layer, final holes:', options: ['10', '15', '20', '25'], answer: 2 },
  { id: 133, text: 'A sheet is folded once. A triangular cut is made on the folded edge. When unfolded, the cut will generally be:', options: ['Single triangle', 'Symmetrical pair', 'Circle', 'Rectangle'], answer: 1 },
  { id: 134, text: 'A paper is folded into 4 layers and 2 cuts are made through all layers. Number of resulting cut-outs?', options: ['4', '6', '8', '10'], answer: 2 },
  { id: 135, text: 'A sheet is folded 4 times. Number of layers?', options: ['8', '12', '16', '20'], answer: 2 }
];

export const paperCuttingQuestions = [
  { id: 136, text: 'A circular paper is folded in half and one hole is punched away from the fold. Number of holes after opening?', options: ['1', '2', '3', '4'], answer: 1 },
  { id: 137, text: 'Paper folded twice into four layers; one cut is made through all layers. Number of identical cut-outs?', options: ['2', '3', '4', '8'], answer: 2 },
  { id: 138, text: 'A square paper is folded vertically and horizontally. One corner is cut. After opening, how many corresponding cuts appear?', options: ['1', '2', '3', '4'], answer: 3 },
  { id: 139, text: 'A paper folded once has a semicircle cut on the folded edge. When opened, the cut becomes:', options: ['Circle', 'Square', 'Triangle', 'Rectangle'], answer: 0 },
  { id: 140, text: 'A paper folded twice has a circular cut at the center of the folded sheet. After opening:', options: ['One circle', 'Two circles', 'Four circles', 'Eight circles'], answer: 2 },
  { id: 141, text: 'A square folded vertically. A triangular notch is cut on the outer edge. After opening:', options: ['Two symmetrical notches', 'One notch', 'Four notches', 'No notch'], answer: 0 },
  { id: 142, text: 'Paper folded into 8 layers. One hole cut through all layers produces:', options: ['4 holes', '6 holes', '8 holes', '16 holes'], answer: 2 },
  { id: 143, text: 'If 2 cuts are made through 4 layers, how many corresponding cut-outs?', options: ['4', '6', '8', '10'], answer: 2 },
  { id: 144, text: 'A square is folded diagonally once. A hole is punched away from the fold. After opening:', options: ['One hole', 'Two symmetric holes', 'Three holes', 'Four holes'], answer: 1 },
  { id: 145, text: 'A sheet folded three times has:', options: ['4 layers', '6 layers', '8 layers', '12 layers'], answer: 2 },
  { id: 146, text: 'A circular hole is cut at the folded edge of a paper folded in half. After opening, the resulting shape is approximately:', options: ['Circle', 'Semicircle', 'Rectangle', 'Triangle'], answer: 0 },
  { id: 147, text: 'A paper is folded into 4 layers. Three holes are punched. Number of holes after opening?', options: ['7', '8', '12', '16'], answer: 2 },
  { id: 148, text: 'A paper is folded once and a V-shaped notch is cut on the folded edge. Opening it produces:', options: ['V', 'W-like symmetrical shape', 'Circle', 'Square'], answer: 1 },
  { id: 149, text: 'A square is folded horizontally twice. One hole is punched through all layers. Number of holes?', options: ['2', '3', '4', '8'], answer: 2 },
  { id: 150, text: 'A paper is folded four times and one hole is punched through all layers. Number of holes?', options: ['4', '8', '12', '16'], answer: 3 }
];

export const embeddedFiguresQuestions = [
  { id: 151, text: 'Find which option contains the target shape.\nTarget: △', options: ['○□○', '□△○', '○★□', '■○■'], answer: 1 },
  { id: 152, text: 'Target: ○□', options: ['△○□', '□△★', '★△○', '▲■▲'], answer: 0 },
  { id: 153, text: 'Target: ▲○', options: ['■△□', '▲○□', '○□★', '△■○'], answer: 1 },
  { id: 154, text: 'Target: ★△', options: ['★△○', '□○□', '△○△', '■★■'], answer: 0 },
  { id: 155, text: 'Target: □○△', options: ['□△○', '○□△', '□○△', '△□○'], answer: 2 },
  { id: 156, text: 'Target: ▲■', options: ['▲■○', '■○△', '△▲○', '○■△'], answer: 0 },
  { id: 157, text: 'Target: ○★○', options: ['○△○', '○★○', '★○△', '△★□'], answer: 1 },
  { id: 158, text: 'Target: △□△', options: ['△○△', '□△□', '△□△', '○△□'], answer: 2 },
  { id: 159, text: 'Target: →○', options: ['←○', '→○', '○→', '↑○'], answer: 1 },
  { id: 160, text: 'Target: ○△□', options: ['○□△', '△○□', '○△□', '□○△'], answer: 2 },
  { id: 161, text: 'Target: ★○■', options: ['★■○', '○★■', '★○■', '■★○'], answer: 2 },
  { id: 162, text: 'Target: ▲○▲', options: ['▲▲○', '▲○▲', '○▲▲', '○▲○'], answer: 1 },
  { id: 163, text: 'Target: □★□', options: ['□○□', '★□□', '□★□', '○★○'], answer: 2 },
  { id: 164, text: 'Target: ←△→', options: ['→△←', '←△→', '△←→', '←→△'], answer: 1 },
  { id: 165, text: 'Target: ○□★', options: ['★○□', '□○★', '○□★', '○★□'], answer: 2 }
];

export const figureCompletionQuestions = [
  { id: 166, text: 'Choose the piece that completes the pattern.\n\nPattern: ▲ ▲ ? ▲ ▲', options: ['▲', '○', '□', '★'], answer: 0 },
  { id: 167, text: 'Pattern: ○ □ ○ ? ○ □', options: ['○', '□', '△', '★'], answer: 1 },
  { id: 168, text: 'Pattern: ↑ → ? ←', options: ['↑', '→', '↓', '←'], answer: 2 },
  { id: 169, text: 'Pattern: △ □ ○ △ ? ○', options: ['△', '□', '○', '★'], answer: 1 },
  { id: 170, text: 'Pattern: ★ ○ ★ ? ★ ○', options: ['★', '○', '△', '□'], answer: 1 },
  { id: 171, text: 'Pattern: ▲ ▼ ▲ ? ▲', options: ['▲', '▼', '◀', '▶'], answer: 1 },
  { id: 172, text: 'Pattern: □ ■ □ ? □', options: ['□', '■', '○', '△'], answer: 1 },
  { id: 173, text: 'Pattern: → ↓ ? ↑', options: ['→', '↓', '←', '↑'], answer: 2 },
  { id: 174, text: 'Pattern: ○ △ □ ? ○ △', options: ['○', '△', '□', '★'], answer: 2 },
  { id: 175, text: 'Pattern: ★ ☆ ★ ? ★', options: ['★', '☆', '○', '▲'], answer: 1 },
  { id: 176, text: 'Pattern: ▲ ■ ▲ ? ▲ ■', options: ['▲', '■', '●', '□'], answer: 1 },
  { id: 177, text: 'Pattern: ↑ ↓ ↑ ? ↑ ↓', options: ['↑', '↓', '→', '←'], answer: 1 },
  { id: 178, text: 'Pattern: ○ ○ △ △ ? ?', options: ['○○', '△△', '□□', '★★'], answer: 2 },
  { id: 179, text: 'Pattern: → → ↓ ↓ ? ?', options: ['↑↑', '←←', '→→', '↓↓'], answer: 1 },
  { id: 180, text: 'Pattern: △ ▲ △ ? △ ▲', options: ['△', '▲', '□', '○'], answer: 0 }
];

export const patternCompletionQuestions = [
  { id: 181, text: '○ △ ○ △ ○ ?', options: ['○', '△', '□', '★'], answer: 1 },
  { id: 182, text: '▲ ▲ ▼ ▲ ▲ ▼ ?', options: ['▲', '▼', '○', '□'], answer: 0 },
  { id: 183, text: '1 circle → 2 circles → 3 circles → ?', options: ['2', '3', '4', '5'], answer: 2 },
  { id: 184, text: '★ ○ ○ ★ ○ ○ ?', options: ['★', '○', '△', '□'], answer: 0 },
  { id: 185, text: '↑ → ↓ ← ↑ ?', options: ['↑', '→', '↓', '←'], answer: 1 },
  { id: 186, text: '△ □ △ □ △ ?', options: ['△', '□', '○', '★'], answer: 1 },
  { id: 187, text: '○ → ● → ○ → ● → ?', options: ['○', '●', '△', '□'], answer: 0 },
  { id: 188, text: '▲ → ■ → ● → ▲ → ?', options: ['▲', '■', '●', '○'], answer: 1 },
  { id: 189, text: '○○ → △△ → ○○ → △△ → ?', options: ['○○', '△△', '□□', '★★'], answer: 0 },
  { id: 190, text: '→ → ↓ → → ↓ → ?', options: ['→', '↓', '←', '↑'], answer: 0 },
  { id: 191, text: '★, ★★, ★★★, ★★★★, ?', options: ['★★★', '★★★★★', '★★★★★★', '★★'], answer: 1 },
  { id: 192, text: '▲○, ▲○, ■★, ■★, ▲○, ?', options: ['▲○', '■★', '○▲', '★■'], answer: 1 },
  { id: 193, text: '↑↑, →→, ↓↓, ←←, ?', options: ['↑↑', '→→', '↓↓', '←←'], answer: 0 },
  { id: 194, text: '□○△, ○△□, △□○, ?', options: ['□○△', '○□△', '△○□', '□△○'], answer: 0 },
  { id: 195, text: '○, ○○, △, △△, □, ?', options: ['□', '□□', '△△', '○○'], answer: 1 }
];

export const shapeMatchingQuestions = [
  { id: 196, text: 'Which option has the same shape as ▲○?', options: ['▲○', '○▲', '▲△', '○○'], answer: 0 },
  { id: 197, text: 'Which pair is exactly identical to ■★?', options: ['★■', '■★', '■○', '★○'], answer: 1 },
  { id: 198, text: 'Which option matches →●?', options: ['●→', '←●', '→●', '●←'], answer: 2 },
  { id: 199, text: 'Find the same arrangement as △□○.', options: ['□△○', '△□○', '○□△', '△○□'], answer: 1 },
  { id: 200, text: 'Which is identical to ★▲■?', options: ['▲★■', '★■▲', '★▲■', '■▲★'], answer: 2 },
  { id: 201, text: 'Match ○●○.', options: ['●○●', '○●○', '○○●', '●●○'], answer: 1 },
  { id: 202, text: 'Which has the same order as □△★○?', options: ['□△★○', '△□★○', '□★△○', '○★△□'], answer: 0 },
  { id: 203, text: 'Match ←■▲.', options: ['■←▲', '←▲■', '←■▲', '▲■←'], answer: 2 },
  { id: 204, text: 'Which is identical to ○△□?', options: ['△○□', '○△□', '□△○', '○□△'], answer: 1 },
  { id: 205, text: 'Match ★○▲.', options: ['▲○★', '○★▲', '★○▲', '★▲○'], answer: 2 },
  { id: 206, text: 'Which option matches ■●△?', options: ['●■△', '■●△', '△●■', '■△●'], answer: 1 },
  { id: 207, text: 'Same as ▲▲○?', options: ['▲○▲', '○▲▲', '▲▲○', '○○▲'], answer: 2 },
  { id: 208, text: 'Match □★●△.', options: ['□★●△', '★□●△', '□●★△', '△●★□'], answer: 0 },
  { id: 209, text: 'Which is identical to →○←?', options: ['←○→', '→○←', '○→←', '→←○'], answer: 1 },
  { id: 210, text: 'Match ★■○▲.', options: ['★■○▲', '■★○▲', '★○■▲', '▲○■★'], answer: 0 }
];

export const visualCountingQuestions = [
  { id: 211, text: 'How many circles are there?\n○ ○ ▲ ○ □', options: ['2', '3', '4', '5'], answer: 1 },
  { id: 212, text: 'Count triangles:\n▲ ○ ▲ □ ▲', options: ['2', '3', '4', '5'], answer: 1 },
  { id: 213, text: 'Count squares:\n□ ○ △ □ ★ □', options: ['2', '3', '4', '5'], answer: 1 },
  { id: 214, text: 'Count stars:\n★ ○ ★ △ □ ★', options: ['2', '3', '4', '5'], answer: 1 },
  { id: 215, text: 'Count circles:\n○ ▲ ○ □ ○ ○', options: ['2', '3', '4', '5'], answer: 2 },
  { id: 216, text: 'Count triangles:\n△□△○△★', options: ['2', '3', '4', '5'], answer: 1 },
  { id: 217, text: 'Count total shapes:\n○ △ □ ★', options: ['3', '4', '5', '6'], answer: 1 },
  { id: 218, text: 'Count squares:\n□ □ ○ △ □ ★', options: ['2', '3', '4', '5'], answer: 1 },
  { id: 219, text: 'Count circles:\n○○△□○★○', options: ['3', '4', '5', '6'], answer: 1 },
  { id: 220, text: 'Count triangles:\n▲□▲▲○▲', options: ['3', '4', '5', '6'], answer: 1 },
  { id: 221, text: 'How many different shapes?\n○ □ △ ★ ○ □', options: ['2', '3', '4', '5'], answer: 2 },
  { id: 222, text: 'Count stars:\n★ ★ ○ △ ★ □ ★', options: ['3', '4', '5', '6'], answer: 1 },
  { id: 223, text: 'Count all triangles and squares:\n▲ □ ○ ▲ □ ★', options: ['3', '4', '5', '6'], answer: 1 },
  { id: 224, text: 'Count circles + stars:\n○ ★ △ ○ □ ★', options: ['3', '4', '5', '6'], answer: 1 },
  { id: 225, text: 'Count shapes having 4 sides:\n□ △ □ ○ □ ★', options: ['2', '3', '4', '5'], answer: 1 }
];

export const cubeAndDiceQuestions = [
  { id: 226, text: 'A cube has how many faces?', options: ['4', '6', '8', '12'], answer: 1 },
  { id: 227, text: 'A cube has how many edges?', options: ['6', '8', '12', '16'], answer: 2 },
  { id: 228, text: 'A cube has how many vertices?', options: ['6', '8', '10', '12'], answer: 1 },
  { id: 229, text: 'If opposite faces of a dice are 1 and 6, then 1 cannot be adjacent to:', options: ['2', '3', '4', '6'], answer: 3 },
  { id: 230, text: 'Opposite faces are 2 and 5. Which cannot touch 2?', options: ['1', '3', '5', '6'], answer: 2 },
  { id: 231, text: 'Standard dice has opposite faces summing to:', options: ['5', '6', '7', '8'], answer: 2 },
  { id: 232, text: 'If top = 3 and bottom = 4, they are:', options: ['Adjacent', 'Opposite', 'Same', 'Diagonal'], answer: 1 },
  { id: 233, text: 'How many faces meet at one corner of a cube?', options: ['2', '3', '4', '6'], answer: 1 },
  { id: 234, text: 'How many edges meet at one vertex?', options: ['2', '3', '4', '5'], answer: 1 },
  { id: 235, text: 'If 1 is opposite 6, 2 is opposite:', options: ['3', '4', '5', '6'], answer: 2 }, // In a standard dice, it's 5.
  { id: 236, text: 'A dice has six faces. If 4 is opposite 3, which cannot be adjacent to 4?', options: ['1', '2', '3', '6'], answer: 2 },
  { id: 237, text: 'A cube is painted on all faces and cut into 8 equal cubes. How many small cubes are formed?', options: ['4', '6', '8', '12'], answer: 2 },
  { id: 238, text: 'A cube is cut into 27 equal cubes. How many small cubes are formed?', options: ['9', '18', '27', '36'], answer: 2 },
  { id: 239, text: 'In a cube, opposite faces are:', options: ['Always adjacent', 'Never adjacent', 'Always same', 'None'], answer: 1 },
  { id: 240, text: 'A cube has how many pairs of opposite faces?', options: ['2', '3', '4', '6'], answer: 1 }
];
