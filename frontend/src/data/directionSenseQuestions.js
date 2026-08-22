export const directionSenseQuestions = [
  // Easy
  { id: 1, text: "Ravi walks 5 km North. Which direction is he facing?", options: ["South", "East", "North", "West"], answer: 2, explanation: "He is walking North, so he faces North.", difficulty: "Easy" },
  { id: 2, text: "A person walks East and then turns right. Which direction?", options: ["North", "South", "East", "West"], answer: 1, explanation: "Right of East is South.", difficulty: "Easy" },
  { id: 3, text: "A person walks North and turns right.", options: ["West", "East", "South", "North"], answer: 1, explanation: "Right of North is East.", difficulty: "Easy" },
  { id: 4, text: "A person faces South and turns left.", options: ["East", "West", "North", "South"], answer: 0, explanation: "Left of South is East.", difficulty: "Easy" },
  { id: 5, text: "A person faces West and turns right.", options: ["North", "South", "East", "West"], answer: 0, explanation: "Right of West is North.", difficulty: "Easy" },
  { id: 6, text: "Rahul walks 10 m East and then 10 m West. Where is he?", options: ["10 m East", "10 m West", "Starting point", "North"], answer: 2, explanation: "He returned to his starting point.", difficulty: "Easy" },
  { id: 7, text: "If Sun rises in the East, it sets in the:", options: ["North", "South", "West", "East"], answer: 2, explanation: "Sun sets in the West.", difficulty: "Easy" },
  { id: 8, text: "North's opposite direction is:", options: ["East", "West", "South", "North"], answer: 2, explanation: "Opposite of North is South.", difficulty: "Easy" },
  { id: 9, text: "East's opposite direction is:", options: ["North", "South", "West", "East"], answer: 2, explanation: "Opposite of East is West.", difficulty: "Easy" },
  { id: 10, text: "A person walks South and turns right.", options: ["East", "West", "North", "South"], answer: 1, explanation: "Right of South is West.", difficulty: "Easy" },

  // Medium
  { id: 11, text: "A walks 5 km North, then 5 km East. In which direction is he from starting point?", options: ["NW", "NE", "SE", "SW"], answer: 1, explanation: "North then East places him in the North-East (NE) direction.", difficulty: "Medium" },
  { id: 12, text: "A walks 4 km South, then 3 km East. Direction from starting point?", options: ["NE", "NW", "SE", "SW"], answer: 2, explanation: "South then East is South-East (SE).", difficulty: "Medium" },
  { id: 13, text: "A walks 6 km West, then 4 km North. Direction?", options: ["NE", "NW", "SE", "SW"], answer: 1, explanation: "West then North is North-West (NW).", difficulty: "Medium" },
  { id: 14, text: "A walks 10 km North and 10 km South. Distance from starting point?", options: ["20 km", "10 km", "0 km", "5 km"], answer: 2, explanation: "He walked back to the start, so 0 km.", difficulty: "Medium" },
  { id: 15, text: "A walks 3 km East and 4 km North. Shortest distance?", options: ["5 km", "6 km", "7 km", "4 km"], answer: 0, explanation: "Pythagorean theorem: √(3² + 4²) = √25 = 5.", difficulty: "Medium" },
  { id: 16, text: "A walks 5 km South and 12 km East. Shortest distance?", options: ["13 km", "15 km", "17 km", "12 km"], answer: 0, explanation: "Pythagorean theorem: √(5² + 12²) = √169 = 13.", difficulty: "Medium" },
  { id: 17, text: "A faces North, turns right, then right again. Direction?", options: ["East", "West", "South", "North"], answer: 2, explanation: "Right (East), then Right (South).", difficulty: "Medium" },
  { id: 18, text: "A faces East, turns left, then left.", options: ["North", "South", "West", "East"], answer: 2, explanation: "Left (North), then Left (West).", difficulty: "Medium" },
  { id: 19, text: "A walks North → East → South. Final direction from start?", options: ["North", "South", "East", "West"], answer: 2, explanation: "He went North, then East, then back South. He is now directly East of his start.", difficulty: "Medium" },
  { id: 20, text: "A walks West → South → East. Final direction?", options: ["North", "South", "East", "West"], answer: 1, explanation: "He went West, then South, then East. He is now directly South of his start.", difficulty: "Medium" },

  // Hard
  { id: 21, text: "A walks 8 km North, 6 km East. Shortest distance?", options: ["10 km", "12 km", "14 km", "8 km"], answer: 0, explanation: "√(8² + 6²) = √(64 + 36) = √100 = 10.", difficulty: "Hard" },
  { id: 22, text: "A walks 12 km West, 5 km South. Distance?", options: ["13 km", "15 km", "17 km", "10 km"], answer: 0, explanation: "√(12² + 5²) = √169 = 13.", difficulty: "Hard" },
  { id: 23, text: "A walks 10 km North, 10 km East, 10 km South. Where is A from start?", options: ["10 km East", "10 km West", "10 km North", "Starting point"], answer: 0, explanation: "North and South cancel out. He is 10 km East.", difficulty: "Hard" },
  { id: 24, text: "A walks 5 km East, 5 km North, 5 km West. Final position?", options: ["5 km North", "5 km South", "5 km East", "Start"], answer: 0, explanation: "East and West cancel out. He is 5 km North.", difficulty: "Hard" },
  { id: 25, text: "A walks 7 km South, 7 km West, 7 km North. Final position?", options: ["7 km East", "7 km West", "7 km North", "Start"], answer: 1, explanation: "South and North cancel out. He is 7 km West.", difficulty: "Hard" },
  { id: 26, text: "A faces North. Turns 90° clockwise, then 180° anticlockwise. Final direction?", options: ["North", "South", "East", "West"], answer: 3, explanation: "90° CW = East. 180° ACW = West.", difficulty: "Hard" },
  { id: 27, text: "A faces West. Turns 90° clockwise, then 90° clockwise.", options: ["North", "South", "East", "West"], answer: 2, explanation: "90° CW = North. 90° CW = East. (180° total = opposite).", difficulty: "Hard" },
  { id: 28, text: "A walks 6 km North, 8 km East, 6 km South. Distance from start?", options: ["6 km", "8 km", "10 km", "14 km"], answer: 1, explanation: "North and South cancel out. Distance is 8 km.", difficulty: "Hard" },
  { id: 29, text: "A walks 10 km East, 10 km North, 10 km West, 5 km South. Position from start?", options: ["5 km North", "5 km South", "10 km East", "Start"], answer: 0, explanation: "East/West cancel. North 10, South 5 = 5 km North.", difficulty: "Hard" },
  { id: 30, text: "A walks 9 km North, 12 km East, 9 km South. Shortest distance from start?", options: ["9 km", "12 km", "15 km", "21 km"], answer: 1, explanation: "North and South cancel out. Distance is 12 km East.", difficulty: "Hard" }
];
