import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'Siemens'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'Siemens'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Online Assessment</h3>
        <p className="csr-paragraph">Technical + Aptitude/Coding</p>
        <h3 className="csr-subsection-title">2. Technical Interview</h3>
        <p className="csr-paragraph">Core Technical + Coding/Projects</p>
        <h3 className="csr-subsection-title">3. HR Interview</h3>
        <p className="csr-paragraph">Behavioural + Career/Role</p>

      </div>
    </div>
  );
};

export default Syllabus;
