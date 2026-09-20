import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'Bosch'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'Bosch'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Written/Online Test</h3>
        <p className="csr-paragraph">Aptitude/Psychometric + Technical</p>
        <h3 className="csr-subsection-title">2. GD/Presentation</h3>
        <p className="csr-paragraph">If required</p>
        <h3 className="csr-subsection-title">3. Technical Interview</h3>
        <p className="csr-paragraph">Core technical + Projects</p>
        <h3 className="csr-subsection-title">4. HR/Personal Interview</h3>
        <p className="csr-paragraph">HR + Fit</p>
        <h3 className="csr-subsection-title">5. Final Selection</h3>
        <p className="csr-paragraph">Final result</p>

      </div>
    </div>
  );
};

export default Syllabus;
