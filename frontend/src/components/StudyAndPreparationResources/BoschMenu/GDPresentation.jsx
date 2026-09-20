import React from 'react';
import CommunicationAssessment from '../CognizantMenu/CommunicationAssessment';

const GDPresentation = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Bosch'} - GD/Presentation</h2>
        <p className="csr-paragraph">If required</p>
        <CommunicationAssessment />

      </div>
    </div>
  );
};

export default GDPresentation;
