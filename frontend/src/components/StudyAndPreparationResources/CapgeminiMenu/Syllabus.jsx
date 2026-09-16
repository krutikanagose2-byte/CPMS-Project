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
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Aptitude</u></li>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Technical</u></li>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Coding/Problem Solving</u></li>
          </ul>

          <p style={{ fontWeight: 'bold', margin: '8px 0' }}>2. Group Discussion (GD)</p>
          <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Only for selected roles/drives</u></li>
          </ul>

          <p style={{ fontWeight: 'bold', margin: '8px 0' }}>3. Interviews</p>
          <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Technical Interview</u></li>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>HR/Behavioral Interview</u></li>
          </ul>
        </div>
      </div>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Detailed {company.name} Syllabus and Pattern {currentYear}</h2>

        {/* Detailed Syllabus Tabs */}
        <div className="csr-curriculum-tabs-container" style={{ borderBottom: '1px solid #e2e8f0', marginBottom: '24px', paddingBottom: '0' }}>
          <div className="csr-curr-tabs" style={{ gap: '0' }}>
            {['Online Assessment', 'Group Discussion', 'Interviews'].map(tab => (
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
              The Online Assessment covers Aptitude, Technical concepts, and Coding/Problem Solving.
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Aptitude:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Quantitative Aptitude, Logical Reasoning, Verbal Ability</li>
              <li>Data Interpretation and Visual Reasoning</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Technical:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Computer Fundamentals, OS, DBMS</li>
              <li>Computer Networks, Software Engineering</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Coding/Problem Solving:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Programming questions focusing on logic-building</li>
              <li>Data Structures and Algorithms basics</li>
            </ul>
          </div>
        )}

        {syllabusDetailedTab === 'Group Discussion' && (
          <div className="csr-curr-content">
            <p className="csr-curr-text">
              Group Discussion (GD) is conducted only for selected roles or specific recruitment drives to test communication skills, teamwork, and thought clarity.
            </p>
          </div>
        )}

        {syllabusDetailedTab === 'Interviews' && (
          <div className="csr-curr-content">
            <p className="csr-curr-text">
              The Interview stage involves Technical and HR/Behavioral interviews.
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Technical Interview:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Technical concepts and problem-solving</li>
              <li>Questions related to the candidate's Projects</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>HR/Behavioral Interview:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Communication and general HR questions</li>
              <li>Behavioral questions (teamwork, leadership, problem-solving under pressure)</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Syllabus;
