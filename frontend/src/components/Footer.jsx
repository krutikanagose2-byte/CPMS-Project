import './Footer.css';
import prmitrLogo from '../assets/prmitrlogojpg.jpg';

<<<<<<< HEAD
export default function Footer({ onOpenHome, onOpenCompanies, onOpenPlacements, onOpenNoticeBoard, onOpenContact }) {
=======
export default function Footer() {
>>>>>>> c64ada1de75afc67d5344d7afacaffa7dd74b777
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={prmitrLogo} alt="PRMITR Logo" className="footer-logo" />
          <div>
            <p className="footer-title">PRMIT&R Placement</p>
            <p className="footer-copy">Empowering students, connecting companies, building careers.</p>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Explore</h4>
<<<<<<< HEAD
            <a href="/Home" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/Home'); if(onOpenHome) onOpenHome(); }}>Home</a>
            <a href="/Companies" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/Companies'); if(onOpenCompanies) onOpenCompanies(); }}>Companies</a>
            <a href="/Placements" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/Placements'); if(onOpenPlacements) onOpenPlacements(); }}>Placements</a>
=======
            <a href="#">Home</a>
            <a href="#">Companies</a>
            <a href="#">Placements</a>
>>>>>>> c64ada1de75afc67d5344d7afacaffa7dd74b777
            <a href="#">Students</a>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <a href="#">Training</a>
            <a href="#">Statistics</a>
<<<<<<< HEAD
            <a href="/Notice-Board" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/Notice-Board'); if(onOpenNoticeBoard) onOpenNoticeBoard(); }}>Notice Board</a>
            <a href="/Contact" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/Contact'); if(onOpenContact) onOpenContact(); }}>Contact</a>
=======
            <a href="#">Notice Board</a>
            <a href="#">Contact</a>
>>>>>>> c64ada1de75afc67d5344d7afacaffa7dd74b777
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <p>PRMIT&R, Badnera</p>
            <p>Amravati, Maharashtra</p>
            <p>support@prmitr.edu.in</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2026 PRMIT&R. All rights reserved.</div>
    </footer>
  );
}
