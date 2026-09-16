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
              <span className="csr-summary-label">Section (Parts)</span>
              <span className="csr-summary-value">2 (Part A & Part B)</span>
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
                <td rowSpan="3">Part A - Aptitude Section</td>
                <td>Numerical Ability</td>
                <td>25 mins</td>
              </tr>
              <tr>
                <td>Verbal Ability</td>
                <td>25 mins</td>
              </tr>
              <tr>
                <td>Reasoning Ability</td>
                <td>25 mins</td>
              </tr>
              <tr>
                <td rowSpan="2">Part B - Technical Section</td>
                <td>Technical/Domain Knowledge</td>
                <td>30 mins</td>
              </tr>
              <tr>
                <td>Coding</td>
                <td>60 mins</td>
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
              <p className="csr-curr-text">The {company.name} hiring process involves the following steps:</p>
              <ol className="csr-curr-list num-list">
                <li>Online Assessment (Aptitude & Coding)</li>
                <li>Technical Interview</li>
                <li>Managerial / HR Interview</li>
              </ol>

              <h3 className="csr-curr-subheading"><u>Part A: Aptitude Section:</u></h3>
              <p className="csr-curr-text">This section aims at testing basic cognitive and aptitude skills.</p>
              
              <h3 className="csr-curr-subheading"><u>Part B: Technical Section:</u></h3>
              <p className="csr-curr-text">This section tests domain knowledge and programming skills.</p>
              
              <h3 className="csr-curr-subheading"><u>{company.name} Interview:</u></h3>
              <p className="csr-curr-text">In this Interview Round you will be asked questions on your Core Subjects, Projects, HR, and the programming language of your choice. If you clear this, you will get the {company.name} Offer Letter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pattern;
