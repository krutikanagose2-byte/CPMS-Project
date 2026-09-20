import React from 'react';
import QuantitativeAptitude from '../CognizantMenu/QuantitativeAptitude';
import LogicalReasoning from '../CognizantMenu/LogicalReasoning';

const OnlineTest = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'L&T'} - Online Test</h2>
        <p className="csr-paragraph">Domain/Technical + Cognitive Aptitude</p>
        <div style={{marginTop: '20px'}}><h3>Quantitative Aptitude</h3><QuantitativeAptitude /></div>
        <div style={{marginTop: '20px'}}><h3>Logical Reasoning</h3><LogicalReasoning /></div>

      </div>
    </div>
  );
};

export default OnlineTest;
