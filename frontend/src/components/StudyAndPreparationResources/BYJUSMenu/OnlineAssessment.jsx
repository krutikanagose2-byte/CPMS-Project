import React from 'react';
import QuantitativeAptitude from '../CognizantMenu/QuantitativeAptitude';
import Technical from '../CognizantMenu/Technical';

const OnlineAssessment = ({ company }) => {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card">
        <h2 className="csr-section-title">{company?.name || 'BYJU'S'} - Online Assessment</h2>
        <p className="csr-paragraph">Aptitude + Technical MCQs (role-dependent)</p>
        <div style={{marginTop: '20px'}}><h3>Quantitative Aptitude</h3><QuantitativeAptitude /></div>
        <div style={{marginTop: '20px'}}><h3>Technical</h3><Technical /></div>

      </div>
    </div>
  );
};

export default OnlineAssessment;
