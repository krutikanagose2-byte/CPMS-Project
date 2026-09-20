import React from 'react';
import VerbalAbility from '../CognizantMenu/VerbalAbility';

const EnglishAssessment = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'IBM'} - English Assessment</h2>
        <p className="csr-paragraph">English proficiency</p>
        <VerbalAbility />

      </div>
    </div>
  );
};

export default EnglishAssessment;
