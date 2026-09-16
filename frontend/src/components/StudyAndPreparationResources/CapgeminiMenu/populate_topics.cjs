const fs = require('fs');

const rawData = `
## 1. Game-Based Aptitude — 80 Questions
1. Number Games
2. Memory Games
3. Pattern Recognition
4. Logical Puzzle Games
5. Sequence & Series Games
6. Spatial Reasoning Games
7. Decision-Making Games
8. Strategy Games
9. Probability Games
10. Grid-Based Games
11. Matching & Grouping Games
12. Scheduling Games
13. Optimization Games
14. Reaction & Attention Games
15. Mathematical Games
16. Visual Pattern Games
17. Resource Management Games
18. Path-Finding Games
19. Ranking & Ordering Games
20. Rules-Based Logic Games

## 2. Data Interpretation — 90 Questions
1. Table DI
2. Bar Graph
3. Line Graph
4. Pie Chart
5. Histogram
6. Caselet DI
7. Mixed Graph DI
8. Tabular Data
9. Percentage-Based DI
10. Ratio-Based DI
11. Average-Based DI
12. Profit & Loss DI
13. Time & Work DI
14. Time, Speed & Distance DI
15. Population DI
16. Sales & Revenue DI
17. Production DI
18. Growth & Decline DI
19. Missing Data DI
20. Data Sufficiency
21. Comparison-Based DI
22. Combination of Tables & Graphs
23. Quantitative Data Analysis
24. Approximation-Based DI
25. Data-Based Percentage Change

## 3. Visual Reasoning — 60 Questions
1. Figure Classification
2. Figure Analogy
3. Figure Series
4. Missing Figure
5. Odd Figure Out
6. Mirror Images
7. Water Images
8. Rotation of Figures
9. Paper Folding
10. Paper Cutting
11. Embedded Figures
12. Figure Completion
13. Pattern Completion
14. Shape Matching
15. Visual Counting
16. Cube & Dice
17. 2D to 3D Visualization
18. Spatial Orientation
19. Image Comparison
20. Visual Memory
21. Position & Direction
22. Symmetry
23. Hidden Figures
24. Matrix-Based Figures
25. Shape Transformation

## 4. Psychometric — 50 Questions
1. Personality Traits
2. Introversion & Extroversion
3. Emotional Stability
4. Openness to Experience
5. Conscientiousness
6. Agreeableness
7. Leadership Traits
8. Confidence
9. Adaptability
10. Responsibility
11. Teamwork
12. Communication
13. Time Management
14. Decision Making
15. Problem Solving
16. Stress Management
17. Conflict Management
18. Initiative
19. Accountability
20. Work Ethics
21. Workplace Scenarios
22. Ethical Situations
23. Team Conflicts
24. Leadership Situations
25. Customer Situations
26. Deadline Management
27. Workplace Prioritization
28. Handling Failure
29. Handling Criticism
30. Workplace Decision Making

## 5. Cryptarithmetic — 40 Questions
1. Alphabet-to-Number Coding
2. Number-to-Letter Coding
3. Letter Value Problems
4. Simple Addition Cryptarithms
5. Subtraction Cryptarithms
6. Multiplication Cryptarithms
7. Division Cryptarithms
8. Carry-Based Problems
9. Missing Digit Problems
10. Unique Digit Assignment
11. Alphametic Puzzles
12. Word Addition
13. Word Subtraction
14. Word Multiplication
15. Word Division
16. Base-10 Cryptarithms
17. Constraint-Based Cryptarithms
18. Repeated Letter Problems
19. Leading-Digit Restrictions
20. Multi-Word Cryptarithms

## 6. Essay Writing — 50 Questions
1. Artificial Intelligence
2. Generative AI
3. Impact of Technology on Education
4. Automation and Employment
5. Cybersecurity
6. Social Media and Technology
7. Digital Transformation
8. Future of Technology
9. Online Education
10. Importance of Skill-Based Education
11. Education vs Experience
12. Role of Teachers in Modern Education
13. Examination System
14. Importance of Technical Education
15. Social Media: Boon or Bane
16. Gender Equality
17. Youth and Society
18. Work-Life Balance
19. Mental Health Awareness
20. Importance of Communication
21. Diversity and Inclusion
22. Changing Workplace Culture
23. Climate Change
24. Global Warming
25. Renewable Energy
26. Environmental Pollution
27. Sustainable Development
28. Water Conservation
29. Plastic Pollution
30. Electric Vehicles
31. Startups in India
32. Digital Economy
33. Cashless Economy
34. Entrepreneurship
35. E-commerce
36. Future of Jobs
37. Gig Economy
38. Make in India
39. India as a Global Economy
40. Advantages and Disadvantages of AI
41. Remote Work
42. Leadership
43. Importance of Teamwork
44. Time Management
45. Success and Failure
46. Hard Work vs Smart Work
47. Ethics in the Workplace
48. Importance of Continuous Learning
49. Is Technology Making Us More Productive?
50. Future of Human-AI Collaboration
`;

const mappings = {
  'Game-Based Aptitude': 'GameBasedAptitude',
  'Data Interpretation': 'DataInterpretation',
  'Visual Reasoning': 'VisualReasoning',
  'Psychometric': 'Psychometric',
  'Cryptarithmetic': 'Cryptarithmetic',
  'Essay Writing': 'EssayWriting'
};

const colors = ['blue', 'green', 'purple', 'red', 'orange', 'yellow'];

let currentSection = null;
let currentTotalQs = 0;
const sections = {};

rawData.split('\n').forEach(line => {
  line = line.trim();
  if (line.startsWith('##')) {
    const match = line.match(/## \d+\.\s+([^\—]+)\—\s+(\d+)\s+Questions/);
    if (match) {
      currentSection = match[1].trim();
      currentTotalQs = parseInt(match[2], 10);
      sections[currentSection] = { total: currentTotalQs, topics: [] };
    }
  } else if (line.match(/^\d+\./)) {
    const title = line.replace(/^\d+\.\s*/, '').trim();
    if (currentSection && sections[currentSection]) {
      sections[currentSection].topics.push(title);
    }
  }
});

for (const [sectionName, data] of Object.entries(sections)) {
  const componentName = mappings[sectionName];
  if (!componentName) continue;
  
  const numTopics = data.topics.length;
  const baseQs = Math.floor(data.total / numTopics);
  let remainder = data.total % numTopics;

  const topicsArray = data.topics.map((t, index) => {
    let qs = baseQs;
    if (remainder > 0) {
      qs += 1;
      remainder -= 1;
    }
    return {
      id: index + 1,
      title: t,
      questions: qs,
      color: colors[index % colors.length]
    };
  });

  const arrayString = JSON.stringify(topicsArray, null, 2);
  const jsCode = "const topics = " + arrayString + ";";

  const filePath = componentName + ".jsx";
  let fileContent = fs.readFileSync(filePath, 'utf8');
  fileContent = fileContent.replace('const topics = []; // Placeholder for actual topics', jsCode);
  fs.writeFileSync(filePath, fileContent);
  console.log("Updated " + filePath);
}
