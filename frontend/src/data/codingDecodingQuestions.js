export const codingDecodingQuestions = [
  // Easy
  { id: 1, text: "If CAT = DBU, then DOG = ?", options: ["EPH", "EOG", "FPH", "DPH"], answer: 0, explanation: "Every letter +1.", difficulty: "Easy" },
  { id: 2, text: "If PEN = QFO, then CAT = ?", options: ["DBU", "CBU", "DCT", "EBU"], answer: 0, explanation: "Every letter +1.", difficulty: "Easy" },
  { id: 3, text: "If APPLE = BQQMF, then MANGO = ?", options: ["NBOHP", "NBPHO", "MBOHP", "OCPHQ"], answer: 0, explanation: "Every letter +1.", difficulty: "Easy" },
  { id: 4, text: "If BAD = 2-1-4, then CAB = ?", options: ["3-1-2", "3-2-1", "2-1-3", "1-2-3"], answer: 0, explanation: "A=1, B=2, C=3, etc.", difficulty: "Easy" },
  { id: 5, text: "If A=1, B=2,... then DOG = ?", options: ["4-15-7", "5-14-7", "4-14-8", "3-15-7"], answer: 0, explanation: "D=4, O=15, G=7.", difficulty: "Easy" },
  { id: 6, text: "If SUN = TVO, then MOON = ?", options: ["NPPO", "NPPM", "NQPO", "MPPN"], answer: 0, explanation: "Every letter +1.", difficulty: "Easy" },
  { id: 7, text: "If BLUE = CMVF, then RED = ?", options: ["SFE", "SFD", "TFE", "RFD"], answer: 0, explanation: "Every letter +1.", difficulty: "Easy" },
  { id: 8, text: "If MAN = NBO, then BOY = ?", options: ["CPZ", "CPY", "COZ", "BPZ"], answer: 0, explanation: "Every letter +1.", difficulty: "Easy" },
  { id: 9, text: "If FISH = GJTI, then BIRD = ?", options: ["CJSE", "CISE", "BJSE", "CKSE"], answer: 0, explanation: "Every letter +1.", difficulty: "Easy" },
  { id: 10, text: "If BOOK = CPPL, then PAGE = ?", options: ["QBHF", "QBGF", "PBGF", "RCHF"], answer: 0, explanation: "Every letter +1.", difficulty: "Easy" },

  // Medium
  { id: 11, text: "If TABLE is coded as UBCMF, then CHAIR = ?", options: ["DIBJS", "DIBIR", "CHBJS", "EJCJT"], answer: 0, explanation: "Every letter +1.", difficulty: "Medium" },
  { id: 12, text: "If ROAD = 18-15-1-4, then TRAIN = ?", options: ["20-18-1-9-14", "19-18-1-9-14", "20-17-1-9-14", "20-18-2-9-14"], answer: 0, explanation: "Alphabetical positions.", difficulty: "Medium" },
  { id: 13, text: "If DELHI = EFMIJ, then MUMBAI = ?", options: ["NVNCBJ", "NVNCAJ", "MUNCBJ", "OVODCK"], answer: 0, explanation: "Every letter +1.", difficulty: "Medium" },
  { id: 14, text: "If KING = LJ OH (L J O H), then QUEEN = ?", options: ["RVFFO", "RVFFN", "QVFFO", "SWGGP"], answer: 0, explanation: "Every letter +1.", difficulty: "Medium" },
  { id: 15, text: "If SCHOOL = TDIPPM, then COLLEGE = ?", options: ["DPMMFHF", "DPMMFGE", "EPNNGHF", "CPMMFHF"], answer: 0, explanation: "Every letter +1.", difficulty: "Medium" },
  { id: 16, text: "If BAD = 7 and CAT = 24, then DOG = ?", options: ["26", "25", "27", "28"], answer: 0, explanation: "Sum of letters: D(4)+O(15)+G(7)=26.", difficulty: "Medium" },
  { id: 17, text: "If APPLE = 50, then BAT = ?", options: ["23", "24", "25", "26"], answer: 0, explanation: "Sum of letters: B(2)+A(1)+T(20)=23.", difficulty: "Medium" },
  { id: 18, text: "If NORTH is coded as 12345 and SOUTH as 67845, what is H?", options: ["4", "5", "6", "7"], answer: 1, explanation: "Direct mapping: H is 5.", difficulty: "Medium" },
  { id: 19, text: "If RAM = 32, then SUN = ?", options: ["54", "56", "58", "60"], answer: 0, explanation: "Sum of letters: S(19)+U(21)+N(14)=54.", difficulty: "Medium" },
  { id: 20, text: "If MOBILE = NP CJMF (N P C J M F), then LAPTOP = ?", options: ["MBQUPQ", "MBQUPP", "LBPUPQ", "NCQVRQ"], answer: 0, explanation: "Every letter +1.", difficulty: "Medium" },

  // Hard
  { id: 21, text: "If COMPUTER is coded by shifting each letter +2, code it.", options: ["EQORWVGT", "EQORWVGU", "EQORWVGQ", "DQNPVUFQ"], answer: 0, explanation: "C->E, O->Q, M->O, etc.", difficulty: "Hard" },
  { id: 22, text: "If each letter is replaced by its opposite alphabet letter (A↔Z), CAT = ?", options: ["XZG", "YZG", "XZH", "WZG"], answer: 0, explanation: "C->X, A->Z, T->G.", difficulty: "Hard" },
  { id: 23, text: "Using opposite letters, DOG = ?", options: ["WLT", "XLT", "WLS", "VLT"], answer: 0, explanation: "D->W, O->L, G->T.", difficulty: "Hard" },
  { id: 24, text: "If ROAD = URDG, then MILK = ?", options: ["PLO N", "PLON", "PMON", "PLOM"], answer: 1, explanation: "Every letter +3.", difficulty: "Hard" },
  { id: 25, text: "If TRAIN = 20-18-1-9-14, what is the sum?", options: ["60", "61", "62", "63"], answer: 2, explanation: "20+18+1+9+14 = 62.", difficulty: "Hard" },
  { id: 26, text: "If 'APPLE' is written as 'ELPPA', then 'MANGO' is written as:", options: ["OGNAM", "OGMAN", "OGNMA", "OGNAN"], answer: 0, explanation: "Reverse the word.", difficulty: "Hard" },
  { id: 27, text: "If 'DELHI' is written as 'IHLED', then 'PUNE' = ?", options: ["ENUP", "ENPU", "EUNP", "NEUP"], answer: 0, explanation: "Reverse the word.", difficulty: "Hard" },
  { id: 28, text: "If each letter moves two positions forward, ZOO = ?", options: ["BQQ", "APP", "CQQ", "BPP"], answer: 0, explanation: "Z->B, O->Q, O->Q.", difficulty: "Hard" },
  { id: 29, text: "If each letter moves two positions backward, CAT = ?", options: ["AYR", "AZR", "BYR", "AXQ"], answer: 0, explanation: "C->A, A->Y, T->R.", difficulty: "Hard" },
  { id: 30, text: "If 'MANGO' = 13-1-14-7-15, what is 'GRAPE'?", options: ["7-18-1-16-5", "7-17-1-16-5", "6-18-1-16-5", "7-18-2-16-5"], answer: 0, explanation: "Alphabetical positions.", difficulty: "Hard" }
];
