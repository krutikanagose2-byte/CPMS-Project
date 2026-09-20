import React, { useState } from 'react';

const Pattern = ({ company, currentYear }) => {
  const [curriculumTab, setCurriculumTab] = useState('Overview');

  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'Goldman Sachs'} Exam Pattern {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">
          {company?.name || 'Goldman Sachs'} Recruitment Process
        </h2>
        <p className="csr-paragraph">
          Are you preparing for <strong>{company?.name || 'Goldman Sachs'} hiring {currentYear}</strong>? This article gives you a detailed breakdown of the hiring process, updated test structure, and pattern to help you succeed.
        </p>

        <h3 className="csr-subsection-title">
          <u>Latest {company?.name || 'Goldman Sachs'} Exam Pattern {currentYear}:</u>
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
              <tr><td>Online/Written Test</td><td>Aptitude/Technical (role-dependent) + HackerRank</td></tr>
              <tr><td>Video/First Interview</td><td>Technical + Behavioral</td></tr>
              <tr><td>Final/Superday</td><td>Multiple interviews (2-5 rounds)</td></tr>
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
              <h3 className="csr-curr-subtitle">{company?.name || 'Goldman Sachs'} Rounds Overview:</h3>
              <ol className="csr-curr-list num-list">
                <li><strong>Online/Written Test:</strong> Aptitude/Technical (role-dependent) + HackerRank</li>
                <li><strong>Video/First Interview:</strong> Technical + Behavioral</li>
                <li><strong>Final/Superday:</strong> Multiple interviews (2-5 rounds)</li>
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
