import React from 'react';

const Syllabus = ({ company, currentYear }) => {
  return (
    <div className="csr-content-body">
      <h1 className="csr-page-title">
        {company?.name || 'Goldman Sachs'} Detailed Syllabus {currentYear}
      </h1>

      <div className="csr-content-card">
        <h2 className="csr-section-title">Overview of {company?.name || 'Goldman Sachs'} Syllabus</h2>
        <p className="csr-paragraph">
          The recruitment process consists of the following key topics. You can find detailed resources and practice questions by expanding the Syllabus menu on the left.
        </p>

        <h3 className="csr-subsection-title">1. Online/Written Test</h3>
        <p className="csr-paragraph">Aptitude/Technical (role-dependent) + HackerRank</p>
        <h3 className="csr-subsection-title">2. Video/First Interview</h3>
        <p className="csr-paragraph">Technical + Behavioral</p>
        <h3 className="csr-subsection-title">3. Final/Superday</h3>
        <p className="csr-paragraph">Multiple interviews (2-5 rounds)</p>
        <h3 className="csr-subsection-title">4. Final Selection</h3>
        <p className="csr-paragraph">Final result</p>

      </div>
    </div>
  );
};

export default Syllabus;
