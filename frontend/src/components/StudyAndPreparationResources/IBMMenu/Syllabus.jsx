import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'IBM'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'IBM'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Online/Coding Assessment</h3>
        <p className="csr-paragraph">MCQs + Coding (role-dependent)</p>
        <h3 className="csr-subsection-title">2. Video Assessment</h3>
        <p className="csr-paragraph">Interview/Behavioral questions</p>
        <h3 className="csr-subsection-title">3. English Assessment</h3>
        <p className="csr-paragraph">English proficiency</p>
        <h3 className="csr-subsection-title">4. Technical/Interview Round</h3>
        <p className="csr-paragraph">Role-specific technical + Projects</p>
        <h3 className="csr-subsection-title">5. HR/Final Selection</h3>
        <p className="csr-paragraph">Final result</p>

      </div>
    </div>
  );
};

export default Syllabus;
