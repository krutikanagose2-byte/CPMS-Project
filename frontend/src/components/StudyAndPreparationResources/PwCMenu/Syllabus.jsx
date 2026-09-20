import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'PwC'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'PwC'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Online Assessment</h3>
        <p className="csr-paragraph">Aptitude/Reasoning + Role-based assessment</p>
        <h3 className="csr-subsection-title">2. Technical/Business Interview</h3>
        <p className="csr-paragraph">Technical + Aptitude + Business acumen</p>
        <h3 className="csr-subsection-title">3. HR/Behavioural Interview</h3>
        <p className="csr-paragraph">CV + Behavioural questions</p>
        <h3 className="csr-subsection-title">4. Final Selection</h3>
        <p className="csr-paragraph">Final evaluation</p>

      </div>
    </div>
  );
};

export default Syllabus;
