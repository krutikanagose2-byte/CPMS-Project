import React, { useState } from 'react';
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
  const [page, setPage] = useState('home'); // 'home' | 'login' | 'companies' | 'placements' | 'notice' | 'student-dashboard' | 'company-offers' | 'company-study' | 'interview-setup' | 'active-interview' | 'interview-report'
  const [user, setUser] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [targetPlacementCompany, setTargetPlacementCompany] = useState(null);
  const [interviewResult, setInterviewResult] = useState(null);
  const [interviewSession, setInterviewSession] = useState(null); // { sessionId, questions }

  if (page === 'login') {
    return (
      <Login 
        onBack={() => setPage('home')} 
        onLoginSuccess={(userData) => {
          setUser(userData);
          setPage('home');
        }}
      />
    );
  }

  if (page === 'student-dashboard') {
    return (
      <StudentDashboard 
        user={user} 
        onUpdateUser={setUser}
        onLogout={() => {
          setUser(null);
          setPage('home');
        }} 
        onBack={() => setPage('home')}
      />
    );
  }

  if (page === 'companies') {
    return (
      <Companies 
        user={user}
        initialCompany={selectedCompany}
        onOpenProfile={() => setPage('student-dashboard')}
        onBack={() => { setSelectedCompany(null); setPage('home'); }} 
        onOpenPlacements={() => { setTargetPlacementCompany(null); setPage('placements'); }} 
        onOpenLogin={() => setPage('login')} 
        onOpenNoticeBoard={() => setPage('notice')} 
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
        onOpenProfile={() => setPage('student-dashboard')}
        company={selectedCompany} 
        onBack={() => setPage('companies')} 
      />
    );
  }

  if (page === 'company-study') {
    return (
      <StudyAndPreparationResources
        user={user}
        onOpenProfile={() => setPage('student-dashboard')}
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
        onBack={() => setPage('companies')}
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
    return <Placements user={user} targetCompany={targetPlacementCompany} onOpenProfile={() => setPage('student-dashboard')} onBack={() => setPage('home')} onOpenCompanies={() => { setSelectedCompany(null); setPage('companies'); }} onOpenLogin={() => setPage('login')} onOpenNoticeBoard={() => setPage('notice')} />;
  }

  if (page === 'notice') {
    return <NoticeBoard user={user} onOpenProfile={() => setPage('student-dashboard')} onBack={() => setPage('home')} onOpenCompanies={() => { setSelectedCompany(null); setPage('companies'); }} onOpenPlacements={() => setPage('placements')} onOpenLogin={() => setPage('login')} />;
  }

  return (
    <div className="page-root">
      <Header
        user={user}
        onOpenProfile={() => setPage('student-dashboard')}
        onOpenLogin={() => setPage('login')}
        onOpenCompanies={() => { setSelectedCompany(null); setPage('companies'); }}
        onOpenPlacements={() => setPage('placements')}
        onOpenNoticeBoard={() => setPage('notice')}
      />
      <main className="container">
        <Stats onOpenCompanies={() => { setSelectedCompany(null); setPage('companies'); }} />
        <div className="content-row">
          <WhyChoose />
          <RecentPlacements onOpenPlacements={() => setPage('placements')} />
        </div>
        <Testimonials />
        <FeatureHighlights />
      </main>
      <Footer 
        onOpenHome={() => setPage('home')}
        onOpenCompanies={() => setPage('companies')}
        onOpenPlacements={() => setPage('placements')}
        onOpenNoticeBoard={() => setPage('notice')}
        onOpenContact={() => {}} 
      />
    </div>
  );
}