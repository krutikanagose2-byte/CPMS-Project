import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'Mu Sigma'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'Mu Sigma'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Aptitude Assessment</h3>
        <p className="csr-paragraph">Quant + Logical Reasoning + Verbal</p>
        <h3 className="csr-subsection-title">2. AI-Bot Interview</h3>
        <p className="csr-paragraph">Resume/Projects + Communication/Reasoning</p>
        <h3 className="csr-subsection-title">3. Case Study / Problem Solving</h3>
        <p className="csr-paragraph">Business/Analytical Problem</p>
        <h3 className="csr-subsection-title">4. Final Interview</h3>
        <p className="csr-paragraph">Technical + HR/Behavioral</p>

      </div>
    </div>
  );
};

export default Syllabus;
