import './FeatureHighlights.css';

const features = [
  {
    title: 'Placement Training',
    desc: 'Aptitude, Technical & Soft skills training for overall development.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    title: 'Mock Interviews',
    desc: 'Regular mock interviews by industry experts.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    )
  },
  {
    title: 'Pre Placement Talks',
    desc: 'Sessions by top recruiters to prepare our students.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    )
  },
  {
    title: 'Career Guidance',
    desc: 'Personalized guidance for career growth.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    )
  }
];

export default function FeatureHighlights() {
  return (
    <section className="feature-highlights">
      <div className="feature-grid">
        {features.map((feature, index) => (
          <article className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <div className="feature-text">
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
