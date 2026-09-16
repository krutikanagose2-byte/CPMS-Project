import React, { useState } from 'react';
import './StudentOverview.css';

export default function AdminControlPanel({ 
  user, 
  onBack, 
  onNavigateTab,
  onOpenCompanies,
  onOpenPlacements,
  onOpenNoticeBoard
}) {
  const [userData, setUserData] = useState({
    name: '',
    enrollmentNo: '',
    email: '',
    password: '',
    role: 'admin',
    branch: 'T&P Cell'
  });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ text: '', type: '' });

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg({ text: '', type: '' });

    try {
      const res = await fetch('http://localhost:5000/api/auth/add-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      const data = await res.json();
      if (res.ok) {
        setStatusMsg({ text: `Success! ${userData.role === 'admin' ? 'Admin' : 'Student'} (${userData.name}) created successfully.`, type: 'success' });
        setUserData({
          name: '',
          enrollmentNo: '',
          email: '',
          password: '',
          role: 'admin',
          branch: 'T&P Cell'
        });
      } else {
        setStatusMsg({ text: data.message || 'Failed to create user account.', type: 'error' });
      }
    } catch (err) {
      setStatusMsg({ text: 'Error connecting to server.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overview-container">
      {/* Header */}
      <div className="overview-header">
        <div>
          <h2>
            Admin Control Center <span role="img" aria-label="shield">🛡️</span>
          </h2>
          <p>
            Logged in as <b>{user?.name || 'System Administrator'}</b> (Enrollment ID: <code>{user?.enrollmentNo || '24BTBT2005'}</code>)
          </p>
        </div>
        <div className="date-display">
          <i className="fas fa-user-shield"></i> Privilege: Full Administrator
        </div>
      </div>

      {/* Quick Stats Row */}
      <div className="stats-row">
        <div 
          className="t-card stat-box"
          style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
          onClick={() => onOpenCompanies && onOpenCompanies(false)}
          title="Go to Companies"
        >
          <div className="stat-icon-bg bg-blue-light text-blue"><i className="fas fa-building"></i></div>
          <div className="stat-content">
            <span className="stat-label">Companies</span>
            <span className="stat-value text-blue">120+</span>
            <span className="stat-sub">Active Recruiters →</span>
          </div>
        </div>
        <div 
          className="t-card stat-box"
          style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
          onClick={() => onOpenPlacements && onOpenPlacements(false)}
          title="Go to Placements"
        >
          <div className="stat-icon-bg bg-purple-light text-purple"><i className="fas fa-user-graduate"></i></div>
          <div className="stat-content">
            <span className="stat-label">Total Placements</span>
            <span className="stat-value text-purple">750+</span>
            <span className="stat-sub">Students Placed →</span>
          </div>
        </div>
        <div 
          className="t-card stat-box"
          style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
          onClick={() => onNavigateTab && onNavigateTab('statistics')}
          title="View Placement Statistics"
        >
          <div className="stat-icon-bg bg-green-light text-green"><i className="fas fa-chart-line"></i></div>
          <div className="stat-content">
            <span className="stat-label">Placement Rate</span>
            <span className="stat-value text-green">85%</span>
            <span className="stat-sub">Campus Conversion →</span>
          </div>
        </div>
        <div 
          className="t-card stat-box"
          style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
          onClick={() => onOpenNoticeBoard && onOpenNoticeBoard(false)}
          title="Go to Notice Board"
        >
          <div className="stat-icon-bg bg-orange-light text-orange"><i className="fas fa-bullhorn"></i></div>
          <div className="stat-content">
            <span className="stat-label">Notices & Drives</span>
            <span className="stat-value text-orange">Active</span>
            <span className="stat-sub">T&P Notice Board →</span>
          </div>
        </div>
      </div>

      {/* Admin Action Shortcuts Grid */}
      <div className="dashboard-grid">
        <div className="t-card span-2">
          <div className="t-card-header">
            <h3 className="t-card-title">⚡ Quick Record Management</h3>
          </div>
          <div style={{ padding: '1.25rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            
            {/* Card 1: Add Company */}
            <div 
              style={{
                padding: '1rem',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                background: '#f8fafc',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2563eb';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 14px rgba(37,99,235,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={() => onOpenCompanies && onOpenCompanies(true)}
            >
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#1e40af', fontSize: '1rem' }}>🏢 Add Company</h4>
                <p style={{ margin: '0 0 0.85rem 0', fontSize: '0.82rem', color: '#64748b' }}>
                  Add new recruiting partners, salary packages, eligibility, and descriptions.
                </p>
              </div>
              <div>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onOpenCompanies) onOpenCompanies(true);
                  }}
                  style={{ display: 'inline-block', background: '#2563eb', color: '#fff', border: 'none', padding: '0.45rem 0.85rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Go to Companies →
                </button>
              </div>
            </div>

            {/* Card 2: Add Student Placement */}
            <div 
              style={{
                padding: '1rem',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                background: '#f8fafc',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#7c3aed';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 14px rgba(124,58,237,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={() => onOpenPlacements && onOpenPlacements(true)}
            >
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#7c3aed', fontSize: '1rem' }}>🎓 Add Student Placement</h4>
                <p style={{ margin: '0 0 0.85rem 0', fontSize: '0.82rem', color: '#64748b' }}>
                  Publish newly placed students, branch, package, CGPA, and testimonials.
                </p>
              </div>
              <div>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onOpenPlacements) onOpenPlacements(true);
                  }}
                  style={{ display: 'inline-block', background: '#7c3aed', color: '#fff', border: 'none', padding: '0.45rem 0.85rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Go to Placements →
                </button>
              </div>
            </div>

            {/* Card 3: Add Notice */}
            <div 
              style={{
                padding: '1rem',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                background: '#f8fafc',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#059669';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 14px rgba(5,150,105,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={() => onOpenNoticeBoard && onOpenNoticeBoard(true)}
            >
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#059669', fontSize: '1rem' }}>📢 Add Notice</h4>
                <p style={{ margin: '0 0 0.85rem 0', fontSize: '0.82rem', color: '#64748b' }}>
                  Post upcoming placement drive dates, shortlists, results, or training alerts.
                </p>
              </div>
              <div>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onOpenNoticeBoard) onOpenNoticeBoard(true);
                  }}
                  style={{ display: 'inline-block', background: '#059669', color: '#fff', border: 'none', padding: '0.45rem 0.85rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Go to Notice Board →
                </button>
              </div>
            </div>

            {/* Card 4: User Data & Documents */}
            <div 
              style={{
                padding: '1rem',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                background: '#f8fafc',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0284c7';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 14px rgba(2,132,199,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={() => onNavigateTab && onNavigateTab('userdata')}
            >
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#0284c7', fontSize: '1rem' }}>🗂️ User Data & Documents</h4>
                <p style={{ margin: '0 0 0.85rem 0', fontSize: '0.82rem', color: '#64748b' }}>
                  Inspect registered students' profile data, academic records, and all stored documents.
                </p>
              </div>
              <div>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onNavigateTab) onNavigateTab('userdata');
                  }} 
                  style={{ display: 'inline-block', background: '#0284c7', color: '#fff', border: 'none', padding: '0.45rem 0.85rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Go to User Data →
                </button>
              </div>
            </div>

            {/* Card 5: User Messages & Queries */}
            <div 
              style={{
                padding: '1rem',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                background: '#f8fafc',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2563eb';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 14px rgba(37,99,235,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={() => onNavigateTab && onNavigateTab('messages')}
            >
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#2563eb', fontSize: '1rem' }}>💬 User Messages & Queries</h4>
                <p style={{ margin: '0 0 0.85rem 0', fontSize: '0.82rem', color: '#64748b' }}>
                  Review incoming student inquiries, placement queries, and send official replies.
                </p>
              </div>
              <div>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onNavigateTab) onNavigateTab('messages');
                  }} 
                  style={{ display: 'inline-block', background: '#2563eb', color: '#fff', border: 'none', padding: '0.45rem 0.85rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Go to Messages →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Create New Admin or Student Account */}
        <div className="t-card span-2">
          <div className="t-card-header">
            <h3 className="t-card-title">👤 Create New Admin or Student Account</h3>
          </div>
          <div style={{ padding: '1.25rem' }}>
            {statusMsg.text && (
              <div style={{
                marginBottom: '1rem',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: 600,
                backgroundColor: statusMsg.type === 'success' ? '#f0fdf4' : '#fef2f2',
                color: statusMsg.type === 'success' ? '#166534' : '#991b1b',
                border: `1px solid ${statusMsg.type === 'success' ? '#bbf7d0' : '#fecaca'}`
              }}>
                {statusMsg.type === 'success' ? '✅ ' : '❌ '} {statusMsg.text}
              </div>
            )}

            <form onSubmit={handleCreateUser} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px', color: '#334155' }}>
                  Account Role *
                </label>
                <select 
                  style={{ width: '100%', padding: '0.55rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem' }}
                  value={userData.role}
                  onChange={(e) => setUserData({ ...userData, role: e.target.value })}
                >
                  <option value="admin">Admin (T&P Staff / Placement Officer)</option>
                  <option value="student">Student User</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px', color: '#334155' }}>
                  Department / Branch
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. T&P Cell / CSE / IT"
                  style={{ width: '100%', padding: '0.55rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem', boxSpacing: 'border-box' }}
                  value={userData.branch}
                  onChange={(e) => setUserData({ ...userData, branch: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px', color: '#334155' }}>
                  Full Name *
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Prof. Rajesh Sharma"
                  style={{ width: '100%', padding: '0.55rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem' }}
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px', color: '#334155' }}>
                  Enrollment / User ID *
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. 24BTBT2006"
                  style={{ width: '100%', padding: '0.55rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem' }}
                  value={userData.enrollmentNo}
                  onChange={(e) => setUserData({ ...userData, enrollmentNo: e.target.value.toUpperCase() })}
                  pattern="^\d{2}[A-Z]{4}\d{4}$"
                  title="Format: 2 digits, 4 letters, 4 digits (e.g. 24BTBT2006)"
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px', color: '#334155' }}>
                  Email Address *
                </label>
                <input 
                  type="email" 
                  placeholder="staff@prmitr.edu.in"
                  style={{ width: '100%', padding: '0.55rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem' }}
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '4px', color: '#334155' }}>
                  Initial Password *
                </label>
                <input 
                  type="password" 
                  placeholder="Enter secure password"
                  style={{ width: '100%', padding: '0.55rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem' }}
                  value={userData.password}
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                  required
                />
              </div>

              <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                <button 
                  type="submit" 
                  disabled={loading}
                  style={{
                    background: '#2563eb',
                    color: '#fff',
                    border: 'none',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '6px',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {loading ? 'Creating...' : '+ Create Account'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
