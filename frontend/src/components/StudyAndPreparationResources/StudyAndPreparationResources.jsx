import React from 'react';
import CognizantMenu from './CognizantMenu/CognizantMenu';
import GenericMenu from './GenericMenu/GenericMenu';

const StudyAndPreparationResources = ({ company, onBack, user, onOpenProfile, onOpenAIInterview }) => {
  if (!company) return null;

  // Use the highly customized menu for Cognizant
  if (company.name === 'Cognizant') {
    return <CognizantMenu company={company} onBack={onBack} user={user} onOpenProfile={onOpenProfile} onOpenAIInterview={onOpenAIInterview} />;
  }

  // Use the generic menu for supported companies
  const supportedCompanies = ['TCS', 'Infosys', 'Wipro', 'Capgemini'];
  if (supportedCompanies.includes(company.name)) {
    return <GenericMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }

  // Fallback for companies that don't have a specific menu yet
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <button
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          color: '#0ea5e9',
          cursor: 'pointer',
          fontSize: '16px',
          position: 'absolute',
          top: '40px',
          left: '40px'
        }}
      >
        ← Back
      </button>
      <h1 style={{ color: '#1f2937', marginTop: '40px' }}>{company.name} Study Resources</h1>
      <p style={{ color: '#4b5563', fontSize: '18px', marginTop: '20px' }}>
        We are currently building out the study and preparation resources for {company.name}. Check back soon!
      </p>
    </div>
  );
};

export default StudyAndPreparationResources;