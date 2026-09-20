import React from 'react';
import QuantitativeAptitude from '../CognizantMenu/QuantitativeAptitude';
import LogicalReasoning from '../CognizantMenu/LogicalReasoning';
import CommunicationAssessment from '../CognizantMenu/CommunicationAssessment';

const OnlineTest = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Jaro Education'} - Screening/Online Test</h2>
        <p className="csr-paragraph">Aptitude + Communication/Basic Technical</p>
        <div style={{marginTop: '20px'}}><h3>Quantitative Aptitude</h3><QuantitativeAptitude /></div>
        <div style={{marginTop: '20px'}}><h3>Logical Reasoning</h3><LogicalReasoning /></div>
        <div style={{marginTop: '20px'}}><h3>Communication</h3><CommunicationAssessment /></div>

      </div>
    </div>
  );
};

export default OnlineTest;
