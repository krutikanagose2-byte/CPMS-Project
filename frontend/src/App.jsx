import React, { useState } from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import WhyChoose from './components/WhyChoose';
import RecentPlacements from './components/RecentPlacements';
import FeatureHighlights from './components/FeatureHighlights';
import Footer from './components/Footer';
import Login from './components/Login';
import Companies from './components/Companies';
import Placements from './components/Placements';

export default function App() {
  const [page, setPage] = useState('home'); // 'home' | 'login' | 'companies'

  if (page === 'login') {
    return <Login onBack={() => setPage('home')} />;
  }

  if (page === 'companies') {
    return <Companies onBack={() => setPage('home')} onOpenPlacements={() => setPage('placements')} />;
  }

  if (page === 'placements') {
    return <Placements onBack={() => setPage('home')} onOpenCompanies={() => setPage('companies')} />;
  }

  return (
    <div className="page-root">
      <Header
        onOpenLogin={() => setPage('login')}
        onOpenCompanies={() => setPage('companies')}
        onOpenPlacements={() => setPage('placements')}
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
    </div>
  );
}