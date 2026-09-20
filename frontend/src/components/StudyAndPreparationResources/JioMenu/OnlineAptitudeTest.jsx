import React from 'react';
import QuantitativeAptitude from '../CognizantMenu/QuantitativeAptitude';
import LogicalReasoning from '../CognizantMenu/LogicalReasoning';
import VerbalAbility from '../CognizantMenu/VerbalAbility';

const OnlineAptitudeTest = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Jio'} - Online Aptitude Test</h2>
        <p className="csr-paragraph">Numerical + Logical Reasoning + Language</p>
        <div style={{marginTop: '20px'}}><h3>Quantitative Aptitude</h3><QuantitativeAptitude /></div>
        <div style={{marginTop: '20px'}}><h3>Logical Reasoning</h3><LogicalReasoning /></div>
        <div style={{marginTop: '20px'}}><h3>Verbal Ability</h3><VerbalAbility /></div>

      </div>
    </div>
  );
};

export default OnlineAptitudeTest;
