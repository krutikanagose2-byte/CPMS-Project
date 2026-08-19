import { useState } from 'react';
import './Header.css';
import prmitrLogo from '../assets/prmitrlogojpg.jpg';
import Navbar from './Navbar';

export default function Header({ onOpenLogin, onOpenCompanies, onOpenPlacements, onOpenNoticeBoard }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e, path, action) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    if (action) action();
  };

  return (
    <header className="hero">
      <Navbar
        activePage="home"
        onOpenLogin={onOpenLogin}
        onOpenHome={() => window.history.pushState({}, '', '/Home')}
        onOpenCompanies={onOpenCompanies}
        onOpenPlacements={onOpenPlacements}
        onOpenNoticeBoard={onOpenNoticeBoard}
      />

      {/* Hero Banner Body */}
      <div className="hero-body">
        <div className="hero-content">
          <p className="welcome-text">WELCOME TO</p>
          <p className="sub-heading">PRMIT&R, Badnera</p>
          <h1>Placement Management<br />System</h1>
          <p className="description">
            Bridging Talent with Opportunities.<br />Building Successful Careers.
          </p>
          <div className="hero-actions">
            <button className="btn primary">Explore Companies &rarr;</button>
            <button className="btn ghost">View Placements &rarr;</button>
          </div>
        </div>
      </div>
    </header>
  );
}