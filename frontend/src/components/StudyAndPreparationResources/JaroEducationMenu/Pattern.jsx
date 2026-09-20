import React, { useState } from 'react';

const Pattern = ({ company, currentYear }) => {
  const [curriculumTab, setCurriculumTab] = useState('Overview');

  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'Jaro Education'} Exam Pattern {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">
          {company?.name || 'Jaro Education'} Recruitment Process
        </h2>
        <p className="csr-paragraph">
          Are you preparing for <strong>{company?.name || 'Jaro Education'} hiring {currentYear}</strong>? This article gives you a detailed breakdown of the hiring process, updated test structure, and pattern to help you succeed.
        </p>

        <h3 className="csr-subsection-title">
          <u>Latest {company?.name || 'Jaro Education'} Exam Pattern {currentYear}:</u>
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
              <tr><td>Screening/Online Test</td><td>Aptitude + Communication/Basic Technical</td></tr>
              <tr><td>GD/JAM</td><td>Communication + Group Discussion</td></tr>
              <tr><td>Personal Interview</td><td>Role/Technical + Problem Solving</td></tr>
              <tr><td>HR Interview</td><td>Behaviour + Communication + Fit</td></tr>
              <tr><td>Final Selection</td><td>Final selection process</td></tr>
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
              <h3 className="csr-curr-subtitle">{company?.name || 'Jaro Education'} Rounds Overview:</h3>
              <ol className="csr-curr-list num-list">
                <li><strong>Screening/Online Test:</strong> Aptitude + Communication/Basic Technical</li>
                <li><strong>GD/JAM:</strong> Communication + Group Discussion</li>
                <li><strong>Personal Interview:</strong> Role/Technical + Problem Solving</li>
                <li><strong>HR Interview:</strong> Behaviour + Communication + Fit</li>
                <li><strong>Final Selection:</strong> Final selection process</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pattern;
