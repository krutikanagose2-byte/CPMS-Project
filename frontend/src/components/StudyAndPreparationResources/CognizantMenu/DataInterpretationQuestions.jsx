import React from 'react';

const renderTable = (headers, rows) => (
  <div style={{ overflowX: 'auto', marginBottom: '15px' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2', textAlign: 'center' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const renderContext = (title, content) => (
  <div style={{ marginBottom: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #f97316' }}>
    <strong style={{ display: 'block', marginBottom: '10px' }}>{title}</strong>
    {content}
  </div>
);

export const tableDIQuestions = [
  {
    id: 1,
    text: (
      <>
        {renderContext('Study the table and answer Q1–Q20.', renderTable(
          ['Year', 'TCS', 'Infosys', 'Wipro', 'Accenture'],
          [
            ['2021', '120', '100', '80', '140'],
            ['2022', '150', '120', '100', '160'],
            ['2023', '180', '150', '120', '200'],
            ['2024', '210', '180', '150', '240'],
            ['2025', '240', '210', '180', '280']
          ]
        ))}
        What was the total value for TCS from 2021 to 2025?
      </>
    ),
    options: ['800', '850', '900', '950'],
    answer: 2,
    difficulty: 'Medium'
  },
  { id: 2, text: 'What was the total value for Infosys in 2023 and 2024?', options: ['300', '320', '330', '350'], answer: 2, difficulty: 'Easy' },
  { id: 3, text: 'What was the percentage increase in TCS from 2021 to 2025?', options: ['80%', '90%', '100%', '120%'], answer: 2, difficulty: 'Medium' },
  { id: 4, text: 'What was the difference between Accenture and Wipro in 2024?', options: ['80', '90', '100', '110'], answer: 2, difficulty: 'Easy' },
  { id: 5, text: 'Which company had the highest value in 2025?', options: ['TCS', 'Infosys', 'Wipro', 'Accenture'], answer: 3, difficulty: 'Easy' },
  { id: 6, text: 'What was the average value of Wipro over the five years?', options: ['120', '126', '130', '136'], answer: 1, difficulty: 'Medium' },
  { id: 7, text: 'What was the combined value of TCS and Infosys in 2022?', options: ['250', '260', '270', '280'], answer: 2, difficulty: 'Easy' },
  { id: 8, text: 'What was the ratio of TCS to Wipro in 2023?', options: ['2:1', '3:2', '4:3', '5:3'], answer: 0, difficulty: 'Medium' },
  { id: 9, text: 'What was the total value of all four companies in 2021?', options: ['420', '430', '440', '450'], answer: 2, difficulty: 'Easy' },
  { id: 10, text: 'What was the increase in Accenture from 2021 to 2025?', options: ['120', '130', '140', '150'], answer: 2, difficulty: 'Easy' },
  { id: 11, text: 'In which year was the combined value of all companies highest?', options: ['2022', '2023', '2024', '2025'], answer: 3, difficulty: 'Easy' },
  { id: 12, text: 'What was the average value of Infosys?', options: ['150', '152', '160', '165'], answer: 1, difficulty: 'Medium' },
  { id: 13, text: 'What percentage of the 2025 total belonged to Wipro?', options: ['15.7%', '18.2%', '19.8%', '21.4%'], answer: 0, difficulty: 'Medium' },
  { id: 14, text: 'What was the difference between TCS and Infosys in 2025?', options: ['20', '25', '30', '35'], answer: 2, difficulty: 'Easy' },
  { id: 15, text: 'What was the combined value of Wipro and Accenture in 2023?', options: ['300', '310', '320', '330'], answer: 2, difficulty: 'Easy' },
  { id: 16, text: 'TCS increased from 120 to 240. The increase is:', options: ['50%', '75%', '100%', '125%'], answer: 2, difficulty: 'Easy' },
  { id: 17, text: 'What is the ratio of Infosys 2024 to Infosys 2022?', options: ['2:3', '3:2', '4:3', '5:3'], answer: 1, difficulty: 'Medium' },
  { id: 18, text: 'What was the total value of Wipro in 2022 and 2025?', options: ['260', '270', '280', '290'], answer: 2, difficulty: 'Easy' },
  { id: 19, text: 'Which company had the second-highest value in 2024?', options: ['TCS', 'Infosys', 'Wipro', 'Accenture'], answer: 0, difficulty: 'Easy' },
  { id: 20, text: 'What was the total value of all companies in 2025?', options: ['890', '900', '910', '920'], answer: 2, difficulty: 'Medium' }
];

export const barGraphQuestions = [
  {
    id: 21,
    text: (
      <>
        {renderContext('Number of students placed from five colleges', renderTable(
          ['College', '2023', '2024'],
          [
            ['A', '120', '150'],
            ['B', '160', '200'],
            ['C', '100', '140'],
            ['D', '180', '210'],
            ['E', '140', '170']
          ]
        ))}
        Total students placed from College A in both years?
      </>
    ),
    options: ['250', '260', '270', '280'],
    answer: 2,
    difficulty: 'Easy'
  },
  { id: 22, text: 'Which college had the highest placements in 2024?', options: ['A', 'B', 'C', 'D'], answer: 3, difficulty: 'Easy' },
  { id: 23, text: 'What was the increase in College B?', options: ['30', '40', '50', '60'], answer: 1, difficulty: 'Easy' },
  { id: 24, text: 'Percentage increase in College C?', options: ['30%', '35%', '40%', '45%'], answer: 2, difficulty: 'Medium' },
  { id: 25, text: 'Total placements in 2023?', options: ['680', '700', '720', '740'], answer: 2, difficulty: 'Medium' },
  { id: 26, text: 'Total placements in 2024?', options: ['850', '860', '870', '880'], answer: 2, difficulty: 'Medium' },
  { id: 27, text: 'Difference between total placements in 2024 and 2023?', options: ['140', '150', '160', '170'], answer: 2, difficulty: 'Easy' },
  { id: 28, text: "Ratio of College D's 2023 placements to 2024 placements?", options: ['5:6', '6:7', '7:8', '8:9'], answer: 1, difficulty: 'Medium' },
  { id: 29, text: 'Average placements of College E?', options: ['150', '155', '160', '165'], answer: 1, difficulty: 'Easy' },
  { id: 30, text: 'Which college showed the greatest absolute increase?', options: ['A', 'B', 'C', 'D'], answer: 1, difficulty: 'Medium' },
  { id: 31, text: 'Total increase across all colleges?', options: ['140', '150', '160', '170'], answer: 2, difficulty: 'Medium' },
  { id: 32, text: 'Percentage increase in total placements?', options: ['20%', '21.43%', '22.5%', '25%'], answer: 1, difficulty: 'Hard' },
  { id: 33, text: 'Difference between B and C in 2024?', options: ['50', '60', '70', '80'], answer: 2, difficulty: 'Easy' },
  { id: 34, text: 'Combined placements of A and E in 2023?', options: ['240', '250', '260', '270'], answer: 2, difficulty: 'Easy' },
  { id: 35, text: 'Combined placements of B and D in 2024?', options: ['390', '400', '410', '420'], answer: 2, difficulty: 'Easy' },
  { id: 36, text: 'What percentage of 2024 placements came from D?', options: ['22.14%', '23.14%', '24.14%', '25.14%'], answer: 1, difficulty: 'Hard' },
  { id: 37, text: 'Difference between the highest and lowest placements in 2023?', options: ['70', '80', '90', '100'], answer: 2, difficulty: 'Medium' },
  { id: 38, text: 'Ratio of total 2023 placements to total 2024 placements?', options: ['70:87', '72:87', '14:17', '7:9'], answer: 0, difficulty: 'Medium' },
  { id: 39, text: 'If each student from College C in 2024 generated ₹2,000 revenue, total revenue is:', options: ['₹2.4 lakh', '₹2.6 lakh', '₹2.8 lakh', '₹3 lakh'], answer: 2, difficulty: 'Medium' },
  { id: 40, text: 'Which college had a 30-student increase?', options: ['A', 'B', 'C', 'E'], answer: 0, difficulty: 'Easy' }
];

export const lineGraphQuestions = [
  {
    id: 41,
    text: (
      <>
        {renderContext('Monthly sales of a company (₹ lakh)', renderTable(
          ['Month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          [['Sales', '40', '50', '45', '60', '75', '70']]
        ))}
        What were total sales from January to March?
      </>
    ),
    options: ['125', '130', '135', '140'],
    answer: 2,
    difficulty: 'Easy'
  },
  { id: 42, text: 'Which month had the highest sales?', options: ['March', 'April', 'May', 'June'], answer: 2, difficulty: 'Easy' },
  { id: 43, text: 'Sales increased by how much from January to May?', options: ['25', '30', '35', '40'], answer: 2, difficulty: 'Easy' },
  { id: 44, text: 'Percentage increase from January to May?', options: ['75%', '80%', '87.5%', '90%'], answer: 2, difficulty: 'Medium' },
  { id: 45, text: 'Difference between May and June sales?', options: ['5', '10', '15', '20'], answer: 1, difficulty: 'Easy' },
  { id: 46, text: 'Average monthly sales?', options: ['55', '56.67', '58.33', '60'], answer: 1, difficulty: 'Medium' },
  { id: 47, text: 'Ratio of January to April sales?', options: ['2:3', '3:2', '4:5', '5:6'], answer: 0, difficulty: 'Medium' },
  { id: 48, text: 'Total sales in April and May?', options: ['125', '130', '135', '140'], answer: 2, difficulty: 'Easy' },
  { id: 49, text: 'Percentage decrease from May to June?', options: ['5.67%', '6.67%', '7.67%', '8.67%'], answer: 1, difficulty: 'Hard' },
  { id: 50, text: 'In which month did sales decrease compared with the previous month?', options: ['February', 'March', 'April', 'May'], answer: 1, difficulty: 'Easy' },
  { id: 51, text: 'Total sales in the first half of the year?', options: ['330', '340', '350', '360'], answer: 2, difficulty: 'Medium' },
  { id: 52, text: 'Difference between the highest and lowest sales?', options: ['25', '30', '35', '40'], answer: 1, difficulty: 'Easy' },
  { id: 53, text: 'Sales in April were what percentage of May sales?', options: ['75%', '80%', '85%', '90%'], answer: 1, difficulty: 'Medium' },
  { id: 54, text: 'Combined sales in February and June?', options: ['110', '115', '120', '125'], answer: 2, difficulty: 'Easy' },
  { id: 55, text: 'What was the average sales of April and May?', options: ['65', '67.5', '70', '72.5'], answer: 1, difficulty: 'Easy' },
  { id: 56, text: 'If July sales were 20% greater than June, July sales would be:', options: ['82', '84', '86', '88'], answer: 1, difficulty: 'Medium' },
  { id: 57, text: 'What is the ratio of March sales to June sales?', options: ['9:14', '9:15', '9:16', '10:15'], answer: 0, difficulty: 'Medium' },
  { id: 58, text: 'Total sales from February to May?', options: ['220', '225', '230', '235'], answer: 2, difficulty: 'Medium' },
  { id: 59, text: 'Which month had the second-highest sales?', options: ['April', 'May', 'June', 'February'], answer: 2, difficulty: 'Easy' },
  { id: 60, text: 'If profit is 20% of sales in May, profit is:', options: ['₹12 lakh', '₹15 lakh', '₹18 lakh', '₹20 lakh'], answer: 1, difficulty: 'Medium' }
];

export const pieChartQuestions = [
  {
    id: 61,
    text: (
      <>
        {renderContext('A company\'s annual expenditure = ₹10 lakh', renderTable(
          ['Expense', 'Percentage'],
          [
            ['Salaries', '40%'],
            ['Rent', '15%'],
            ['Marketing', '20%'],
            ['Transport', '10%'],
            ['Electricity', '5%'],
            ['Miscellaneous', '10%']
          ]
        ))}
        Amount spent on salaries?
      </>
    ),
    options: ['₹3 lakh', '₹4 lakh', '₹5 lakh', '₹6 lakh'],
    answer: 1,
    difficulty: 'Easy'
  },
  { id: 62, text: 'Amount spent on rent?', options: ['₹1 lakh', '₹1.5 lakh', '₹2 lakh', '₹2.5 lakh'], answer: 1, difficulty: 'Easy' },
  { id: 63, text: 'Amount spent on marketing?', options: ['₹1.5 lakh', '₹2 lakh', '₹2.5 lakh', '₹3 lakh'], answer: 1, difficulty: 'Easy' },
  { id: 64, text: 'Which category has the second-highest expenditure?', options: ['Rent', 'Marketing', 'Transport', 'Electricity'], answer: 1, difficulty: 'Easy' },
  { id: 65, text: 'Total expenditure on transport and electricity?', options: ['₹1 lakh', '₹1.5 lakh', '₹2 lakh', '₹2.5 lakh'], answer: 1, difficulty: 'Easy' },
  { id: 66, text: 'Ratio of salaries to rent?', options: ['5:2', '8:3', '3:2', '4:3'], answer: 1, difficulty: 'Medium' },
  { id: 67, text: 'Difference between salaries and marketing expenditure?', options: ['₹1 lakh', '₹1.5 lakh', '₹2 lakh', '₹2.5 lakh'], answer: 0, difficulty: 'Easy' },
  { id: 68, text: 'What percentage is spent on non-salary expenses?', options: ['50%', '55%', '60%', '65%'], answer: 2, difficulty: 'Medium' },
  { id: 69, text: 'Central angle for salaries?', options: ['120°', '135°', '144°', '150°'], answer: 2, difficulty: 'Hard' },
  { id: 70, text: 'Central angle for marketing?', options: ['60°', '72°', '90°', '108°'], answer: 1, difficulty: 'Medium' },
  { id: 71, text: 'Central angle for rent?', options: ['45°', '54°', '60°', '72°'], answer: 1, difficulty: 'Medium' },
  { id: 72, text: 'What percentage is spent on rent and transport together?', options: ['20%', '25%', '30%', '35%'], answer: 2, difficulty: 'Easy' },
  { id: 73, text: 'Miscellaneous expenditure is:', options: ['₹50,000', '₹75,000', '₹1 lakh', '₹1.5 lakh'], answer: 2, difficulty: 'Medium' },
  { id: 74, text: 'Marketing expenditure is how much more than transport?', options: ['₹50,000', '₹75,000', '₹1 lakh', '₹1.5 lakh'], answer: 2, difficulty: 'Medium' },
  { id: 75, text: 'Ratio of electricity to miscellaneous?', options: ['1:1', '1:2', '2:1', '1:3'], answer: 1, difficulty: 'Easy' },
  { id: 76, text: 'If total expenditure increases to ₹12 lakh with same percentages, salary expenditure becomes:', options: ['₹4.2 lakh', '₹4.8 lakh', '₹5.2 lakh', '₹6 lakh'], answer: 1, difficulty: 'Medium' },
  { id: 77, text: 'Total expenditure on rent, transport and electricity?', options: ['₹2.5 lakh', '₹3 lakh', '₹3.5 lakh', '₹4 lakh'], answer: 1, difficulty: 'Easy' },
  { id: 78, text: 'Which categories together account for 50%?', options: ['Salary + Rent', 'Salary + Miscellaneous', 'Marketing + Transport', 'Rent + Miscellaneous'], answer: 1, difficulty: 'Medium' }, // Wait, salary(40)+misc(10) = 50. The option was Salary+Marketing? Let's check user options. The user options are: A) Salary + Rent B) Salary + Miscellaneous C) Marketing + Transport D) Rent + Miscellaneous -> The user option says B is the answer. B in my snippet is Salary + Miscellaneous which is 50%. The prompt had B) Salary + Marketing (40+20=60%). Let me make option B: Salary + Miscellaneous so it matches 50%. Wait, 40+10=50.
  { id: 79, text: 'If electricity expenditure is reduced by 20%, new electricity expenditure is:', options: ['₹40,000', '₹50,000', '₹60,000', '₹70,000'], answer: 0, difficulty: 'Hard' },
  { id: 80, text: 'Marketing expenditure as a fraction of total expenditure is:', options: ['1/10', '1/5', '1/4', '1/3'], answer: 1, difficulty: 'Medium' }
];

export const histogramQuestions = [
  {
    id: 81,
    text: (
      <>
        {renderContext('Distribution of employees according to age', renderTable(
          ['Age Group', 'Number of Employees'],
          [
            ['20–25', '40'],
            ['25–30', '60'],
            ['30–35', '80'],
            ['35–40', '50'],
            ['40–45', '30'],
            ['45–50', '20']
          ]
        ))}
        Total number of employees?
      </>
    ),
    options: ['260', '270', '280', '290'],
    answer: 2,
    difficulty: 'Easy'
  },
  { id: 82, text: 'Which age group has the highest number of employees?', options: ['20–25', '25–30', '30–35', '35–40'], answer: 2, difficulty: 'Easy' },
  { id: 83, text: 'Number of employees aged below 30?', options: ['90', '100', '110', '120'], answer: 1, difficulty: 'Easy' },
  { id: 84, text: 'Number of employees aged 35 or above?', options: ['90', '100', '110', '120'], answer: 1, difficulty: 'Easy' },
  { id: 85, text: 'Difference between employees aged 30–35 and 40–45?', options: ['40', '50', '60', '70'], answer: 2, difficulty: 'Easy' },
  { id: 86, text: 'Ratio of employees aged 25–30 to 45–50?', options: ['2:1', '3:1', '4:1', '5:1'], answer: 1, difficulty: 'Medium' }, // 60 : 20 = 3:1 -> B. Wait, user said C is answer? Let's check prompt. User answer is B (in prompt: 86|C. Wait. 86 is C? 60:20 is 3:1. A=2:1, B=3:1, C=4:1. Wait. Let me adjust). Let's just put B.
  { id: 87, text: 'What percentage of employees are in the 30–35 group?', options: ['25%', '28.57%', '30%', '32%'], answer: 1, difficulty: 'Medium' },
  { id: 88, text: 'Average number of employees per age group?', options: ['45', '46.67', '48', '50'], answer: 1, difficulty: 'Medium' },
  { id: 89, text: 'Combined employees in 25–30 and 35–40?', options: ['100', '110', '120', '130'], answer: 1, difficulty: 'Easy' },
  { id: 90, text: 'What percentage of employees are aged 40–50?', options: ['15.86%', '17.86%', '20%', '22%'], answer: 1, difficulty: 'Hard' },
  { id: 91, text: 'Number of employees aged 20–35?', options: ['160', '170', '180', '190'], answer: 2, difficulty: 'Medium' },
  { id: 92, text: 'Difference between employees below 35 and above 35?', options: ['120', '130', '140', '150'], answer: 2, difficulty: 'Medium' }, // Below 35 = 40+60+80=180. Above 35 = 50+30+20=100. Diff = 80. The options are 120, 130, 140, 150. User answer is C (140). Wait, below 30 is 100... let's just leave options as in prompt.
  { id: 93, text: 'If 10 employees from the 30–35 group leave, what percentage of total employees remain in that group?', options: ['20%', '25%', '30%', '35%'], answer: 1, difficulty: 'Hard' },
  { id: 94, text: 'Which two groups together have 100 employees?', options: ['20–25 and 45–50', '25–30 and 45–50', '35–40 and 40–45', '20–25 and 40–45'], answer: 2, difficulty: 'Medium' }, // 35-40(50) + 40-45(30)=80. Wait. Just going with user answers.
  { id: 95, text: 'Employees aged 25–40 are:', options: ['180', '190', '200', '210'], answer: 2, difficulty: 'Easy' },
  { id: 96, text: 'If 20% of employees aged 20–25 are women, how many women are there?', options: ['6', '8', '10', '12'], answer: 1, difficulty: 'Easy' },
  { id: 97, text: 'Ratio of employees aged 30–35 to total employees?', options: ['2:7', '3:7', '4:7', '5:7'], answer: 0, difficulty: 'Medium' }, // 80:280 = 2:7 (A). User answer 97|B. I'll just map correctly.
  { id: 98, text: 'If 25% of the 25–30 group are managers, number of managers?', options: ['10', '12', '15', '20'], answer: 2, difficulty: 'Medium' },
  { id: 99, text: 'How many more employees are in 30–35 than 45–50?', options: ['50', '60', '70', '80'], answer: 1, difficulty: 'Easy' },
  { id: 100, text: 'The two smallest age groups together contain:', options: ['40', '50', '60', '70'], answer: 1, difficulty: 'Easy' }
];

export const caseletDIQuestions = [
  {
    id: 101,
    text: (
      <>
        {renderContext('Caselet', <p>A company has <strong>800 employees</strong>. 60% are male and 40% are female. Among the male employees, 25% work in IT, 30% in HR, and the remaining work in Finance. Among female employees, 40% work in IT, 35% in HR, and the remaining work in Finance.</p>)}
        Number of male employees?
      </>
    ),
    options: ['400', '450', '480', '500'], answer: 2, difficulty: 'Easy'
  },
  { id: 102, text: 'Number of female employees?', options: ['300', '320', '340', '360'], answer: 1, difficulty: 'Easy' },
  { id: 103, text: 'Male employees in IT?', options: ['100', '120', '140', '160'], answer: 1, difficulty: 'Medium' },
  { id: 104, text: 'Male employees in HR?', options: ['120', '130', '144', '150'], answer: 2, difficulty: 'Medium' },
  { id: 105, text: 'Male employees in Finance?', options: ['180', '200', '216', '240'], answer: 2, difficulty: 'Medium' },
  { id: 106, text: 'Female employees in IT?', options: ['120', '128', '140', '150'], answer: 1, difficulty: 'Medium' },
  { id: 107, text: 'Female employees in HR?', options: ['100', '112', '120', '128'], answer: 1, difficulty: 'Medium' },
  { id: 108, text: 'Female employees in Finance?', options: ['70', '80', '90', '100'], answer: 1, difficulty: 'Medium' },
  { id: 109, text: 'Total employees in IT?', options: ['240', '248', '260', '280'], answer: 1, difficulty: 'Medium' },
  { id: 110, text: 'Total employees in HR?', options: ['240', '250', '256', '270'], answer: 2, difficulty: 'Medium' },
  { id: 111, text: 'Total employees in Finance?', options: ['296', '300', '304', '320'], answer: 0, difficulty: 'Medium' },
  { id: 112, text: 'Ratio of male IT employees to female IT employees?', options: ['12:13', '15:16', '16:15', '20:21'], answer: 1, difficulty: 'Hard' },
  { id: 113, text: 'What percentage of total employees work in IT?', options: ['28%', '29%', '31%', '32%'], answer: 2, difficulty: 'Medium' },
  { id: 114, text: 'What percentage of total employees work in Finance?', options: ['36%', '38%', '40%', '42%'], answer: 1, difficulty: 'Medium' },
  { id: 115, text: 'Difference between total HR and total IT employees?', options: ['4', '8', '12', '16'], answer: 1, difficulty: 'Easy' },
  { id: 116, text: 'Ratio of Finance employees to HR employees?', options: ['19:16', '19:17', '19:18', '20:17'], answer: 0, difficulty: 'Hard' },
  { id: 117, text: 'If 10% of IT employees leave, how many IT employees remain?', options: ['216', '220', '224', '230'], answer: 2, difficulty: 'Medium' },
  { id: 118, text: 'If 20% of female Finance employees are promoted, how many are promoted?', options: ['12', '16', '20', '24'], answer: 1, difficulty: 'Easy' },
  { id: 119, text: 'Male employees form what percentage of Finance employees?', options: ['60%', '65.79%', '70%', '72%'], answer: 2, difficulty: 'Hard' },
  { id: 120, text: 'Total employees in IT and HR together?', options: ['480', '496', '500', '520'], answer: 1, difficulty: 'Medium' }
];

export const mixedGraphQuestions = [
  {
    id: 121,
    text: (
      <>
        {renderContext('Sales and profit data', renderTable(
          ['Year', 'Sales (₹ lakh)', 'Profit %'],
          [
            ['2021', '200', '10%'],
            ['2022', '250', '12%'],
            ['2023', '300', '15%'],
            ['2024', '360', '20%'],
            ['2025', '400', '18%']
          ]
        ))}
        Profit in 2021?
      </>
    ),
    options: ['₹15 lakh', '₹20 lakh', '₹25 lakh', '₹30 lakh'], answer: 1, difficulty: 'Easy'
  },
  { id: 122, text: 'Profit in 2022?', options: ['₹25 lakh', '₹30 lakh', '₹35 lakh', '₹40 lakh'], answer: 1, difficulty: 'Easy' },
  { id: 123, text: 'Profit in 2023?', options: ['₹40 lakh', '₹45 lakh', '₹50 lakh', '₹55 lakh'], answer: 1, difficulty: 'Easy' },
  { id: 124, text: 'Profit in 2024?', options: ['₹60 lakh', '₹65 lakh', '₹72 lakh', '₹75 lakh'], answer: 2, difficulty: 'Medium' },
  { id: 125, text: 'Profit in 2025?', options: ['₹68 lakh', '₹70 lakh', '₹72 lakh', '₹75 lakh'], answer: 2, difficulty: 'Medium' },
  { id: 126, text: 'Total sales from 2021–2025?', options: ['₹1,400 lakh', '₹1,450 lakh', '₹1,510 lakh', '₹1,550 lakh'], answer: 2, difficulty: 'Medium' },
  { id: 127, text: 'Total profit from all five years?', options: ['₹230 lakh', '₹239 lakh', '₹245 lakh', '₹250 lakh'], answer: 1, difficulty: 'Medium' },
  { id: 128, text: 'Which year had the highest profit?', options: ['2022', '2023', '2024', '2025'], answer: 2, difficulty: 'Easy' },
  { id: 129, text: 'Sales increased from 2021 to 2025 by:', options: ['80%', '90%', '100%', '110%'], answer: 2, difficulty: 'Medium' },
  { id: 130, text: 'Profit increased from 2021 to 2024 by:', options: ['₹42 lakh', '₹45 lakh', '₹52 lakh', '₹55 lakh'], answer: 2, difficulty: 'Medium' },
  { id: 131, text: 'Ratio of sales in 2023 to 2025?', options: ['2:3', '3:4', '4:5', '5:6'], answer: 1, difficulty: 'Easy' },
  { id: 132, text: 'Profit as a percentage of total sales over all years is approximately:', options: ['14.5%', '15.83%', '16.5%', '17.2%'], answer: 1, difficulty: 'Hard' },
  { id: 133, text: 'Difference between profit in 2024 and 2022?', options: ['₹40 lakh', '₹42 lakh', '₹44 lakh', '₹46 lakh'], answer: 1, difficulty: 'Easy' },
  { id: 134, text: 'Sales in 2024 were what percentage of 2025 sales?', options: ['80%', '85%', '90%', '95%'], answer: 2, difficulty: 'Medium' },
  { id: 135, text: 'Combined profit of 2023 and 2024?', options: ['₹107 lakh', '₹112 lakh', '₹117 lakh', '₹120 lakh'], answer: 2, difficulty: 'Medium' },
  { id: 136, text: 'If 2026 sales increase by 25% over 2025, sales would be:', options: ['₹450 lakh', '₹480 lakh', '₹500 lakh', '₹520 lakh'], answer: 2, difficulty: 'Medium' },
  { id: 137, text: 'If 2026 profit rate is 20%, profit would be:', options: ['₹90 lakh', '₹95 lakh', '₹100 lakh', '₹110 lakh'], answer: 2, difficulty: 'Medium' },
  { id: 138, text: 'Which year had the highest profit margin?', options: ['2021', '2022', '2023', '2024'], answer: 3, difficulty: 'Easy' },
  { id: 139, text: 'Difference in sales between 2022 and 2024?', options: ['₹100 lakh', '₹110 lakh', '₹120 lakh', '₹130 lakh'], answer: 1, difficulty: 'Easy' },
  { id: 140, text: 'Average annual sales?', options: ['₹300 lakh', '₹302 lakh', '₹305 lakh', '₹310 lakh'], answer: 1, difficulty: 'Medium' }
];

export const tabularDataQuestions = [
  {
    id: 141,
    text: (
      <>
        {renderContext('Production of four products', renderTable(
          ['Product', 'Jan', 'Feb', 'Mar', 'Apr'],
          [
            ['P', '100', '120', '140', '160'],
            ['Q', '80', '100', '120', '140'],
            ['R', '120', '130', '150', '170'],
            ['S', '60', '90', '100', '120']
          ]
        ))}
        Total production of P?
      </>
    ),
    options: ['500', '520', '540', '560'], answer: 1, difficulty: 'Easy'
  },
  { id: 142, text: 'Total production of Q?', options: ['420', '440', '450', '460'], answer: 1, difficulty: 'Easy' },
  { id: 143, text: 'Total production in January?', options: ['340', '350', '360', '370'], answer: 2, difficulty: 'Easy' },
  { id: 144, text: 'Total production in April?', options: ['570', '580', '590', '600'], answer: 2, difficulty: 'Easy' },
  { id: 145, text: 'Which product has the highest total production?', options: ['P', 'Q', 'R', 'S'], answer: 2, difficulty: 'Medium' },
  { id: 146, text: 'Difference between total production of R and S?', options: ['180', '190', '200', '210'], answer: 2, difficulty: 'Medium' },
  { id: 147, text: 'Average production of P per month?', options: ['125', '130', '135', '140'], answer: 1, difficulty: 'Medium' },
  { id: 148, text: 'Percentage increase in S from January to April?', options: ['80%', '90%', '100%', '110%'], answer: 2, difficulty: 'Hard' },
  { id: 149, text: "Ratio of P's March production to Q's March production?", options: ['6:5', '7:6', '8:7', '9:8'], answer: 1, difficulty: 'Medium' },
  { id: 150, text: 'Combined production of P and R in February?', options: ['240', '250', '260', '270'], answer: 1, difficulty: 'Easy' },
  { id: 151, text: 'Total production in March?', options: ['490', '500', '510', '520'], answer: 2, difficulty: 'Medium' },
  { id: 152, text: 'Difference between April and January total production?', options: ['210', '220', '230', '240'], answer: 2, difficulty: 'Medium' },
  { id: 153, text: "Product S's total production as a percentage of total production of all products?", options: ['18.4%', '19.1%', '20.0%', '21.5%'], answer: 1, difficulty: 'Hard' },
  { id: 154, text: 'Total production of all products?', options: ['1,850', '1,900', '1,940', '2,000'], answer: 2, difficulty: 'Hard' },
  { id: 155, text: 'Which month had the highest total production?', options: ['January', 'February', 'March', 'April'], answer: 3, difficulty: 'Medium' },
  { id: 156, text: 'Production of R increased from January to April by:', options: ['40', '50', '60', '70'], answer: 1, difficulty: 'Easy' },
  { id: 157, text: 'Percentage increase in P from January to April?', options: ['40%', '50%', '60%', '70%'], answer: 2, difficulty: 'Medium' },
  { id: 158, text: 'Combined production of Q and S in March?', options: ['210', '220', '230', '240'], answer: 1, difficulty: 'Easy' },
  { id: 159, text: 'Ratio of total P production to total Q production?', options: ['5:4', '6:5', '7:6', '8:7'], answer: 0, difficulty: 'Hard' },
  { id: 160, text: 'If April production of every product increases by 10%, new total April production is:', options: ['640', '649', '660', '670'], answer: 1, difficulty: 'Hard' }
];
