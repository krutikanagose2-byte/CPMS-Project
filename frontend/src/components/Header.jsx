import { useState } from 'react';
import './Header.css';
import prmitrLogo from '../assets/prmitrlogojpg.jpg';
import Navbar from './Navbar';

<<<<<<< HEAD
export default function Header({ onOpenLogin, onOpenCompanies, onOpenPlacements, onOpenNoticeBoard }) {
=======
export default function Header({ onOpenLogin, onOpenCompanies, onOpenPlacements }) {
>>>>>>> c64ada1de75afc67d5344d7afacaffa7dd74b777
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
<<<<<<< HEAD
        onOpenNoticeBoard={onOpenNoticeBoard}
=======
>>>>>>> c64ada1de75afc67d5344d7afacaffa7dd74b777
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