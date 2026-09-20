import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'Amazon'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'Amazon'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Online Assessment (OA)</h3>
        <p className="csr-paragraph">Coding/Technical + Work-style/Behavioral</p>
        <h3 className="csr-subsection-title">2. Technical Interview 1</h3>
        <p className="csr-paragraph">Coding/DSA + Technical + Behavioral</p>
        <h3 className="csr-subsection-title">3. Final Interview Loop</h3>
        <p className="csr-paragraph">3–4 interviews, Technical + Behavioral</p>
        <h3 className="csr-subsection-title">4. Offer/Final Selection</h3>
        <p className="csr-paragraph">Final result</p>

      </div>
    </div>
  );
};

export default Syllabus;
