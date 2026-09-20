import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'L&T'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'L&T'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Online Test</h3>
        <p className="csr-paragraph">Domain/Technical + Cognitive Aptitude</p>
        <h3 className="csr-subsection-title">2. Personal/Technical Interview</h3>
        <p className="csr-paragraph">Core technical + Problem Solving</p>
        <h3 className="csr-subsection-title">3. Medical Examination</h3>
        <p className="csr-paragraph">Health check</p>

      </div>
    </div>
  );
};

export default Syllabus;
