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

export default function NoticeBoard({ onBack, onOpenLogin, onOpenCompanies, onOpenPlacements, onOpenContact, user, onOpenProfile, initialShowAddModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [expandedNoticeId, setExpandedNoticeId] = useState(null);

  const [notices, setNotices] = useState(() => {
    try {
      const deletedIds = JSON.parse(localStorage.getItem('cpms_deleted_notices') || '[]');
      const editedNotices = JSON.parse(localStorage.getItem('cpms_edited_notices') || '{}');
      const saved = localStorage.getItem('cpms_custom_notices');
      let combined = [];
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          combined = [...parsed];
        }
      }
      combined = [...combined, ...NOTICES];

      combined = combined.map(n => editedNotices[n.id] ? { ...n, ...editedNotices[n.id] } : n);
      return combined.filter(n => !deletedIds.includes(n.id));
    } catch (e) {
      console.error(e);
      return NOTICES;
    }
  });

  const [showAddNoticeModal, setShowAddNoticeModal] = useState(Boolean(initialShowAddModal));
  const [editingNotice, setEditingNotice] = useState(null);
  const [noticeForm, setNoticeForm] = useState({
    title: '',
    category: 'Placement Drive',
    date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    summary: '',
    content: '',
    isUrgent: false,
    isNew: true
  });

  useEffect(() => {
    if (initialShowAddModal) {
      setShowAddNoticeModal(true);
    }
  }, [initialShowAddModal]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleNotice = (id) => {
    setExpandedNoticeId(prev => prev === id ? null : id);
  };

  const handleAddNoticeSubmit = (e) => {
    e.preventDefault();
    if (!noticeForm.title.trim()) {
      alert('Notice Title is required');
      return;
    }

    const newNotice = {
      id: Date.now(),
      title: noticeForm.title.trim(),
      category: noticeForm.category,
      date: noticeForm.date.trim() || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      isNew: Boolean(noticeForm.isNew),
      isUrgent: Boolean(noticeForm.isUrgent),
      summary: noticeForm.summary.trim() || noticeForm.title.trim(),
      content: noticeForm.content.trim() || noticeForm.summary.trim() || noticeForm.title.trim()
    };

    const updated = [newNotice, ...notices];
    setNotices(updated);
    try {
      const customOnly = JSON.parse(localStorage.getItem('cpms_custom_notices') || '[]');
      localStorage.setItem('cpms_custom_notices', JSON.stringify([newNotice, ...customOnly]));
    } catch (err) {
      console.error(err);
    }

    setShowAddNoticeModal(false);
    setNoticeForm({
      title: '',
      category: 'Placement Drive',
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      summary: '',
      content: '',
      isUrgent: false,
      isNew: true
    });
    alert(`Notice "${newNotice.title}" published successfully!`);
  };

  const handleOpenEditNotice = (notice, e) => {
    if (e) e.stopPropagation();
    setEditingNotice({ ...notice });
  };

  const handleEditNoticeSubmit = (e) => {
    e.preventDefault();
    if (!editingNotice.title.trim()) {
      alert('Notice Title is required');
      return;
    }

    const updated = notices.map(n => n.id === editingNotice.id ? { ...editingNotice } : n);
    setNotices(updated);

    try {
      const custom = JSON.parse(localStorage.getItem('cpms_custom_notices') || '[]');
      const customUpdated = custom.map(n => n.id === editingNotice.id ? { ...editingNotice } : n);
      localStorage.setItem('cpms_custom_notices', JSON.stringify(customUpdated));

      const edited = JSON.parse(localStorage.getItem('cpms_edited_notices') || '{}');
      edited[editingNotice.id] = { ...editingNotice };
      localStorage.setItem('cpms_edited_notices', JSON.stringify(edited));
    } catch (err) {
      console.error(err);
    }

    setEditingNotice(null);
    alert(`Notice "${editingNotice.title}" updated successfully!`);
  };

  const handleDeleteNotice = (notice, e) => {
    if (e) e.stopPropagation();
    const confirmed = window.confirm(`Are you sure you want to delete notice "${notice.title}"?`);
    if (!confirmed) return;

    const updated = notices.filter(n => n.id !== notice.id);
    setNotices(updated);

    try {
      const custom = JSON.parse(localStorage.getItem('cpms_custom_notices') || '[]');
      const filteredCustom = custom.filter(n => n.id !== notice.id);
      localStorage.setItem('cpms_custom_notices', JSON.stringify(filteredCustom));

      const deleted = JSON.parse(localStorage.getItem('cpms_deleted_notices') || '[]');
      if (!deleted.includes(notice.id)) {
        deleted.push(notice.id);
        localStorage.setItem('cpms_deleted_notices', JSON.stringify(deleted));
      }

      const edited = JSON.parse(localStorage.getItem('cpms_edited_notices') || '{}');
      delete edited[notice.id];
      localStorage.setItem('cpms_edited_notices', JSON.stringify(edited));
    } catch (err) {
      console.error(err);
    }

    if (expandedNoticeId === notice.id) {
      setExpandedNoticeId(null);
    }
    alert(`Notice "${notice.title}" deleted successfully.`);
  };

  const filteredNotices = notices.filter(notice => {
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
          {user?.role === 'admin' && (
            <button 
              className="nb-add-notice-btn"
              onClick={() => setShowAddNoticeModal(true)}
              type="button"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Add Notice</span>
            </button>
          )}
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
                  <div className="nb-card-top-row">
                    <div className="nb-card-meta">
                      <span className="nb-date">{notice.date}</span>
                      <span className={`nb-category-badge ${notice.category.toLowerCase().replace(' ', '-')}`}>
                        {notice.category}
                      </span>
                      {notice.isUrgent && <span className="nb-badge urgent">Urgent</span>}
                      {notice.isNew && <span className="nb-badge new">New</span>}
                    </div>

                    {user?.role === 'admin' && (
                      <div className="nb-card-admin-actions" onClick={(e) => e.stopPropagation()}>
                        <button 
                          className="nb-card-action-btn nb-card-edit-btn" 
                          title="Edit Notice"
                          type="button"
                          onClick={(e) => handleOpenEditNotice(notice, e)}
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                          </svg>
                          <span>Edit</span>
                        </button>
                        <button 
                          className="nb-card-action-btn nb-card-delete-btn" 
                          title="Delete Notice"
                          type="button"
                          onClick={(e) => handleDeleteNotice(notice, e)}
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                          <span>Delete</span>
                        </button>
                      </div>
                    )}
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

      {/* ── Add Notice Modal ── */}
      {showAddNoticeModal && (
        <div className="admin-modal-overlay" onClick={() => setShowAddNoticeModal(false)}>
          <div className="admin-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <div className="admin-modal-title-wrap">
                <span className="admin-modal-badge">ADMIN ACTION</span>
                <h3>Post Announcement / Notice</h3>
              </div>
              <button 
                className="admin-modal-close" 
                onClick={() => setShowAddNoticeModal(false)}
                type="button"
              >
                ✕
              </button>
            </div>

            <form className="admin-modal-form" onSubmit={handleAddNoticeSubmit}>
              <div className="admin-form-group">
                <label>Notice Title *</label>
                <input 
                  type="text" 
                  placeholder="e.g. Infosys Campus Drive 2026 - Registration Open" 
                  value={noticeForm.title} 
                  onChange={(e) => setNoticeForm({ ...noticeForm, title: e.target.value })}
                  required
                />
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Category *</label>
                  <select 
                    value={noticeForm.category} 
                    onChange={(e) => setNoticeForm({ ...noticeForm, category: e.target.value })}
                  >
                    {['Placement Drive', 'Results', 'Important', 'General'].map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="admin-form-group">
                  <label>Display Date</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 16 Sep 2026" 
                    value={noticeForm.date} 
                    onChange={(e) => setNoticeForm({ ...noticeForm, date: e.target.value })}
                  />
                </div>
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={noticeForm.isUrgent} 
                      onChange={(e) => setNoticeForm({ ...noticeForm, isUrgent: e.target.checked })} 
                    />
                    Mark as Urgent (Red Accent)
                  </label>
                </div>
                <div className="admin-form-group">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={noticeForm.isNew} 
                      onChange={(e) => setNoticeForm({ ...noticeForm, isNew: e.target.checked })} 
                    />
                    Mark with 'New' Badge
                  </label>
                </div>
              </div>

              <div className="admin-form-group">
                <label>Summary (Brief highlight for cards)</label>
                <input 
                  type="text" 
                  placeholder="Short 1-line summary displayed on the card..." 
                  value={noticeForm.summary} 
                  onChange={(e) => setNoticeForm({ ...noticeForm, summary: e.target.value })}
                />
              </div>

              <div className="admin-form-group">
                <label>Full Announcement Details / Content</label>
                <textarea 
                  rows={4}
                  className="admin-form-textarea"
                  placeholder="Enter complete drive schedule, eligibility criteria, CTC, instructions, links..."
                  value={noticeForm.content}
                  onChange={(e) => setNoticeForm({ ...noticeForm, content: e.target.value })}
                />
              </div>

              <div className="admin-modal-actions">
                <button 
                  type="button" 
                  className="admin-btn-secondary"
                  onClick={() => setShowAddNoticeModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="admin-btn-primary"
                >
                  📢 Publish Notice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Edit Notice Modal ── */}
      {editingNotice && (
        <div className="admin-modal-overlay" onClick={() => setEditingNotice(null)}>
          <div className="admin-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <div className="admin-modal-title-wrap">
                <span className="admin-modal-badge">ADMIN ACTION</span>
                <h3>Edit Notice Announcement</h3>
              </div>
              <button 
                className="admin-modal-close" 
                onClick={() => setEditingNotice(null)}
                type="button"
              >
                ✕
              </button>
            </div>

            <form className="admin-modal-form" onSubmit={handleEditNoticeSubmit}>
              <div className="admin-form-group">
                <label>Notice Title *</label>
                <input 
                  type="text" 
                  placeholder="e.g. Infosys Campus Drive 2026 Batch" 
                  value={editingNotice.title} 
                  onChange={(e) => setEditingNotice({ ...editingNotice, title: e.target.value })}
                  required
                />
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Category *</label>
                  <select 
                    value={editingNotice.category} 
                    onChange={(e) => setEditingNotice({ ...editingNotice, category: e.target.value })}
                  >
                    <option value="Placement Drive">Placement Drive</option>
                    <option value="Results">Results</option>
                    <option value="Important">Important</option>
                    <option value="General">General</option>
                  </select>
                </div>
                <div className="admin-form-group">
                  <label>Date</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 16 Aug 2026" 
                    value={editingNotice.date} 
                    onChange={(e) => setEditingNotice({ ...editingNotice, date: e.target.value })}
                  />
                </div>
              </div>

              <div className="admin-form-row" style={{ marginTop: '0.25rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.85rem', color: '#334155' }}>
                  <input 
                    type="checkbox" 
                    checked={editingNotice.isUrgent} 
                    onChange={(e) => setEditingNotice({ ...editingNotice, isUrgent: e.target.checked })}
                  />
                  Mark as Urgent Alert
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.85rem', color: '#334155' }}>
                  <input 
                    type="checkbox" 
                    checked={editingNotice.isNew} 
                    onChange={(e) => setEditingNotice({ ...editingNotice, isNew: e.target.checked })}
                  />
                  Show 'NEW' Ribbon
                </label>
              </div>

              <div className="admin-form-group">
                <label>Summary (Preview)</label>
                <input 
                  type="text" 
                  placeholder="Brief one-line overview..." 
                  value={editingNotice.summary} 
                  onChange={(e) => setEditingNotice({ ...editingNotice, summary: e.target.value })}
                />
              </div>

              <div className="admin-form-group">
                <label>Full Announcement Details / Content</label>
                <textarea 
                  rows={4}
                  className="admin-form-textarea"
                  placeholder="Enter complete drive schedule, eligibility criteria, CTC, instructions, links..."
                  value={editingNotice.content}
                  onChange={(e) => setEditingNotice({ ...editingNotice, content: e.target.value })}
                />
              </div>

              <div className="admin-modal-actions">
                <button 
                  type="button" 
                  className="admin-btn-secondary"
                  onClick={() => setEditingNotice(null)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="admin-btn-primary"
                >
                  💾 Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
