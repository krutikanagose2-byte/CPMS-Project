import React, { useState } from 'react';

const Pattern = ({ company, currentYear }) => {
  const [curriculumTab, setCurriculumTab] = useState('Overview');

  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'Mu Sigma'} Exam Pattern {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">
          {company?.name || 'Mu Sigma'} Recruitment Process
        </h2>
        <p className="csr-paragraph">
          Are you preparing for <strong>{company?.name || 'Mu Sigma'} hiring {currentYear}</strong>? This article gives you a detailed breakdown of the hiring process, updated test structure, and pattern to help you succeed.
        </p>

        <h3 className="csr-subsection-title">
          <u>Latest {company?.name || 'Mu Sigma'} Exam Pattern {currentYear}:</u>
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
              <tr><td>Aptitude Assessment</td><td>Quant + Logical Reasoning + Verbal</td></tr>
              <tr><td>AI-Bot Interview</td><td>Resume/Projects + Communication/Reasoning</td></tr>
              <tr><td>Case Study / Problem Solving</td><td>Business/Analytical Problem</td></tr>
              <tr><td>Final Interview</td><td>Technical + HR/Behavioral</td></tr>
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
              <h3 className="csr-curr-subtitle">{company?.name || 'Mu Sigma'} Rounds Overview:</h3>
              <ol className="csr-curr-list num-list">
                <li><strong>Aptitude Assessment:</strong> Quant + Logical Reasoning + Verbal</li>
                <li><strong>AI-Bot Interview:</strong> Resume/Projects + Communication/Reasoning</li>
                <li><strong>Case Study / Problem Solving:</strong> Business/Analytical Problem</li>
                <li><strong>Final Interview:</strong> Technical + HR/Behavioral</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pattern;
