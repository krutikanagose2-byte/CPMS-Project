import React from 'react';
import CommunicationAssessment from '../CognizantMenu/CommunicationAssessment';
import Interview from '../CognizantMenu/Interview';

const InterviewRound = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'HDFC Bank'} - Interview</h2>
        <p className="csr-paragraph">Banking/Role-related + Communication</p>
        <div style={{marginTop: '20px'}}><h3>Communication</h3><CommunicationAssessment /></div>
        <div style={{marginTop: '20px'}}><h3>Interview</h3><Interview /></div>

      </div>
    </div>
  );
};

export default InterviewRound;
