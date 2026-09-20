import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'ICICI Bank'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'ICICI Bank'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Online Aptitude Test</h3>
        <p className="csr-paragraph">Aptitude</p>
        <h3 className="csr-subsection-title">2. Interview 1</h3>
        <p className="csr-paragraph">General/Role-related</p>
        <h3 className="csr-subsection-title">3. Interview 2</h3>
        <p className="csr-paragraph">ICICI Bank interview</p>
        <h3 className="csr-subsection-title">4. Final selection</h3>
        <p className="csr-paragraph">Final result</p>

      </div>
    </div>
  );
};

export default Syllabus;
