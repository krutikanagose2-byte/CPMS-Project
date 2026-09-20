import React, { useState } from 'react';

const Pattern = ({ company, currentYear }) => {
  const [curriculumTab, setCurriculumTab] = useState('Overview');

  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'KPMG'} Exam Pattern {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">
          {company?.name || 'KPMG'} Recruitment Process
        </h2>
        <p className="csr-paragraph">
          Are you preparing for <strong>{company?.name || 'KPMG'} hiring {currentYear}</strong>? This article gives you a detailed breakdown of the hiring process, updated test structure, and pattern to help you succeed.
        </p>

        {/* Summary Grid */}
        <div className="csr-summary-grid">
          <div className="csr-summary-card">
            <div className="csr-summary-content">
              <span className="csr-summary-label">Total Rounds</span>
              <span className="csr-summary-value">1 OA + 1 GD + 2 Interviews</span>
            </div>
            <div className="csr-summary-icon csr-icon-blue">
              <span style={{ fontSize: '16px' }}>◩</span>
            </div>
          </div>
          <div className="csr-summary-card">
            <div className="csr-summary-content">
              <span className="csr-summary-label">Time Duration</span>
              <span className="csr-summary-value">Approx 90 - 120 mins</span>
            </div>
            <div className="csr-summary-icon csr-icon-green">
              <span style={{ fontSize: '16px' }}>◩</span>
            </div>
          </div>
        </div>

        <h3 className="csr-subsection-title">
          <u>Latest {company?.name || 'KPMG'} Exam Pattern {currentYear}:</u>
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
              <tr>
                <td>Online Assessment</td>
                <td>Aptitude + Logical/Verbal + Psychometric</td>
              </tr>
              <tr>
                <td>GD / Case Study</td>
                <td>Communication + Problem Solving</td>
              </tr>
              <tr>
                <td>Technical Interview</td>
                <td>Technical skills + Projects</td>
              </tr>
              <tr>
                <td>HR/Recruiter Interview</td>
                <td>Behavioural + Fit</td>
              </tr>
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
              <h3 className="csr-curr-subtitle">{company?.name || 'KPMG'} Rounds Overview:</h3>
              <ol className="csr-curr-list num-list">
                <li><strong>Online Assessment:</strong> Covers Quantitative Aptitude, Logical Reasoning, Verbal Ability, and Psychometric profiling.</li>
                <li><strong>GD / Case Study:</strong> Evaluates your communication skills, leadership, and problem-solving abilities in a group setting.</li>
                <li><strong>Technical Interview:</strong> Deep dive into your technical domain, coding concepts, core subjects, and academic projects.</li>
                <li><strong>HR/Recruiter Interview:</strong> Final round focusing on cultural fit, behavioral questions, and HR policies.</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pattern;
