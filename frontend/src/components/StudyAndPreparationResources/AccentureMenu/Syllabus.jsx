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
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Cognitive/Logical</u></li>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Technical</u></li>
          </ul>

          <p style={{ fontWeight: 'bold', margin: '8px 0' }}>2. Coding Assessment</p>
          <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
            <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Coding/Problem Solving (role-dependent)</u></li>
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
        <p style={{fontStyle: 'italic', marginBottom: '16px'}}>Note: Accenture confirms that assessment content and interviews vary by role.</p>

        {/* Detailed Syllabus Tabs */}
        <div className="csr-curriculum-tabs-container" style={{ borderBottom: '1px solid #e2e8f0', marginBottom: '24px', paddingBottom: '0' }}>
          <div className="csr-curr-tabs" style={{ gap: '0' }}>
            {['Online Assessment', 'Coding Assessment', 'Interviews'].map(tab => (
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
              The Online Assessment covers Cognitive/Logical and Technical sections.
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Cognitive/Logical:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Numerical Ability, Quantitative Aptitude</li>
              <li>Logical and Abstract Reasoning</li>
              <li>Verbal Ability and English comprehension</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Technical:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Pseudocode and flowcharts</li>
              <li>Common applications and MS Office</li>
              <li>Fundamentals of Networking, Security, and Cloud</li>
            </ul>
          </div>
        )}

        {syllabusDetailedTab === 'Coding Assessment' && (
          <div className="csr-curr-content">
            <p className="csr-curr-text">
              The Coding Assessment tests problem-solving abilities and coding proficiency. (Content varies by role).
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Coding/Problem Solving:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Data Structures and Algorithms</li>
              <li>Implementation of core logic in C, C++, Java, or Python</li>
            </ul>
          </div>
        )}

        {syllabusDetailedTab === 'Interviews' && (
          <div className="csr-curr-content">
            <p className="csr-curr-text">
              The Interview stage involves Technical and HR/Behavioral interviews.
            </p>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Technical Interview:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Evaluation of technical skills (Programming, DB, etc.)</li>
              <li>In-depth discussion of academic and personal Projects</li>
            </ul>

            <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>HR/Behavioral Interview:</p>
            <ul className="csr-curr-list bullet-list">
              <li>Communication skills and culture fit</li>
              <li>Behavioral questions (handling challenges, teamwork)</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Syllabus;
