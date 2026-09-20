import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'KPMG'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'KPMG'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Online Assessment</h3>
        <ul className="csr-list">
          <li><strong>Quantitative Aptitude:</strong> Mathematics, time & work, algebra, arithmetic, etc.</li>
          <li><strong>Logical Reasoning:</strong> Puzzles, series, blood relations, seating arrangements.</li>
          <li><strong>Verbal Ability:</strong> Grammar, reading comprehension, vocabulary.</li>
          <li><strong>Psychometric:</strong> Behavioral and personality tests.</li>
        </ul>

        <h3 className="csr-subsection-title">2. GD / Case Study</h3>
        <ul className="csr-list">
          <li><strong>Communication:</strong> Clarity of thought, articulation, listening skills.</li>
          <li><strong>Problem Solving:</strong> Analyzing business cases, structured thinking.</li>
        </ul>

        <h3 className="csr-subsection-title">3. Technical Interview</h3>
        <ul className="csr-list">
          <li><strong>Technical Skills:</strong> Core subjects (DBMS, OS, OOPS, CN), coding logic.</li>
          <li><strong>Projects:</strong> In-depth discussion of academic or personal projects.</li>
        </ul>

        <h3 className="csr-subsection-title">4. HR/Recruiter Interview</h3>
        <ul className="csr-list">
          <li><strong>Behavioural:</strong> Scenario-based questions, teamwork, leadership.</li>
          <li><strong>Fit:</strong> Alignment with company culture and values.</li>
        </ul>
      </div>
    </div>
  );
};

export default Syllabus;
