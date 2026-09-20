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

// Newly added company menus
import KPMGMenu from './KPMGMenu/KPMGMenu';
import PwCMenu from './PwCMenu/PwCMenu';
import LNTMenu from './LNTMenu/LNTMenu';
import TataMotorsMenu from './TataMotorsMenu/TataMotorsMenu';
import SiemensMenu from './SiemensMenu/SiemensMenu';
import BoschMenu from './BoschMenu/BoschMenu';
import HDFCBankMenu from './HDFCBankMenu/HDFCBankMenu';
import ICICIBankMenu from './ICICIBankMenu/ICICIBankMenu';
import GoldmanSachsMenu from './GoldmanSachsMenu/GoldmanSachsMenu';
import MorganStanleyMenu from './MorganStanleyMenu/MorganStanleyMenu';
import MuSigmaMenu from './MuSigmaMenu/MuSigmaMenu';
import FractalAnalyticsMenu from './FractalAnalyticsMenu/FractalAnalyticsMenu';
import LatentViewMenu from './LatentViewMenu/LatentViewMenu';
import JioMenu from './JioMenu/JioMenu';
import AirtelMenu from './AirtelMenu/AirtelMenu';
import JaroEducationMenu from './JaroEducationMenu/JaroEducationMenu';
import BYJUSMenu from './BYJUSMenu/BYJUSMenu';
import AmazonMenu from './AmazonMenu/AmazonMenu';
import IBMMenu from './IBMMenu/IBMMenu';
import OracleMenu from './OracleMenu/OracleMenu';

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

  if (company.name === 'KPMG') {
    return <KPMGMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'PwC') {
    return <PwCMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'L&T' || company.name === 'LNT' || company.name.includes('Larsen')) {
    return <LNTMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'Tata Motors' || company.name.includes('Tata')) {
    // If there's a TCS vs Tata Motors conflict, TCS is already caught above.
    return <TataMotorsMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'Siemens') {
    return <SiemensMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'Bosch') {
    return <BoschMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'HDFC Bank' || company.name === 'HDFC') {
    return <HDFCBankMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'ICICI Bank' || company.name === 'ICICI') {
    return <ICICIBankMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'Goldman Sachs') {
    return <GoldmanSachsMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'Morgan Stanley') {
    return <MorganStanleyMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'Mu Sigma') {
    return <MuSigmaMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'Fractal Analytics' || company.name === 'Fractal') {
    return <FractalAnalyticsMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'LatentView Analytics' || company.name === 'LatentView') {
    return <LatentViewMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'Jio') {
    return <JioMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'Airtel' || company.name === 'Bharti Airtel') {
    return <AirtelMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'Jaro Education' || company.name === 'Jaro') {
    return <JaroEducationMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === "BYJU'S" || company.name === 'BYJU') {
    return <BYJUSMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'Amazon') {
    return <AmazonMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'IBM') {
    return <IBMMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }
  
  if (company.name === 'Oracle') {
    return <OracleMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
  }

  // Use the generic menu for all other companies
  return <GenericMenu company={company} onBack={onBack} onOpenAIInterview={onOpenAIInterview} />;
};

export default StudyAndPreparationResources;