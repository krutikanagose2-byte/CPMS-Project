import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'HDFC Bank'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'HDFC Bank'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Online/Aptitude Test</h3>
        <p className="csr-paragraph">Aptitude/Reasoning/English-type assessment</p>
        <h3 className="csr-subsection-title">2. Interview</h3>
        <p className="csr-paragraph">Banking/Role-related + Communication</p>
        <h3 className="csr-subsection-title">3. HR/Final</h3>
        <p className="csr-paragraph">Personal/Behavioral + Role fit</p>
        <h3 className="csr-subsection-title">4. Final Selection</h3>
        <p className="csr-paragraph">Final result</p>

      </div>
    </div>
  );
};

export default Syllabus;
