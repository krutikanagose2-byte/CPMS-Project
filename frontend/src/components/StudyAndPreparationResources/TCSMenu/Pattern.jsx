import React, { useState } from 'react';

const Pattern = ({ company, currentYear }) => {
  const [curriculumTab, setCurriculumTab] = useState('Overview');

  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company.name} Previous Year Placement Papers {currentYear}
      </h1>

      {company.name === 'TCS' ? (
        <>
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
                  <span className="csr-summary-value">165 minutes</span>
                </div>
                <div className="csr-summary-icon csr-icon-green">
                  <span style={{ fontSize: '16px' }}>◩</span>
                </div>
              </div>
              <div className="csr-summary-card">
                <div className="csr-summary-content">
                  <span className="csr-summary-label">Type of Exam</span>
                  <span className="csr-summary-value">Non-Adaptive</span>
                </div>
                <div className="csr-summary-icon csr-icon-yellow">
                  <span style={{ fontSize: '16px' }}>◩</span>
                </div>
              </div>
              <div className="csr-summary-card">
                <div className="csr-summary-content">
                  <span className="csr-summary-label">Negative Marking</span>
                  <span className="csr-summary-value">No</span>
                </div>
                <div className="csr-summary-icon csr-icon-purple">
                  <span style={{ fontSize: '16px' }}>◩</span>
                </div>
              </div>
              <div className="csr-summary-card">
                <div className="csr-summary-content">
                  <span className="csr-summary-label">Applicants:</span>
                  <span className="csr-summary-value">5,00,000+</span>
                </div>
                <div className="csr-summary-icon csr-icon-red">
                  <span style={{ fontSize: '16px' }}>◩</span>
                </div>
              </div>
              <div className="csr-summary-card">
                <div className="csr-summary-content">
                  <span className="csr-summary-label">Job Openings:</span>
                  <span className="csr-summary-value">40,000+</span>
                </div>
                <div className="csr-summary-icon csr-icon-gray">
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
                    <th>Questions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan="3">Part A - Foundation Section</td>
                    <td>Numerical Ability</td>
                    <td>25 mins</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>Verbal Ability</td>
                    <td>25 mins</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>Reasoning Ability</td>
                    <td>25 mins</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td rowSpan="2">Part B - Advanced Section</td>
                    <td>Advanced Quantitative Ability & Reasoning</td>
                    <td>25 mins</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>Advanced Coding</td>
                    <td>65 mins</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="csr-note">
              <strong>Note:</strong> The TCS NQT assessment is mandatory for all students aiming for Ninja, Digital, or Prime roles. Foundation section determines Ninja role eligibility, whereas doing exceptionally well in the Advanced section makes you eligible for Digital & Prime roles.
            </div>

            <div className="csr-content-card" style={{ marginTop: '32px', boxShadow: 'none', padding: '0' }}>
              <h2 className="csr-section-title">{company.name} NQT Curriculum</h2>

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
                  <h3 className="csr-curr-subtitle">{company.name} NQT Exam Pattern Overview:</h3>
                  <p className="csr-curr-text">The {company.name} hiring process involves the following steps:</p>
                  <ol className="csr-curr-list num-list">
                    <li>TCS NQT Online Assessment (Part A & Part B)</li>
                    <li>Technical Interview</li>
                    <li>Managerial / HR Interview</li>
                  </ol>

                  <h3 className="csr-curr-subheading"><u>Part A: Foundation Section:</u></h3>
                  <p className="csr-curr-text">This section aims at testing basic cognitive and aptitude skills.</p>
                  <div className="csr-curr-table-wrapper">
                    <table className="csr-curr-table">
                      <thead>
                        <tr>
                          <th>Sections</th>
                          <th>Time Allotted</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
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
                      </tbody>
                    </table>
                  </div>

                  <h3 className="csr-curr-subheading"><u>Part B: Advanced Section:</u></h3>
                  <p className="csr-curr-text">Crucial for securing Digital or Prime profiles, this section tests higher-order problem-solving and programming skills.</p>
                  <ul className="csr-curr-list bullet-list">
                    <li>Advanced Quantitative & Reasoning Ability</li>
                    <li>Advanced Coding</li>
                  </ul>
                  <div className="csr-curr-table-wrapper">
                    <table className="csr-curr-table">
                      <thead>
                        <tr>
                          <th>Sections</th>
                          <th>Time</th>
                          <th>Difficulty</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Advanced Quants & Reasoning</td>
                          <td>25 Mins</td>
                          <td>High</td>
                        </tr>
                        <tr>
                          <td>Advanced Coding (2 Qs)</td>
                          <td>65 Mins</td>
                          <td>High</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="csr-curr-subheading"><u>TCS Interview:</u></h3>
                  <p className="csr-curr-text">In this Interview Round you will be asked questions on your Core Subjects, Projects, HR, and the programming language of your choice. If you clear this, you will get the {company.name} Offer Letter.</p>
                  
                  <p className="csr-curr-text">The different roles and salary packages offered by {company.name} are as follows:</p>
                  <ul className="csr-curr-list bullet-list">
                    <li><strong>TCS Ninja:</strong> 3.36 LPA</li>
                    <li><strong>TCS Digital:</strong> 7.0 LPA</li>
                    <li><strong>TCS Prime:</strong> 9.0 LPA</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="csr-content-card" style={{ marginTop: '24px' }}>
          <h2 className="csr-section-title">{company.name} Placement Papers & Resources</h2>
          <p className="csr-paragraph">Detailed study resources and curriculum for {company.name} will be updated soon.</p>
        </div>
      )}
    </div>
  );
};

export default Pattern;
