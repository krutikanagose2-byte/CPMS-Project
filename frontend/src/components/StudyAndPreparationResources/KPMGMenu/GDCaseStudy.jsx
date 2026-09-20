import React from 'react';
import CommunicationAssessment from '../CognizantMenu/CommunicationAssessment';

const GDCaseStudy = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">GD / Case Study</h2>
        <p className="csr-paragraph">
          The Group Discussion (GD) or Case Study round at {company?.name || 'KPMG'} focuses on evaluating your Communication and Problem Solving skills.
        </p>
        <CommunicationAssessment />
      </div>
    </div>
  );
};

export default GDCaseStudy;
