import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import WhyChoose from './components/WhyChoose';
import RecentPlacements from './components/RecentPlacements';
import FeatureHighlights from './components/FeatureHighlights';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from './components/Login';
import Companies from './components/Companies';
import Placements from './components/Placements';
import CompanyOffers from './components/CompanyOffers';
import NoticeBoard from './components/NoticeBoard';
import StudentDashboard from './components/student/StudentDashboard';
import StudyAndPreparationResources from './components/StudyAndPreparationResources/StudyAndPreparationResources';
import InterviewSetup from './components/VirtualInterview/InterviewSetup';
import ActiveInterview from './components/VirtualInterview/ActiveInterview';
import InterviewReport from './components/VirtualInterview/InterviewReport';

export default function App() {
  const [page, setPage] = useState(() => {
    try {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('companies')) return 'companies';
      if (path.includes('placements')) return 'placements';
      if (path.includes('notice')) return 'notice';
      if (path.includes('login')) return 'login';
      if (path.includes('dashboard') || path.includes('student') || path.includes('admin')) return 'student-dashboard';
    } catch (e) {}
    return 'home';
  });

  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [targetPlacementCompany, setTargetPlacementCompany] = useState(null);
  const [interviewResult, setInterviewResult] = useState(null);
  const [interviewSession, setInterviewSession] = useState(null); // { sessionId, questions }
  const [openAddModal, setOpenAddModal] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('companies')) {
        setPage('companies');
      } else if (path.includes('placements')) {
        setPage('placements');
      } else if (path.includes('notice')) {
        setPage('notice');
      } else if (path.includes('login')) {
        setPage('login');
      } else if (path.includes('dashboard') || path.includes('student') || path.includes('admin')) {
        setPage('student-dashboard');
      } else {
        setPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser);
    if (updatedUser) {
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } else {
      localStorage.removeItem('user');
    }
  };

  if (page === 'login') {
    return (
      <Login 
        onBack={() => {
          window.history.pushState({}, '', '/Home');
          setPage('home');
        }} 
        onLoginSuccess={(userData) => {
          handleUpdateUser(userData);
          window.history.pushState({}, '', '/Home');
          setPage('home');
        }}
      />
    );
  }

  if (page === 'student-dashboard') {
    return (
      <StudentDashboard 
        user={user} 
        onUpdateUser={handleUpdateUser}
        onLogout={() => {
          handleUpdateUser(null);
          window.history.pushState({}, '', '/Home');
          setPage('home');
        }} 
        onBack={() => {
          window.history.pushState({}, '', '/Home');
          setPage('home');
        }}
        onOpenCompanies={(withAddModal = false) => {
          setSelectedCompany(null);
          setOpenAddModal(withAddModal);
          window.history.pushState({}, '', '/Companies');
          setPage('companies');
        }}
        onOpenPlacements={(withAddModal = false) => {
          setTargetPlacementCompany(null);
          setOpenAddModal(withAddModal);
          window.history.pushState({}, '', '/Placements');
          setPage('placements');
        }}
        onOpenNoticeBoard={(withAddModal = false) => {
          setOpenAddModal(withAddModal);
          window.history.pushState({}, '', '/Notice-Board');
          setPage('notice');
        }}
      />
    );
  }

  if (page === 'companies') {
    return (
      <Companies 
        user={user}
        initialCompany={selectedCompany}
        initialShowAddModal={openAddModal}
        onOpenProfile={() => {
          window.history.pushState({}, '', '/Dashboard');
          setPage('student-dashboard');
        }}
        onBack={() => { 
          setSelectedCompany(null); 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Home');
          setPage('home'); 
        }} 
        onOpenPlacements={() => { 
          setTargetPlacementCompany(null); 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Placements');
          setPage('placements'); 
        }} 
        onOpenLogin={() => {
          window.history.pushState({}, '', '/Login');
          setPage('login');
        }} 
        onOpenNoticeBoard={() => { 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Notice-Board');
          setPage('notice'); 
        }} 
        onOpenCompanyOffers={(comp) => { setSelectedCompany(comp); setPage('company-offers'); }} 
        onOpenCompanyStudy={(comp) => { setSelectedCompany(comp); setPage('company-study'); }}
        onOpenAIInterview={(comp) => { setSelectedCompany(comp); setPage('interview-setup'); }}
        onOpenPlacementsForCompany={(compName) => { setTargetPlacementCompany(compName); setPage('placements'); }}
      />
    );
  }

  if (page === 'company-offers') {
    return (
      <CompanyOffers 
        user={user}
        onOpenProfile={() => {
          window.history.pushState({}, '', '/Dashboard');
          setPage('student-dashboard');
        }}
        company={selectedCompany} 
        onBack={() => setPage('companies')} 
      />
    );
  }

  if (page === 'company-study') {
    return (
      <StudyAndPreparationResources
        user={user}
        onOpenProfile={() => {
          window.history.pushState({}, '', '/Dashboard');
          setPage('student-dashboard');
        }}
        company={selectedCompany} 
        onBack={() => setPage('companies')}
        onOpenAIInterview={(comp) => { setSelectedCompany(comp); setPage('interview-setup'); }}
      />
    );
  }

  if (page === 'interview-setup') {
    return (
      <InterviewSetup 
        company={selectedCompany}
        onBack={() => setPage('company-study')}
        onStartInterview={(sessionData) => {
          setInterviewSession(sessionData);
          setPage('active-interview');
        }}
      />
    );
  }

  if (page === 'active-interview') {
    return (
      <ActiveInterview 
        company={selectedCompany}
        sessionId={interviewSession?.sessionId}
        questions={interviewSession?.questions}
        onEndInterview={(result) => {
          setInterviewResult(result);
          setPage('interview-report');
        }}
        onQuit={() => setPage('companies')}
      />
    );
  }

  if (page === 'interview-report') {
    return (
      <InterviewReport 
        company={selectedCompany}
        result={interviewResult}
        onBack={() => setPage('companies')}
        onOpenStudy={() => setPage('company-study')}
      />
    );
  }

  if (page === 'placements') {
    return (
      <Placements 
        user={user} 
        targetCompany={targetPlacementCompany} 
        initialShowAddModal={openAddModal}
        onOpenProfile={() => {
          window.history.pushState({}, '', '/Dashboard');
          setPage('student-dashboard');
        }} 
        onBack={() => { 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Home');
          setPage('home'); 
        }} 
        onOpenCompanies={() => { 
          setSelectedCompany(null); 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Companies');
          setPage('companies'); 
        }} 
        onOpenLogin={() => {
          window.history.pushState({}, '', '/Login');
          setPage('login');
        }} 
        onOpenNoticeBoard={() => { 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Notice-Board');
          setPage('notice'); 
        }} 
      />
    );
  }

  if (page === 'notice') {
    return (
      <NoticeBoard 
        user={user} 
        initialShowAddModal={openAddModal}
        onOpenProfile={() => {
          window.history.pushState({}, '', '/Dashboard');
          setPage('student-dashboard');
        }} 
        onBack={() => { 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Home');
          setPage('home'); 
        }} 
        onOpenCompanies={() => { 
          setSelectedCompany(null); 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Companies');
          setPage('companies'); 
        }} 
        onOpenPlacements={() => { 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Placements');
          setPage('placements'); 
        }} 
        onOpenLogin={() => {
          window.history.pushState({}, '', '/Login');
          setPage('login');
        }} 
      />
    );
  }

  return (
    <div className="page-root">
      <Header
        user={user}
        onOpenProfile={() => {
          window.history.pushState({}, '', '/Dashboard');
          setPage('student-dashboard');
        }}
        onOpenLogin={() => {
          window.history.pushState({}, '', '/Login');
          setPage('login');
        }}
        onOpenCompanies={() => { 
          setSelectedCompany(null); 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Companies');
          setPage('companies'); 
        }}
        onOpenPlacements={() => { 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Placements');
          setPage('placements'); 
        }}
        onOpenNoticeBoard={() => { 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Notice-Board');
          setPage('notice'); 
        }}
      />
      <main className="container">
        <Stats onOpenCompanies={() => { 
          setSelectedCompany(null); 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Companies');
          setPage('companies'); 
        }} />
        <div className="content-row">
          <WhyChoose />
          <RecentPlacements onOpenPlacements={() => { 
            setOpenAddModal(false); 
            window.history.pushState({}, '', '/Placements');
            setPage('placements'); 
          }} />
        </div>
        <Testimonials />
        <FeatureHighlights />
      </main>
      <Footer 
        onOpenHome={() => { 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Home');
          setPage('home'); 
        }}
        onOpenCompanies={() => { 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Companies');
          setPage('companies'); 
        }}
        onOpenPlacements={() => { 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Placements');
          setPage('placements'); 
        }}
        onOpenNoticeBoard={() => { 
          setOpenAddModal(false); 
          window.history.pushState({}, '', '/Notice-Board');
          setPage('notice'); 
        }}
        onOpenContact={() => {}} 
      />
    </div>
  );
}