import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'LatentView Analytics'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'LatentView Analytics'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Online Assessment</h3>
        <p className="csr-paragraph">Aptitude + Analytical/Problem Solving</p>
        <h3 className="csr-subsection-title">2. Technical Interview 1</h3>
        <p className="csr-paragraph">SQL + Python + Analytics</p>
        <h3 className="csr-subsection-title">3. Technical Interview 2</h3>
        <p className="csr-paragraph">Projects + Advanced Technical/Case Questions</p>
        <h3 className="csr-subsection-title">4. HR/Behavioral</h3>
        <p className="csr-paragraph">Communication + Career/Role fit</p>

      </div>
    </div>
  );
};

export default Syllabus;
