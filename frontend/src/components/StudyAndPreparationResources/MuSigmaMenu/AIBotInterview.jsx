import React from 'react';
import CommunicationAssessment from '../CognizantMenu/CommunicationAssessment';

const AIBotInterview = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Mu Sigma'} - AI-Bot Interview</h2>
        <p className="csr-paragraph">Resume/Projects + Communication/Reasoning</p>
        <CommunicationAssessment />

      </div>
    </div>
  );
};

export default AIBotInterview;
