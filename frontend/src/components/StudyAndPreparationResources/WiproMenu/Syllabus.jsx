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
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Aptitude/Logical</u></li>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Verbal</u></li>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Technical</u></li>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Coding</u></li>
          </ul>

          <p style={{ fontWeight: 'bold', margin: '8px 0' }}>2. Interviews</p>
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
              The Online Assessment covers Aptitude/Logical Reasoning, Verbal Ability, Technical MCQs, and Coding.
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Aptitude/Logical:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Quantitative Aptitude (Percentages, Profit & Loss, Ratios, Time & Work)</li>
              <li>Logical Reasoning (Blood Relations, Direction Sense, Coding-Decoding)</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Verbal Ability:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Error Detection, Sentence Completion, Reading Comprehension</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Technical:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Data Structures and Algorithms basics</li>
              <li>Object-Oriented Programming (OOP) concepts</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Coding:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Programming logic and implementation</li>
            </ul>
          </div>
        )}

        {syllabusDetailedTab === 'Interviews' && (
          <div className="csr-curr-content">
            <p className="csr-curr-text">
              The Interview stage involves Technical and HR/Managerial interviews.
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Technical Interview:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Technical skills and coding problems</li>
              <li>Questions related to the candidate's Projects</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>HR/Managerial Interview:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Communication and HR questions</li>
              <li>Behavioral and situational questions</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Syllabus;
