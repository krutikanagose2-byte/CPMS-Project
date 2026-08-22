import React, { useState, useEffect } from 'react';
import './CompanyStudyResources.css';
import game1 from '../assets/game1.png';
import game2 from '../assets/game2.png';
// import game3 from '../assets/game3.png';

const CompanyStudyResources = ({ company, onBack }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [activeMenu, setActiveMenu] = useState('Home');
  const [curriculumTab, setCurriculumTab] = useState('Overview');
  const [syllabusDetailedTab, setSyllabusDetailedTab] = useState('Communication Assessment');

  // Game Quiz State
  const [activeGameQuiz, setActiveGameQuiz] = useState(null);
  const [expandedExplanations, setExpandedExplanations] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const toggleExplanation = (qId) => {
    setExpandedExplanations(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleOptionSelect = (qId, option) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const geoSudoQuestions = [
    {
      id: 1,
      img: game1,
      options: [
        { text: 'Option a.', percent: '3.86%' },
        { text: 'Option b.', percent: '4.61%' },
        { text: 'Option c.', percent: '89.41%' },
        { text: 'Option d.', percent: '2.13%' }
      ],
      answer: 'Option c.',
      exp: "The missing symbol must complete the geometric pattern without repeating in the row or column."
    },
    {
      id: 2,
      img: game2,
      options: [
        { text: 'Option a.', percent: '15.2%' },
        { text: 'Option b.', percent: '72.5%' },
        { text: 'Option c.', percent: '5.1%' },
        { text: 'Option d.', percent: '7.2%' }
      ],
      answer: 'Option b.',
      exp: "Observing the grid, the square is missing in the 3rd row, 2nd column."
    },
    // {
    //   id: 3,
    //   img: game3,
    //   options: [
    //     { text: 'Option a.', percent: '68.9%' },
    //     { text: 'Option b.', percent: '10.1%' },
    //     { text: 'Option c.', percent: '12.5%' },
    //     { text: 'Option d.', percent: '8.5%' }
    //   ],
    //   answer: 'Option a.',
    //   exp: "The pattern shifts one cell to the right in each subsequent row."
    // },
    // { 
    //   id: 4, 
    //   img: "https://via.placeholder.com/400x400.png?text=GeoSudo+Question+4", 
    //   options: [
    //     { text: 'Option a.', percent: '2.3%' }, 
    //     { text: 'Option b.', percent: '4.1%' }, 
    //     { text: 'Option c.', percent: '91.2%' }, 
    //     { text: 'Option d.', percent: '2.4%' }
    //   ], 
    //   answer: 'Option c.',
    //   exp: "By applying the rules of Sudoku to geometric shapes, the only valid option is c." 
    // }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!company) return null;

  const currentYear = new Date().getFullYear();

  const menuItems = [
    { id: 'Pattern', label: `${company.name} Pattern`, icon: '🧩' },
    { id: 'Syllabus', label: `${company.name} Syllabus`, icon: '📋' },
    { id: 'Communication Assessment', label: 'Communication Assessment', icon: '🗣️' },
    { id: 'Game Based Aptitude', label: 'Game Based Aptitude', icon: '🎮' },
    { id: 'Aptitude', label: 'Aptitude', icon: '🧮' },
    { id: 'Logical Reasoning', label: 'Logical Reasoning', icon: '🧠' },
    { id: 'Verbal Ability', label: 'Verbal Ability', icon: '📝' },
    { id: 'Coding', label: 'Coding', icon: '💻' },
    { id: 'Advanced Coding', label: 'Advanced Coding', icon: '🚀' },
    { id: 'Recruitment Process', label: 'Recruitment Process', icon: '🔄' },
    { id: 'Interview Experience', label: 'Interview Experience', icon: '💬' },
    { id: 'Technical Interview', label: 'Technical Interview', icon: '⚙️' },
    { id: 'HR Interview', label: 'HR Interview Questions', icon: '👥' },
  ];

  return (
    <div className="csr-container">
      {/* Sidebar */}
      <aside className="csr-sidebar">
        <div className="csr-sidebar-header">
          <button className="csr-back-btn" onClick={onBack}>
            ← Back
          </button>
          <h2 className="csr-menu-title">{company.name.toUpperCase()} MENU</h2>
        </div>
        <nav className="csr-menu">
          {menuItems.map(item => (
            <div
              key={item.id}
              className={`csr-menu-item ${activeMenu === item.id ? 'active' : ''}`}
              onClick={() => setActiveMenu(item.id)}
            >
              <span className="csr-menu-icon">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="csr-main">
        {/* Top Tabs */}
        <div className="csr-tabs-wrapper">
          <div className="csr-tabs">
            {['Overview', 'Syllabus', 'Prepare', 'Interview'].map(tab => {
              const isActive = (activeMenu === 'Home' && tab === 'Overview') ||
                (activeMenu === 'Syllabus' && tab === 'Syllabus') ||
                (activeMenu.includes('Interview') && tab === 'Interview') ||
                (!['Home', 'Syllabus'].includes(activeMenu) && !activeMenu.includes('Interview') && tab === 'Prepare');
              return (
                <button
                  key={tab}
                  className={`csr-tab ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(tab);
                    if (tab === 'Overview') setActiveMenu('Home');
                    else if (tab === 'Syllabus') setActiveMenu('Syllabus');
                    else if (tab === 'Interview') setActiveMenu('Technical Interview');
                    else if (tab === 'Prepare') setActiveMenu('Communication Assessment');
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Body */}
        {activeMenu === 'Home' && (
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
        )}

        {/* Syllabus View */}
        {activeMenu === 'Syllabus' && (
          <div className="csr-content-body">
            <div className="csr-breadcrumbs">
              Home &gt; {company.name} Syllabus {currentYear}
            </div>

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
                      <li>Reading</li>
                      <li><u style={{ textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Grammar and Comprehension</u></li>
                      <li>Listening and Speaking</li>
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
                <p className="csr-paragraph">The detailed syllabus and pattern for {company.name} will be updated soon.</p>
              </div>
            )}
          </div>
        )}

        {/* Communication Assessment View */}
        {activeMenu === 'Communication Assessment' && (
          <div className="csr-content-body">
            {company.name === 'Cognizant' ? (
              <>
                <h1 className="csr-page-title" style={{ textAlign: 'center' }}>
                  {company.name} GenC Communication Assessment Test {currentYear}
                </h1>

                <p className="csr-paragraph">
                  Test details of {company.name} GenC Communication Assessment {currentYear} (it may vary)
                </p>

                <div className="csr-curr-table-wrapper" style={{ margin: '24px 0' }}>
                  <table className="csr-curr-table">
                    <thead>
                      <tr>
                        <th>Sections</th>
                        <th>Time Allotted</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Reading</td>
                        <td>60 mins (shared)</td>
                      </tr>
                      <tr>
                        <td>Grammar and Comprehension</td>
                        <td>60 mins (shared)</td>
                      </tr>
                      <tr>
                        <td>Speaking and Listening</td>
                        <td>60 mins (shared)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div style={{ textAlign: 'center', margin: '32px 0' }}>
                  <button className="csr-green-btn">👉 {company.name} GenC Syllabus {currentYear}</button>
                </div>

                <p className="csr-paragraph">
                  Above table denotes that there are 3 sections in {company.name} GenC Communication Assessment Test {currentYear} and the total time allotted for this round is 60 mins. The difficulty of this section is moderate and is highly important section as it happens after aptitude assessment.
                </p>
                <p className="csr-paragraph">
                  If you will clear this round then you will be called for Aptitude + Technical Assessment round.
                </p>

                <h3 className="csr-red-heading" style={{ fontSize: '16px' }}>Evaluation Criteria</h3>
                <p className="csr-paragraph">
                  In the <strong>Speaking and Listening</strong> section, candidates are assessed based on:
                </p>
                <ul className="csr-curr-list bullet-list">
                  <li><strong>Fluency:</strong> The ability to speak smoothly without unnecessary pauses or fillers.</li>
                  <li><strong>Pronunciation:</strong> Correct articulation of words to ensure clarity.</li>
                  <li><strong>Vocabulary:</strong> Use of appropriate and varied words to convey ideas effectively.</li>
                  <li><strong>Sentence Mastery:</strong> Constructing grammatically correct and coherent sentences.</li>
                </ul>
                <p className="csr-paragraph">These criteria are crucial for evaluating a candidate's communication proficiency.</p>

                <h2 className="csr-section-title" style={{ textAlign: 'center', marginTop: '48px', marginBottom: '24px' }}>
                  Communication Assessment Sectional Analysis
                </h2>

                <div className="csr-metrics-grid">
                  <div className="csr-metric">
                    <span className="csr-metric-icon">🗣️</span>
                    <span className="csr-metric-value text-blue">60</span>
                    <span className="csr-metric-label">Total Question</span>
                  </div>
                  <div className="csr-metric">
                    <span className="csr-metric-icon">⏱️</span>
                    <span className="csr-metric-value text-blue">60 minutes</span>
                    <span className="csr-metric-label">Total Time</span>
                  </div>
                  <div className="csr-metric">
                    <span className="csr-metric-icon">📑</span>
                    <span className="csr-metric-value text-blue">1st</span>
                    <span className="csr-metric-label">Round</span>
                  </div>
                  <div className="csr-metric">
                    <span className="csr-metric-icon">⚖️</span>
                    <span className="csr-metric-value text-blue">Moderate</span>
                    <span className="csr-metric-label">Difficulty</span>
                  </div>
                </div>

                <h2 className="csr-section-title" style={{ textAlign: 'center', marginTop: '48px', marginBottom: '24px' }}>
                  {company.name} GenC Communication Assessment Do's & Don'ts
                </h2>

                <div className="csr-dos-donts-grid">
                  <div className="csr-dos-card">
                    <div className="csr-dos-icon">📖</div>
                    <div className="csr-dos-title">Reading</div>

                    <div className="csr-dos-section">
                      <span>Do's</span>
                      <ol className="csr-dos-list">
                        <li>Go through whole paragraph thoroughly.</li>
                        <li>Have a clear idea about each paragraph.</li>
                      </ol>
                    </div>

                    <div className="csr-dos-section">
                      <span>Don'ts</span>
                      <ol className="csr-dos-list">
                        <li>Don't cling to difficult words for too long.</li>
                        <li>Don't be in hurry.</li>
                      </ol>
                    </div>
                  </div>

                  <div className="csr-dos-card">
                    <div className="csr-dos-icon">🧑‍🏫</div>
                    <div className="csr-dos-title">Grammar and Comprehension</div>

                    <div className="csr-dos-section">
                      <span>Do's</span>
                      <ol className="csr-dos-list">
                        <li>Attempt Comprehension part carefully.</li>
                        <li>Have an idea of each comprehension.</li>
                      </ol>
                    </div>

                    <div className="csr-dos-section">
                      <span>Don'ts</span>
                      <ol className="csr-dos-list">
                        <li>Distraction</li>
                        <li>Getting bored</li>
                      </ol>
                    </div>
                  </div>

                  <div className="csr-dos-card">
                    <div className="csr-dos-icon">🗣️</div>
                    <div className="csr-dos-title">Speaking and Listening</div>

                    <div className="csr-dos-section">
                      <span>Do's</span>
                      <ol className="csr-dos-list">
                        <li>Pronounce well.</li>
                        <li>Listen carefully to attempt.</li>
                      </ol>
                    </div>

                    <div className="csr-dos-section">
                      <span>Don'ts</span>
                      <ol className="csr-dos-list">
                        <li>Don't be in hurry.</li>
                        <li>Don't forget to use proper punctuation.</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <h2 className="csr-section-title" style={{ textAlign: 'center', marginTop: '48px', marginBottom: '24px' }}>
                  {company.name} GenC Communication Assessment Test {currentYear}
                </h2>

                <h3 className="csr-red-heading">Reading</h3>
                <p className="csr-paragraph">This is the first section that appears in {company.name} GenC Communication Assessment exam.</p>
                <p className="csr-paragraph">There are few paragraphs in this section and students have to go through the whole paragraph and answer the questions accordingly.</p>
                <p className="csr-paragraph"><strong>Pattern:</strong></p>
                <p className="csr-paragraph">There will be multiple questions one after another, there will be timer in every question, once the time ends the AI will ask you questions and you have to mark the correct answer.</p>
                <p className="csr-paragraph"><strong>Point to remember:</strong></p>
                <ol className="csr-curr-list num-list">
                  <li>Read the sentence/passage thoroughly.</li>
                  <li>Do not stress out because of timer.</li>
                  <li>Do not get confuse with tough words.</li>
                  <li>Answer with proper grammar.</li>
                </ol>

                <h3 className="csr-red-heading">Grammar and Comprehension</h3>
                <p className="csr-paragraph">This is the second section of the {company.name} GenC Communication Assessment, and it requires strong attention to detail. In this section, students must attempt a short paragraph and answer questions that test their understanding of grammar and comprehension.</p>
                <p className="csr-paragraph"><strong>Pattern:</strong></p>
                <ul className="csr-curr-list bullet-list">
                  <li>Attempt the passage, students must answer questions related to grammar, sentence structure, and comprehension.</li>
                </ul>
                <p className="csr-paragraph"><strong>Points to Remember:</strong></p>
                <ul className="csr-curr-list bullet-list">
                  <li>Read attentively to the entire passage.</li>
                  <li>Focus on key grammar rules, such as tense usage, sentence formation, and punctuation.</li>
                  <li>Understand the context of the passage to answer comprehension questions correctly.</li>
                  <li>Avoid distractions and stay focused throughout the passage.</li>
                </ul>

                <h3 className="csr-red-heading">Speaking and Listening</h3>
                <p className="csr-paragraph">This the final section of {company.name} GenC Communication Assessment {currentYear}, where you have to dictate a short essay or passage on provided topics.</p>
                <p className="csr-paragraph"><strong>Pattern:</strong></p>
                <p className="csr-paragraph">There will be a topic on the screen, you will get time to think about that topic and then you have to dictate the whole passage or story based on that topic.</p>
                <p className="csr-paragraph"><strong>Points to remember:</strong></p>
                <ol className="csr-curr-list num-list">
                  <li>Use of proper punctuation.</li>
                  <li>Use of proper grammar.</li>
                  <li>Try not to stammer.</li>
                  <li>Use complete sentences.</li>
                  <li>Try not to complete sentence with question mark.</li>
                </ol>

                <div className="csr-faq">
                  <h2 className="csr-section-title" style={{ textAlign: 'center', marginTop: '48px', marginBottom: '24px' }}>FAQ's</h2>

                  <h4><u>IS THERE ANY NEGATIVE MARKING FOR THIS SECTION?</u></h4>
                  <p>No, there will be no negative marking for {company.name} GenC Communication Assessment Test. You can attempt all the questions but you need to practice well for this round.</p>

                  <h4><u>WHAT IS THE DIFFICULTY LEVEL OF THIS SECTION?</u></h4>
                  <p>This year the difficulty is going to be moderate to high as now they are mostly AI based questions, in which students have to pay extra attention.</p>

                  <h4><u>HOW TO ATTEMPT THIS SECTION?</u></h4>
                  <p>As it will be an non-adaptive section we will advise to attempt wisely, because mostly there will be listening and speaking in which you have to answer in proper grammar, with punctuation. Also, you have to remember what you have read or listened to answer later. So paying attention is most important.</p>
                </div>
              </>
            ) : (
              <div className="csr-content-card" style={{ marginTop: '24px' }}>
                <h2 className="csr-section-title">{company.name} Communication Assessment</h2>
                <p className="csr-paragraph">Details for {company.name} Communication Assessment will be updated soon.</p>
              </div>
            )}
          </div>
        )}

        {/* Game Based Aptitude View */}
        {activeMenu === 'Game Based Aptitude' && (
          <div className="csr-content-body">
            {company.name === 'Cognizant' ? (
              <>
                <div className="csr-breadcrumbs">
                  Home &gt; {company.name} GenC Previous Year Placement Papers {currentYear} &gt; {company.name} GenC Game Based Aptitude Questions with Solutions {currentYear}
                </div>

                <h1 className="csr-page-title">
                  {company.name} GenC Game Based Aptitude Questions with Solutions {currentYear}
                </h1>

                <div className="csr-content-card">
                  <h2 className="csr-section-title">{company.name} GenC Game Based Cognitive Assessment</h2>
                  <p className="csr-paragraph">
                    <strong>Think You Can Outsmart the Game?</strong> Welcome to the new age hiring twist, <strong>{company.name} GenC Game Based Aptitude {currentYear}</strong> is more than just a test, it's a challenge of your logic, speed, and strategy.
                  </p>
                  <p className="csr-paragraph">
                    As part of the {company.name} latest hiring {currentYear}, this gamified round is designed to evaluate how you think under pressure in a fun, interactive way. If you're preparing for {company.name} GenC hiring {currentYear}, mastering this round is very important.
                  </p>

                  <div className="csr-curr-table-wrapper" style={{ margin: '24px 0' }}>
                    <table className="csr-curr-table">
                      <thead>
                        <tr>
                          <th style={{ textDecoration: 'underline' }}>{company.name} Game Round</th>
                          <th style={{ textDecoration: 'underline' }}>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Number of Games</strong></td>
                          <td>4 Games out of 24</td>
                        </tr>
                        <tr>
                          <td><strong>Time duration</strong></td>
                          <td>50 Minutes</td>
                        </tr>
                        <tr>
                          <td><strong>Importance</strong></td>
                          <td>High</td>
                        </tr>
                        <tr>
                          <td><strong>Difficulty</strong></td>
                          <td>Moderate</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="csr-stats-grid">
                  <div className="csr-stat-card">
                    <div className="csr-stat-info">
                      <span className="csr-stat-label">Games</span>
                      <span className="csr-stat-value">4</span>
                    </div>
                    <div className="csr-stat-icon csr-icon-blue-bg">🎮</div>
                  </div>
                  <div className="csr-stat-card">
                    <div className="csr-stat-info">
                      <span className="csr-stat-label">Time Duration</span>
                      <span className="csr-stat-value">50 mins</span>
                    </div>
                    <div className="csr-stat-icon csr-icon-green-bg">⏱️</div>
                  </div>
                  <div className="csr-stat-card">
                    <div className="csr-stat-info">
                      <span className="csr-stat-label">Adaptive/ Non-Adaptive</span>
                      <span className="csr-stat-value">Adaptive</span>
                    </div>
                    <div className="csr-stat-icon csr-icon-yellow-bg">🔄</div>
                  </div>
                </div>

                <div className="csr-stats-grid-row-2">
                  <div className="csr-stat-card" style={{ gridColumn: '1 / span 1' }}>
                    <div className="csr-stat-info">
                      <span className="csr-stat-label">Negative marking</span>
                      <span className="csr-stat-value">No</span>
                    </div>
                    <div className="csr-stat-icon csr-icon-purple-bg">➖</div>
                  </div>
                </div>

                <div className="csr-content-card" style={{ marginTop: '32px' }}>
                  <h2 className="csr-section-title">{company.name} GenC Game Based Aptitude Round Syllabus {currentYear}</h2>
                  <h3 className="csr-curr-subtitle" style={{ margin: '24px 0 16px 0' }}>Updated {company.name} GenC Game Based Test Pattern</h3>

                  <p className="csr-paragraph">
                    {company.name} GenC Game based Aptitude - This round is designed to test your multitasking abilities and decision-making skills. There are a total of 24 games, and the system will randomly select 4 games for you to play. Your goal is to complete these games with maximum accuracy and speed, while making as few mistakes as possible.
                  </p>

                  <p className="csr-paragraph" style={{ fontWeight: 'bold' }}>You will be evaluated based on the following key skills:</p>
                  <ul className="csr-curr-list bullet-list">
                    <li>Decision Making</li>
                    <li>Accuracy</li>
                    <li>Speed</li>
                    <li>Memory Power</li>
                  </ul>

                  <p className="csr-paragraph">
                    Out of the 24 games in the {company.name} GenC Game-Based Round, we've created preparation material for several of them to help you practice effectively. But before you start practicing, we recommend checking out our Game Tutorials Page. It will give you a clear understanding of how each game works and the best way to approach them.
                  </p>

                  <p className="csr-paragraph">Here are some of the games you might come across in the GenC Game Based Round:</p>
                  <ul className="csr-curr-list bullet-list">
                    <li>Deductive Logical Thinking(Geo-Sudo)</li>
                    <li>Inductive-logical Thinking</li>
                    <li>Grid Challenge</li>
                    <li>Motion Challenge</li>
                    <li>Switch Challenge</li>
                    <li>Digit Challenge</li>
                  </ul>

                  <div style={{ textAlign: 'center', margin: '32px 0 16px 0' }}>
                    <button className="csr-green-btn" style={{ borderRadius: '24px', textDecoration: 'underline' }}>
                      {company.name} GenC Game Based Tutorial
                    </button>
                  </div>
                </div>

                <div className="csr-content-card" style={{ marginTop: '32px' }}>
                  <h2 className="csr-section-title">{company.name} GenC Game Topics Analytics {currentYear}</h2>

                  <p className="csr-paragraph">
                    {company.name} GenC Game based Aptitude - Below we have mentioned some of the games that you may come across in this section. Here we have mentioned a few of the games only, you can buy our Prime Video Course where we have explained all the 24 games along with their rules and tips to solve them.
                  </p>
                  <p className="csr-paragraph">
                    Before you start solving these games, please visit our Games page, where we have explained each game in detail, so that you don't make silly mistakes in these games.
                  </p>

                  <div style={{ textAlign: 'center', margin: '24px 0' }}>
                    <button className="csr-green-btn" style={{ borderRadius: '24px', textDecoration: 'underline' }}>Rules for Game Based Test</button>
                  </div>

                  <div className="csr-curr-table-wrapper" style={{ margin: '32px 0' }}>
                    <table className="csr-curr-table">
                      <thead>
                        <tr>
                          <th>Game</th>
                          <th>Type of Questions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Deductive-Logical Thinking (GeoStudio Challenge)</td>
                          <td>Find a missing symbol based in a 4x4 or 5x5 grid based on Geometrical Sudoku.</td>
                        </tr>
                        <tr>
                          <td>Inductive-Logical Reasoning (Spacio Challenge)</td>
                          <td>Visual reasoning-based questions where you're supposed to find a pair of figures that follow the same rule as given by a pair in question.</td>
                        </tr>
                        <tr>
                          <td>Grid Challenge</td>
                          <td>Ability to focus and multitask is tested. You need to do the following simultaneously:<br />1. Checking if two grids are identical<br />2. Remembering position of coordinates in a grid</td>
                        </tr>
                        <tr>
                          <td>Motion Challenge</td>
                          <td>Your ability to plan ahead is measured. Has puzzles where you have to find a path between two points in the maze, in fewer steps as possible.</td>
                        </tr>
                        <tr>
                          <td>Switch Challenge</td>
                          <td>Sequence of geometrical shapes go through a switch containing a code. This code changes the order of shapes. You're supposed to find the correct code as per input-output.</td>
                        </tr>
                        <tr>
                          <td>Digit Challenge</td>
                          <td>A mathematical operation needs to be solved by using a few available digits only once.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Challenge Cards */}
                  <div className="csr-challenges-grid">
                    <div className="csr-challenge-card">
                      <div className="csr-challenge-info">
                        <h4 className="csr-challenge-title">Digit Challenge</h4>
                        <div className="csr-progress-bar-container">
                          <span className="csr-progress-text">0%</span>
                          <div className="csr-progress-track">
                            <div className="csr-progress-fill"></div>
                          </div>
                        </div>
                      </div>
                      <button className="csr-start-btn">Start →</button>
                    </div>

                    <div className="csr-challenge-card">
                      <div className="csr-challenge-info">
                        <h4 className="csr-challenge-title">Switch Challenge</h4>
                        <div className="csr-progress-bar-container">
                          <span className="csr-progress-text">0%</span>
                          <div className="csr-progress-track">
                            <div className="csr-progress-fill"></div>
                          </div>
                        </div>
                      </div>
                      <button className="csr-start-btn">Start →</button>
                    </div>

                    <div className="csr-challenge-card">
                      <div className="csr-challenge-info">
                        <h4 className="csr-challenge-title">Inductive Logical Reasoning</h4>
                        <div className="csr-progress-bar-container">
                          <span className="csr-progress-text">0%</span>
                          <div className="csr-progress-track">
                            <div className="csr-progress-fill"></div>
                          </div>
                        </div>
                      </div>
                      <button className="csr-start-btn">Start →</button>
                    </div>

                    <div className="csr-challenge-card">
                      <div className="csr-challenge-info">
                        <h4 className="csr-challenge-title">GeoSudo</h4>
                        <div className="csr-progress-bar-container">
                          <span className="csr-progress-text">0%</span>
                          <div className="csr-progress-track">
                            <div className="csr-progress-fill"></div>
                          </div>
                        </div>
                      </div>
                      <button className="csr-start-btn">Start →</button>
                    </div>

                    <div className="csr-challenge-card">
                      <div className="csr-challenge-info">
                        <h4 className="csr-challenge-title">Oddo Challenge</h4>
                        <div className="csr-progress-bar-container">
                          <span className="csr-progress-text">0%</span>
                          <div className="csr-progress-track">
                            <div className="csr-progress-fill"></div>
                          </div>
                        </div>
                      </div>
                      <button className="csr-start-btn">Start →</button>
                    </div>

                    <div className="csr-challenge-card">
                      <div className="csr-challenge-info">
                        <h4 className="csr-challenge-title">Motion Challenge</h4>
                        <div className="csr-progress-bar-container">
                          <span className="csr-progress-text">0%</span>
                          <div className="csr-progress-track">
                            <div className="csr-progress-fill"></div>
                          </div>
                        </div>
                      </div>
                      <button className="csr-start-btn">Start →</button>
                    </div>
                  </div>

                  {/* Practice Questions Shown Directly Below */}
                  <div className="csr-quiz-container">
                    <div className="csr-quiz-header">
                      <h2 className="csr-section-title" style={{ margin: 0 }}>GeoSudo Practice Questions</h2>
                    </div>

                    {geoSudoQuestions.map((q, index) => {
                      const hasAnswered = !!selectedAnswers[q.id];
                      const isCorrectAnswer = hasAnswered && selectedAnswers[q.id] === q.answer;

                      return (
                        <div key={q.id}>
                          <div className="csr-question-block">
                            <div className="csr-question-top">
                              <div className="csr-question-image-frame">
                                <img src={q.img} alt={`Question ${q.id}`} />
                              </div>
                            </div>

                            <div className="csr-options-grid">
                              {q.options.map((opt, i) => {
                                const isThisOptionSelected = selectedAnswers[q.id] === opt.text;
                                const isThisOptionCorrect = opt.text === q.answer;

                                let optionClass = "csr-option-label";
                                if (hasAnswered) {
                                  optionClass += " answered";
                                  if (isThisOptionCorrect) optionClass += " correct";
                                  else if (isThisOptionSelected) optionClass += " incorrect";
                                }

                                return (
                                  <label key={i} className={optionClass}>
                                    {!hasAnswered && (
                                      <input
                                        type="radio"
                                        name={`question-${q.id}`}
                                        value={opt.text}
                                        checked={isThisOptionSelected}
                                        onChange={() => handleOptionSelect(q.id, opt.text)}
                                      />
                                    )}

                                    {hasAnswered && isThisOptionCorrect && (
                                      <span className="csr-opt-icon correct">●</span>
                                    )}
                                    {hasAnswered && isThisOptionSelected && !isThisOptionCorrect && (
                                      <span className="csr-opt-icon incorrect">❌</span>
                                    )}
                                    {hasAnswered && !isThisOptionSelected && !isThisOptionCorrect && (
                                      <span className="csr-opt-icon neutral">○</span>
                                    )}

                                    <span className="csr-opt-text">{opt.text}</span>

                                    {hasAnswered && (
                                      <span className="csr-opt-percent">{opt.percent}</span>
                                    )}

                                    {hasAnswered && (
                                      <div className="csr-opt-progress" style={{ width: opt.percent }}></div>
                                    )}
                                  </label>
                                );
                              })}
                            </div>

                            {hasAnswered && (
                              <div className={`csr-feedback-banner ${isCorrectAnswer ? 'correct' : 'incorrect'}`}>
                                <span className="csr-feedback-icon">
                                  {isCorrectAnswer ? '😊' : '😞'}
                                </span>
                                <span>{isCorrectAnswer ? 'Correct!' : 'Oops!'}</span>
                              </div>
                            )}

                            <div className="csr-explanation-toggle">
                              <button className="csr-explanation-btn" onClick={() => toggleExplanation(q.id)}>
                                Show Explanation {expandedExplanations[q.id] ? '▲' : '▼'}
                              </button>
                            </div>

                            {expandedExplanations[q.id] && (
                              <div className="csr-explanation-box">
                                {q.exp}
                              </div>
                            )}
                          </div>
                          {index < geoSudoQuestions.length - 1 && <hr className="csr-question-divider" />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <div className="csr-content-card" style={{ marginTop: '24px' }}>
                <h2 className="csr-section-title">{company.name} Game Based Aptitude</h2>
                <p className="csr-paragraph">Details and challenges for {company.name} Game Based Aptitude will be updated soon.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default CompanyStudyResources;