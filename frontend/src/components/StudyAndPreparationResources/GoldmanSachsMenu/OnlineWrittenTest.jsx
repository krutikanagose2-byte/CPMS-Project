import React from 'react';
import QuantitativeAptitude from '../CognizantMenu/QuantitativeAptitude';
import LogicalReasoning from '../CognizantMenu/LogicalReasoning';
import Technical from '../CognizantMenu/Technical';

const OnlineWrittenTest = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'Goldman Sachs'} - Online/Written Test</h2>
        <p className="csr-paragraph">Aptitude/Technical (role-dependent) + HackerRank</p>
        <div style={{marginTop: '20px'}}><h3>Quantitative Aptitude</h3><QuantitativeAptitude /></div>
        <div style={{marginTop: '20px'}}><h3>Logical Reasoning</h3><LogicalReasoning /></div>
        <div style={{marginTop: '20px'}}><h3>Technical</h3><Technical /></div>

      </div>
    </div>
  );
};

export default OnlineWrittenTest;
