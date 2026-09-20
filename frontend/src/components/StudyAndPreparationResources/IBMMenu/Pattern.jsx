import React, { useState } from 'react';

const Pattern = ({ company, currentYear }) => {
  const [curriculumTab, setCurriculumTab] = useState('Overview');

  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'IBM'} Exam Pattern {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">
          {company?.name || 'IBM'} Recruitment Process
        </h2>
        <p className="csr-paragraph">
          Are you preparing for <strong>{company?.name || 'IBM'} hiring {currentYear}</strong>? This article gives you a detailed breakdown of the hiring process, updated test structure, and pattern to help you succeed.
        </p>

        <h3 className="csr-subsection-title">
          <u>Latest {company?.name || 'IBM'} Exam Pattern {currentYear}:</u>
        </h3>

        <div className="csr-table-responsive">
          <table className="csr-table">
            <thead>
              <tr>
                <th>Round</th>
                <th>Focus Areas</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Online/Coding Assessment</td><td>MCQs + Coding (role-dependent)</td></tr>
              <tr><td>Video Assessment</td><td>Interview/Behavioral questions</td></tr>
              <tr><td>English Assessment</td><td>English proficiency</td></tr>
              <tr><td>Technical/Interview Round</td><td>Role-specific technical + Projects</td></tr>
              <tr><td>HR/Final Selection</td><td>Final result</td></tr>
            </tbody>
          </table>
        </div>

        <div className="csr-content-card" style={{ marginTop: '32px', boxShadow: 'none', padding: '0' }}>
          <h2 className="csr-section-title">Detailed Process</h2>

          <div className="csr-curriculum-tabs-container">
            <div className="csr-curr-tabs">
              {['Overview'].map(tab => (
                <button
                  key={tab}
                  className={`csr-curr-tab ${curriculumTab === tab ? 'active' : ''}`}
                  onClick={() => setCurriculumTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {curriculumTab === 'Overview' && (
            <div className="csr-curr-content">
              <h3 className="csr-curr-subtitle">{company?.name || 'IBM'} Rounds Overview:</h3>
              <ol className="csr-curr-list num-list">
                <li><strong>Online/Coding Assessment:</strong> MCQs + Coding (role-dependent)</li>
                <li><strong>Video Assessment:</strong> Interview/Behavioral questions</li>
                <li><strong>English Assessment:</strong> English proficiency</li>
                <li><strong>Technical/Interview Round:</strong> Role-specific technical + Projects</li>
                <li><strong>HR/Final Selection:</strong> Final result</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pattern;
