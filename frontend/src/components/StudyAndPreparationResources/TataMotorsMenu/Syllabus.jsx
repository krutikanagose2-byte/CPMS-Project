import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'Tata Motors'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'Tata Motors'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Online/Written Test</h3>
        <p className="csr-paragraph">Aptitude + Reasoning + Quantitative + Technical/Domain + English</p>
        <h3 className="csr-subsection-title">2. Technical Interview</h3>
        <p className="csr-paragraph">Core/domain + Projects</p>
        <h3 className="csr-subsection-title">3. HR Interview</h3>
        <p className="csr-paragraph">Behavioural + Fit</p>
        <h3 className="csr-subsection-title">4. Medical/Background Check</h3>
        <p className="csr-paragraph">where applicable</p>

      </div>
    </div>
  );
};

export default Syllabus;
