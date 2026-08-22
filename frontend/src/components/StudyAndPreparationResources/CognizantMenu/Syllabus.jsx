import React, { useState } from 'react';

const Syllabus = ({ company, currentYear }) => {
  const [syllabusDetailedTab, setSyllabusDetailedTab] = useState('Communication Assessment');

  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company.name} Syllabus {currentYear}
      </h1>

      {company.name === 'Cognizant' ? (
        <>
          <div className="csr-content-card" style={{ marginBottom: '32px' }}>
            <h2 className="csr-section-title">{company.name} Syllabus for Freshers {currentYear}</h2>

            <h3 className="csr-curr-subheading">{company.name} Online Test Syllabus {currentYear}</h3>

            <div style={{ marginLeft: '16px' }}>
              <p style={{ fontWeight: 'bold', margin: '8px 0' }}>1. Communication Assessment Round</p>
              <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
                <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Reading</u></li>
                <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Grammar and Comprehension</u></li>
                <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Listening and Speaking</u></li>
              </ul>

              <p style={{ fontWeight: 'bold', margin: '8px 0' }}>2. Quants + Game Based Round</p>
              <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
                <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Quantitative Aptitude</u></li>
                <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Game Based Aptitude</u></li>
              </ul>

              <p style={{ fontWeight: 'bold', margin: '8px 0' }}>3. Technical Assessment (Coding)</p>
              <ul className="csr-curr-list bullet-list" style={{ marginLeft: '24px' }}>
                <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Coding 1</u></li>
                <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Coding 2</u></li>
              </ul>

              <p style={{ fontWeight: 'bold', margin: '8px 0' }}>4. Technical + HR Interview</p>
            </div>

            <h3 className="csr-curr-subheading">{company.name} Test Syllabus Rounds</h3>

            <div className="csr-curr-table-wrapper">
              <table className="csr-curr-table">
                <thead>
                  <tr>
                    <th>{company.name} Test Pattern</th>
                    <th>Important Information</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Round 1 : Communication Assessment</td>
                    <td>60 Minutes</td>
                  </tr>
                  <tr>
                    <td>Round 2 : Quants + Game Based Assessment</td>
                    <td>80 Minutes</td>
                  </tr>
                  <tr>
                    <td>Round 3 : Technical Assessment</td>
                    <td>120 Minutes</td>
                  </tr>
                  <tr>
                    <td>Negative Marking</td>
                    <td>N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ fontWeight: 'bold', margin: '16px 0 8px 0' }}>Note:</p>
            <ul className="csr-curr-list bullet-list" style={{ marginLeft: '16px' }}>
              <li style={{ color: '#d32f2f', fontWeight: 'bold' }}>Communication Round is Elimination Round.</li>
              <li style={{ fontWeight: 'bold' }}>These rounds may vary from zone to zone.</li>
            </ul>
          </div>

          <div className="csr-content-card">
            <h2 className="csr-section-title">Detailed {company.name} Syllabus and Pattern {currentYear}</h2>

            {/* Detailed Syllabus Tabs */}
            <div className="csr-curriculum-tabs-container" style={{ borderBottom: '1px solid #e2e8f0', marginBottom: '24px', paddingBottom: '0' }}>
              <div className="csr-curr-tabs" style={{ gap: '0' }}>
                {['Communication Assessment'].map(tab => (
                  <button
                    key={tab}
                    className={`csr-curr-tab ${syllabusDetailedTab === tab ? 'active' : ''}`}
                    onClick={() => setSyllabusDetailedTab(tab)}
                    style={{
                      borderRadius: '0',
                      borderBottom: syllabusDetailedTab === tab ? '2px solid #0284c7' : '2px solid transparent',
                      padding: '12px 24px',
                      backgroundColor: syllabusDetailedTab === tab ? '#f8fafc' : 'transparent',
                      fontWeight: syllabusDetailedTab === tab ? '600' : '500'
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {syllabusDetailedTab === 'Communication Assessment' && (
              <div className="csr-curr-content">
                <p className="csr-curr-text">
                  Communication Assessment is the first and most critical round in the {company.name} hiring process. It is an AI-based online test designed to check your English understanding, speaking ability, listening skills, and grammar. This round has the strictest cutoff, and a large number of students are eliminated here.
                </p>

                <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Important Details:</p>

                <ul className="csr-curr-list bullet-list">
                  <li><strong>Mode:</strong> Online</li>
                  <li><strong>Total Time:</strong> 60 minutes (shared for all tasks)</li>
                  <li><strong>Evaluation:</strong> AI-based (automated evaluation)</li>
                </ul>

                <p style={{ fontWeight: 'bold', textDecoration: 'underline', margin: '24px 0 12px 0' }}>Sections Included:</p>

                <ul className="csr-curr-list bullet-list">
                  <li><strong>Reading & Listening:</strong> Audio comprehension & passage-based questions</li>
                  <li><strong>Speaking:</strong> Voice recording, sentence narration, topic speaking</li>
                  <li><strong>Grammar:</strong> Fill in the blanks, error correction, sentence formation</li>
                </ul>
              </div>
            )}
            {syllabusDetailedTab !== 'Communication Assessment' && (
              <div className="csr-curr-content">
                <p className="csr-curr-text">Content for {syllabusDetailedTab} will be updated soon.</p>
              </div>
            )}
          </div>
          <div className="csr-content-card" style={{ marginTop: '32px' }}>
            <h2 className="csr-section-title">Additional Facts</h2>
            <h3 className="csr-curr-subtitle" style={{ fontSize: '14px' }}>
              Detailed Analysis of {company.name} GenC Syllabus: {company.name} GenC Question Paper Mandatory Section
            </h3>

            <div className="csr-curr-table-wrapper">
              <table className="csr-curr-table">
                <thead>
                  <tr>
                    <th>Sections</th>
                    <th>No. Of Questions</th>
                    <th>Time</th>
                    <th>Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Round 1 - Communication Round</strong>
                      <ul className="csr-curr-list bullet-list" style={{ marginLeft: '16px', marginTop: '8px', marginBottom: '0' }}>
                        <li>Reading</li>
                        <li>Grammar and Comprehension</li>
                        <li>Listening and Speaking</li>
                      </ul>
                    </td>
                    <td>60</td>
                    <td>60 mins(Shared)</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Round 2 - Aptitude Test</strong>
                      <ul className="csr-curr-list bullet-list" style={{ marginLeft: '16px', marginTop: '8px', marginBottom: '0' }}>
                        <li>Quantitative Aptitude</li>
                        <li>Game Based Aptitude</li>
                      </ul>
                    </td>
                    <td>34</td>
                    <td>80 mins (Shared)</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Round 3 - Coding Assessment</strong>
                    </td>
                    <td>
                      <ul className="csr-curr-list bullet-list" style={{ marginLeft: '16px', marginTop: '8px', marginBottom: '0' }}>
                        <li>2 Coding</li>
                        <li>2 SQL Query</li>
                        <li>1 HTML/CSS Task</li>
                        <li>10 Cloud Computing Based MCQ's</li>
                      </ul>
                    </td>
                    <td>120 mins(Shared)</td>
                    <td>High</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="csr-curr-subtitle" style={{ marginTop: '24px' }}>Round 1: Communication Assessment</h3>
            <ul className="csr-curr-list bullet-list" style={{ marginLeft: '16px' }}>
              <li>Reading and Grammar</li>
              <li>Comprehension and Listening</li>
              <li>Speaking</li>
            </ul>
            <p className="csr-paragraph"><strong>Total Time:</strong> 60 mins</p>

            <div className="csr-graphic-table" style={{ marginTop: '32px' }}>
              <table>
                <thead>
                  <tr>
                    <th style={{ width: '30%' }}>Round</th>
                    <th style={{ width: '40%' }}>Sections</th>
                    <th style={{ width: '30%' }}>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan="3" className="csr-gt-row-span">
                      Communication<br />Assessment
                    </td>
                    <td style={{ textAlign: 'left', paddingLeft: '24px' }}>
                      <strong>Reading</strong><br /><span style={{ fontSize: '12px', color: '#64748b' }}>20 Questions</span>
                    </td>
                    <td>20 Minutes</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'left', paddingLeft: '24px' }}>
                      <strong>Grammar and Comprehension</strong><br /><span style={{ fontSize: '12px', color: '#64748b' }}>20 Questions</span>
                    </td>
                    <td>20 Minutes</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'left', paddingLeft: '24px' }}>
                      <strong>Listening and Speaking</strong><br /><span style={{ fontSize: '12px', color: '#64748b' }}>20 Questions</span>
                    </td>
                    <td>20 Minutes</td>
                  </tr>
                  <tr className="csr-gt-footer-row">
                    <td>Total</td>
                    <td>60 Questions</td>
                    <td>60 Minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="csr-curr-subtitle" style={{ marginTop: '24px' }}>Round 2: Aptitude Assessment</h3>
            <ul className="csr-curr-list bullet-list" style={{ marginLeft: '16px' }}>
              <li>Quantitative Aptitude</li>
              <li>Game Based Aptitude</li>
            </ul>
            <p className="csr-paragraph"><strong>Total Time:</strong> 80 Mins</p>

            <div className="csr-graphic-table" style={{ marginTop: '32px' }}>
              <table>
                <thead>
                  <tr>
                    <th style={{ width: '30%' }}>Round</th>
                    <th style={{ width: '40%' }}>Sections</th>
                    <th style={{ width: '30%' }}>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan="2" className="csr-gt-row-span">
                      Aptitude<br />Assessment
                    </td>
                    <td style={{ textAlign: 'left', paddingLeft: '24px' }}>
                      <strong>Quantitative Aptitude</strong><br /><span style={{ fontSize: '12px', color: '#64748b' }}>30 Questions</span>
                    </td>
                    <td>30 Minutes</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'left', paddingLeft: '24px' }}>
                      <strong>Game Based Questions</strong><br /><span style={{ fontSize: '12px', color: '#64748b' }}>4 Questions</span>
                    </td>
                    <td>50 Minutes</td>
                  </tr>
                  <tr className="csr-gt-footer-row">
                    <td>Total</td>
                    <td>34 Questions</td>
                    <td>80 Minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="csr-curr-subtitle" style={{ marginTop: '24px' }}>Round 3: Technical Assessment</h3>
            <ul className="csr-curr-list bullet-list" style={{ marginLeft: '16px' }}>
              <li>Includes Coding Questions</li>
            </ul>
            <p className="csr-paragraph"><strong>Total Time:</strong> 120 mins</p>
            <p className="csr-paragraph">After clearing Round 3 you will be allowed to give Round 4.</p>

            <h3 className="csr-curr-subtitle" style={{ marginTop: '24px' }}>Round 4 ({company.name} GenC Technical Interview)</h3>
            <p className="csr-paragraph">
              This Round is also termed as GenC Interview Round. As per the information from {company.name}, this time {company.name} is hiring for primarily 3 rounds which are as follows:
            </p>
            <ul className="csr-curr-list bullet-list" style={{ marginLeft: '16px' }}>
              <li><strong>GenC:</strong> Salary Package: 4 LPA</li>
              <li><strong>GenC Pro:</strong> Salary Package: 5.4 LPA</li>
              <li><strong>GenC Next:</strong> Salary package: 6.75 LPA</li>
            </ul>

            <p className="csr-paragraph" style={{ fontWeight: 'bold' }}>Round 4 is basically GenC Interview Technical Round</p>

            <p className="csr-paragraph" style={{ color: '#d32f2f', fontWeight: 'bold' }}>You will be asked question on the topics:</p>
            <ul className="csr-curr-list bullet-list" style={{ marginLeft: '16px' }}>
              <li>Problem Articulation</li>
              <li>Algorithmic Capabilities</li>
              <li>Programming Concepts</li>
              <li>Cognitive Abilities</li>
              <li>Right Attitude</li>
            </ul>
          </div>
        </>
      ) : (
        <div className="csr-content-card" style={{ marginTop: '24px' }}>
          <h2 className="csr-section-title">{company.name} Syllabus</h2>
          <p className="csr-paragraph">The detailed syllabus for {company.name} will be updated soon.</p>
        </div>
      )}
    </div>
  );
};

export default Syllabus;
