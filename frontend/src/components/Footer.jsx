import './Footer.css';
import prmitrLogo from '../assets/prmitrlogojpg.jpg';

export default function Footer() {
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
            <a href="#">Home</a>
            <a href="#">Companies</a>
            <a href="#">Placements</a>
            <a href="#">Students</a>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <a href="#">Training</a>
            <a href="#">Statistics</a>
            <a href="#">Notice Board</a>
            <a href="#">Contact</a>
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
