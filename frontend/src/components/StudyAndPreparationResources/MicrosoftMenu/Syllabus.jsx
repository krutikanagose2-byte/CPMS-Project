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

        <h3 className="csr-curr-subheading">{company.name} Online Test Syllabus {currentYear}</h3>

        <div style={{ marginLeft: '16px' }}>
          <p style={{ fontWeight: 'bold', margin: '8px 0' }}>1. Online Assessment (OA)</p>
          <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Aptitude</u></li>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Coding & DSA</u></li>
          </ul>

          <p style={{ fontWeight: 'bold', margin: '8px 0' }}>2. Technical Interviews (2 Rounds)</p>
          <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>DSA & Coding</u></li>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Core CS & Projects</u></li>
          </ul>

          <p style={{ fontWeight: 'bold', margin: '8px 0' }}>3. Final/Managerial & HR</p>
          <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Problem Solving, Teamwork, Microsoft Culture</u></li>
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
                <td>Online Assessment (OA)</td>
                <td>90 - 120 Minutes</td>
              </tr>
              <tr>
                <td>Technical Interviews</td>
                <td>45 - 60 Minutes each</td>
              </tr>
              <tr>
                <td>Final/Managerial Interview</td>
                <td>45 - 60 Minutes</td>
              </tr>
              <tr>
                <td>HR/Behavioral</td>
                <td>30 - 45 Minutes</td>
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
            {['Online Assessment', 'Interviews'].map(tab => (
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
              The Online Assessment is the screening round for {company.name}. It tests your logical thinking, core computer science concepts, and practical coding abilities.
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Aptitude & CS Fundamentals:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Quantitative Aptitude and Logical Reasoning</li>
              <li>Operating Systems (OS) and Database Management Systems (DBMS)</li>
              <li>Computer Networks and Object-Oriented Programming (OOPs)</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Coding & DSA:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Arrays, Strings, and Two Pointers</li>
              <li>Linked Lists, Stacks, and Queues</li>
              <li>Trees (Binary Trees, BST) and Graphs</li>
              <li>Dynamic Programming (DP) and Greedy Algorithms</li>
            </ul>
          </div>
        )}
        {syllabusDetailedTab === 'Interviews' && (
          <div className="csr-curr-content">
            <p className="csr-curr-text">
              {company.name} conducts multiple rounds of interviews to thoroughly evaluate a candidate's technical skills and cultural fit.
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Technical Interviews (1 & 2):</p>
            <ul className="csr-curr-list bullet-list">
              <li>Whiteboard or shared-editor coding of complex DSA problems</li>
              <li>Time and space complexity optimization</li>
              <li>Deep-dive into your resume projects and the technologies used</li>
              <li>Core CS concepts and system design basics (for higher roles)</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Managerial & HR Round:</p>
            <ul className="csr-curr-list bullet-list">
              <li>High-level technical problem solving and project discussions</li>
              <li>Behavioral questions (STAR method) - handling conflicts, teamwork</li>
              <li>Questions evaluating the candidate's alignment with Microsoft culture and Growth Mindset</li>
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
                <th>Focus Area</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Online Assessment (OA)</strong>
                </td>
                <td>Aptitude + Coding/DSA</td>
                <td>90 - 120 mins</td>
              </tr>
              <tr>
                <td>
                  <strong>Technical Interview 1</strong>
                </td>
                <td>DSA + Coding</td>
                <td>45 - 60 mins</td>
              </tr>
              <tr>
                <td>
                  <strong>Technical Interview 2</strong>
                </td>
                <td>DSA + Core CS + Projects</td>
                <td>45 - 60 mins</td>
              </tr>
              <tr>
                <td>
                  <strong>Final/Managerial Interview</strong>
                </td>
                <td>Technical + Projects + Problem Solving</td>
                <td>45 - 60 mins</td>
              </tr>
              <tr>
                <td>
                  <strong>HR/Behavioral</strong>
                </td>
                <td>Introduction, Teamwork, Culture</td>
                <td>30 - 45 mins</td>
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
