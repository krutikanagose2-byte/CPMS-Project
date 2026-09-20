import React from 'react';

const MedicalExamination = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'L&T'} - Medical Examination</h2>
        <p className="csr-paragraph">Health check</p>

      </div>
    </div>
  );
};

export default MedicalExamination;
