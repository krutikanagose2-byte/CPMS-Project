import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'Fractal Analytics'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'Fractal Analytics'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Online Aptitude Test</h3>
        <p className="csr-paragraph">Quant + Reasoning + Verbal + Data Analysis</p>
        <h3 className="csr-subsection-title">2. Technical Test</h3>
        <p className="csr-paragraph">SQL + Python/R</p>
        <h3 className="csr-subsection-title">3. Technical Interview</h3>
        <p className="csr-paragraph">Statistics + SQL + Python + ML</p>
        <h3 className="csr-subsection-title">4. Case Study/Business Round</h3>
        <p className="csr-paragraph">Data/business problem solving</p>
        <h3 className="csr-subsection-title">5. HR/Final</h3>
        <p className="csr-paragraph">Behavioral + Communication</p>

      </div>
    </div>
  );
};

export default Syllabus;
