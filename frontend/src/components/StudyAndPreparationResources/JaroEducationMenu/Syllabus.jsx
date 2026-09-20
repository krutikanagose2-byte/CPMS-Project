import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'Jaro Education'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'Jaro Education'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Screening/Online Test</h3>
        <p className="csr-paragraph">Aptitude + Communication/Basic Technical</p>
        <h3 className="csr-subsection-title">2. GD/JAM</h3>
        <p className="csr-paragraph">Communication + Group Discussion</p>
        <h3 className="csr-subsection-title">3. Personal Interview</h3>
        <p className="csr-paragraph">Role/Technical + Problem Solving</p>
        <h3 className="csr-subsection-title">4. HR Interview</h3>
        <p className="csr-paragraph">Behaviour + Communication + Fit</p>
        <h3 className="csr-subsection-title">5. Final Selection</h3>
        <p className="csr-paragraph">Final selection process</p>

      </div>
    </div>
  );
};

export default Syllabus;
