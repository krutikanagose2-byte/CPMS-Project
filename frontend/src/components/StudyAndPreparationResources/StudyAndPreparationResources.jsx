import React from 'react';
import CognizantMenu from './CognizantMenu/CognizantMenu';
import GenericMenu from './GenericMenu/GenericMenu';
import TCSMenu from './TCSMenu/TCSMenu';
import MicrosoftMenu from './MicrosoftMenu/MicrosoftMenu';
import InfosysMenu from './InfosysMenu/InfosysMenu';
import CapgeminiMenu from './CapgeminiMenu/CapgeminiMenu';
import WiproMenu from './WiproMenu/WiproMenu';
import SAPMenu from './SAPMenu/SAPMenu';
import AccentureMenu from './AccentureMenu/AccentureMenu';
import DeloitteMenu from './DeloitteMenu/DeloitteMenu';

const StudyAndPreparationResources = ({ company, onBack, user, onOpenProfile, onOpenAIInterview }) => {
  if (!company) return null;

  // Use the highly customized menu for Cognizant
  if (company.name === 'Cognizant') {
    return <CognizantMenu company={company} onBack={onBack} user={user} onOpenProfile={onOpenProfile} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  // Use the highly customized menu for TCS
  if (company.name === 'TCS') {
    return <TCSMenu company={company} onBack={onBack} user={user} onOpenProfile={onOpenProfile} onOpenAIInterview={onOpenAIInterview} />;
  }

  // Use the highly customized menu for Microsoft
  if (company.name === 'Microsoft') {
    return <MicrosoftMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }

  // Use the highly customized menu for Infosys
  if (company.name === 'Infosys') {
    return <InfosysMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }

  if (company.name === 'Capgemini') {
    return <CapgeminiMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }

  if (company.name === 'Wipro') {
    return <WiproMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }

  if (company.name === 'SAP') {
    return <SAPMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }

  if (company.name === 'Accenture') {
    return <AccentureMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }

  if (company.name === 'Deloitte') {
    return <DeloitteMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }

  // Use the generic menu for all other companies
  return <GenericMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
};

export default StudyAndPreparationResources;