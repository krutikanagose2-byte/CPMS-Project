import React, { useState, useEffect } from 'react';
import '../CognizantMenu/CognizantMenu.css';
import Pattern from './Pattern';
import Syllabus from './Syllabus';
import OnlineAptitudeTest from './OnlineAptitudeTest';
import TechnicalTest from './TechnicalTest';
import TechnicalInterview from './TechnicalInterview';
import CaseStudy from './CaseStudy';
import HRFinal from './HRFinal';

const FractalAnalyticsMenu = ({ company, onBack, onOpenAIInterview }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [activeMenu, setActiveMenu] = useState('Pattern');
  const [isSyllabusExpanded, setIsSyllabusExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!company) return null;

  const currentYear = new Date().getFullYear();

  const renderContent = () => {
    switch (activeMenu) {
      case 'Pattern':
        return <Pattern company={company} currentYear={currentYear} />;
      case 'Syllabus':
        return <Syllabus company={company} currentYear={currentYear} />;
      case 'Online Aptitude Test':
        return <OnlineAptitudeTest company={company} />;
      case 'Technical Test':
        return <TechnicalTest company={company} />;
      case 'Technical Interview':
        return <TechnicalInterview company={company} />;
      case 'Case Study/Business Round':
        return <CaseStudy company={company} />;
      case 'HR/Final':
        return <HRFinal company={company} />;
      default:
        return (
          <div className="csr-content-body">
            <div className="csr-content-card" style={{ marginTop: '24px' }}>
              <h2 className="csr-section-title">{activeMenu}</h2>
              <p className="csr-paragraph">Detailed study resources and curriculum for {activeMenu} will be updated soon.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="csr-container">
      <aside className="csr-sidebar">
        <div className="csr-sidebar-header">
          <button className="csr-back-btn" onClick={onBack}>
            ← Back
          </button>
          <h2 className="csr-menu-title">{company.name.toUpperCase()} MENU</h2>
        </div>
        <nav className="csr-menu">
          <div
            className={`csr-menu-item ${activeMenu === 'Pattern' ? 'active' : ''}`}
            onClick={() => setActiveMenu('Pattern')}
          >
            <span className="csr-menu-icon">🧩</span>
            {company.name} Pattern
          </div>

          <div
            className={`csr-menu-item ${activeMenu === 'Syllabus' ? 'active' : ''}`}
            onClick={() => {
              setActiveMenu('Syllabus');
              setIsSyllabusExpanded(true);
            }}
          >
            <span className="csr-menu-icon">📋</span>
            {company.name} Syllabus
            <span
              className="csr-dropdown-arrow"
              style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', transform: isSyllabusExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', padding: '0 4px', cursor: 'pointer' }}
              onClick={(e) => {
                e.stopPropagation();
                setIsSyllabusExpanded(!isSyllabusExpanded);
              }}
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </div>

          {isSyllabusExpanded && (
            <div className="csr-submenu">
              <div className={`csr-menu-item ${activeMenu === 'Online Aptitude Test' ? 'active' : ''}`} onClick={() => setActiveMenu('Online Aptitude Test')} style={{ paddingLeft: '40px', fontSize: '0.95em' }}>
                Online Aptitude Test
              </div>
              <div className={`csr-menu-item ${activeMenu === 'Technical Test' ? 'active' : ''}`} onClick={() => setActiveMenu('Technical Test')} style={{ paddingLeft: '40px', fontSize: '0.95em' }}>
                Technical Test
              </div>
              <div className={`csr-menu-item ${activeMenu === 'Technical Interview' ? 'active' : ''}`} onClick={() => setActiveMenu('Technical Interview')} style={{ paddingLeft: '40px', fontSize: '0.95em' }}>
                Technical Interview
              </div>
              <div className={`csr-menu-item ${activeMenu === 'Case Study/Business Round' ? 'active' : ''}`} onClick={() => setActiveMenu('Case Study/Business Round')} style={{ paddingLeft: '40px', fontSize: '0.95em' }}>
                Case Study/Business Round
              </div>
              <div className={`csr-menu-item ${activeMenu === 'HR/Final' ? 'active' : ''}`} onClick={() => setActiveMenu('HR/Final')} style={{ paddingLeft: '40px', fontSize: '0.95em' }}>
                HR/Final
              </div>
            </div>
          )}
        </nav>
      </aside>

      <main className="csr-main">
        <div className="csr-tabs-wrapper">
          <div className="csr-tabs">
            {['Pattern', 'Syllabus'].map(tab => {
              const isActive = (activeMenu === 'Pattern' && tab === 'Pattern') ||
                (activeMenu !== 'Pattern' && tab === 'Syllabus');

              return (
                <button
                  key={tab}
                  className={`csr-tab ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(tab);
                    if (tab === 'Pattern') setActiveMenu('Pattern');
                    else if (tab === 'Syllabus') setActiveMenu('Syllabus');
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
        {renderContent()}
      </main>
    </div>
  );
};
export default FractalAnalyticsMenu;
