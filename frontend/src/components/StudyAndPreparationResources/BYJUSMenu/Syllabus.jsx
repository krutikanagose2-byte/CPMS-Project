import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'BYJU'S'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'BYJU'S'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Online Assessment</h3>
        <p className="csr-paragraph">Aptitude + Technical MCQs (role-dependent)</p>
        <h3 className="csr-subsection-title">2. Technical/Personal Interview</h3>
        <p className="csr-paragraph">Self-introduction + Projects + Technical basics</p>
        <h3 className="csr-subsection-title">3. HR/Final Interview</h3>
        <p className="csr-paragraph">HR + Communication</p>
        <h3 className="csr-subsection-title">4. Final Selection</h3>
        <p className="csr-paragraph">Final result</p>

      </div>
    </div>
  );
};

export default Syllabus;
