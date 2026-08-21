import React, { useState, useEffect } from 'react';
import './CognizantMenu.css';
import Pattern from './Pattern';
import Syllabus from './Syllabus';
import CommunicationAssessment from './CommunicationAssessment';
import GameBasedAptitude from './GameBasedAptitude';

const CognizantMenu = ({ company, onBack }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [activeMenu, setActiveMenu] = useState('Pattern');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!company) return null;

  const currentYear = new Date().getFullYear();

  const menuItems = [
    { id: 'Pattern', label: `${company.name} Pattern`, icon: '🧩' },
    { id: 'Syllabus', label: `${company.name} Syllabus`, icon: '📋' },
    { id: 'Communication Assessment', label: 'Communication Assessment', icon: '🗣️' },
    { id: 'Game Based Aptitude', label: 'Game Based Aptitude', icon: '🎮' },
    { id: 'Aptitude', label: 'Aptitude', icon: '🧮' },
    { id: 'Logical Reasoning', label: 'Logical Reasoning', icon: '🧠' },
    { id: 'Verbal Ability', label: 'Verbal Ability', icon: '📝' },
    { id: 'Coding', label: 'Coding', icon: '💻' },
    { id: 'Advanced Coding', label: 'Advanced Coding', icon: '🚀' },
    { id: 'Recruitment Process', label: 'Recruitment Process', icon: '🔄' },
    { id: 'Interview Experience', label: 'Interview Experience', icon: '💬' },
    { id: 'Technical Interview', label: 'Technical Interview', icon: '⚙️' },
    { id: 'HR Interview', label: 'HR Interview Questions', icon: '👥' },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case 'Pattern':
        return <Pattern company={company} currentYear={currentYear} />;
      case 'Syllabus':
        return <Syllabus company={company} currentYear={currentYear} />;
      case 'Communication Assessment':
        return <CommunicationAssessment company={company} currentYear={currentYear} />;
      case 'Game Based Aptitude':
        return <GameBasedAptitude company={company} currentYear={currentYear} />;
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
      {/* Sidebar */}
      <aside className="csr-sidebar">
        <div className="csr-sidebar-header">
          <button className="csr-back-btn" onClick={onBack}>
            ← Back
          </button>
          <h2 className="csr-menu-title">{company.name.toUpperCase()} MENU</h2>
        </div>
        <nav className="csr-menu">
          {menuItems.map(item => (
            <div
              key={item.id}
              className={`csr-menu-item ${activeMenu === item.id ? 'active' : ''}`}
              onClick={() => setActiveMenu(item.id)}
            >
              <span className="csr-menu-icon">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="csr-main">
        {/* Top Tabs */}
        <div className="csr-tabs-wrapper">
          <div className="csr-tabs">
            {['Overview', 'Syllabus', 'Prepare', 'Interview'].map(tab => {
              const isActive = (activeMenu === 'Pattern' && tab === 'Overview') ||
                (activeMenu === 'Syllabus' && tab === 'Syllabus') ||
                (activeMenu.includes('Interview') && tab === 'Interview') ||
                (!['Pattern', 'Syllabus'].includes(activeMenu) && !activeMenu.includes('Interview') && tab === 'Prepare');
              
              return (
                <button
                  key={tab}
                  className={`csr-tab ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(tab);
                    if (tab === 'Overview') setActiveMenu('Pattern');
                    else if (tab === 'Syllabus') setActiveMenu('Syllabus');
                    else if (tab === 'Interview') setActiveMenu('Technical Interview');
                    else if (tab === 'Prepare') setActiveMenu('Communication Assessment');
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Body */}
        {renderContent()}
      </main>
    </div>
  );
};

export default CognizantMenu;