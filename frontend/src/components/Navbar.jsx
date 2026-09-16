import React, { useState } from 'react';
import './Navbar.css';
import prmitrLogo from '../assets/prmitrlogojpg.jpg';

export default function Navbar({ 
  activePage, 
  onOpenHome, 
  onOpenCompanies, 
  onOpenPlacements, 
  onOpenNoticeBoard, 
  onOpenContact,
  onOpenLogin,
  onOpenProfile,
  user,
  useEmojiLogo,
  hideLogin
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e, path, action) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    if (action) {
      action();
      closeMenu();
    }
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="brand">
          {useEmojiLogo ? (
            <div className="brand-icon" style={{fontSize: '1.8rem', marginRight: '4px'}}>🎓</div>
          ) : (
            <img src={prmitrLogo} alt="PRMIT&R Logo" className="brand-logo" />
          )}
          <div className="brand-text">
            <div className="college">PRMIT&R, Badnera</div>
            <div className="tag">College Placement Management System</div>
          </div>
        </div>

        {/* Desktop nav links */}
        <div className="nav-links">
          <a href="/Home" className={activePage === 'home' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/Home', onOpenHome)}>Home</a>
          <a href="/Companies" className={activePage === 'companies' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/Companies', onOpenCompanies)}>Companies</a>
          <a href="/Placements" className={activePage === 'placements' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/Placements', onOpenPlacements)}>Placements</a>
          <a href="/Notice-Board" className={activePage === 'notice' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/Notice-Board', onOpenNoticeBoard)}>Notice Board</a>
          <a href="/Contact" className={activePage === 'contact' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/Contact', onOpenContact)}>Contact</a>
        </div>

        {user ? (
          <div 
            className="navbar-user-profile desktop-profile" 
            onClick={onOpenProfile} 
            style={{ display: hideLogin ? 'none' : 'flex' }}
          >
              <div className="navbar-user-avatar" style={{ overflow: 'hidden' }}>
                  {user?.photoUrl ? (
                      <img src={user.photoUrl} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                      user?.name ? user.name.substring(0, 2).toUpperCase() : (user?.role === 'admin' ? 'AD' : 'S')
                  )}
              </div>
              <div className="navbar-user-info">
                  <div className="navbar-user-name-row">
                    <span className="navbar-user-name">{user?.name || (user?.role === 'admin' ? 'Admin' : 'Student')}</span>
                    {user?.role === 'admin' && <span className="admin-tag-pill">ADMIN</span>}
                  </div>
                  <span className="navbar-user-role">{user?.role === 'admin' ? (user?.branch || 'System Administrator') : (user?.branch || 'Branch & Year')}</span>
              </div>
          </div>
        ) : (
          <button 
            className="login-btn desktop-login" 
            onClick={onOpenLogin} 
            type="button"
            style={{ visibility: hideLogin ? 'hidden' : 'visible' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Login
          </button>
        )}

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
          <a href="/Home" className={activePage === 'home' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/Home', onOpenHome)}>Home</a>
          <a href="/Companies" className={activePage === 'companies' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/Companies', onOpenCompanies)}>Companies</a>
          <a href="/Placements" className={activePage === 'placements' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/Placements', onOpenPlacements)}>Placements</a>
          <a href="/Notice-Board" className={activePage === 'notice' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/Notice-Board', onOpenNoticeBoard)}>Notice Board</a>
          <a href="/Contact" className={activePage === 'contact' ? 'active' : ''} onClick={(e) => handleNavClick(e, '/Contact', onOpenContact)}>Contact</a>
          {user ? (
            <div 
              className="navbar-user-profile mobile-profile" 
              onClick={() => { if(onOpenProfile) onOpenProfile(); closeMenu(); }}
              style={{ 
                marginTop: '0.75rem',
                display: hideLogin ? 'none' : 'flex' 
              }}
            >
                <div className="navbar-user-avatar" style={{ overflow: 'hidden' }}>
                    {user?.photoUrl ? (
                        <img src={user.photoUrl} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        user?.name ? user.name.substring(0, 2).toUpperCase() : (user?.role === 'admin' ? 'AD' : 'S')
                    )}
                </div>
                <div className="navbar-user-info">
                    <div className="navbar-user-name-row">
                      <span className="navbar-user-name">{user?.name || (user?.role === 'admin' ? 'Admin' : 'Student')}</span>
                      {user?.role === 'admin' && <span className="admin-tag-pill">ADMIN</span>}
                    </div>
                    <span className="navbar-user-role">{user?.role === 'admin' ? (user?.branch || 'System Administrator') : (user?.branch || 'Branch & Year')}</span>
                </div>
            </div>
          ) : (
          <button
            className="login-btn"
            onClick={() => { if(onOpenLogin) onOpenLogin(); closeMenu(); }}
            type="button"
            style={{ 
              marginTop: '0.5rem', 
              width: '100%', 
              justifyContent: 'center',
              display: hideLogin ? 'none' : 'flex' 
            }}
          >
            Login
          </button>
          )}
        </div>
      )}
    </>
  );
}
