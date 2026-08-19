import './Stats.css';
import tcsLogo from '../assets/tcs.jpeg';
import infosysLogo from '../assets/infosys.jpeg';
import accentureLogo from '../assets/accenture.png';
import capgeminiLogo from '../assets/capgemini.svg';
import wiproLogo from '../assets/wipro.png';
import cognizantLogo from '../assets/cognizant.png';
import googleLogo from '../assets/google.jpeg';
import microsoftLogo from '../assets/microsoft.png';

const statItems = [
  {
    title: '120+',
    desc: 'Companies Associated',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2" />
        <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
      </svg>
    )
  },
  {
    title: '750+',
    desc: 'Students Placed',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    )
  },
  {
    title: '85%',
    desc: 'Placement Rate',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )
  },
  {
    title: '₹ 50 LPA',
    desc: 'Highest Package Offered',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    )
  }
];

const recruiters = [
  { name: 'TCS', logo: tcsLogo },
  { name: 'Infosys', logo: infosysLogo },
  { name: 'Accenture', logo: accentureLogo },
  { name: 'Capgemini', logo: capgeminiLogo },
  { name: 'Wipro', logo: wiproLogo },
  { name: 'Cognizant', logo: cognizantLogo },
  { name: 'Google', logo: googleLogo },
  { name: 'Microsoft', logo: microsoftLogo },
];

export default function Stats({ onOpenCompanies }) {
  return (
    <section className="stats-container">
      {/* Left — metric cards */}
      <div className="stats-cards">
        {statItems.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-value">{s.title}</div>
            <div className="stat-desc">{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Vertical divider */}
      <div className="stats-divider" />

      {/* Right — top recruiters */}
      <div className="top-recruiters">
        <div className="recruiter-header">
          <span className="recruiter-title">Top Recruiters</span>
          <a href="/Companies" className="view-all-link" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/Companies'); if(onOpenCompanies) onOpenCompanies(); }}>View All &rarr;</a>
        </div>
        <div className="recruiter-marquee">
          <div className="recruiter-track">
            <div className="recruiter-list">
              {recruiters.map((brand, i) => (
                <div key={i} className="logo-box">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="logo-img" 
                    style={brand.name === 'Microsoft' ? { transform: 'scale(1.6)' } : {}}
                  />
                </div>
              ))}
            </div>
            <div className="recruiter-list" aria-hidden="true">
              {recruiters.map((brand, i) => (
                <div key={`dup-${i}`} className="logo-box">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="logo-img" 
                    style={brand.name === 'Microsoft' ? { transform: 'scale(1.6)' } : {}}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}