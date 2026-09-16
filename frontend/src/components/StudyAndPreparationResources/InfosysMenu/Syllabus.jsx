import React, { useState } from 'react';

const Syllabus = ({ company, currentYear }) => {
  const [syllabusDetailedTab, setSyllabusDetailedTab] = useState('Online Assessment');

  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company.name} Syllabus {currentYear}
      </h1>

      <div className="csr-content-card" style={{ marginBottom: '32px' }}>
        <h2 className="csr-section-title">{company.name} Syllabus for Freshers {currentYear}</h2>

        <h3 className="csr-curr-subheading">{company.name} Test Syllabus Rounds</h3>

        <div style={{ marginLeft: '16px' }}>
          <p style={{ fontWeight: 'bold', margin: '8px 0' }}>1. Online Assessment</p>
          <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Aptitude, Reasoning, Verbal</u></li>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Technical/Pseudocode & Puzzles</u></li>
          </ul>

          <p style={{ fontWeight: 'bold', margin: '8px 0' }}>2. Coding Round</p>
          <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Role-dependent Coding/Programming</u></li>
          </ul>

          <p style={{ fontWeight: 'bold', margin: '8px 0' }}>3. Interviews</p>
          <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Technical Interview</u></li>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>HR/Managerial Interview</u></li>
          </ul>
        </div>
      </div>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Detailed {company.name} Syllabus and Pattern {currentYear}</h2>

        {/* Detailed Syllabus Tabs */}
        <div className="csr-curriculum-tabs-container" style={{ borderBottom: '1px solid #e2e8f0', marginBottom: '24px', paddingBottom: '0' }}>
          <div className="csr-curr-tabs" style={{ gap: '0' }}>
            {['Online Assessment', 'Coding Round', 'Interviews'].map(tab => (
              <button
                key={tab}
                className={`csr-curr-tab ${syllabusDetailedTab === tab ? 'active' : ''}`}
                onClick={() => setSyllabusDetailedTab(tab)}
                style={{
                  borderRadius: '0',
                  borderBottom: syllabusDetailedTab === tab ? '2px solid #0284c7' : '2px solid transparent',
                  padding: '12px 24px',
                  backgroundColor: syllabusDetailedTab === tab ? '#f8fafc' : 'transparent',
                  fontWeight: syllabusDetailedTab === tab ? '600' : '500'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {syllabusDetailedTab === 'Online Assessment' && (
          <div className="csr-curr-content">
            <p className="csr-curr-text">
              The Online Assessment is the first and mandatory step in the {company.name} hiring process. It covers Aptitude, Reasoning, Verbal, Technical/Pseudocode, and Puzzles.
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Aptitude & Reasoning:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Percentages, Profit & Loss, Ratios & Proportions</li>
              <li>Time & Work, Speed, Distance, and Time</li>
              <li>Blood Relations, Seating Arrangement, Coding-Decoding</li>
              <li>Data Sufficiency, Syllogism</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Verbal Ability:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Error Detection, Sentence Building, Sentence Completion</li>
              <li>Reading Comprehension, Para jumbles</li>
              <li>Idioms and Phrases, Vocabulary</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Technical/Pseudocode & Puzzles:</p>
            <ul className="csr-curr-list bullet-list">
              <li>C / C++ / Java / Python basic concepts</li>
              <li>Predicting output of pseudocode snippets</li>
              <li>Data structures and algorithms basics</li>
              <li>Mathematical and logical puzzles</li>
            </ul>
          </div>
        )}

        {syllabusDetailedTab === 'Coding Round' && (
          <div className="csr-curr-content">
            <p className="csr-curr-text">
              The Coding Round tests your core programming abilities. The difficulty and exact format are role-dependent.
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Coding & Problem Solving:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Languages commonly allowed: C, C++, Java, Python</li>
              <li>Topics: Arrays, Strings, Matrices, Data Structures (Linked Lists, Trees, Graphs)</li>
              <li>Algorithms: Sorting, Searching, Dynamic Programming, Greedy Algorithms</li>
              <li>Focus is on optimizing code for all test cases, with consideration for time and space complexity</li>
            </ul>
          </div>
        )}

        {syllabusDetailedTab === 'Interviews' && (
          <div className="csr-curr-content">
            <p className="csr-curr-text">
              After clearing the initial assessments, candidates face Technical and HR/Managerial interviews.
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Technical Interview:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Programming concepts and problem-solving (live coding may be asked)</li>
              <li>Data Structures and Algorithms (DSA)</li>
              <li>Core CS subjects: DBMS, OS, Computer Networks</li>
              <li>Deep dive into projects and internships mentioned in your resume</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>HR/Managerial Interview:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Self-introduction and background</li>
              <li>Communication skills assessment</li>
              <li>Career goals and alignment with company values</li>
              <li>Behavioral and scenario-based questions (e.g., handling conflicts, teamwork)</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Syllabus;
