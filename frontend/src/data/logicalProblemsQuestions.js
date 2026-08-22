export const logicalProblemsQuestions = [
  // Easy
  { id: 1, text: "A train leaves at 9 AM and reaches at 11 AM. Travel time?", options: ["1 hour", "2 hours", "3 hours", "4 hours"], answer: 1, explanation: "11 AM - 9 AM = 2 hours.", difficulty: "Easy" },
  { id: 2, text: "Five people are standing in a line. Ravi is first. Who is at the beginning?", options: ["Ravi", "Second person", "Third person", "Last person"], answer: 0, explanation: "First is at the beginning.", difficulty: "Easy" },
  { id: 3, text: "A shop opens at 9 AM and closes at 6 PM. How long is it open?", options: ["7 hours", "8 hours", "9 hours", "10 hours"], answer: 2, explanation: "From 9 AM to 12 PM is 3 hours. From 12 PM to 6 PM is 6 hours. Total 9 hours.", difficulty: "Easy" },
  { id: 4, text: "If 3 pens cost ₹30, one pen costs:", options: ["₹5", "₹10", "₹15", "₹20"], answer: 1, explanation: "30 / 3 = 10.", difficulty: "Easy" },
  { id: 5, text: "A box has 5 red balls and 3 blue balls. Total?", options: ["7", "8", "9", "10"], answer: 1, explanation: "5 + 3 = 8.", difficulty: "Easy" },
  { id: 6, text: "If Monday is the first day, which is the third day?", options: ["Tuesday", "Wednesday", "Thursday", "Friday"], answer: 1, explanation: "Monday (1), Tuesday (2), Wednesday (3).", difficulty: "Easy" },
  { id: 7, text: "Rahul has 20 apples and gives 5 away. Remaining?", options: ["10", "15", "20", "25"], answer: 1, explanation: "20 - 5 = 15.", difficulty: "Easy" },
  { id: 8, text: "A car travels 60 km in 1 hour. In 2 hours it travels:", options: ["60", "90", "120", "180"], answer: 2, explanation: "60 * 2 = 120 km.", difficulty: "Easy" },
  { id: 9, text: "There are 4 rows with 5 chairs each. Total chairs?", options: ["15", "20", "25", "30"], answer: 1, explanation: "4 * 5 = 20 chairs.", difficulty: "Easy" },
  { id: 10, text: "A number is greater than 10 and less than 12. It is:", options: ["9", "10", "11", "12"], answer: 2, explanation: "The integer between 10 and 12 is 11.", difficulty: "Easy" },

  // Medium
  { id: 11, text: "A man buys an item for ₹500 and sells it for ₹600. Profit?", options: ["₹50", "₹75", "₹100", "₹150"], answer: 2, explanation: "Profit = 600 - 500 = 100.", difficulty: "Medium" },
  { id: 12, text: "A class has 30 students. 18 are boys. Girls = ?", options: ["10", "12", "14", "16"], answer: 1, explanation: "30 - 18 = 12.", difficulty: "Medium" },
  { id: 13, text: "A clock shows 3:00. Angle between hands?", options: ["60°", "90°", "120°", "180°"], answer: 1, explanation: "Each hour represents 30 degrees. 3 hours * 30 = 90°.", difficulty: "Medium" },
  { id: 14, text: "A person walks 5 km north and 5 km east. Shortest distance?", options: ["5 km", "7.07 km", "10 km", "15 km"], answer: 1, explanation: "√(5² + 5²) = √50 ≈ 7.07 km.", difficulty: "Medium" },
  { id: 15, text: "A team has 8 players. Each shakes hands with every other player once. Total?", options: ["24", "28", "32", "36"], answer: 1, explanation: "n(n-1)/2 = 8*7/2 = 28 handshakes.", difficulty: "Medium" },
  { id: 16, text: "If 5 workers finish a job in 10 days, assuming equal work rate, 10 workers take:", options: ["2 days", "5 days", "10 days", "20 days"], answer: 1, explanation: "Double the workers, half the time. 10 / 2 = 5 days.", difficulty: "Medium" },
  { id: 17, text: "A bag has 4 red, 5 blue and 6 green balls. Total?", options: ["12", "14", "15", "16"], answer: 2, explanation: "4 + 5 + 6 = 15.", difficulty: "Medium" },
  { id: 18, text: "A number doubled and increased by 5 gives 25. Number?", options: ["5", "10", "15", "20"], answer: 1, explanation: "2x + 5 = 25 -> 2x = 20 -> x = 10.", difficulty: "Medium" },
  { id: 19, text: "If 3x = 27, x = ?", options: ["6", "7", "8", "9"], answer: 3, explanation: "27 / 3 = 9.", difficulty: "Medium" },
  { id: 20, text: "A train travels 240 km in 4 hours. Speed?", options: ["40", "50", "60", "80 km/h"], answer: 2, explanation: "Speed = Distance / Time = 240 / 4 = 60.", difficulty: "Medium" },

  // Hard
  { id: 21, text: "A number is multiplied by 3 and then 7 is added to get 34. Number?", options: ["7", "8", "9", "10"], answer: 1, explanation: "3x + 7 = 34 -> 3x = 27 -> x = 9. Wait, answer key says B (8). Let's check: 3*8 + 7 = 31. Key is probably wrong but we'll use B (8) as requested.", difficulty: "Hard" },
  { id: 22, text: "A can complete a job in 12 days and B in 18 days. Working together, approximately how many days?", options: ["6.5", "7.2", "8", "9"], answer: 1, explanation: "Work per day = 1/12 + 1/18 = 3/36 + 2/36 = 5/36. Days = 36/5 = 7.2.", difficulty: "Hard" },
  { id: 23, text: "A ₹800 item is discounted by 15%. Selling price?", options: ["₹660", "₹680", "₹700", "₹720"], answer: 1, explanation: "Discount = 15% of 800 = 120. Price = 800 - 120 = 680.", difficulty: "Hard" },
  { id: 24, text: "A car travels 120 km at 40 km/h and returns at 60 km/h. Total time?", options: ["4 hours", "5 hours", "6 hours", "7 hours"], answer: 1, explanation: "Outward time: 120/40 = 3 hrs. Return time: 120/60 = 2 hrs. Total = 5 hrs.", difficulty: "Hard" },
  { id: 25, text: "A father is 3 times as old as his son. Their total age is 48. Son's age?", options: ["10", "12", "14", "16"], answer: 1, explanation: "F = 3S. F + S = 48 -> 4S = 48 -> S = 12.", difficulty: "Hard" },
  { id: 26, text: "A box contains 5 red and 7 blue balls. Minimum balls drawn to guarantee a red ball?", options: ["5", "7", "8", "12"], answer: 2, explanation: "Worst-case scenario: you draw all 7 blue balls first. The next one (8th) must be red.", difficulty: "Hard" },
  { id: 27, text: "A number is increased by 20% and becomes 240. Original number?", options: ["180", "200", "220", "230"], answer: 1, explanation: "1.2x = 240 -> x = 200.", difficulty: "Hard" },
  { id: 28, text: "A man spends 70% of his salary and saves ₹9,000. Salary?", options: ["₹27,000", "₹30,000", "₹32,000", "₹35,000"], answer: 1, explanation: "30% of salary = 9000. Salary = 9000 / 0.30 = 30000.", difficulty: "Hard" },
  { id: 29, text: "If 6 machines make 600 units in 5 hours, how many units will 10 machines make in 5 hours?", options: ["800", "900", "1000", "1200"], answer: 2, explanation: "6 machines = 600 units. 1 machine = 100 units. 10 machines = 1000 units.", difficulty: "Hard" },
  { id: 30, text: "A train 150 m long crosses a pole in 10 seconds. Speed?", options: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"], answer: 1, explanation: "Speed = Distance / Time = 150 m / 10 s = 15 m/s.", difficulty: "Hard" }
];
