import './WhyChoose.css';

const items = [
  {
    title: 'Quality Talent Pool',
    desc: 'Skilled and industry-ready students.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="8.5" cy="7" r="4"/>
        <polyline points="17 11 19 13 23 9"/>
      </svg>
    )
  },
  {
    title: 'Industry Collaboration',
    desc: 'Strong connections with leading companies.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/>
        <path d="m7 21 1.6-1.4c.4-.4.9-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8l-2.7 2.4"/>
      </svg>
    )
  },
  {
    title: 'Excellent Support',
    desc: 'End-to-end placement assistance.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
      </svg>
    )
  },
  {
    title: 'Proven Results',
    desc: 'High placement rate with great packages.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    )
  }
];

export default function WhyChoose() {
  return (
    <aside className="why">
      <h3>Why Recruiters Choose Us?</h3>
      <div className="why-grid">
        {items.map((it, i) => (
          <div className="why-card" key={i}>
            <div className="why-icon">{it.icon}</div>
            <div className="why-text">
              <div className="why-title">{it.title}</div>
              <div className="why-desc">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}