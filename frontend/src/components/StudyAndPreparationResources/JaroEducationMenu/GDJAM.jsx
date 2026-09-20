import React from 'react';
import CommunicationAssessment from '../CognizantMenu/CommunicationAssessment';

const GDJAM = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Jaro Education'} - GD/JAM</h2>
        <p className="csr-paragraph">Communication + Group Discussion</p>
        <CommunicationAssessment />

      </div>
    </div>
  );
};

export default GDJAM;
