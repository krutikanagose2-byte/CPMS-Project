export const alphabetToNumberCodingQuestions = [
  { id: 1, text: 'If A=1, B=2, C=3, ..., Z=26, what is the value of CAT?', options: ['24', '26', '28', '30'], answer: 1 },
  { id: 2, text: 'What is the value of DOG?', options: ['24', '26', '28', '30'], answer: 1 },
  { id: 3, text: 'What is the value of BAT?', options: ['21', '23', '25', '27'], answer: 1 },
  { id: 4, text: 'What is the value of SUN?', options: ['52', '54', '56', '58'], answer: 1 },
  { id: 5, text: 'What is the value of BOOK?', options: ['41', '43', '45', '47'], answer: 1 },
  { id: 6, text: 'What is the value of PEN?', options: ['35', '37', '39', '41'], answer: 1 },
  { id: 7, text: 'What is the value of APPLE?', options: ['50', '52', '54', '56'], answer: 2 },
  { id: 8, text: 'What is the value of FISH?', options: ['38', '40', '42', '44'], answer: 1 },
  { id: 9, text: 'What is the value of GAME?', options: ['24', '26', '28', '30'], answer: 1 },
  { id: 10, text: 'What is the value of ZOO?', options: ['56', '58', '60', '62'], answer: 1 }
];

export const numberToLetterCodingQuestions = [
  { id: 1, text: 'If 1=A, 2=B, ..., 26=Z, what word is 3-1-20?', options: ['CAT', 'BAT', 'CAR', 'CAN'], answer: 0 },
  { id: 2, text: 'What word is represented by 4-15-7?', options: ['DOG', 'DIG', 'DOT', 'DUG'], answer: 0 },
  { id: 3, text: 'What word is represented by 2-1-20?', options: ['BAT', 'CAT', 'BET', 'BIT'], answer: 0 },
  { id: 4, text: '19-21-14 represents:', options: ['SUN', 'SON', 'SIN', 'RUN'], answer: 0 },
  { id: 5, text: '16-5-14 represents:', options: ['PEN', 'PIN', 'PAN', 'PET'], answer: 0 },
  { id: 6, text: '6-9-19-8 represents:', options: ['FISH', 'FISH?', 'DISH', 'FINH'], answer: 0 },
  { id: 7, text: '7-1-13-5 represents:', options: ['GAME', 'GATE', 'GONE', 'SAME'], answer: 0 },
  { id: 8, text: '2-15-15-11 represents:', options: ['BOOK', 'LOOK', 'BOON', 'BOOT'], answer: 0 },
  { id: 9, text: '1-16-16-12-5 represents:', options: ['APPLE', 'APPLY', 'AMPLE', 'ANGLE'], answer: 0 },
  { id: 10, text: '26-15-15 represents:', options: ['ZOO', 'ZOO?', 'ZOO', 'ZOD'], answer: 0 }
];

export const letterValueProblemsQuestions = [
  { id: 1, text: 'What is the difference between the values of A and Z?', options: ['24', '25', '26', '27'], answer: 1 },
  { id: 2, text: 'What is the sum of M and N?', options: ['25', '26', '27', '28'], answer: 2 },
  { id: 3, text: 'What is the value of C × D?', options: ['7', '10', '12', '14'], answer: 2 },
  { id: 4, text: 'What is the value of P + Q − R?', options: ['15', '16', '17', '18'], answer: 2 },
  { id: 5, text: 'What is the value of H + I + J?', options: ['24', '25', '26', '27'], answer: 2 },
  { id: 6, text: 'What is the value of X − W?', options: ['1', '2', '3', '4'], answer: 0 },
  { id: 7, text: 'What is the value of A + E + I?', options: ['12', '14', '15', '16'], answer: 1 },
  { id: 8, text: 'If A=2, B=4, C=6, what is the value of D?', options: ['6', '8', '10', '12'], answer: 1 },
  { id: 9, text: 'If A=1 and each next letter increases by 2, what is C?', options: ['3', '5', '6', '7'], answer: 1 },
  { id: 10, text: 'What is the average value of A, B and C?', options: ['1', '2', '3', '4'], answer: 1 }
];

export const simpleAdditionCryptarithmsQuestions = [
  { id: 1, text: 'If A=2 and B=3, find A+B.', options: ['4', '5', '6', '7'], answer: 1 },
  { id: 2, text: 'If A=4, B=5 and C=6, find A+B+C.', options: ['14', '15', '16', '17'], answer: 2 },
  { id: 3, text: 'If A+B=10 and A=6, find B.', options: ['2', '3', '4', '5'], answer: 2 },
  { id: 4, text: 'If A+B=15 and B=7, find A.', options: ['6', '7', '8', '9'], answer: 2 },
  { id: 5, text: 'If A+B+C=20, A=5 and B=8, find C.', options: ['6', '7', '8', '9'], answer: 1 },
  { id: 6, text: 'If AB + C = 25, AB=19, find C.', options: ['5', '6', '7', '8'], answer: 1 },
  { id: 7, text: 'If A=3, B=7, find AB + A.', options: ['10', '30', '31', '33'], answer: 2 },
  { id: 8, text: 'If A+B=12 and B+C=15, A=5, find C.', options: ['7', '8', '9', '10'], answer: 2 },
  { id: 9, text: 'If A+B+C=30, A=10, B=12, find C.', options: ['6', '7', '8', '9'], answer: 2 },
  { id: 10, text: 'If AB + CD = 100, AB=45 and CD=55, result is:', options: ['90', '95', '100', '105'], answer: 2 }
];

export const subtractionCryptarithmsQuestions = [
  { id: 1, text: 'If A=8 and B=3, find A−B.', options: ['4', '5', '6', '7'], answer: 1 },
  { id: 2, text: 'If A−B=10 and A=18, find B.', options: ['6', '7', '8', '9'], answer: 2 },
  { id: 3, text: 'If A−B=7 and B=5, find A.', options: ['10', '11', '12', '13'], answer: 2 },
  { id: 4, text: 'If A−B−C=5, A=15 and B=6, find C.', options: ['3', '4', '5', '6'], answer: 1 },
  { id: 5, text: 'If AB−C=30, AB=37, find C.', options: ['5', '6', '7', '8'], answer: 2 },
  { id: 6, text: 'If 50−A=32, find A.', options: ['16', '17', '18', '19'], answer: 2 },
  { id: 7, text: 'If A−B=12 and A=20, find B.', options: ['6', '7', '8', '9'], answer: 2 },
  { id: 8, text: 'If A−B−C=10, A=25 and B=9, find C.', options: ['5', '6', '7', '8'], answer: 1 },
  { id: 9, text: 'If 80−AB=35, find AB.', options: ['35', '40', '45', '50'], answer: 2 },
  { id: 10, text: 'If AB−CD=25, AB=70 and CD=45, result is:', options: ['20', '25', '30', '35'], answer: 1 }
];

export const multiplicationCryptarithmsQuestions = [
  { id: 1, text: 'If A=4 and B=5, find A×B.', options: ['15', '20', '25', '30'], answer: 1 },
  { id: 2, text: 'If A×B=24 and A=6, find B.', options: ['3', '4', '5', '6'], answer: 1 },
  { id: 3, text: 'If A×B=35 and B=7, find A.', options: ['4', '5', '6', '7'], answer: 1 },
  { id: 4, text: 'If A×B×C=60, A=3 and B=4, find C.', options: ['4', '5', '6', '7'], answer: 1 },
  { id: 5, text: 'If AB×C=36, AB=9, find C.', options: ['2', '3', '4', '5'], answer: 1 },
  { id: 6, text: 'If A=8 and B=7, find A×B.', options: ['54', '56', '58', '60'], answer: 1 },
  { id: 7, text: 'If A×B=48 and A=8, B=?', options: ['4', '5', '6', '7'], answer: 2 },
  { id: 8, text: 'If A×B×C=72, A=3, B=4, find C.', options: ['4', '5', '6', '7'], answer: 2 },
  { id: 9, text: 'If AB=12 and C=5, find AB×C.', options: ['50', '55', '60', '65'], answer: 2 },
  { id: 10, text: 'If A=9 and B=6, what is A×B−A?', options: ['40', '42', '45', '48'], answer: 1 }
];

export const divisionCryptarithmsQuestions = [
  { id: 1, text: 'If A=20 and B=5, find A÷B.', options: ['2', '3', '4', '5'], answer: 2 },
  { id: 2, text: 'If A÷B=6 and B=4, find A.', options: ['20', '24', '28', '30'], answer: 1 },
  { id: 3, text: 'If A÷B=5 and A=35, find B.', options: ['5', '6', '7', '8'], answer: 2 },
  { id: 4, text: 'If A÷B=8 and B=3, find A.', options: ['21', '24', '27', '30'], answer: 1 },
  { id: 5, text: 'If AB÷C=7 and AB=35, find C.', options: ['4', '5', '6', '7'], answer: 1 },
  { id: 6, text: 'If 48÷A=6, find A.', options: ['6', '7', '8', '9'], answer: 2 },
  { id: 7, text: 'If A÷4=9, find A.', options: ['32', '36', '40', '44'], answer: 1 },
  { id: 8, text: 'If A÷B=4 and A=28, find B.', options: ['5', '6', '7', '8'], answer: 2 },
  { id: 9, text: 'If AB÷5=8, find AB.', options: ['35', '40', '45', '50'], answer: 1 },
  { id: 10, text: 'If 72÷A=9, find A.', options: ['6', '7', '8', '9'], answer: 2 }
];

export const carryBasedProblemsQuestions = [
  { id: 1, text: 'In 27 + 38, is there a carry from the units column?', options: ['Yes', 'No', 'Cannot say', 'None'], answer: 0 },
  { id: 2, text: 'In 46 + 28, the units digits give:', options: ['12', '13', '14', '15'], answer: 2 },
  { id: 3, text: 'In 58 + 27, the carry from units column is:', options: ['0', '1', '2', '3'], answer: 1 },
  { id: 4, text: 'In 76 + 45, the units sum is:', options: ['9', '10', '11', '12'], answer: 2 },
  { id: 5, text: 'In 89 + 26, the carry from units is:', options: ['0', '1', '2', '3'], answer: 1 },
  { id: 6, text: 'In 35 + 47, the carry from units is:', options: ['0', '1', '2', '3'], answer: 1 },
  { id: 7, text: 'In 68 + 57, what is the units digit of the answer?', options: ['3', '4', '5', '6'], answer: 2 },
  { id: 8, text: 'In 49 + 38, what is the carry to the tens column?', options: ['0', '1', '2', '3'], answer: 1 },
  { id: 9, text: 'In 75 + 26, the units digit of the result is:', options: ['0', '1', '2', '3'], answer: 1 },
  { id: 10, text: 'In 96 + 17, the carry from units is:', options: ['0', '1', '2', '3'], answer: 1 }
];

export const missingDigitProblemsQuestions = [
  { id: 1, text: 'Find □: 5 + □ = 12', options: ['5', '6', '7', '8'], answer: 2 },
  { id: 2, text: 'Find □: □ − 4 = 9', options: ['11', '12', '13', '14'], answer: 2 },
  { id: 3, text: 'Find □: 6 × □ = 42', options: ['5', '6', '7', '8'], answer: 2 },
  { id: 4, text: 'Find □: 48 ÷ □ = 6', options: ['6', '7', '8', '9'], answer: 2 },
  { id: 5, text: 'Find □: 2□ + 5 = 28', options: ['1', '2', '3', '4'], answer: 2 },
  { id: 6, text: 'Find □: □7 + 3 = 80', options: ['6', '7', '8', '9'], answer: 2 },
  { id: 7, text: 'Find □: 45 + □5 = 90', options: ['3', '4', '5', '6'], answer: 1 },
  { id: 8, text: 'Find □: 9□ − 20 = 75', options: ['4', '5', '6', '7'], answer: 1 },
  { id: 9, text: 'Find □: □ × 8 = 56', options: ['6', '7', '8', '9'], answer: 1 },
  { id: 10, text: 'Find □: 100 − □ = 64', options: ['34', '35', '36', '37'], answer: 2 }
];

export const uniqueDigitAssignmentQuestions = [
  { id: 1, text: 'If A and B are different digits and A+B=10, which pair is possible?', options: ['5,5', '4,6', '7,7', '3,3'], answer: 1 },
  { id: 2, text: 'A, B and C are unique digits. If A=2 and B=5, which can be C?', options: ['2', '5', '7', 'Both A and B'], answer: 2 },
  { id: 3, text: 'A+B=9 and A≠B. Which pair is valid?', options: ['4,5', '3,3', '6,6', '2,2'], answer: 0 },
  { id: 4, text: 'A×B=12 and A,B are different digits. Which pair is possible?', options: ['3,4', '2,6', 'Both A and B', '3,3'], answer: 2 },
  { id: 5, text: 'A+B+C=15 and all are different. Which is possible?', options: ['5,5,5', '3,5,7', '4,4,7', '2,2,11'], answer: 1 },
  { id: 6, text: 'A=1, B=2, C=3. Which digit can D be?', options: ['1', '2', '3', '4'], answer: 3 },
  { id: 7, text: 'A+B=12, A and B are unique. Which is valid?', options: ['6,6', '5,7', '4,8', 'Both B and C'], answer: 3 },
  { id: 8, text: 'A×B=20 and A≠B. Which pair is possible?', options: ['4,5', '2,10', '5,5', 'Both A and B'], answer: 3 },
  { id: 9, text: 'A+B+C=10 and all digits are different. Which is possible?', options: ['1,2,7', '2,4,4', '3,3,4', '5,5,0'], answer: 0 },
  { id: 10, text: 'A+B=15. Which pair cannot be used if digits must be unique?', options: ['6,9', '7,8', '5,10', '4,11'], answer: 2 }
];
