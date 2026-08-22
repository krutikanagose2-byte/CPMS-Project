import React, { useState, useEffect } from 'react';
import './NoticeBoard.css';
import Navbar from './Navbar';
import Footer from './Footer';

const NOTICES = [
  {
    id: 1,
    title: 'Cognizant GenC Elevate - Off-Campus Drive 2026 Batch',
    category: 'Placement Drive',
    date: '12 Aug 2026',
    isNew: true,
    isUrgent: true,
    summary: 'Cognizant is hiring for GenC Elevate roles. All eligible B.E/B.Tech students must register before 14th August 2026.',
    content: `Training & Placement Cell, PRMIT&R Badnera

Notice regarding Cognizant GenC Elevate Recruitment Drive for 2026 passing out batch.

Role: Programmer Analyst Trainee (GenC Elevate)
CTC Offered: 4.0 LPA - 4.5 LPA
Eligibility Criteria:
- Minimum 60% in 10th, 12th, and Diploma/B.E.
- No active backlogs allowed at the time of the hiring process.
- Maximum gap of 2 years in education is permissible.

Registration Deadline: 14th August 2026, 05:00 PM
Registration Link: Available on the centralized T&P portal.

Note: Students failing to register before the deadline will not be permitted to participate in the online assessment. For queries, contact your respective departmental T&P coordinators.`,
  },
  {
    id: 2,
    title: 'Final Shortlist: TCS Digital & Ninja Interviews',
    category: 'Results',
    date: '10 Aug 2026',
    isNew: true,
    isUrgent: false,
    summary: 'The final list of students selected for TCS Digital and Ninja profiles following the HR rounds has been published.',
    content: `Training & Placement Cell, PRMIT&R Badnera

Congratulations to the students who have successfully cleared the TCS National Qualifier Test (NQT) and subsequent interview rounds.

A total of 42 students have been offered the TCS Ninja role, and 8 students have secured the TCS Digital role.

The official offer letters will be rolled out by TCS directly to your registered email IDs by the last week of August.

Important Instructions:
1. Shortlisted students must submit a physical copy of their Letter of Intent (LoI) to the T&P Cell within 3 days of receiving it.
2. Ensure your academic documents are verified and ready for the background check process.

The detailed list of selected candidates is attached to the departmental notice boards.`,
  },
  {
    id: 3,
    title: 'Mandatory Aptitude & Soft Skills Training Phase II',
    category: 'Important',
    date: '08 Aug 2026',
    isNew: false,
    isUrgent: true,
    summary: 'Phase II of the CRT (Campus Recruitment Training) commences from 16th August. 100% attendance is mandatory.',
    content: `Training & Placement Cell, PRMIT&R Badnera

All final year students (B.E/B.Tech) are hereby informed that Phase II of the Campus Recruitment Training (CRT) focusing on Advanced Quantitative Aptitude, Logical Reasoning, and Corporate Communication will commence from 16th August 2026.

Schedule:
- Dates: 16th August to 24th August 2026
- Timing: 10:00 AM to 4:00 PM daily
- Venue: Main Auditorium, PRMIT&R

Guidelines:
- 100% attendance is strictly mandatory.
- Students with less than 90% attendance in CRT will be debarred from upcoming Tier-1 company drives.
- A mock assessment will be conducted on the final day.

Please carry your college ID cards and necessary stationery.`,
  },
  {
    id: 4,
    title: 'Wipro Elite NTH - Pre-Placement Talk',
    category: 'General',
    date: '05 Aug 2026',
    isNew: false,
    isUrgent: false,
    summary: 'Wipro HR team will conduct a virtual Pre-Placement Talk (PPT) to brief students about the Elite NTH hiring process.',
    content: `Training & Placement Cell, PRMIT&R Badnera

Wipro is conducting its Elite National Talent Hunt (NTH) for the 2026 passing out batch. Prior to the online assessment, a Pre-Placement Talk (PPT) will be conducted by the Wipro Campus HR Team.

Event Details:
- Date: 10th August 2026
- Time: 11:30 AM to 01:00 PM
- Platform: WebEx

Agenda:
1. Overview of Wipro's corporate culture.
2. Details regarding the Elite NTH role and compensation package (3.5 LPA).
3. Assessment pattern (Aptitude, Written Communication, and Online Programming).
4. Q&A session.

The WebEx joining link will be shared via your official college email groups one day prior to the event. Attendance will be recorded.`,
  }
];

export default function NoticeBoard({ onBack, onOpenLogin, onOpenCompanies, onOpenPlacements, onOpenContact, user, onOpenProfile }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [expandedNoticeId, setExpandedNoticeId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleNotice = (id) => {
    setExpandedNoticeId(prev => prev === id ? null : id);
  };

  const filteredNotices = NOTICES.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          notice.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || notice.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="page-root">
      <header className="nb-hero-section">
        <Navbar
          activePage="notice"
          onOpenLogin={onOpenLogin}
          onOpenHome={onBack}
          onOpenCompanies={onOpenCompanies}
          onOpenPlacements={onOpenPlacements}
          onOpenContact={onOpenContact}
          onOpenNoticeBoard={() => {}}
          onOpenProfile={onOpenProfile}
          user={user}
          useEmojiLogo={true}
        />
        <div className="nb-hero-body">
          <div className="nb-hero-content">
            <h1>Notice Board</h1>
            <p className="description">
              Stay updated with the latest placement drives, results, and important announcements from the T&P Cell.
            </p>
          </div>
        </div>
      </header>

      <main className="container nb-main-container">
        <div className="nb-controls">
          <div className="nb-search">
            <svg className="nb-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search notices..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="nb-filters">
            {['All', 'Placement Drive', 'Results', 'Important', 'General'].map(cat => (
              <button 
                key={cat} 
                className={`nb-filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="nb-list">
          {filteredNotices.length > 0 ? (
            filteredNotices.map(notice => (
              <div key={notice.id} className={`nb-card ${expandedNoticeId === notice.id ? 'expanded' : ''} ${notice.isUrgent ? 'urgent-border' : ''}`}>
                <div className="nb-card-header" onClick={() => toggleNotice(notice.id)}>
                  <div className="nb-card-meta">
                    <span className="nb-date">{notice.date}</span>
                    <span className={`nb-category-badge ${notice.category.toLowerCase().replace(' ', '-')}`}>
                      {notice.category}
                    </span>
                    {notice.isUrgent && <span className="nb-badge urgent">Urgent</span>}
                    {notice.isNew && <span className="nb-badge new">New</span>}
                  </div>
                  <h2 className="nb-card-title">{notice.title}</h2>
                  <p className="nb-card-summary">{notice.summary}</p>
                  
                  <div className="nb-expand-toggle">
                    {expandedNoticeId === notice.id ? 'Read Less' : 'Read More'}
                    <svg className={`nb-chevron ${expandedNoticeId === notice.id ? 'up' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                
                {expandedNoticeId === notice.id && (
                  <div className="nb-card-content">
                    <div className="nb-content-inner">
                      {notice.content.split('\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="nb-no-results">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <h3>No notices found</h3>
              <p>Try adjusting your search or category filters.</p>
            </div>
          )}
        </div>
      </main>
      <Footer 
        onOpenHome={onBack}
        onOpenCompanies={onOpenCompanies}
        onOpenPlacements={onOpenPlacements}
        onOpenNoticeBoard={() => {}}
        onOpenContact={onOpenContact} 
      />
    </div>
  );
}
