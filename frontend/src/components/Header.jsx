import { useState } from 'react';
import './Header.css';
import prmitrLogo from '../assets/prmitrlogojpg.jpg';

export default function Header({ onOpenLogin, onOpenCompanies, onOpenPlacements }) {
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
      <nav className="nav-bar">
        <div className="brand">
          <img src={prmitrLogo} alt="PRMIT&R Logo" className="brand-logo" />
          <div className="brand-text">
            <div className="college">PRMIT&R, Badnera</div>
            <div className="tag">College Placement Management System</div>
          </div>
        </div>

        {/* Desktop nav links */}
        <div className="nav-links">
          <a href="/Home" onClick={(e) => handleNavClick(e, '/Home')}>Home</a>
          <a href="/Companies" onClick={(e) => handleNavClick(e, '/Companies', onOpenCompanies)}>Companies</a>
          <a href="/Placements" onClick={(e) => handleNavClick(e, '/Placements', onOpenPlacements)}>Placements</a>
          <a href="/Notice-Board" onClick={(e) => handleNavClick(e, '/Notice-Board')}>Notice Board</a>
          <a href="/Contact" onClick={(e) => handleNavClick(e, '/Contact')}>Contact</a>
        </div>

        <button className="login-btn desktop-login" onClick={onOpenLogin} type="button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          Login
        </button>

        {/* Hamburger — mobile only */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="mobile-drawer">
          <a href="/Home" className="active" onClick={(e) => handleNavClick(e, '/Home', closeMenu)}>Home</a>
          <a href="/Companies" onClick={(e) => handleNavClick(e, '/Companies', () => { closeMenu(); onOpenCompanies(); })}>Companies</a>
          <a href="/Placements" onClick={(e) => handleNavClick(e, '/Placements', () => { closeMenu(); onOpenPlacements(); })}>Placements</a>
          <a href="/Notice-Board" onClick={(e) => handleNavClick(e, '/Notice-Board', closeMenu)}>Notice Board</a>
          <a href="/Contact" onClick={(e) => handleNavClick(e, '/Contact', closeMenu)}>Contact</a>
          <button
            className="login-btn"
            onClick={() => { onOpenLogin(); closeMenu(); }}
            type="button"
            style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}
          >
            Login
          </button>
        </div>
      )}

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