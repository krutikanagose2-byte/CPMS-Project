import React, { useState } from 'react';

const Pattern = ({ company, currentYear }) => {
  const [curriculumTab, setCurriculumTab] = useState('Overview');

  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'Oracle'} Exam Pattern {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">
          {company?.name || 'Oracle'} Recruitment Process
        </h2>
        <p className="csr-paragraph">
          Are you preparing for <strong>{company?.name || 'Oracle'} hiring {currentYear}</strong>? This article gives you a detailed breakdown of the hiring process, updated test structure, and pattern to help you succeed.
        </p>

        <h3 className="csr-subsection-title">
          <u>Latest {company?.name || 'Oracle'} Exam Pattern {currentYear}:</u>
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
              <tr><td>Online Assessment</td><td>Coding/Technical (role-dependent)</td></tr>
              <tr><td>Technical Interview 1</td><td>DSA + Programming + Core CS</td></tr>
              <tr><td>Technical Interview 2</td><td>Advanced Technical + Projects/Role knowledge</td></tr>
              <tr><td>Behavioral/HR</td><td>Communication + Behavioral</td></tr>
              <tr><td>Final Selection</td><td>Final result</td></tr>
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
              <h3 className="csr-curr-subtitle">{company?.name || 'Oracle'} Rounds Overview:</h3>
              <ol className="csr-curr-list num-list">
                <li><strong>Online Assessment:</strong> Coding/Technical (role-dependent)</li>
                <li><strong>Technical Interview 1:</strong> DSA + Programming + Core CS</li>
                <li><strong>Technical Interview 2:</strong> Advanced Technical + Projects/Role knowledge</li>
                <li><strong>Behavioral/HR:</strong> Communication + Behavioral</li>
                <li><strong>Final Selection:</strong> Final result</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pattern;
