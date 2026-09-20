import React, { useState } from 'react';

const Pattern = ({ company, currentYear }) => {
  const [curriculumTab, setCurriculumTab] = useState('Overview');

  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'Morgan Stanley'} Exam Pattern {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">
          {company?.name || 'Morgan Stanley'} Recruitment Process
        </h2>
        <p className="csr-paragraph">
          Are you preparing for <strong>{company?.name || 'Morgan Stanley'} hiring {currentYear}</strong>? This article gives you a detailed breakdown of the hiring process, updated test structure, and pattern to help you succeed.
        </p>

        <h3 className="csr-subsection-title">
          <u>Latest {company?.name || 'Morgan Stanley'} Exam Pattern {currentYear}:</u>
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
              <tr><td>Online Assessment</td><td>Aptitude + Technical MCQ + Debugging + Coding</td></tr>
              <tr><td>Technical Interview 1</td><td>DSA + Coding + Core CS</td></tr>
              <tr><td>Technical Interview 2</td><td>Advanced Technical + Projects</td></tr>
              <tr><td>HR/Behavioral</td><td>Communication + Fit</td></tr>
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
              <h3 className="csr-curr-subtitle">{company?.name || 'Morgan Stanley'} Rounds Overview:</h3>
              <ol className="csr-curr-list num-list">
                <li><strong>Online Assessment:</strong> Aptitude + Technical MCQ + Debugging + Coding</li>
                <li><strong>Technical Interview 1:</strong> DSA + Coding + Core CS</li>
                <li><strong>Technical Interview 2:</strong> Advanced Technical + Projects</li>
                <li><strong>HR/Behavioral:</strong> Communication + Fit</li>
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
