import React, { useState } from 'react';

const Pattern = ({ company, currentYear }) => {
  const [curriculumTab, setCurriculumTab] = useState('Overview');

  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'Fractal Analytics'} Exam Pattern {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">
          {company?.name || 'Fractal Analytics'} Recruitment Process
        </h2>
        <p className="csr-paragraph">
          Are you preparing for <strong>{company?.name || 'Fractal Analytics'} hiring {currentYear}</strong>? This article gives you a detailed breakdown of the hiring process, updated test structure, and pattern to help you succeed.
        </p>

        <h3 className="csr-subsection-title">
          <u>Latest {company?.name || 'Fractal Analytics'} Exam Pattern {currentYear}:</u>
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
              <tr><td>Online Aptitude Test</td><td>Quant + Reasoning + Verbal + Data Analysis</td></tr>
              <tr><td>Technical Test</td><td>SQL + Python/R</td></tr>
              <tr><td>Technical Interview</td><td>Statistics + SQL + Python + ML</td></tr>
              <tr><td>Case Study/Business Round</td><td>Data/business problem solving</td></tr>
              <tr><td>HR/Final</td><td>Behavioral + Communication</td></tr>
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
              <h3 className="csr-curr-subtitle">{company?.name || 'Fractal Analytics'} Rounds Overview:</h3>
              <ol className="csr-curr-list num-list">
                <li><strong>Online Aptitude Test:</strong> Quant + Reasoning + Verbal + Data Analysis</li>
                <li><strong>Technical Test:</strong> SQL + Python/R</li>
                <li><strong>Technical Interview:</strong> Statistics + SQL + Python + ML</li>
                <li><strong>Case Study/Business Round:</strong> Data/business problem solving</li>
                <li><strong>HR/Final:</strong> Behavioral + Communication</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pattern;
