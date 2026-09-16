import React, { useState } from 'react';

const Syllabus = ({ company, currentYear }) => {
  const [syllabusDetailedTab, setSyllabusDetailedTab] = useState('Aptitude Section');

  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company.name} Syllabus {currentYear}
      </h1>

      <div className="csr-content-card" style={{ marginBottom: '32px' }}>
        <h2 className="csr-section-title">{company.name} Syllabus for Freshers {currentYear}</h2>

        <h3 className="csr-curr-subheading">{company.name} Online Test Syllabus {currentYear}</h3>

        <div style={{ marginLeft: '16px' }}>
          <p style={{ fontWeight: 'bold', margin: '8px 0' }}>1. Part A: Aptitude Section</p>
          <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Numerical Ability</u></li>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Verbal Ability</u></li>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Reasoning Ability</u></li>
          </ul>

          <p style={{ fontWeight: 'bold', margin: '8px 0' }}>2. Part B: Technical Section</p>
          <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Domain Specific & Reasoning</u></li>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Coding & Problem Solving</u></li>
          </ul>

          <p style={{ fontWeight: 'bold', margin: '8px 0' }}>3. Interview Round</p>
          <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Technical + Managerial + HR Interview</u></li>
          </ul>
        </div>

        <h3 className="csr-curr-subheading">{company.name} Test Syllabus Rounds</h3>

        <div className="csr-curr-table-wrapper">
          <table className="csr-curr-table">
            <thead>
              <tr>
                <th>{company.name} Test Pattern</th>
                <th>Important Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Part A : Aptitude Section</td>
                <td>75 Minutes</td>
              </tr>
              <tr>
                <td>Part B : Technical Section</td>
                <td>90 Minutes</td>
              </tr>
              <tr>
                <td>Total Duration</td>
                <td>165 Minutes</td>
              </tr>
              <tr>
                <td>Negative Marking</td>
                <td>Varies</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontWeight: 'bold', margin: '16px 0 8px 0' }}>Note:</p>
        <ul className="csr-curr-list bullet-list" style={{ marginLeft: '16px' }}>
          <li style={{ color: '#d32f2f', fontWeight: 'bold' }}>Most online assessments are single sitting tests. Both sections must be completed in the given time.</li>
          <li style={{ fontWeight: 'bold' }}>Scores from the advanced sections often decide higher package shortlists.</li>
        </ul>
      </div>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Detailed {company.name} Syllabus and Pattern {currentYear}</h2>

        {/* Detailed Syllabus Tabs */}
        <div className="csr-curriculum-tabs-container" style={{ borderBottom: '1px solid #e2e8f0', marginBottom: '24px', paddingBottom: '0' }}>
          <div className="csr-curr-tabs" style={{ gap: '0' }}>
            {['Aptitude Section', 'Technical Section'].map(tab => (
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

        {syllabusDetailedTab === 'Aptitude Section' && (
          <div className="csr-curr-content">
            <p className="csr-curr-text">
              The Aptitude Section is a mandatory part of the {company.name} test. Good performance in this section clears the path for the base profile. It covers Numerical, Verbal, and Reasoning abilities.
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Numerical Ability Topics:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Number System, LCM & HCF</li>
              <li>Percentages, Profit & Loss, Ratios & Proportions</li>
              <li>Averages, Mixtures & Allegations, Ages</li>
              <li>Time & Work, Speed, Distance, and Time</li>
              <li>Geometry & Mensuration, Probability</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Reasoning Ability Topics:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Blood Relations, Seating Arrangement, Coding-Decoding</li>
              <li>Data Sufficiency, Syllogism</li>
              <li>Visual/Pattern Reasoning, Letter/Number Series</li>
              <li>Statement and Conclusion, Distance and Directions</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Verbal Ability Topics:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Error Detection, Sentence Building, Sentence Completion</li>
              <li>Reading Comprehension, Para jumbles</li>
              <li>Idioms and Phrases, Vocabulary</li>
            </ul>
          </div>
        )}
        {syllabusDetailedTab === 'Technical Section' && (
          <div className="csr-curr-content">
            <p className="csr-curr-text">
              The Technical Section is required for those aiming for the higher packages. This section has a higher difficulty level and demands strong algorithmic problem-solving skills.
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Domain Knowledge & Reasoning:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Computer Fundamentals, OS, DBMS</li>
              <li>Computer Networks, Software Engineering</li>
              <li>Complex seating arrangements, logical puzzles</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Coding & Problem Solving:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Usually 2 programming questions (1 medium, 1 hard)</li>
              <li>Languages allowed: C, C++, Java, Python, Perl</li>
              <li>Topics: Arrays, Strings, Matrices, Data Structures, Algorithms (Sorting, Searching)</li>
              <li>Focus is on optimizing code for all test cases, dealing with time and space complexity</li>
            </ul>
          </div>
        )}
      </div>
      <div className="csr-content-card" style={{ marginTop: '32px' }}>
        <h2 className="csr-section-title">Additional Facts</h2>
        <h3 className="csr-curr-subtitle" style={{ fontSize: '14px' }}>
          Detailed Analysis of {company.name} Syllabus: {company.name} Question Paper Section breakdown
        </h3>

        <div className="csr-curr-table-wrapper">
          <table className="csr-curr-table">
            <thead>
              <tr>
                <th>Sections</th>
                <th>No. Of Questions</th>
                <th>Time</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Part A - Aptitude Section</strong>
                  <ul className="csr-curr-list bullet-list" style={{ marginLeft: '16px', marginTop: '8px', marginBottom: '0' }}>
                    <li>Numerical Ability</li>
                    <li>Verbal Ability</li>
                    <li>Reasoning Ability</li>
                  </ul>
                </td>
                <td>~65</td>
                <td>75 mins</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>
                  <strong>Part B - Technical Section</strong>
                  <ul className="csr-curr-list bullet-list" style={{ marginLeft: '16px', marginTop: '8px', marginBottom: '0' }}>
                    <li>Domain Knowledge & Reasoning</li>
                    <li>Coding</li>
                  </ul>
                </td>
                <td>~22</td>
                <td>90 mins</td>
                <td>High</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="csr-curr-subtitle" style={{ marginTop: '24px' }}>Part A: Aptitude Section</h3>
        <p className="csr-paragraph"><strong>Total Time:</strong> 75 mins</p>

        <div className="csr-graphic-table" style={{ marginTop: '32px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Part</th>
                <th style={{ width: '40%' }}>Sections</th>
                <th style={{ width: '30%' }}>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="3" className="csr-gt-row-span">
                  Aptitude<br />Section
                </td>
                <td style={{ textAlign: 'left', paddingLeft: '24px' }}>
                  <strong>Numerical Ability</strong><br /><span style={{ fontSize: '12px', color: '#64748b' }}>20 Questions</span>
                </td>
                <td>25 Minutes</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', paddingLeft: '24px' }}>
                  <strong>Verbal Ability</strong><br /><span style={{ fontSize: '12px', color: '#64748b' }}>25 Questions</span>
                </td>
                <td>25 Minutes</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', paddingLeft: '24px' }}>
                  <strong>Reasoning Ability</strong><br /><span style={{ fontSize: '12px', color: '#64748b' }}>20 Questions</span>
                </td>
                <td>25 Minutes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="csr-curr-subtitle" style={{ marginTop: '24px' }}>Part B: Technical Section</h3>
        <p className="csr-paragraph"><strong>Total Time:</strong> 90 Mins</p>

        <div className="csr-graphic-table" style={{ marginTop: '32px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Part</th>
                <th style={{ width: '40%' }}>Sections</th>
                <th style={{ width: '30%' }}>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="2" className="csr-gt-row-span">
                  Technical<br />Section
                </td>
                <td style={{ textAlign: 'left', paddingLeft: '24px' }}>
                  <strong>Domain Knowledge & Reasoning</strong><br /><span style={{ fontSize: '12px', color: '#64748b' }}>20 Questions</span>
                </td>
                <td>25 Minutes</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', paddingLeft: '24px' }}>
                  <strong>Coding</strong><br /><span style={{ fontSize: '12px', color: '#64748b' }}>2 Questions</span>
                </td>
                <td>65 Minutes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="csr-curr-subtitle" style={{ marginTop: '24px' }}>Interview Round</h3>
        <p className="csr-paragraph">
          Candidates who clear the online assessment will be called for the interview.
        </p>
        <p className="csr-paragraph" style={{ fontWeight: 'bold' }}>Topics frequently covered in Interviews:</p>
        <ul className="csr-curr-list bullet-list" style={{ marginLeft: '16px' }}>
          <li>Core Programming Concepts (OOPS, DBMS, OS, Computer Networks)</li>
          <li>Final Year Projects & Internships</li>
          <li>Data Structures and Algorithms</li>
          <li>General HR questions, scenario-based questions</li>
        </ul>
      </div>
    </div>
  );
};

export default Syllabus;
