import React, { useState } from 'react';

const Pattern = ({ company, currentYear }) => {
  const [curriculumTab, setCurriculumTab] = useState('Overview');

  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company.name} Previous Year Placement Papers {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">
          {company.name} Question Papers and Previous Year Papers
        </h2>
        <p className="csr-paragraph">
          Are you preparing for <strong>{company.name} hiring {currentYear}</strong> and want to understand the complete <strong>{company.name} exam pattern</strong>? You're in the right place. With most awaited <strong>{company.name} On campus drive underway</strong>, thousands of fresh graduates are aiming to crack the <strong>{company.name} latest hiring {currentYear}</strong> rounds. This article gives you a detailed breakdown of the hiring process, updated test structure, eligibility, and tips to help you succeed.
        </p>
        <p className="csr-paragraph">
          Whether you're targeting aptitude tests, technical rounds, or interviews, this guide will walk you through everything you need to know to land your dream job at {company.name}.
        </p>

        <p className="csr-paragraph">
          <strong>Get to know about Complete {company.name} Recruitment Process: </strong>
        </p>

        {/* Summary Grid */}
        <div className="csr-summary-grid">
          <div className="csr-summary-card">
            <div className="csr-summary-content">
              <span className="csr-summary-label">Total Rounds</span>
              <span className="csr-summary-value">1 OA + 1 Coding + 2 Interviews</span>
            </div>
            <div className="csr-summary-icon csr-icon-blue">
              <span style={{ fontSize: '16px' }}>◩</span>
            </div>
          </div>
          <div className="csr-summary-card">
            <div className="csr-summary-content">
              <span className="csr-summary-label">Time Duration</span>
              <span className="csr-summary-value">120 - 165 minutes</span>
            </div>
            <div className="csr-summary-icon csr-icon-green">
              <span style={{ fontSize: '16px' }}>◩</span>
            </div>
          </div>
          <div className="csr-summary-card">
            <div className="csr-summary-content">
              <span className="csr-summary-label">Type of Exam</span>
              <span className="csr-summary-value">Non-Adaptive / Adaptive</span>
            </div>
            <div className="csr-summary-icon csr-icon-yellow">
              <span style={{ fontSize: '16px' }}>◩</span>
            </div>
          </div>
          <div className="csr-summary-card">
            <div className="csr-summary-content">
              <span className="csr-summary-label">Negative Marking</span>
              <span className="csr-summary-value">Varies</span>
            </div>
            <div className="csr-summary-icon csr-icon-purple">
              <span style={{ fontSize: '16px' }}>◩</span>
            </div>
          </div>
        </div>

        <h3 className="csr-subsection-title">
          <u>Latest {company.name} Exam Pattern {currentYear}:</u>
        </h3>

        <div className="csr-table-responsive">
          <table className="csr-table">
            <thead>
              <tr>
                <th>Part</th>
                <th>Sections</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online Assessment</td>
                <td>Aptitude, Reasoning, Verbal, Technical/Pseudocode, Puzzles</td>
                <td>90 - 100 mins</td>
              </tr>
              <tr>
                <td>Coding Round</td>
                <td>Coding / Programming (role-dependent)</td>
                <td>60 - 90 mins</td>
              </tr>
              <tr>
                <td>Technical Interview</td>
                <td>Programming, DSA, Core CS, Projects</td>
                <td>45 - 60 mins</td>
              </tr>
              <tr>
                <td>HR/Managerial Interview</td>
                <td>Introduction, Communication, Career/Behavioral</td>
                <td>20 - 30 mins</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="csr-content-card" style={{ marginTop: '32px', boxShadow: 'none', padding: '0' }}>
          <h2 className="csr-section-title">{company.name} Recruitment Process</h2>

          {/* Curriculum Tabs */}
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
              <h3 className="csr-curr-subtitle">{company.name} Exam Pattern Overview:</h3>
              <p className="csr-curr-text">The {company.name} hiring process involves the following main rounds:</p>
              <ol className="csr-curr-list num-list">
                <li>Online Assessment</li>
                <li>Coding Round</li>
                <li>Technical Interview</li>
                <li>HR/Managerial Interview</li>
              </ol>

              <h3 className="csr-curr-subheading"><u>Online Assessment:</u></h3>
              <p className="csr-curr-text">Includes sections on Aptitude, Reasoning, Verbal Ability, Technical/Pseudocode, and Puzzles.</p>
              
              <h3 className="csr-curr-subheading"><u>Coding Round:</u></h3>
              <p className="csr-curr-text">Tests programming and logic-building skills, typically role-dependent.</p>
              
              <h3 className="csr-curr-subheading"><u>{company.name} Interviews:</u></h3>
              <p className="csr-curr-text">Technical Interview focuses on Programming, DSA, Core CS subjects, and Projects. The HR/Managerial Interview tests communication, introduction, and career/behavioral aspects.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pattern;
