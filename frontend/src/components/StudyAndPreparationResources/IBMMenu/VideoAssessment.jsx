import React from 'react';
import CommunicationAssessment from '../CognizantMenu/CommunicationAssessment';

const VideoAssessment = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'IBM'} - Video Assessment</h2>
        <p className="csr-paragraph">Interview/Behavioral questions</p>
        <CommunicationAssessment />

      </div>
    </div>
  );
};

export default VideoAssessment;
