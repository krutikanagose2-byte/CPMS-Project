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
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Role-based assessment</u></li>
          </ul>

          <p style={{ fontWeight: 'bold', margin: '8px 0' }}>2. Technical Assessment</p>
          <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Technical/Coding (role-dependent)</u></li>
          </ul>

          <p style={{ fontWeight: 'bold', margin: '8px 0' }}>3. Interviews</p>
          <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Technical/Managerial Interview</u></li>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>HR/Behavioral Interview</u></li>
          </ul>
        </div>
      </div>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Detailed {company.name} Syllabus and Pattern {currentYear}</h2>

        {/* Detailed Syllabus Tabs */}
        <div className="csr-curriculum-tabs-container" style={{ borderBottom: '1px solid #e2e8f0', marginBottom: '24px', paddingBottom: '0' }}>
          <div className="csr-curr-tabs" style={{ gap: '0' }}>
            {['Online Assessment', 'Technical Assessment', 'Interviews'].map(tab => (
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
              The Online Assessment covers Aptitude/Logical Reasoning and a Role-based assessment.
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Aptitude/Logical:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Quantitative Aptitude</li>
              <li>Logical Reasoning</li>
              <li>Data Interpretation</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Role-based assessment:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Specific questions based on the profile you are applying for (e.g., Cyber, Tax, Audit, Tech)</li>
            </ul>
          </div>
        )}

        {syllabusDetailedTab === 'Technical Assessment' && (
          <div className="csr-curr-content">
            <p className="csr-curr-text">
              The Technical Assessment evaluates your core technical and programming skills. (Content varies by role).
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Technical/Coding:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Programming logic and Data Structures</li>
              <li>Core CS subjects (DBMS, SQL, Networking)</li>
            </ul>
          </div>
        )}

        {syllabusDetailedTab === 'Interviews' && (
          <div className="csr-curr-content">
            <p className="csr-curr-text">
              The Interview stage involves Technical/Managerial and HR/Behavioral interviews.
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Technical/Managerial Interview:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Evaluation of technical skills and problem-solving abilities</li>
              <li>In-depth discussion of academic and personal Projects</li>
              <li>Managerial questions on handling scenarios and leadership potential</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>HR/Behavioral Interview:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Communication skills and culture fit</li>
              <li>Behavioral questions (handling challenges, teamwork, integrity)</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Syllabus;
