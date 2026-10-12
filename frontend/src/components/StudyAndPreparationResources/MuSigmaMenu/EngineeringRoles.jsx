import React from 'react';

const ENGINEERING_ROLES = [
  {
    id: 1,
    title: 'Trainee Decision Scientist',
    badge: 'Best Fresher Target',
    badgeColor: '#10b981',
    jd: 'Analyze data, solve business problems, use statistics and communicate insights. Decision scientists bridge business consulting with mathematical algorithms.',
    skills: ['Aptitude', 'Excel', 'SQL', 'Python', 'Communication'],
    package: '₹6.5 - 9.0 LPA',
    link: 'https://www.mu-sigma.com/career/',
    linkText: 'Official Application Information (Mu Sigma Careers)',
    note: 'Primary on-campus and fresher intake role for engineers.'
  },
  {
    id: 2,
    title: 'Data Engineer',
    badge: 'Core Data & Pipeline',
    badgeColor: '#3b82f6',
    jd: 'Build data pipelines, clean data and manage databases. Design reliable ETL architectures that ingest and transform massive multi-client datasets.',
    skills: ['Python', 'SQL', 'ETL', 'Databases', 'Big Data'],
    package: '₹7.0 - 10.5 LPA',
    link: 'https://myinternships.in/jobs/mu-sigma-data-engineer-jobs-pune-6dc4e0',
    linkText: 'View Job Listing (Pune / MyInternships)',
    note: 'Third-party listing; verify with Mu Sigma portal before applying.'
  },
  {
    id: 3,
    title: 'Data Analyst',
    badge: 'Analytics & Reporting',
    badgeColor: '#8b5cf6',
    jd: 'Analyze datasets, identify trends and prepare reports. Work directly with decision stakeholders to generate actionable business intelligence.',
    skills: ['SQL', 'Excel', 'Statistics', 'Power BI/Tableau'],
    package: '₹6.0 - 8.5 LPA',
    link: 'https://www.linkedin.com/jobs/search/?keywords=Mu%20Sigma%20Data%20Analyst',
    linkText: 'Search Mu Sigma Openings on LinkedIn',
    note: 'Ideal for candidates with strong numerical logic and visualization skills.'
  },
  {
    id: 4,
    title: 'Analytics Engineer',
    badge: 'Data Modeling & Quality',
    badgeColor: '#f59e0b',
    jd: 'Transform raw data into reliable datasets for analytics. Implement dimensional schemas and maintain clean, testable data workflows.',
    skills: ['SQL', 'Python', 'Data Modelling', 'Data Warehousing'],
    package: '₹7.5 - 11.0 LPA',
    link: 'https://www.linkedin.com/jobs/search/?keywords=Mu%20Sigma%20Analytics%20Engineer',
    linkText: 'Search Openings on LinkedIn',
    note: 'Bridges data engineering pipelines with business analytics consumption.'
  },
  {
    id: 5,
    title: 'Software Engineer',
    badge: 'Applications & APIs',
    badgeColor: '#ec4899',
    jd: 'Develop and maintain software applications and APIs. Engineer high-throughput microservices and proprietary analytical platforms.',
    skills: ['JavaScript', 'Python/Java', 'DSA', 'APIs'],
    package: '₹7.0 - 10.0 LPA',
    link: 'https://www.linkedin.com/jobs/search/?keywords=Mu%20Sigma%20Software%20Engineer',
    linkText: 'Search Openings on LinkedIn',
    note: 'Focuses on scalable web engineering, core computer science concepts, and REST architectures.'
  },
  {
    id: 6,
    title: 'Machine Learning Engineer',
    badge: 'Predictive & AI Solutions',
    badgeColor: '#6366f1',
    jd: 'Develop predictive models and data-driven solutions. Implement ML algorithms to forecast trends and automate decision recommendations.',
    skills: ['Python', 'Statistics', 'Machine Learning', 'Scikit-Learn'],
    package: '₹8.0 - 12.0 LPA',
    link: 'https://www.linkedin.com/jobs/search/?keywords=Mu%20Sigma%20Machine%20Learning%20Engineer',
    linkText: 'Search Openings on LinkedIn',
    note: 'Requires solid foundation in applied statistical mathematics and Python ML tooling.'
  },
  {
    id: 7,
    title: 'BI Developer',
    badge: 'Dashboards & Visualization',
    badgeColor: '#06b6d4',
    jd: 'Build dashboards and reporting solutions for business teams. Translate complex multivariate queries into executive KPI dashboards.',
    skills: ['SQL', 'Power BI/Tableau', 'Data Visualization', 'DAX'],
    package: '₹6.5 - 9.5 LPA',
    link: 'https://www.linkedin.com/jobs/search/?keywords=Mu%20Sigma%20BI%20Developer',
    linkText: 'Search Openings on LinkedIn',
    note: 'Tailored for students who excel in dashboard design, UI metrics, and SQL queries.'
  }
];

export default function EngineeringRoles({ company }) {
  return (
    <div className="csr-content-body">
      <div className="csr-content-card" style={{ marginTop: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <div>
            <h2 className="csr-section-title" style={{ margin: 0 }}>
              {company?.name || 'Mu Sigma'} - 7 Engineering Roles to Target
            </h2>
            <p style={{ margin: '6px 0 0', color: '#64748b', fontSize: '0.95rem' }}>
              Strategic career roles for engineering graduates, recruitment JDs, required skillsets, and application resources.
            </p>
          </div>
          <span style={{ 
            background: '#e0f2fe', 
            color: '#0284c7', 
            fontWeight: 700, 
            fontSize: '0.85rem', 
            padding: '6px 14px', 
            borderRadius: '20px',
            border: '1px solid #bae6fd'
          }}>
            7 Targeted Openings
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', marginTop: '20px' }}>
          {ENGINEERING_ROLES.map((role) => (
            <div 
              key={role.id}
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '18px 20px',
                background: '#ffffff',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '8px', 
                    background: '#f1f5f9', 
                    color: '#1e293b', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontWeight: 800,
                    fontSize: '0.9rem'
                  }}>
                    {role.id}
                  </span>
                  <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#0f172a', fontWeight: 700 }}>
                    {role.title}
                  </h3>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    color: role.badgeColor, 
                    backgroundColor: `${role.badgeColor}18`, 
                    padding: '4px 10px', 
                    borderRadius: '12px' 
                  }}>
                    {role.badge}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', background: '#f8fafc', padding: '4px 10px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                    {role.package}
                  </span>
                </div>
              </div>

              <p style={{ color: '#334155', fontSize: '0.92rem', lineHeight: '1.5', margin: '0 0 12px' }}>
                <strong>JD:</strong> {role.jd}
              </p>

              <div style={{ marginBottom: '14px' }}>
                <strong style={{ fontSize: '0.82rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Required Skills:
                </strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                  {role.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      style={{
                        background: '#f1f5f9',
                        color: '#1e293b',
                        padding: '3px 10px',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 600
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                  ℹ️ {role.note}
                </span>
                <a 
                  href={role.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#2563eb',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    padding: '5px 12px',
                    borderRadius: '6px',
                    background: '#eff6ff',
                    border: '1px solid #bfdbfe'
                  }}
                >
                  {role.linkText} ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
