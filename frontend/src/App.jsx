import React, { useState } from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import WhyChoose from './components/WhyChoose';
import RecentPlacements from './components/RecentPlacements';
import FeatureHighlights from './components/FeatureHighlights';
<<<<<<< HEAD
import Testimonials from './components/Testimonials';
=======
>>>>>>> c64ada1de75afc67d5344d7afacaffa7dd74b777
import Footer from './components/Footer';
import Login from './components/Login';
import Companies from './components/Companies';
import Placements from './components/Placements';
<<<<<<< HEAD
import NoticeBoard from './components/NoticeBoard';
import StudentDashboard from './components/student/StudentDashboard';

export default function App() {
  const [page, setPage] = useState('home'); // 'home' | 'login' | 'companies' | 'placements' | 'notice' | 'student-dashboard'
  const [user, setUser] = useState(null);

  if (page === 'login') {
    return (
      <Login 
        onBack={() => setPage('home')} 
        onLoginSuccess={(userData) => {
          setUser(userData);
          setPage('student-dashboard');
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
      />
    );
  }

  if (page === 'companies') {
    return <Companies onBack={() => setPage('home')} onOpenPlacements={() => setPage('placements')} onOpenLogin={() => setPage('login')} onOpenNoticeBoard={() => setPage('notice')} />;
  }

  if (page === 'placements') {
    return <Placements onBack={() => setPage('home')} onOpenCompanies={() => setPage('companies')} onOpenLogin={() => setPage('login')} onOpenNoticeBoard={() => setPage('notice')} />;
  }

  if (page === 'notice') {
    return <NoticeBoard onBack={() => setPage('home')} onOpenCompanies={() => setPage('companies')} onOpenPlacements={() => setPage('placements')} onOpenLogin={() => setPage('login')} />;
=======

export default function App() {
  const [page, setPage] = useState('home'); // 'home' | 'login' | 'companies'

  if (page === 'login') {
    return <Login onBack={() => setPage('home')} />;
  }

  if (page === 'companies') {
    return <Companies onBack={() => setPage('home')} onOpenPlacements={() => setPage('placements')} onOpenLogin={() => setPage('login')} />;
  }

  if (page === 'placements') {
    return <Placements onBack={() => setPage('home')} onOpenCompanies={() => setPage('companies')} onOpenLogin={() => setPage('login')} />;
>>>>>>> c64ada1de75afc67d5344d7afacaffa7dd74b777
  }

  return (
    <div className="page-root">
      <Header
        onOpenLogin={() => setPage('login')}
        onOpenCompanies={() => setPage('companies')}
        onOpenPlacements={() => setPage('placements')}
<<<<<<< HEAD
        onOpenNoticeBoard={() => setPage('notice')}
      />
      <main className="container">
        <Stats onOpenCompanies={() => setPage('companies')} />
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
=======
      />
      <main className="container">
        <Stats />
        <div className="content-row">
          <WhyChoose />
          <RecentPlacements />
        </div>
        <FeatureHighlights />
      </main>
      <Footer />
>>>>>>> c64ada1de75afc67d5344d7afacaffa7dd74b777
    </div>
  );
}