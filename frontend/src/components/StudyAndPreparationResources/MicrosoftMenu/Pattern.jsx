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
              <span className="csr-summary-label">Selection Rounds</span>
              <span className="csr-summary-value">1 OA + 4 Interviews</span>
            </div>
            <div className="csr-summary-icon csr-icon-blue">
              <span style={{ fontSize: '16px' }}>◩</span>
            </div>
          </div>
          <div className="csr-summary-card">
            <div className="csr-summary-content">
              <span className="csr-summary-label">OA Duration</span>
              <span className="csr-summary-value">90 - 120 minutes</span>
            </div>
            <div className="csr-summary-icon csr-icon-green">
              <span style={{ fontSize: '16px' }}>◩</span>
            </div>
          </div>
          <div className="csr-summary-card">
            <div className="csr-summary-content">
              <span className="csr-summary-label">Key Focus</span>
              <span className="csr-summary-value">DSA & Problem Solving</span>
            </div>
            <div className="csr-summary-icon csr-icon-yellow">
              <span style={{ fontSize: '16px' }}>◩</span>
            </div>
          </div>
          <div className="csr-summary-card">
            <div className="csr-summary-content">
              <span className="csr-summary-label">Difficulty</span>
              <span className="csr-summary-value">High (LeetCode Medium/Hard)</span>
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
                <td>Online Assessment (OA)</td>
                <td>Aptitude + Coding/DSA</td>
                <td>90 - 120 mins</td>
              </tr>
              <tr>
                <td>Technical Interview 1</td>
                <td>DSA + Coding</td>
                <td>45 - 60 mins</td>
              </tr>
              <tr>
                <td>Technical Interview 2</td>
                <td>DSA + Core CS + Projects</td>
                <td>45 - 60 mins</td>
              </tr>
              <tr>
                <td>Final/Managerial Interview</td>
                <td>Technical + Projects + Problem Solving</td>
                <td>45 - 60 mins</td>
              </tr>
              <tr>
                <td>HR/Behavioral</td>
                <td>Introduction, Teamwork, Microsoft Culture</td>
                <td>30 - 45 mins</td>
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
              <p className="csr-curr-text">The {company.name} hiring process for freshers strictly evaluates problem-solving, data structures, and computer science fundamentals across the following steps:</p>
              <ol className="csr-curr-list num-list">
                <li>Online Assessment (OA) – Aptitude + Coding/DSA</li>
                <li>Technical Interview 1 – DSA + Coding</li>
                <li>Technical Interview 2 – DSA + Core CS + Projects</li>
                <li>Final/Managerial Interview – Technical + Projects + Problem Solving</li>
                <li>HR/Behavioral – Introduction, teamwork, career goals, Microsoft culture</li>
              </ol>

              <h3 className="csr-curr-subheading"><u>Online Assessment (OA):</u></h3>
              <p className="csr-curr-text">Typically consists of a mix of MCQs based on aptitude and CS fundamentals, followed by 2-3 coding questions focusing on Data Structures and Algorithms. The coding questions usually range from LeetCode Easy to Medium-Hard.</p>
              
              <h3 className="csr-curr-subheading"><u>Technical Interviews (1 & 2):</u></h3>
              <p className="csr-curr-text">These rounds are heavily focused on DSA (Arrays, Strings, Trees, Graphs, DP) and writing clean, optimized code on a whiteboard or shared editor. Interviewers will also dive deep into your resume projects and core CS concepts like OS, DBMS, and OOPs.</p>
              
              <h3 className="csr-curr-subheading"><u>Final/Managerial & HR Interviews:</u></h3>
              <p className="csr-curr-text">Expect a mix of high-level system design/technical discussions, deep dives into your past projects, and behavioral questions. Microsoft highly values candidates who demonstrate a Growth Mindset, so expect questions about how you handle failure, teamwork, and resolving conflicts.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pattern;
