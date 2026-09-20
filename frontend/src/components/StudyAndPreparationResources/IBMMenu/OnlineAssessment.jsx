import React from 'react';
import Technical from '../CognizantMenu/Technical';
import QuantitativeAptitude from '../CognizantMenu/QuantitativeAptitude';

const OnlineAssessment = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'IBM'} - Online/Coding Assessment</h2>
        <p className="csr-paragraph">MCQs + Coding (role-dependent)</p>
        <div style={{marginTop: '20px'}}><h3>Technical</h3><Technical /></div>
        <div style={{marginTop: '20px'}}><h3>Quantitative Aptitude</h3><QuantitativeAptitude /></div>

      </div>
    </div>
  );
};

export default OnlineAssessment;
