import React, { useState } from 'react';

const Pattern = ({ company, currentYear }) => {
  const [curriculumTab, setCurriculumTab] = useState('Overview');

  return (
    <div className="csr-content-body">
      <div className="csr-breadcrumbs">
        Home &gt; {company.name} Previous Year Placement Papers {currentYear}
      </div>

      <h1 className="csr-page-title">
        {company.name} Previous Year Placement Papers {currentYear}
      </h1>

      {company.name === 'Cognizant' ? (
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
                  <span className="csr-summary-label">Section (Cluster)</span>
                  <span className="csr-summary-value">3</span>
                </div>
                <div className="csr-summary-icon csr-icon-blue">
                  <span style={{ fontSize: '16px' }}>◩</span>
                </div>
              </div>
              <div className="csr-summary-card">
                <div className="csr-summary-content">
                  <span className="csr-summary-label">Time Duration</span>
                  <span className="csr-summary-value">260 minutes</span>
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
                  <span className="csr-summary-value">2,95,000</span>
                </div>
                <div className="csr-summary-icon csr-icon-red">
                  <span style={{ fontSize: '16px' }}>◩</span>
                </div>
              </div>
              <div className="csr-summary-card">
                <div className="csr-summary-content">
                  <span className="csr-summary-label">Job Openings:</span>
                  <span className="csr-summary-value">16,000</span>
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
                    <th>Round</th>
                    <th>Sections</th>
                    <th>Time</th>
                    <th>Questions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Round 1 - Communication Assessment</td>
                    <td>Reading + Listening + Speaking + Grammar</td>
                    <td>60 mins</td>
                    <td>AI-based tasks</td>
                  </tr>
                  <tr>
                    <td rowSpan="2">Round 2 - Aptitude Assessment</td>
                    <td>Quantitative Aptitude</td>
                    <td>30 mins</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Game-Based Aptitude</td>
                    <td>50 mins</td>
                    <td>4 Games</td>
                  </tr>
                  <tr>
                    <td>Round 3 - Technical Assessment</td>
                    <td>Coding + SQL + Web Scenario + Cloud MCQs</td>
                    <td>120 mins</td>
                    <td>2 Coding + 2 SQL + 1 Task + 10 MCQs</td>
                  </tr>
                  <tr>
                    <td>Round 4 - Technical + HR Interview</td>
                    <td>Combined Interview</td>
                    <td>30-45 mins</td>
                    <td>Q & A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="csr-note">
              <strong>Note:</strong> In the {company.name} Technical Assessment, candidates must choose one cluster and clear Coding + SQL along with a Web scenario and Cloud MCQs within 120 minutes to qualify for the interview.
              <ul className="csr-list">
                <li><strong>Cluster 1 (Java + Web):</strong> Java, SQL, HTML, CSS, JavaScript</li>
                <li><strong>Cluster 2 (Python + Cloud):</strong> Python, SQL, Cloud Fundamentals</li>
                <li><strong>Cluster 3 (C# + Web):</strong> C#, SQL, HTML, CSS, JavaScript</li>
              </ul>
            </div>

            <div className="csr-content-card" style={{ marginTop: '32px', boxShadow: 'none', padding: '0' }}>
              <h2 className="csr-section-title">{company.name} GenC Curriculum</h2>

              {/* Curriculum Tabs */}
              <div className="csr-curriculum-tabs-container">
                {/* <button className="csr-curr-nav-btn">&lt;</button> */}
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
                {/* <button className="csr-curr-nav-btn">&gt;</button> */}
              </div>

              {curriculumTab === 'Overview' && (
                <div className="csr-curr-content">
                  <h3 className="csr-curr-subtitle">{company.name} GenC Exam Pattern Overview:</h3>
                  <p className="csr-curr-text">The {company.name} GenC drive is divided into 4 Steps:</p>
                  <ol className="csr-curr-list num-list">
                    <li>GenC Communication Assessment</li>
                    <li>GenC Aptitude Assessment (Quants + Game Based)</li>
                    <li>GenC Technical Assessment</li>
                    <li>GenC Technical and HR Interview</li>
                  </ol>

                  <h3 className="csr-curr-subheading"><u>Round 1: Communication Assessment:</u></h3>
                  <p className="csr-curr-text">In Round 1 you will be provided with 3 sections (it may vary):</p>
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
                          <td>Reading and Grammar</td>
                          <td>60 mins (shared)</td>
                        </tr>
                        <tr>
                          <td>Comprehension and listening</td>
                          <td>60 mins (shared)</td>
                        </tr>
                        <tr>
                          <td>Speaking</td>
                          <td>60 mins (shared)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="csr-curr-subheading"><u>Round 2 : Quants + Game Based Aptitude Assessment</u></h3>
                  <p className="csr-curr-text">Following are the sections that are asked in the {company.name} GenC Placement Exam Round 2:</p>
                  <ul className="csr-curr-list bullet-list">
                    <li>Quantitative Aptitude</li>
                    <li>Game Based Aptitude</li>
                  </ul>
                  <div className="csr-curr-table-wrapper">
                    <table className="csr-curr-table">
                      <thead>
                        <tr>
                          <th>{company.name} Placement Test</th>
                          <th>Time</th>
                          <th>No. of Questions</th>
                          <th>Difficulty</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Quantitative Aptitude</td>
                          <td>30 Mins</td>
                          <td>30 Q's</td>
                          <td>Medium</td>
                        </tr>
                        <tr>
                          <td>Game Based Aptitude</td>
                          <td>50 Mins</td>
                          <td>4 Games</td>
                          <td>Medium</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="csr-curr-note">
                    <strong>Note:</strong> After clearing Round 2 if you score good marks you will be eligible for Round 3 Technical Test which is termed as <strong>GenC Technical assessment round( Coding Round )</strong> and if you didn't score good marks then you will be <strong>disqualified from the exam.</strong>
                  </p>

                  <h3 className="csr-curr-subheading"><u>Round 3 - Technical Assessment:</u></h3>
                  <p className="csr-curr-text">Technical Assessment of {company.name} GenC is divided into 3 clusters which the student can choose on the basis of <strong>Proficiency in their coding language.</strong></p>
                  <ol className="csr-curr-list num-list">
                    <li><strong>Technical Assessment Cluster 1:</strong> Java, ANSI SQL, HTML, CSS, JavaScript</li>
                    <li><strong>Technical Assessment Cluster 2:</strong> Python, ANSI SQL, Cloud Fundamentals</li>
                    <li><strong>Technical Assessment Cluster 3:</strong> C#, ANSI SQL, HTML, CSS, JavaScript</li>
                  </ol>
                  <p className="csr-curr-note" style={{ marginBottom: '24px' }}>
                    <span style={{ color: 'red', fontWeight: 'bold', textDecoration: 'underline' }}>Note:</span> {company.name} GenC Technical Assessment will have 3 internal sections which will allotted 120 minutes combined(depends on the company).
                  </p>

                  <h3 className="csr-curr-subheading"><u>GenC Interview:</u></h3>
                  <p className="csr-curr-text">In this Interview Round you will be asked question on Technical, Cognitive Abilities and Right Attitude. If you manage to clear this round you will get {company.name} Offer Letter.</p>
                  <ul className="csr-curr-list bullet-list">
                    <li>Salary During Probation-4 Lpa</li>
                  </ul>

                  <p className="csr-curr-text">The different roles and salary packages which are offered by {company.name} are as follows:</p>
                  <ul className="csr-curr-list bullet-list">
                    <li><strong>GenC:</strong> 4 LPA</li>
                    <li><strong>GenC Pro:</strong> 5.4 LPA</li>
                    <li><strong>GenC Next:</strong> 6.75 LPA</li>
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
