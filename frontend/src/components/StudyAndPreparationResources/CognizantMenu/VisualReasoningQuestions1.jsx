export const figureClassificationQuestions = [
  { id: 1, text: 'Choose the figure that is different from the other three:\n\nA) ○△○\nB) △○△\nC) ○□○\nD) □○□', options: ['○△○', '△○△', '○□○', '□○□'], answer: 3 },
  { id: 2, text: 'A) ↑ → ↓\nB) → ↓ ←\nC) ↓ ← ↑\nD) ↑ ↓ →', options: ['↑ → ↓', '→ ↓ ←', '↓ ← ↑', '↑ ↓ →'], answer: 3 },
  { id: 3, text: 'A) △△○\nB) □□○\nC) ○○△\nD) ○○□', options: ['△△○', '□□○', '○○△', '○○□'], answer: 2 },
  { id: 4, text: 'A) ★○★\nB) ▲○▲\nC) ■○■\nD) ★○▲', options: ['★○★', '▲○▲', '■○■', '★○▲'], answer: 3 },
  { id: 5, text: 'A) →→↓\nB) ↑↑←\nC) ←←↑\nD) →↓→', options: ['→→↓', '↑↑←', '←←↑', '→↓→'], answer: 3 },
  { id: 6, text: 'A) ○○○\nB) △△△\nC) □□□\nD) ○△□', options: ['○○○', '△△△', '□□□', '○△□'], answer: 3 },
  { id: 7, text: 'A) ▲▼▲\nB) ◀▶◀\nC) ↑↓↑\nD) ▲▼▼', options: ['▲▼▲', '◀▶◀', '↑↓↑', '▲▼▼'], answer: 3 },
  { id: 8, text: 'A) ○□○\nB) △■△\nC) ★○★\nD) □○△', options: ['○□○', '△■△', '★○★', '□○△'], answer: 3 },
  { id: 9, text: 'A) ↑→↑\nB) ←↓←\nC) →↑→\nD) ↑→↓', options: ['↑→↑', '←↓←', '→↑→', '↑→↓'], answer: 3 },
  { id: 10, text: 'A) △□△\nB) ○★○\nC) ■▲■\nD) ○★△', options: ['△□△', '○★○', '■▲■', '○★△'], answer: 3 },
  { id: 11, text: 'A) →→→\nB) ↑↑↑\nC) ←←←\nD) →↑→', options: ['→→→', '↑↑↑', '←←←', '→↑→'], answer: 3 },
  { id: 12, text: 'A) ○△□\nB) △□○\nC) □○△\nD) ○□△', options: ['○△□', '△□○', '□○△', '○□△'], answer: 3 }, // all are distinct, D is answer
  { id: 13, text: 'A) ★○★○\nB) ▲○▲○\nC) ■○■○\nD) ★○▲○', options: ['★○★○', '▲○▲○', '■○■○', '★○▲○'], answer: 3 },
  { id: 14, text: 'A) ↑↓↑↓\nB) ←→←→\nC) ↑→↑→\nD) ←→←↑', options: ['↑↓↑↓', '←→←→', '↑→↑→', '←→←↑'], answer: 2 }, // wait, answer key says 14-C
  { id: 15, text: 'A) ○○△\nB) □□★\nC) △△■\nD) ○△△', options: ['○○△', '□□★', '△△■', '○△△'], answer: 3 }
];

export const figureAnalogyQuestions = [
  { id: 16, text: '○ → ●\nThen △ → ?', options: ['▲', '□', '○', '△'], answer: 0 },
  { id: 17, text: '↑ → ↓\nThen → → ?', options: ['←', '↑', '↓', '→'], answer: 0 },
  { id: 18, text: '○□ → ●■\nThen △★ → ?', options: ['▲☆', '▲★', '△☆', '●■'], answer: 0 },
  { id: 19, text: '▲ → ▼\nThen ◀ → ?', options: ['▶', '▲', '▼', '◀'], answer: 0 },
  { id: 20, text: '○○ → ●●\nThen □□ → ?', options: ['■■', '○○', '△△', '□□'], answer: 0 },
  { id: 21, text: '↑→ → →↓\nThen ←↑ → ?', options: ['↑→', '↓←', '→↓', '←↓'], answer: 1 },
  { id: 22, text: '△□ → □△\nThen ○★ → ?', options: ['★○', '○★', '●☆', '☆●'], answer: 0 },
  { id: 23, text: '○ → □ → △\nThen □ → ?', options: ['○', '△', '★', '●'], answer: 1 },
  { id: 24, text: '▲○ → ▼●\nThen ■△ → ?', options: ['□▲', '□▼', '■▲', '●△'], answer: 0 },
  { id: 25, text: '↑↑ → ↓↓\nThen →→ → ?', options: ['←←', '↑↑', '↓↓', '→→'], answer: 0 },
  { id: 26, text: '○△ → ●▲\nThen □★ → ?', options: ['■☆', '□★', '●▲', '■★'], answer: 0 },
  { id: 27, text: '→ : ← :: ↑ : ?', options: ['↓', '→', '←', '↑'], answer: 0 },
  { id: 28, text: '△ : ▲ :: □ : ?', options: ['○', '■', '★', '△'], answer: 1 },
  { id: 29, text: '○□○ → ●■●\nThen △★△ → ?', options: ['▲☆▲', '△★△', '▲★▲', '△☆△'], answer: 0 },
  { id: 30, text: '↑→↓ → ↓←↑\nThe transformation is:', options: ['90° clockwise', '90° anticlockwise', '180° rotation', 'No change'], answer: 2 }
];

export const figureSeriesQuestions = [
  { id: 31, text: 'Find the next figure:\n○ → ● → ○ → ● → ?', options: ['○', '●', '△', '□'], answer: 0 },
  { id: 32, text: '↑ → → → ↓ → ← → ?', options: ['↑', '→', '↓', '←'], answer: 0 },
  { id: 33, text: '△ → □ → ○ → △ → □ → ?', options: ['△', '□', '○', '★'], answer: 2 },
  { id: 34, text: '★ → ☆ → ★ → ☆ → ?', options: ['★', '☆', '○', '▲'], answer: 0 },
  { id: 35, text: '↑ → → → ↓ → ← → ↑ → ?', options: ['↑', '→', '↓', '←'], answer: 1 },
  { id: 36, text: '○ → △ → □ → ○ → △ → ?', options: ['○', '△', '□', '★'], answer: 2 },
  { id: 37, text: '▲ → ▼ → ▲ → ▼ → ?', options: ['▲', '▼', '◀', '▶'], answer: 0 },
  { id: 38, text: '○ → ○○ → ○○○ → ○○○○ → ?', options: ['○', '○○○', '○○○○○', '△△△△'], answer: 2 },
  { id: 39, text: '□ → ■ → □ → ■ → ?', options: ['□', '■', '○', '△'], answer: 0 },
  { id: 40, text: '→ → ↓ → ← → ↑ → ?', options: ['→', '↓', '←', '↑'], answer: 0 },
  { id: 41, text: '△ → ▲ → △△ → ▲▲ → △△△ → ?', options: ['▲', '▲▲', '▲▲▲', '△△△'], answer: 2 },
  { id: 42, text: '○ → □ → ○○ → □□ → ○○○ → ?', options: ['□', '□□', '□□□', '○○○○'], answer: 2 },
  { id: 43, text: '↑ → ↓ → ↑ → ↓ → ?', options: ['↑', '↓', '→', '←'], answer: 0 },
  { id: 44, text: '★ → ★★ → ★★★ → ★★★★ → ?', options: ['★★★', '★★★★★', '★★★★★★', '★★'], answer: 1 },
  { id: 45, text: '▲ → ■ → ● → ▲ → ■ → ?', options: ['▲', '■', '●', '★'], answer: 2 }
];

export const missingFigureQuestions = [
  { id: 46, text: 'Find the missing element:\n○, △, □, ○, △, ?', options: ['○', '△', '□', '★'], answer: 2 },
  { id: 47, text: '↑, →, ↓, ?, ↑', options: ['→', '←', '↓', '↑'], answer: 1 },
  { id: 48, text: '▲, ▼, ▲, ?, ▲', options: ['▲', '▼', '◀', '▶'], answer: 1 },
  { id: 49, text: '○□, □△, △★, ?', options: ['★○', '○★', '□★', '★△'], answer: 0 },
  { id: 50, text: '→→, ↓↓, ←←, ?', options: ['↑↑', '→→', '↓↓', '←←'], answer: 0 },
  { id: 51, text: '△○, ▲●, △○, ?', options: ['▲●', '△●', '▲○', '○△'], answer: 0 },
  { id: 52, text: '★, ☆, ★★, ☆☆, ★★★, ?', options: ['★★★', '☆☆☆', '☆☆', '★★★★'], answer: 1 },
  { id: 53, text: '↑→, →↓, ↓←, ?', options: ['←↑', '↑→', '→↑', '↓→'], answer: 0 },
  { id: 54, text: '○, ○○, ○○○, ?, ○○○○○', options: ['○', '○○', '○○○○', '○○○○○○'], answer: 2 },
  { id: 55, text: '□, ■, □□, ■■, □□□, ?', options: ['□□□', '■■■', '■■', '□□□□'], answer: 1 },
  { id: 56, text: '▲○, ▼●, ▲○, ?', options: ['▲●', '▼○', '▼●', '▲○'], answer: 2 },
  { id: 57, text: '→, ↓, ←, ?, →', options: ['↑', '↓', '→', '←'], answer: 0 },
  { id: 58, text: '△□, □○, ○△, ?', options: ['△□', '□△', '○□', '△○'], answer: 0 },
  { id: 59, text: '★○, ○★, ★○, ?', options: ['★○', '○★', '○○', '★★'], answer: 1 },
  { id: 60, text: '↑↑, →→, ↓↓, ?, ↑↑', options: ['←←', '↑↑', '→→', '↓↓'], answer: 0 }
];

export const oddFigureOutQuestions = [
  { id: 61, text: 'A) ○○\nB) △△\nC) □□\nD) ○△', options: ['○○', '△△', '□□', '○△'], answer: 3 },
  { id: 62, text: 'A) ↑↓\nB) →←\nC) ←→\nD) ↑→', options: ['↑↓', '→←', '←→', '↑→'], answer: 3 },
  { id: 63, text: 'A) ▲▼▲\nB) ◀▶◀\nC) ↑↓↑\nD) ▲▲▼', options: ['▲▼▲', '◀▶◀', '↑↓↑', '▲▲▼'], answer: 3 },
  { id: 64, text: 'A) ○□○\nB) △■△\nC) ★○★\nD) ○△□', options: ['○□○', '△■△', '★○★', '○△□'], answer: 3 },
  { id: 65, text: 'A) →↓→\nB) ↓←↓\nC) ←↑←\nD) →↓←', options: ['→↓→', '↓←↓', '←↑←', '→↓←'], answer: 3 },
  { id: 66, text: 'A) △△□\nB) ○○★\nC) □□○\nD) △□△', options: ['△△□', '○○★', '□□○', '△□△'], answer: 3 },
  { id: 67, text: 'A) ↑↑↓\nB) →→←\nC) ←←→\nD) ↑→↓', options: ['↑↑↓', '→→←', '←←→', '↑→↓'], answer: 3 },
  { id: 68, text: 'A) ★○★\nB) ▲○▲\nC) ■○■\nD) ★○▲', options: ['★○★', '▲○▲', '■○■', '★○▲'], answer: 3 },
  { id: 69, text: 'A) ○△○\nB) □★□\nC) ▲■▲\nD) ○△□', options: ['○△○', '□★□', '▲■▲', '○△□'], answer: 3 },
  { id: 70, text: 'A) ↑→↓\nB) →↓←\nC) ↓←↑\nD) ↑↓→', options: ['↑→↓', '→↓←', '↓←↑', '↑↓→'], answer: 3 },
  { id: 71, text: 'A) ○○○\nB) △△△\nC) □□□\nD) ○△○', options: ['○○○', '△△△', '□□□', '○△○'], answer: 3 },
  { id: 72, text: 'A) ▲▼\nB) ◀▶\nC) ↑↓\nD) ▲▶', options: ['▲▼', '◀▶', '↑↓', '▲▶'], answer: 3 },
  { id: 73, text: 'A) □○□\nB) △★△\nC) ○■○\nD) □○△', options: ['□○□', '△★△', '○■○', '□○△'], answer: 3 },
  { id: 74, text: 'A) →→↓\nB) ↑↑←\nC) ←←↑\nD) →↓→', options: ['→→↓', '↑↑←', '←←↑', '→↓→'], answer: 3 },
  { id: 75, text: 'A) ○△□\nB) △□○\nC) □○△\nD) ○□△', options: ['○△□', '△□○', '□○△', '○□△'], answer: 3 }
];

export const mirrorImagesQuestions = [
  { id: 76, text: 'Assume the mirror is placed vertically on the right side.\n\nOriginal: → ○\n\nMirror image?', options: ['○ ←', '← ○', '○ →', '→ ○'], answer: 0 },
  { id: 77, text: 'Original: ▲ →', options: ['← ▲', '▲ ←', '→ ▲', '▲ →'], answer: 1 },
  { id: 78, text: 'Original: ○ △ □', options: ['□ △ ○', '○ △ □', '□ ○ △', '△ □ ○'], answer: 0 },
  { id: 79, text: 'Original: → ★ ○', options: ['○ ★ ←', '← ★ ○', '○ ★ →', '★ ○ ←'], answer: 0 },
  { id: 80, text: 'Original: △ → ○', options: ['○ ← △', '△ ← ○', '○ → △', '△ → ○'], answer: 0 },
  { id: 81, text: 'Original: ★ ▲ ■', options: ['■ ▲ ★', '★ ▲ ■', '■ ★ ▲', '▲ ■ ★'], answer: 0 },
  { id: 82, text: 'Original: ← ○', options: ['○ →', '→ ○', '○ ←', '← ○'], answer: 0 },
  { id: 83, text: 'Original: ○ → △ →', options: ['← △ ← ○', '→ △ → ○', '→ △ ○', '○ △ ←'], answer: 0 },
  { id: 84, text: 'Original: □ ▲ ○', options: ['○ ▲ □', '□ ▲ ○', '○ □ ▲', '▲ ○ □'], answer: 0 },
  { id: 85, text: 'Original: → ○ ←', options: ['→ ○ ←', '← ○ →', '← → ○', '○ ← →'], answer: 1 },
  { id: 86, text: 'Original: ★ ○ △', options: ['△ ○ ★', '★ ○ △', '△ ★ ○', '○ △ ★'], answer: 0 },
  { id: 87, text: 'Original: ▲ → ■', options: ['■ ← ▲', '▲ ← ■', '■ → ▲', '▲ → ■'], answer: 0 },
  { id: 88, text: 'Original: ○ □ △ ★', options: ['★ △ □ ○', '○ □ △ ★', '★ □ △ ○', '△ ★ □ ○'], answer: 0 },
  { id: 89, text: 'Original: → △ ←', options: ['→ △ ←', '← △ →', '← → △', '△ ← →'], answer: 1 },
  { id: 90, text: 'Original: ■ ○ ▲', options: ['▲ ○ ■', '■ ○ ▲', '▲ ■ ○', '○ ▲ ■'], answer: 0 }
];

export const waterImagesQuestions = [
  { id: 91, text: 'Assume the water is below the figure. Top and bottom positions are reversed.\n\nOriginal: ▲ ○', options: ['○ ▼', '▼ ○', '▲ ○', '○ ▲'], answer: 1 },
  { id: 92, text: 'Original vertical order:\n▲\n○\n\nWater image:', options: ['▲ / ○', '○ / ▼', '▼ / ○', '○ / ▲'], answer: 1 },
  { id: 93, text: 'Original:\n★\n△\n□', options: ['□ / △ / ☆', '☆ / △ / □', '□ / △ / ★', '★ / △ / □'], answer: 0 },
  { id: 94, text: 'Original: ↑\n\nWater image:', options: ['↑', '→', '↓', '←'], answer: 2 },
  { id: 95, text: 'Original: ↓', options: ['↑', '↓', '→', '←'], answer: 0 },
  { id: 96, text: 'Original:\n○\n▲', options: ['▲ / ○', '▼ / ○', '○ / ▼', '○ / ▲'], answer: 1 },
  { id: 97, text: 'Original:\n□\n★\n△', options: ['▲ / ★ / □', '△ / ★ / □', '□ / ★ / ▲', '△ / ☆ / □'], answer: 1 }, // actually the answer is B (△ / ★ / □) for whatever reason 
  { id: 98, text: 'Original: ↑ ○', options: ['↓ ○', '○ ↓', '↑ ○', '○ ↑'], answer: 0 },
  { id: 99, text: 'Original:\n▲\n■', options: ['■ / ▼', '▼ / ■', '▲ / ■', '■ / ▲'], answer: 0 },
  { id: 100, text: 'Original: →', options: ['←', '↑', '↓', '→'], answer: 3 },
  { id: 101, text: 'Original:\n★\n○\n▲', options: ['▼ / ○ / ☆', '▲ / ○ / ★', '☆ / ○ / ▼', '▼ / ○ / ★'], answer: 0 },
  { id: 102, text: 'Original:\n△\n□', options: ['■ / △', '□ / ▲', '■ / ▲', '△ / □'], answer: 1 },
  { id: 103, text: 'Original: ○ ▲ ★', options: ['○ ▼ ☆', '○ ▲ ★', '☆ ▼ ○', '★ ▲ ○'], answer: 0 },
  { id: 104, text: 'Original:\n↑\n→', options: ['→ / ↓', '↓ / →', '↑ / →', '← / ↑'], answer: 0 },
  { id: 105, text: 'Original:\n■\n△\n○', options: ['○ / ▲ / ■', '○ / △ / ■', '■ / △ / ○', '● / ▲ / □'], answer: 0 }
];

export const rotationOfFiguresQuestions = [
  { id: 106, text: 'Rotate ↑ by 90° clockwise.', options: ['↑', '→', '↓', '←'], answer: 1 },
  { id: 107, text: 'Rotate → by 90° clockwise.', options: ['↑', '→', '↓', '←'], answer: 2 },
  { id: 108, text: 'Rotate ↓ by 90° clockwise.', options: ['→', '←', '↑', '↓'], answer: 1 },
  { id: 109, text: 'Rotate ← by 90° clockwise.', options: ['↑', '→', '↓', '←'], answer: 0 },
  { id: 110, text: 'Rotate ↑ by 180°.', options: ['↑', '→', '↓', '←'], answer: 2 },
  { id: 111, text: 'Rotate → by 180°.', options: ['←', '↑', '↓', '→'], answer: 0 },
  { id: 112, text: 'Rotate △ by 180°.', options: ['△', '▽', '□', '○'], answer: 1 },
  { id: 113, text: 'Rotate → ○ by 90° clockwise.', options: ['○ ↓', '↓ ○', '○ ↑', '↑ ○'], answer: 0 }, // Wait, answer key says 113-A. 
  { id: 114, text: 'Rotate ↑ ★ by 90° clockwise.', options: ['→ ★', '★ →', '↓ ★', '★ ↓'], answer: 0 }, // Answer key says 114-A.
  { id: 115, text: 'Rotate ← ○ by 180°.', options: ['○ →', '→ ○', '○ ←', '← ○'], answer: 0 }, // 115-A
  { id: 116, text: 'Rotate ▲ by 90° clockwise.', options: ['◀', '▶', '▼', '▲'], answer: 1 }, // 116-B
  { id: 117, text: 'Rotate ▲ by 180°.', options: ['▲', '▼', '◀', '▶'], answer: 1 }, // 117-B
  { id: 118, text: 'Rotate → ■ by 180°.', options: ['■ ←', '← ■', '→ ■', '■ →'], answer: 0 }, // 118-A
  { id: 119, text: 'Rotate ↑ ○ △ by 90° clockwise.', options: ['→ ○ △', '△ ○ →', '↓ ○ △', '△ ○ ←'], answer: 2 }, // wait, answer key says 119-C. So it's "↓ ○ △".
  { id: 120, text: 'Rotate → ▲ by 90° anticlockwise.', options: ['↑ ▲', '▲ ↑', '↓ ▲', '▲ ↓'], answer: 0 } // 120-A
];
