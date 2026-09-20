import React from 'react';
import QuantitativeAptitude from '../CognizantMenu/QuantitativeAptitude';
import LogicalReasoning from '../CognizantMenu/LogicalReasoning';
import VerbalAbility from '../CognizantMenu/VerbalAbility';

const OnlineWrittenTest = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Tata Motors'} - Online/Written Test</h2>
        <p className="csr-paragraph">Aptitude + Reasoning + Quantitative + Technical/Domain + English</p>
        <div style={{marginTop: '20px'}}><h3>Quantitative Aptitude</h3><QuantitativeAptitude /></div>
        <div style={{marginTop: '20px'}}><h3>Logical Reasoning</h3><LogicalReasoning /></div>
        <div style={{marginTop: '20px'}}><h3>Verbal Ability</h3><VerbalAbility /></div>

      </div>
    </div>
  );
};

export default OnlineWrittenTest;
