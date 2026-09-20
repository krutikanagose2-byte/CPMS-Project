import React, { useState, useEffect } from 'react';
import '../CognizantMenu/CognizantMenu.css';
import Pattern from './Pattern';
import Syllabus from './Syllabus';
import AptitudeAssessment from './AptitudeAssessment';
import AIBotInterview from './AIBotInterview';
import CaseStudy from './CaseStudy';
import FinalInterview from './FinalInterview';

const MuSigmaMenu = ({ company, onBack, onOpenAIInterview }) => {
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
      case 'Aptitude Assessment':
        return <AptitudeAssessment company={company} />;
      case 'AI-Bot Interview':
        return <AIBotInterview company={company} />;
      case 'Case Study / Problem Solving':
        return <CaseStudy company={company} />;
      case 'Final Interview':
        return <FinalInterview company={company} />;
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
              <div className={`csr-menu-item ${activeMenu === 'Aptitude Assessment' ? 'active' : ''}`} onClick={() => setActiveMenu('Aptitude Assessment')} style={{ paddingLeft: '40px', fontSize: '0.95em' }}>
                Aptitude Assessment
              </div>
              <div className={`csr-menu-item ${activeMenu === 'AI-Bot Interview' ? 'active' : ''}`} onClick={() => setActiveMenu('AI-Bot Interview')} style={{ paddingLeft: '40px', fontSize: '0.95em' }}>
                AI-Bot Interview
              </div>
              <div className={`csr-menu-item ${activeMenu === 'Case Study / Problem Solving' ? 'active' : ''}`} onClick={() => setActiveMenu('Case Study / Problem Solving')} style={{ paddingLeft: '40px', fontSize: '0.95em' }}>
                Case Study / Problem Solving
              </div>
              <div className={`csr-menu-item ${activeMenu === 'Final Interview' ? 'active' : ''}`} onClick={() => setActiveMenu('Final Interview')} style={{ paddingLeft: '40px', fontSize: '0.95em' }}>
                Final Interview
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
export default MuSigmaMenu;
