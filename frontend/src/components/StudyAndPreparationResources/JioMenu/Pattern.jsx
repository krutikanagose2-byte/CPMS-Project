import React, { useState } from 'react';

const Pattern = ({ company, currentYear }) => {
  const [curriculumTab, setCurriculumTab] = useState('Overview');

  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'Jio'} Exam Pattern {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">
          {company?.name || 'Jio'} Recruitment Process
        </h2>
        <p className="csr-paragraph">
          Are you preparing for <strong>{company?.name || 'Jio'} hiring {currentYear}</strong>? This article gives you a detailed breakdown of the hiring process, updated test structure, and pattern to help you succeed.
        </p>

        <h3 className="csr-subsection-title">
          <u>Latest {company?.name || 'Jio'} Exam Pattern {currentYear}:</u>
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
              <tr><td>Online Aptitude Test</td><td>Numerical + Logical Reasoning + Language</td></tr>
              <tr><td>Technical/Functional Test</td><td>Role-specific technical knowledge</td></tr>
              <tr><td>Interview 1</td><td>Technical/Functional + Problem Solving</td></tr>
              <tr><td>Interview 2</td><td>Technical + Behavioral/Experience</td></tr>
              <tr><td>Final Selection</td><td>Panel feedback + Management approval</td></tr>
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
              <h3 className="csr-curr-subtitle">{company?.name || 'Jio'} Rounds Overview:</h3>
              <ol className="csr-curr-list num-list">
                <li><strong>Online Aptitude Test:</strong> Numerical + Logical Reasoning + Language</li>
                <li><strong>Technical/Functional Test:</strong> Role-specific technical knowledge</li>
                <li><strong>Interview 1:</strong> Technical/Functional + Problem Solving</li>
                <li><strong>Interview 2:</strong> Technical + Behavioral/Experience</li>
                <li><strong>Final Selection:</strong> Panel feedback + Management approval</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pattern;
