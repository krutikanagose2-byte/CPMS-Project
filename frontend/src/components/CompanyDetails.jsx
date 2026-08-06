import React, { useState } from 'react';
import './CompanyDetails.css';

const PLACED_STUDENTS = [
  { id: 1, name: 'Sneha Patil', branch: 'CSE', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 2, name: 'Rohan Deshmukh', branch: 'IT', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 3, name: 'Mayur Wakode', branch: 'CSE', image: 'https://randomuser.me/api/portraits/men/46.jpg' },
  { id: 4, name: 'Pooja Tayade', branch: 'AI & DS', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { id: 5, name: 'Omkar Khandare', branch: 'EXTC', image: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { id: 6, name: 'Priya Dhole', branch: 'CSE', image: 'https://randomuser.me/api/portraits/women/24.jpg' }
];

const CompanyDetails = ({ company, onBack }) => {
  const [isMoreInfoVisible, setIsMoreInfoVisible] = useState(false);
  const [expandedSection, setExpandedSection] = useState('study');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!company) return null;

  const toggleSection = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = (e) => {
    e.stopPropagation();
    if (lightboxIndex < (company.officeImages?.length || 0) - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };
  
  const prevImage = (e) => {
    e.stopPropagation();
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  return (
    <div className="company-details-container">
      <div className="cd-top-bar">
        <button className="cd-back-btn" onClick={onBack}>
          ← Back to Companies
        </button>
        <div className="cd-top-actions">
          <button className="cd-save-btn">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            Save Company
          </button>
        </div>
      </div>

      <div className="cd-card cd-header-card">
        <div className="cd-header-left">
          <div className="cd-logo-wrapper">
            {company.logo ? (
              <img src={company.logo} alt={company.name} className="cd-logo-img" />
            ) : (
              <div className="cd-logo-placeholder">{company.name.charAt(0)}</div>
            )}
          </div>
          <div className="cd-header-info">
            <h1 className="cd-company-name">
              {company.fullName || company.name} {company.name !== company.fullName ? `(${company.name})` : ''} 
              <span className="cd-verified-badge" title="Verified">✓</span>
            </h1>
            <p className="cd-company-desc">
              {company.description || `${company.name} is a leading organization that has been partnering with many of the world's largest businesses in their transformation journeys.`}
            </p>
            <div className="cd-more-info">
              <span className="cd-more-link" onClick={() => setIsMoreInfoVisible(!isMoreInfoVisible)}>
                {isMoreInfoVisible ? 'Show Less' : 'More Information'}
              </span>
              {isMoreInfoVisible && (
                <div className="cd-more-text">
                   <p style={{ marginTop: 0, marginBottom: '12px', whiteSpace: 'pre-line' }}>
                     {company.moreInfo || `Detailed information about ${company.name} including its historical milestones, global presence in over 50 countries, and deep expertise across multiple industry verticals.`}
                   </p>
                   <p style={{ margin: 0 }}>
                     <strong>Website:</strong>{' '}
                     <a href={company.website} target="_blank" rel="noopener noreferrer" className="cd-link">
                       {company.website ? company.website.replace(/^https?:\/\//, '') : ''}
                     </a>
                   </p>
                </div>
              )}
            </div>
            <div className="cd-map-gallery-container">
              <div className="cd-map-col">
                <iframe
                  className="cd-map-iframe"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(company.name + ' headquarters ' + company.location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
              </div>
              
              {company.officeImages && (
                <div className="cd-gallery-col">
                  <div className="cd-gallery-grid">
                    {company.officeImages.map((img, idx) => (
                      <div key={idx} className="cd-gallery-link" onClick={() => openLightbox(idx)}>
                        <img src={img} alt={`${company.name} office`} className="cd-gallery-img" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="cd-header-divider"></div>

        <div className="cd-header-right">
          <div className="cd-stat-row">
            <span className="cd-stat-icon">🗓</span>
            <span className="cd-stat-label">Started From</span>
            <span className="cd-stat-value">{company.startedFrom || '1980+'}</span>
          </div>
          <div className="cd-stat-row">
            <span className="cd-stat-icon">👤</span>
            <span className="cd-stat-label">Founder / CEO</span>
            <span className="cd-stat-value">{company.founder || 'Renowned Leader'}</span>
          </div>
          <div className="cd-stat-row">
            <span className="cd-stat-icon">👥</span>
            <span className="cd-stat-label">No. of Employees</span>
            <span className="cd-stat-value">{company.employees || '10,000+'}</span>
          </div>
          <div className="cd-stat-row">
            <span className="cd-stat-icon">🏢</span>
            <span className="cd-stat-label">Work Culture</span>
            <span className="cd-stat-value">{company.workCulture || 'Innovation, Collaboration, Integrity'}</span>
          </div>
          <div className="cd-stat-row">
            <span className="cd-stat-icon">🎓</span>
            <span className="cd-stat-label">Students Placed/Year</span>
            <span className="cd-stat-value">{company.studentsPlaced || '1000+ (Approx.)'}</span>
          </div>
        </div>
      </div>

      <div className="cd-accordion-container">
        
        {/* Placed Students Section */}
        <div className="cd-card cd-students-section">
          <div className="cd-students-header">
            <h3 className="cd-section-title">Last Year Placed Students</h3>
            <span className="cd-view-all">View All →</span>
          </div>
          <div className="cd-students-grid">
            {PLACED_STUDENTS.map(student => (
              <div key={student.id} className="cd-student-profile">
                <img src={student.image} alt={student.name} className="cd-student-avatar" />
                <div className="cd-student-name">{student.name}</div>
                <div className="cd-student-branch">{student.branch}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Accordion 2 */}
        <div className="cd-card cd-accordion">
          <div className="cd-acc-header" onClick={() => toggleSection('offers')}>
            <div className="cd-acc-header-left">
              <div className="cd-acc-icon-box" style={{ background: '#e0f2fe', color: '#0284c7' }}>💼</div>
              <div>
                <h3 className="cd-acc-title">Placement Offers</h3>
                <p className="cd-acc-subtitle">View job roles, apply process, eligibility criteria, package and job locations.</p>
              </div>
            </div>
            <span className={`cd-acc-chevron ${expandedSection === 'offers' ? 'expanded' : ''}`}>▼</span>
          </div>
          {expandedSection === 'offers' && (
            <div className="cd-acc-content">
              <p style={{ padding: '16px', color: '#64748b' }}>Specific offers and packages available during the recruitment drive.</p>
            </div>
          )}
        </div>

        {/* Accordion 3 (Expanded by default) */}
        <div className="cd-card cd-accordion">
          <div className="cd-acc-header" onClick={() => toggleSection('study')}>
            <div className="cd-acc-header-left">
              <div className="cd-acc-icon-box" style={{ background: '#fae8ff', color: '#c026d3' }}>🎓</div>
              <div>
                <h3 className="cd-acc-title">Study & Preparation Resources</h3>
                <p className="cd-acc-subtitle">Access study materials, courses, practice tests, quizzes, interview questions and more.</p>
              </div>
            </div>
            <span className={`cd-acc-chevron ${expandedSection === 'study' ? 'expanded' : ''}`}>▼</span>
          </div>
          {expandedSection === 'study' && (
            <div className="cd-acc-content cd-resources-list">
              
              <div className="cd-resource-item">
                <div className="cd-res-icon" style={{ background: '#dcfce7', color: '#16a34a' }}>📄</div>
                <div className="cd-res-info">
                  <h4 className="cd-res-title">Recommended Courses</h4>
                  <p className="cd-res-desc">Curated courses to help you crack {company.name} placement.</p>
                </div>
                <span className="cd-res-arrow">›</span>
              </div>

              <div className="cd-resource-item">
                <div className="cd-res-icon" style={{ background: '#ffedd5', color: '#ea580c' }}>📝</div>
                <div className="cd-res-info">
                  <h4 className="cd-res-title">Practice Tests & Quizzes</h4>
                  <p className="cd-res-desc">Take practice tests and quizzes to assess your preparation.</p>
                </div>
                <span className="cd-res-arrow">›</span>
              </div>

              <div className="cd-resource-item">
                <div className="cd-res-icon" style={{ background: '#fce7f3', color: '#db2777' }}>📃</div>
                <div className="cd-res-info">
                  <h4 className="cd-res-title">Previous Year Questions</h4>
                  <p className="cd-res-desc">Solve previous year placement papers and track your progress.</p>
                </div>
                <span className="cd-res-arrow">›</span>
              </div>

              <div className="cd-resource-item">
                <div className="cd-res-icon" style={{ background: '#fef3c7', color: '#d97706' }}>💬</div>
                <div className="cd-res-info">
                  <h4 className="cd-res-title">Interview Questions</h4>
                  <p className="cd-res-desc">Commonly asked interview questions and expert answers.</p>
                </div>
                <span className="cd-res-arrow">›</span>
              </div>

              <div className="cd-resource-item">
                <div className="cd-res-icon" style={{ background: '#fee2e2', color: '#ef4444' }}>▶️</div>
                <div className="cd-res-info">
                  <h4 className="cd-res-title">YouTube Playlists</h4>
                  <p className="cd-res-desc">Curated YouTube playlists for {company.name} preparation.</p>
                </div>
                <span className="cd-res-arrow">›</span>
              </div>

              <div className="cd-resource-item">
                <div className="cd-res-icon" style={{ background: '#f5f3ff', color: '#7c3aed' }}>⭐</div>
                <div className="cd-res-info">
                  <h4 className="cd-res-title">Previous & Experiences</h4>
                  <p className="cd-res-desc">Read reviews and experiences shared by placed students.</p>
                </div>
                <span className="cd-res-arrow">›</span>
              </div>

            </div>
          )}
        </div>

        {/* Accordion 4 */}
        <div className="cd-card cd-accordion">
          <div className="cd-acc-header" onClick={() => toggleSection('hr')}>
            <div className="cd-acc-header-left">
              <div className="cd-acc-icon-box" style={{ background: '#e0f2fe', color: '#0ea5e9' }}>📞</div>
              <div>
                <h3 className="cd-acc-title">HR Contact / Careers</h3>
                <p className="cd-acc-subtitle">Reach out to {company.name} HR team or visit official careers page.</p>
              </div>
            </div>
            <span className={`cd-acc-chevron ${expandedSection === 'hr' ? 'expanded' : ''}`}>▼</span>
          </div>
          {expandedSection === 'hr' && (
            <div className="cd-acc-content">
               <p style={{ padding: '16px', color: '#64748b' }}>For inquiries, visit the official careers portal of {company.fullName || company.name}.</p>
            </div>
          )}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="cd-lightbox-overlay" onClick={closeLightbox}>
          <div className="cd-lightbox-close" onClick={closeLightbox}>&times;</div>
          
          {lightboxIndex > 0 && (
            <div className="cd-lightbox-arrow left" onClick={prevImage}>&#10094;</div>
          )}
          
          <img 
            src={company.officeImages[lightboxIndex]} 
            alt="Expanded view" 
            className="cd-lightbox-img" 
            onClick={(e) => e.stopPropagation()} 
          />
          
          {lightboxIndex < company.officeImages.length - 1 && (
            <div className="cd-lightbox-arrow right" onClick={nextImage}>&#10095;</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CompanyDetails;
