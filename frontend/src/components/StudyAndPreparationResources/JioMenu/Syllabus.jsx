import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'Jio'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'Jio'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Online Aptitude Test</h3>
        <p className="csr-paragraph">Numerical + Logical Reasoning + Language</p>
        <h3 className="csr-subsection-title">2. Technical/Functional Test</h3>
        <p className="csr-paragraph">Role-specific technical knowledge</p>
        <h3 className="csr-subsection-title">3. Interview 1</h3>
        <p className="csr-paragraph">Technical/Functional + Problem Solving</p>
        <h3 className="csr-subsection-title">4. Interview 2</h3>
        <p className="csr-paragraph">Technical + Behavioral/Experience</p>
        <h3 className="csr-subsection-title">5. Final Selection</h3>
        <p className="csr-paragraph">Panel feedback + Management approval</p>

      </div>
    </div>
  );
};

export default Syllabus;
