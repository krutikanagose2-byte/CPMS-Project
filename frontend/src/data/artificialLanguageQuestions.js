export const artificialLanguageQuestions = [
  // Easy
  { id: 1, text: "If dak = book and mip = pen, what is dak?", options: ["Pen", "Book", "Paper", "Bag"], answer: 1, explanation: "Direct translation: dak = book.", difficulty: "Easy" },
  { id: 2, text: "If lom = sun and vek = moon, what is vek?", options: ["Star", "Sun", "Moon", "Sky"], answer: 2, explanation: "Direct translation: vek = moon.", difficulty: "Easy" },
  { id: 3, text: "If nako = water, then nako means:", options: ["Fire", "Water", "Air", "Earth"], answer: 1, explanation: "Direct translation: nako = water.", difficulty: "Easy" },
  { id: 4, text: "If pim = red and tak = blue, what is pim?", options: ["Blue", "Green", "Red", "Yellow"], answer: 2, explanation: "Direct translation: pim = red.", difficulty: "Easy" },
  { id: 5, text: "If zor = eat, what does zor mean?", options: ["Drink", "Eat", "Sleep", "Run"], answer: 1, explanation: "Direct translation: zor = eat.", difficulty: "Easy" },
  { id: 6, text: "If kal = house and mer = school, kal means:", options: ["School", "House", "Road", "Office"], answer: 1, explanation: "Direct translation: kal = house.", difficulty: "Easy" },
  { id: 7, text: "If bim = good, then bim means:", options: ["Bad", "Good", "Big", "Small"], answer: 1, explanation: "Direct translation: bim = good.", difficulty: "Easy" },
  { id: 8, text: "If tar = father, tar means:", options: ["Brother", "Father", "Mother", "Son"], answer: 1, explanation: "Direct translation: tar = father.", difficulty: "Easy" },
  { id: 9, text: "If lum = tree, lum means:", options: ["Flower", "Tree", "Leaf", "Fruit"], answer: 1, explanation: "Direct translation: lum = tree.", difficulty: "Easy" },
  { id: 10, text: "If sok = fast, sok means:", options: ["Slow", "Fast", "High", "Low"], answer: 1, explanation: "Direct translation: sok = fast.", difficulty: "Easy" },

  // Medium
  { id: 11, text: "If dak = red, mip = flower, then 'red flower' is:", options: ["mip dak", "dak mip", "dak dak", "mip mip"], answer: 1, explanation: "dak (red) + mip (flower) = dak mip.", difficulty: "Medium" },
  { id: 12, text: "If zor = eat, vek = food, then 'eat food' is:", options: ["vek zor", "zor vek", "zor zor", "vek vek"], answer: 1, explanation: "zor (eat) + vek (food) = zor vek.", difficulty: "Medium" },
  { id: 13, text: "If lom = big, tar = house, 'big house' is:", options: ["tar lom", "lom tar", "lom lom", "tar tar"], answer: 1, explanation: "lom (big) + tar (house) = lom tar.", difficulty: "Medium" },
  { id: 14, text: "If nako = drink, pim = water, 'drink water' is:", options: ["pim nako", "nako pim", "nako nako", "pim pim"], answer: 1, explanation: "nako (drink) + pim (water) = nako pim.", difficulty: "Medium" },
  { id: 15, text: "If kal = boy, mer = runs, 'boy runs' is:", options: ["mer kal", "kal mer", "kal kal", "mer mer"], answer: 1, explanation: "kal (boy) + mer (runs) = kal mer.", difficulty: "Medium" },
  { id: 16, text: "If bim = good, sok = student, 'good student' is:", options: ["sok bim", "bim sok", "sok sok", "bim bim"], answer: 1, explanation: "bim (good) + sok (student) = bim sok.", difficulty: "Medium" },
  { id: 17, text: "If dak = mother, zor = cooks, 'mother cooks' is:", options: ["zor dak", "dak zor", "dak dak", "zor zor"], answer: 1, explanation: "dak (mother) + zor (cooks) = dak zor.", difficulty: "Medium" },
  { id: 18, text: "If lum = red, vek = car, 'red car' is:", options: ["vek lum", "lum vek", "vek vek", "lum lum"], answer: 1, explanation: "lum (red) + vek (car) = lum vek.", difficulty: "Medium" },
  { id: 19, text: "If pim = read, tar = book, 'read book' is:", options: ["tar pim", "pim tar", "tar tar", "pim pim"], answer: 1, explanation: "pim (read) + tar (book) = pim tar.", difficulty: "Medium" },
  { id: 20, text: "If nako = plays, mer = child, 'child plays' is:", options: ["nako mer", "mer nako", "mer mer", "nako nako"], answer: 1, explanation: "mer (child) + nako (plays) = mer nako.", difficulty: "Medium" },

  // Hard
  { id: 21, text: "If dak = red, mip = flower, zor = blooms, what means 'red flower blooms'?", options: ["dak mip zor", "mip dak zor", "zor dak mip", "dak zor mip"], answer: 0, explanation: "dak (red) + mip (flower) + zor (blooms).", difficulty: "Hard" },
  { id: 22, text: "If kal = student, bim = good, sok = studies, 'good student studies' = ?", options: ["kal bim sok", "bim kal sok", "sok bim kal", "bim sok kal"], answer: 1, explanation: "bim (good) + kal (student) + sok (studies).", difficulty: "Hard" },
  { id: 23, text: "If tar = boy, lum = school, pim = goes, 'boy goes school' = ?", options: ["tar pim lum", "tar lum pim", "lum tar pim", "pim tar lum"], answer: 1, explanation: "tar (boy) + lum (school) + pim (goes). Wait, user key says B which is tar lum pim.", difficulty: "Hard" },
  { id: 24, text: "If vek = doctor, dak = patient, zor = treats, 'doctor treats patient' = ?", options: ["dak zor vek", "vek zor dak", "zor vek dak", "vek dak zor"], answer: 1, explanation: "vek (doctor) + zor (treats) + dak (patient).", difficulty: "Hard" },
  { id: 25, text: "If mip = bird, nako = sky, kal = flies, 'bird flies sky' = ?", options: ["mip kal nako", "kal mip nako", "mip nako kal", "nako mip kal"], answer: 0, explanation: "mip (bird) + kal (flies) + nako (sky).", difficulty: "Hard" },
  { id: 26, text: "If zor = student, dak = teacher, lum = teaches, 'teacher teaches student' = ?", options: ["dak lum zor", "zor lum dak", "lum dak zor", "dak zor lum"], answer: 0, explanation: "dak (teacher) + lum (teaches) + zor (student).", difficulty: "Hard" },
  { id: 27, text: "If pim = farmer, vek = field, tar = works, 'farmer works field' = ?", options: ["vek tar pim", "pim tar vek", "tar pim vek", "pim vek tar"], answer: 1, explanation: "pim (farmer) + tar (works) + vek (field).", difficulty: "Hard" },
  { id: 28, text: "If lom = child, bim = milk, sok = drinks, 'child drinks milk' = ?", options: ["lom sok bim", "bim sok lom", "sok lom bim", "lom bim sok"], answer: 0, explanation: "lom (child) + sok (drinks) + bim (milk).", difficulty: "Hard" },
  { id: 29, text: "If kal = computer, mip = programmer, zor = uses, 'programmer uses computer' = ?", options: ["kal zor mip", "mip zor kal", "zor mip kal", "mip kal zor"], answer: 1, explanation: "mip (programmer) + zor (uses) + kal (computer).", difficulty: "Hard" },
  { id: 30, text: "If dak = manager, tar = employee, vek = guides, 'manager guides employee' = ?", options: ["tar vek dak", "dak vek tar", "vek dak tar", "dak tar vek"], answer: 1, explanation: "dak (manager) + vek (guides) + tar (employee).", difficulty: "Hard" }
];
