import React, { useState, useRef, useEffect } from 'react';
import './UserData.css';

const UserData = ({ user, onUpdateUser }) => {
    const isAdmin = user?.role === 'admin';
    const [allUsers, setAllUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    // As requested: firstly show user registration request for admin
    const [activeAdminTab, setActiveAdminTab] = useState(isAdmin ? 'requests' : 'details'); // 'requests' | 'details'
    const [searchQuery, setSearchQuery] = useState('');
    const [requestFilter, setRequestFilter] = useState('ALL'); // 'ALL' | 'Pending' | 'Accepted' | 'Rejected'
    const [isSaving, setIsSaving] = useState(false);
    const [viewingDoc, setViewingDoc] = useState(null);
    const [verificationRemark, setVerificationRemark] = useState('');

    // Fetch all users accessing this website from database
    const fetchUsers = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/auth/users');
            if (res.ok) {
                const data = await res.json();
                if (Array.isArray(data)) {
                    setAllUsers(data);
                    // Determine selected user
                    if (selectedUserId) {
                        const updated = data.find(u => (u._id || u.id) === selectedUserId);
                        if (updated) setCurrentUser(updated);
                    } else if (data.length > 0) {
                        // Look for first accepted candidate or default to first student
                        const accepted = data.find(u => u.role !== 'admin' && (u.registrationStatus === 'Accepted' || (!u.registrationStatus && u.verificationStatus === 'Verified')));
                        if (accepted) {
                            setSelectedUserId(accepted._id || accepted.id);
                            setCurrentUser(accepted);
                        } else {
                            const firstStudent = data.find(u => u.role !== 'admin') || data[0];
                            setSelectedUserId(firstStudent._id || firstStudent.id);
                            setCurrentUser(firstStudent);
                        }
                    }
                }
            }
        } catch (err) {
            console.error("Error fetching users:", err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [isAdmin]);

    // Keep currentUser synchronized with selectedUserId
    useEffect(() => {
        if (selectedUserId && allUsers.length > 0) {
            const match = allUsers.find(u => (u._id || u.id) === selectedUserId);
            if (match) {
                setCurrentUser(match);
                setVerificationRemark(match.verificationRemark || '');
            }
        } else if (!isAdmin && user) {
            setCurrentUser(user);
        }
    }, [selectedUserId, allUsers, isAdmin, user]);

    // Categorize candidates
    const studentUsers = allUsers.filter(u => u.role !== 'admin');
    
    // Check if a user is accepted
    const isUserAccepted = (u) => {
        if (!u) return false;
        if (u.role === 'admin') return true;
        return u.registrationStatus === 'Accepted' || (!u.registrationStatus && u.verificationStatus === 'Verified');
    };

    const pendingRequests = studentUsers.filter(u => !isUserAccepted(u) && u.registrationStatus !== 'Rejected');
    const acceptedCandidates = studentUsers.filter(u => isUserAccepted(u));
    const rejectedRequests = studentUsers.filter(u => u.registrationStatus === 'Rejected');

    // Handle Accept Registration Request
    const handleAcceptRequest = async (targetUser) => {
        const targetId = targetUser?._id || targetUser?.id;
        if (!targetId) return;

        setIsSaving(true);
        try {
            const response = await fetch(`http://localhost:5000/api/student/registration-status/${targetId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    status: 'Accepted',
                    verifiedBy: user?.name || 'Administrator',
                    remark: 'Registration request verified and accepted by administrator'
                })
            });

            if (response.ok) {
                const result = await response.json();
                const updated = result.user;
                setAllUsers(prev => prev.map(u => (u._id || u.id) === targetId ? updated : u));
                setSelectedUserId(targetId);
                setCurrentUser(updated);
                alert(`Registration request for ${targetUser.name} (${targetUser.enrollmentNo}) has been ACCEPTED! Candidate details and documents are now unlocked.`);
                // Switch to candidate details view
                setActiveAdminTab('details');
            } else {
                alert("Failed to accept registration request.");
            }
        } catch (err) {
            console.error("Error accepting request:", err);
            alert("Error connecting to server.");
        } finally {
            setIsSaving(false);
        }
    };

    // Handle Reject Registration Request
    const handleRejectRequest = async (targetUser) => {
        const targetId = targetUser?._id || targetUser?.id;
        if (!targetId) return;

        const reason = prompt(`Enter reason for rejecting registration request for ${targetUser.name}:`, "Invalid student credentials or incomplete documentation");
        if (reason === null) return;

        setIsSaving(true);
        try {
            const response = await fetch(`http://localhost:5000/api/student/registration-status/${targetId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    status: 'Rejected',
                    verifiedBy: user?.name || 'Administrator',
                    remark: reason || 'Registration rejected by administrator'
                })
            });

            if (response.ok) {
                const result = await response.json();
                const updated = result.user;
                setAllUsers(prev => prev.map(u => (u._id || u.id) === targetId ? updated : u));
                if (currentUser && (currentUser._id || currentUser.id) === targetId) {
                    setCurrentUser(updated);
                }
                alert(`Registration request for ${targetUser.name} marked as REJECTED.`);
            } else {
                alert("Failed to update status.");
            }
        } catch (err) {
            console.error("Error rejecting request:", err);
            alert("Error connecting to server.");
        } finally {
            setIsSaving(false);
        }
    };

    // Filter requests list
    const filteredRequests = studentUsers.filter(u => {
        const matchesQuery = !searchQuery.trim() || (
            (u.name && u.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (u.enrollmentNo && u.enrollmentNo.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (u.email && u.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (u.branch && u.branch.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        const accepted = isUserAccepted(u);
        const isRejected = u.registrationStatus === 'Rejected';
        const isPending = !accepted && !isRejected;

        if (requestFilter === 'Pending') return matchesQuery && isPending;
        if (requestFilter === 'Accepted') return matchesQuery && accepted;
        if (requestFilter === 'Rejected') return matchesQuery && isRejected;
        return matchesQuery;
    });

    // Synthesize stored documents for the selected user
    const existingDocs = Array.isArray(currentUser?.myDocuments) ? currentUser.myDocuments : [];
    const findDoc = (kw) => existingDocs.find(d => d.name && d.name.toLowerCase().includes(kw.toLowerCase()));

    const doc10th = findDoc('10th');
    const doc12th = findDoc('12th');
    const docBtech = findDoc('b.tech') || findDoc('degree') || findDoc('engineering');

    const profileDocuments = [
        {
            key: 'photo',
            name: 'Profile Photograph',
            type: 'Identity Photo',
            source: 'Candidate Avatar',
            icon: 'fas fa-id-badge',
            iconColor: '#2563eb',
            uploaded: Boolean(currentUser?.photoUrl),
            fileUrl: currentUser?.photoUrl || null,
            date: currentUser?.photoUrl ? 'Stored in Database' : 'Not Uploaded'
        },
        {
            key: 'signature',
            name: 'Candidate Digital Signature',
            type: 'Digital Signature',
            source: 'Verification Signature',
            icon: 'fas fa-signature',
            iconColor: '#7c3aed',
            uploaded: Boolean(currentUser?.signatureUrl),
            fileUrl: currentUser?.signatureUrl || null,
            date: currentUser?.signatureUrl ? 'Stored in Database' : 'Not Uploaded'
        },
        {
            key: 'resume',
            name: currentUser?.resume?.name || 'Curriculum Vitae / Resume',
            type: 'Resume / CV',
            source: 'Career Profile',
            icon: 'fas fa-file-pdf',
            iconColor: '#dc2626',
            uploaded: Boolean(currentUser?.resumeUrl || (currentUser?.resume && currentUser?.resume?.url && currentUser?.resume?.url !== '#')),
            fileUrl: currentUser?.resumeUrl || (currentUser?.resume ? currentUser?.resume?.url : null),
            date: currentUser?.resume?.date || (currentUser?.resumeUrl ? 'Stored in Database' : 'Not Uploaded')
        },
        {
            key: 'doc_10th',
            name: '10th (SSC) Marksheet / Certificate',
            type: 'Marksheet',
            source: 'Academic Verification',
            icon: 'fas fa-file-invoice',
            iconColor: '#0284c7',
            uploaded: Boolean(doc10th && doc10th.uploaded && doc10th.fileUrl),
            fileUrl: doc10th ? doc10th.fileUrl : null,
            date: doc10th ? doc10th.date : 'Not Uploaded'
        },
        {
            key: 'doc_12th',
            name: '12th (HSC) / Diploma Marksheet',
            type: 'Marksheet',
            source: 'Academic Verification',
            icon: 'fas fa-file-invoice',
            iconColor: '#0284c7',
            uploaded: Boolean(doc12th && doc12th.uploaded && doc12th.fileUrl),
            fileUrl: doc12th ? doc12th.fileUrl : null,
            date: doc12th ? doc12th.date : 'Not Uploaded'
        },
        {
            key: 'doc_btech',
            name: 'B.Tech / Degree Grade Sheet',
            type: 'Marksheet',
            source: 'Academic Verification',
            icon: 'fas fa-graduation-cap',
            iconColor: '#0891b2',
            uploaded: Boolean(docBtech && docBtech.uploaded && docBtech.fileUrl),
            fileUrl: docBtech ? docBtech.fileUrl : null,
            date: docBtech ? docBtech.date : 'Not Uploaded'
        }
    ];

    existingDocs.forEach((d, idx) => {
        const lower = (d.name || '').toLowerCase();
        if (!lower.includes('10th') && !lower.includes('12th') && !lower.includes('b.tech') && !lower.includes('resume')) {
            profileDocuments.push({
                key: `custom_${d.id || idx}`,
                id: d.id,
                name: d.name,
                type: d.type || 'Certificate / Other',
                source: 'User Portfolio',
                icon: d.icon || 'fas fa-file-alt',
                iconColor: '#eab308',
                uploaded: Boolean(d.uploaded && d.fileUrl),
                fileUrl: d.fileUrl || null,
                date: d.date || 'Stored'
            });
        }
    });

    const totalDocsCount = profileDocuments.length;
    const uploadedDocsCount = profileDocuments.filter(d => d.uploaded).length;
    const completionPercent = Math.round((uploadedDocsCount / (totalDocsCount || 1)) * 100);

    const isCurrentCandidateAccepted = isUserAccepted(currentUser);

    return (
        <div className="user-data-container">
            {/* Header */}
            <div className="ud-header">
                <div>
                    <h2>
                        <i className="fas fa-user-check"></i> User Data & Registration Requests
                        {isSaving && (
                            <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#2563eb', marginLeft: '12px' }}>
                                <i className="fas fa-spinner fa-spin"></i> Updating Database...
                            </span>
                        )}
                    </h2>
                    <p>Review incoming user registration requests, verify credentials, accept user requests, and inspect approved candidate profiles and stored documents.</p>
                </div>
                {isAdmin && (
                    <button 
                        onClick={fetchUsers} 
                        style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
                        title="Reload live data from database"
                    >
                        <i className="fas fa-sync-alt"></i> Refresh Data
                    </button>
                )}
            </div>

            {/* Quick Metrics */}
            {isAdmin && (
                <div className="ud-stats-grid">
                    <div className="ud-stat-card">
                        <div className="ud-stat-icon-bg ud-stat-icon-yellow">
                            <i className="fas fa-user-clock"></i>
                        </div>
                        <div className="ud-stat-info">
                            <span className="ud-stat-num">{pendingRequests.length}</span>
                            <span className="ud-stat-label">Pending Registration Requests</span>
                        </div>
                    </div>

                    <div className="ud-stat-card">
                        <div className="ud-stat-icon-bg ud-stat-icon-green">
                            <i className="fas fa-user-check"></i>
                        </div>
                        <div className="ud-stat-info">
                            <span className="ud-stat-num">{acceptedCandidates.length}</span>
                            <span className="ud-stat-label">Accepted Candidates</span>
                        </div>
                    </div>

                    <div className="ud-stat-card">
                        <div className="ud-stat-icon-bg ud-stat-icon-blue">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="ud-stat-info">
                            <span className="ud-stat-num">{studentUsers.length}</span>
                            <span className="ud-stat-label">Total Registered Users</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Admin Switcher Tabs: Registration Requests is shown FIRSTLY */}
            {isAdmin && (
                <div className="ud-tabs-switch">
                    <button
                        className={`ud-tab-btn ${activeAdminTab === 'requests' ? 'active' : ''}`}
                        onClick={() => setActiveAdminTab('requests')}
                    >
                        <i className="fas fa-inbox"></i> 1. User Registration Requests
                        {pendingRequests.length > 0 && (
                            <span className="ud-tab-badge">{pendingRequests.length} Pending</span>
                        )}
                    </button>
                    <button
                        className={`ud-tab-btn ${activeAdminTab === 'details' ? 'active' : ''}`}
                        onClick={() => setActiveAdminTab('details')}
                    >
                        <i className="fas fa-id-card"></i> 2. Accepted Candidates Details & Documents
                        <span className="ud-tab-badge green" style={{ marginLeft: '6px' }}>{acceptedCandidates.length} Accepted</span>
                    </button>
                </div>
            )}

            {/* ── VIEW 1: USER REGISTRATION REQUESTS (SHOWN FIRSTLY) ── */}
            {isAdmin && activeAdminTab === 'requests' && (
                <div className="ud-table-card" style={{ marginBottom: '24px' }}>
                    <div className="ud-filter-bar">
                        <div className="ud-search-box">
                            <i className="fas fa-search text-muted"></i>
                            <input
                                type="text"
                                placeholder="Search registration requests by name, enrollment no, or branch..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="ud-filter-pills">
                            <button
                                className={`ud-filter-pill ${requestFilter === 'ALL' ? 'active' : ''}`}
                                onClick={() => setRequestFilter('ALL')}
                            >
                                All ({studentUsers.length})
                            </button>
                            <button
                                className={`ud-filter-pill ${requestFilter === 'Pending' ? 'active' : ''}`}
                                onClick={() => setRequestFilter('Pending')}
                            >
                                Pending ({pendingRequests.length})
                            </button>
                            <button
                                className={`ud-filter-pill ${requestFilter === 'Accepted' ? 'active' : ''}`}
                                onClick={() => setRequestFilter('Accepted')}
                            >
                                Accepted ({acceptedCandidates.length})
                            </button>
                            <button
                                className={`ud-filter-pill ${requestFilter === 'Rejected' ? 'active' : ''}`}
                                onClick={() => setRequestFilter('Rejected')}
                            >
                                Rejected ({rejectedRequests.length})
                            </button>
                        </div>
                    </div>

                    <table className="ud-table">
                        <thead>
                            <tr>
                                <th style={{ width: '28%' }}>Registration Applicant</th>
                                <th style={{ width: '24%' }}>Branch & Contact</th>
                                <th style={{ width: '18%' }}>Academic Standing</th>
                                <th style={{ width: '14%' }}>Request Status</th>
                                <th style={{ width: '16%', textAlign: 'right' }}>Verification Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRequests.length === 0 ? (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center', padding: '36px', color: '#64748b' }}>
                                        <i className="fas fa-check-circle" style={{ fontSize: '32px', color: '#10b981', display: 'block', marginBottom: '8px' }}></i>
                                        No registration requests in this category.
                                    </td>
                                </tr>
                            ) : (
                                filteredRequests.map((u) => {
                                    const uId = u._id || u.id;
                                    const accepted = isUserAccepted(u);
                                    const isRejected = u.registrationStatus === 'Rejected';

                                    return (
                                        <tr key={uId}>
                                            <td>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <div style={{
                                                        width: '38px', height: '38px', borderRadius: '50%',
                                                        background: '#e0f2fe', color: '#0284c7', display: 'flex',
                                                        alignItems: 'center', justifyContent: 'center', fontWeight: 700,
                                                        fontSize: '14px', overflow: 'hidden', flexShrink: 0
                                                    }}>
                                                        {u.photoUrl ? (
                                                            <img src={u.photoUrl} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                        ) : (
                                                            u.name ? u.name.substring(0, 2).toUpperCase() : 'U'
                                                        )}
                                                    </div>
                                                    <div>
                                                        <strong style={{ color: '#0f172a', display: 'block', fontSize: '13px' }}>{u.name}</strong>
                                                        <span style={{ fontSize: '11px', color: '#64748b', fontFamily: 'monospace' }}>
                                                            {u.enrollmentNo}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div style={{ fontSize: '12px', color: '#1e293b', fontWeight: 500 }}>{u.branch || 'Branch Not Assigned'}</div>
                                                <div style={{ fontSize: '11px', color: '#64748b' }}>{u.email}</div>
                                            </td>
                                            <td>
                                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                                    <span style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' }}>
                                                        CGPA: <b>{u.cgpa || (u.academics?.[0]?.score || 'N/A')}</b>
                                                    </span>
                                                    <span style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' }}>
                                                        10th: <b>{u.tenthPercentage ? `${u.tenthPercentage}%` : (u.academics?.[3]?.score ? `${u.academics[3].score}%` : 'N/A')}</b>
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                {accepted ? (
                                                    <span className="ud-status-badge ud-status-verified">
                                                        <i className="fas fa-check-circle"></i> Accepted
                                                    </span>
                                                ) : isRejected ? (
                                                    <span className="ud-status-badge ud-status-rejected">
                                                        <i className="fas fa-times-circle"></i> Rejected
                                                    </span>
                                                ) : (
                                                    <span className="ud-status-badge ud-status-pending">
                                                        <i className="fas fa-clock"></i> Pending Approval
                                                    </span>
                                                )}
                                            </td>
                                            <td style={{ textAlign: 'right' }}>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '6px' }}>
                                                    {!accepted ? (
                                                        <>
                                                            <button
                                                                className="ud-btn-accept-req"
                                                                onClick={() => handleAcceptRequest(u)}
                                                                title="Verify and Accept user registration request"
                                                            >
                                                                <i className="fas fa-check"></i> Accept Request
                                                            </button>
                                                            <button
                                                                className="ud-btn-reject-req"
                                                                onClick={() => handleRejectRequest(u)}
                                                                title="Reject registration request"
                                                            >
                                                                <i className="fas fa-times"></i>
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <button
                                                            style={{
                                                                background: '#2563eb', color: '#fff', border: 'none',
                                                                padding: '6px 12px', borderRadius: '5px', fontSize: '11px',
                                                                fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap'
                                                            }}
                                                            onClick={() => {
                                                                setSelectedUserId(uId);
                                                                setCurrentUser(u);
                                                                setActiveAdminTab('details');
                                                            }}
                                                            title="Inspect full candidate details & documents"
                                                        >
                                                            View Details →
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {/* ── VIEW 2: ACCEPTED CANDIDATE DETAILS & DOCUMENTS (SHOWN AS CURRENTLY AFTER ACCEPTANCE) ── */}
            {(!isAdmin || activeAdminTab === 'details') && (
                <>
                    {/* Candidate Selector Bar for Accepted Candidates */}
                    {isAdmin && (
                        <div className="ud-admin-selector-bar">
                            <div className="ud-admin-selector-label">
                                <i className="fas fa-user-check text-green"></i>
                                <span>Select Accepted Candidate to View Dossier:</span>
                            </div>
                            <select
                                className="ud-admin-select"
                                value={selectedUserId}
                                onChange={(e) => {
                                    const uid = e.target.value;
                                    setSelectedUserId(uid);
                                    const found = allUsers.find(u => (u._id || u.id) === uid);
                                    if (found) setCurrentUser(found);
                                }}
                            >
                                {acceptedCandidates.length === 0 ? (
                                    <option value="">No accepted candidates yet</option>
                                ) : (
                                    acceptedCandidates.map(u => (
                                        <option key={u._id || u.id} value={u._id || u.id}>
                                            {u.name} ({u.enrollmentNo}) - {u.branch || 'Student'} (Accepted)
                                        </option>
                                    ))
                                )}
                            </select>
                        </div>
                    )}

                    {/* Check if the selected candidate is accepted. If NOT accepted yet, do not show details, show approval prompt */}
                    {!isCurrentCandidateAccepted && currentUser?.role !== 'admin' ? (
                        <div className="ud-locked-details-box">
                            <div className="ud-locked-icon">
                                <i className="fas fa-user-lock"></i>
                            </div>
                            <div className="ud-locked-title">
                                Candidate Details Locked (Registration Request Pending)
                            </div>
                            <div className="ud-locked-desc">
                                <strong>{currentUser?.name || 'This candidate'}</strong> ({currentUser?.enrollmentNo || 'ID'}) has submitted a registration request that has not been accepted yet. As per placement policy, you must first verify and accept their registration request before their full profile details and stored documents can be viewed.
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                                <button
                                    className="ud-btn-accept-req"
                                    style={{ padding: '9px 20px', fontSize: '13px' }}
                                    onClick={() => handleAcceptRequest(currentUser)}
                                >
                                    <i className="fas fa-check-circle"></i> Accept {currentUser?.name}'s Request Now
                                </button>
                                <button
                                    className="ud-btn-reject-req"
                                    style={{ padding: '9px 16px', fontSize: '13px' }}
                                    onClick={() => handleRejectRequest(currentUser)}
                                >
                                    <i className="fas fa-times-circle"></i> Reject Request
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Only after accepting request: candidate details shown currently as it is */
                        <>
                            {/* User Profile Card */}
                            <div className="ud-profile-card">
                                <div className="ud-profile-grid">
                                    {/* Left: Avatar & Identity */}
                                    <div className="ud-profile-left">
                                        <div className="ud-avatar-box">
                                            {currentUser?.photoUrl ? (
                                                <img src={currentUser.photoUrl} alt="User Avatar" className="ud-avatar-img" />
                                            ) : (
                                                currentUser?.name ? currentUser.name.substring(0, 2).toUpperCase() : 'U'
                                            )}
                                        </div>
                                        <h3 className="ud-profile-name">{currentUser?.name || 'Registered User'}</h3>
                                        <span className="ud-profile-id">{currentUser?.enrollmentNo || 'N/A'}</span>
                                        <span className={`ud-role-badge ${currentUser?.role === 'admin' ? 'ud-role-admin' : 'ud-role-student'}`}>
                                            {currentUser?.role === 'admin' ? 'Administrator' : 'Student'}
                                        </span>
                                        <div style={{ marginTop: '8px', fontSize: '12px', color: '#475569', fontWeight: '500' }}>
                                            {currentUser?.branch || 'Computer Science & Engineering'}
                                        </div>
                                    </div>

                                    {/* Center: Details & Academics */}
                                    <div className="ud-profile-mid">
                                        <div>
                                            <div className="ud-info-section-title">Contact & Basic Information</div>
                                            <div className="ud-details-list">
                                                <div className="ud-detail-cell">
                                                    <span className="ud-detail-label">Email Address</span>
                                                    <span className="ud-detail-value">{currentUser?.email || 'Not specified'}</span>
                                                </div>
                                                <div className="ud-detail-cell">
                                                    <span className="ud-detail-label">Date of Birth / Gender</span>
                                                    <span className="ud-detail-value">
                                                        {currentUser?.dob || 'DD/MM/YYYY'} {currentUser?.gender ? `(${currentUser.gender})` : ''}
                                                    </span>
                                                </div>
                                                <div className="ud-detail-cell" style={{ gridColumn: 'span 2' }}>
                                                    <span className="ud-detail-label">Permanent / Current Address</span>
                                                    <span className="ud-detail-value">{currentUser?.address || 'PRMIT&R Campus, Badnera - Amravati'}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="ud-info-section-title">Academic Qualifications & Scores</div>
                                            <div className="ud-academic-pills">
                                                <div className="ud-academic-pill">
                                                    <span className="ud-pill-title">10th SSC</span>
                                                    <span className="ud-pill-val">
                                                        {currentUser?.tenthPercentage ? `${currentUser.tenthPercentage}%` : (currentUser?.academics?.[3]?.score ? `${currentUser.academics[3].score}%` : '85.40%')}
                                                    </span>
                                                </div>
                                                <div className="ud-academic-pill">
                                                    <span className="ud-pill-title">12th HSC</span>
                                                    <span className="ud-pill-val">
                                                        {currentUser?.twelfthPercentage ? `${currentUser.twelfthPercentage}%` : (currentUser?.academics?.[2]?.score ? `${currentUser.academics[2].score}%` : '81.20%')}
                                                    </span>
                                                </div>
                                                <div className="ud-academic-pill">
                                                    <span className="ud-pill-title">B.Tech CGPA</span>
                                                    <span className="ud-pill-val">
                                                        {currentUser?.cgpa ? `${currentUser.cgpa} CGPA` : (currentUser?.academics?.[0]?.score ? `${currentUser.academics[0].score} CGPA` : '8.45 CGPA')}
                                                    </span>
                                                </div>
                                                <div className="ud-academic-pill">
                                                    <span className="ud-pill-title">Active Backlogs</span>
                                                    <span className="ud-pill-val" style={{ color: currentUser?.backlogCount > 0 ? '#dc2626' : '#16a34a' }}>
                                                        {currentUser?.backlogCount !== undefined ? currentUser.backlogCount : 0}
                                                    </span>
                                                </div>
                                                <div className="ud-academic-pill">
                                                    <span className="ud-pill-title">Graduation Year</span>
                                                    <span className="ud-pill-val">
                                                        {currentUser?.graduationYear || 2026}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Skills & Links */}
                                        <div>
                                            <div className="ud-info-section-title">Key Skills & Profiles</div>
                                            <div className="ud-skills-list">
                                                {currentUser?.skills && currentUser.skills.length > 0 ? (
                                                    currentUser.skills.map((s, i) => (
                                                        <span key={i} className="ud-skill-tag">{s}</span>
                                                    ))
                                                ) : (
                                                    <>
                                                        <span className="ud-skill-tag">Java</span>
                                                        <span className="ud-skill-tag">Python</span>
                                                        <span className="ud-skill-tag">React.js</span>
                                                        <span className="ud-skill-tag">Data Structures</span>
                                                        <span className="ud-skill-tag">SQL</span>
                                                    </>
                                                )}
                                            </div>
                                            <div className="ud-links-group" style={{ marginTop: '8px' }}>
                                                {currentUser?.linkedin && (
                                                    <a href={currentUser.linkedin} target="_blank" rel="noreferrer" className="ud-social-link">
                                                        <i className="fab fa-linkedin"></i> LinkedIn Profile
                                                    </a>
                                                )}
                                                {currentUser?.github && (
                                                    <a href={currentUser.github} target="_blank" rel="noreferrer" className="ud-social-link">
                                                        <i className="fab fa-github"></i> GitHub Profile
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Signature & Document Stats */}
                                    <div className="ud-profile-right">
                                        <div>
                                            <div className="ud-info-section-title">Digital Signature</div>
                                            <div className="ud-signature-box">
                                                {currentUser?.signatureUrl ? (
                                                    <img src={currentUser.signatureUrl} alt="Candidate Signature" className="ud-signature-img" />
                                                ) : (
                                                    <div style={{ color: '#94a3b8', fontSize: '11px', padding: '12px 0' }}>
                                                        <i className="fas fa-signature" style={{ fontSize: '20px', display: 'block', marginBottom: '4px' }}></i>
                                                        No digital signature stored
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="ud-doc-stats-box">
                                            <div className="ud-doc-stats-title">
                                                <span>Profile Documents</span>
                                                <span>{uploadedDocsCount} of {totalDocsCount} Stored</span>
                                            </div>
                                            <div className="ud-doc-progress-bar">
                                                <div className="ud-doc-progress-fill" style={{ width: `${completionPercent}%` }}></div>
                                            </div>
                                            <div style={{ fontSize: '11px', color: '#15803d', marginTop: '6px', textAlign: 'right', fontWeight: '600' }}>
                                                {completionPercent}% Complete
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stored Profile Documents Table (With ONLY View button) */}
                            <div className="ud-table-card">
                                <div className="ud-table-header">
                                    <h3>
                                        <i className="fas fa-folder-open text-blue"></i> All Documents Stored in Database for {currentUser?.name}
                                    </h3>
                                </div>

                                <table className="ud-table">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '38%' }}>Document Name</th>
                                            <th style={{ width: '18%' }}>Category / Type</th>
                                            <th style={{ width: '18%' }}>Database Status</th>
                                            <th style={{ width: '26%', textAlign: 'right' }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {profileDocuments.map((doc) => (
                                            <tr key={doc.key}>
                                                <td>
                                                    <div className="ud-doc-info">
                                                        <i className={`${doc.icon} ud-doc-icon`} style={{ color: doc.iconColor }}></i>
                                                        <div>
                                                            <div className="ud-doc-title">{doc.name}</div>
                                                            <div className="ud-doc-source">
                                                                <i className="fas fa-tag"></i> {doc.source}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="ud-badge-type">{doc.type}</span>
                                                </td>
                                                <td>
                                                    {doc.uploaded ? (
                                                        <span className="ud-status-badge ud-status-uploaded">
                                                            <i className="fas fa-check-circle"></i> Stored in Database
                                                        </span>
                                                    ) : (
                                                        <span className="ud-status-badge ud-status-pending">
                                                            <i className="fas fa-clock"></i> Not Uploaded
                                                        </span>
                                                    )}
                                                </td>
                                                <td style={{ textAlign: 'right' }}>
                                                    <div className="ud-actions-group" style={{ justifyContent: 'flex-end' }}>
                                                        <button
                                                            className="ud-btn-view"
                                                            onClick={() => {
                                                                if (doc.uploaded) {
                                                                    setViewingDoc(doc);
                                                                } else {
                                                                    alert(`"${doc.name}" has not been uploaded by the candidate yet.`);
                                                                }
                                                            }}
                                                            style={!doc.uploaded ? { opacity: 0.5, background: '#64748b', cursor: 'pointer' } : {}}
                                                            title={doc.uploaded ? "View Document" : "Document not uploaded yet"}
                                                        >
                                                            <i className={`fas ${doc.uploaded ? 'fa-eye' : 'fa-eye-slash'}`}></i> View
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div style={{ padding: '14px 20px', background: '#f8fafc', fontSize: '11px', color: '#64748b', borderTop: '1px solid #e2e8f0' }}>
                                    <i className="fas fa-info-circle text-blue" style={{ marginRight: '6px' }}></i>
                                    Candidate's verified documents are stored in the database and approved for official campus placement drives.
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}

            {/* Document Viewer Modal */}
            {viewingDoc && (
                <div className="ud-modal-backdrop" onClick={() => setViewingDoc(null)}>
                    <div className="ud-modal-container" onClick={(e) => e.stopPropagation()}>
                        <div className="ud-modal-header">
                            <h3>
                                <i className={viewingDoc.icon} style={{ color: viewingDoc.iconColor }}></i>
                                {viewingDoc.name}
                            </h3>
                            <button className="ud-modal-close-btn" onClick={() => setViewingDoc(null)}>
                                &times;
                            </button>
                        </div>

                        <div className="ud-modal-body">
                            {viewingDoc.fileUrl && (viewingDoc.fileUrl.startsWith('data:image') || viewingDoc.key === 'photo' || viewingDoc.key === 'signature') ? (
                                <img
                                    src={viewingDoc.fileUrl}
                                    alt={viewingDoc.name}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '60vh',
                                        objectFit: 'contain',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                        background: '#ffffff'
                                    }}
                                />
                            ) : viewingDoc.fileUrl && (viewingDoc.fileUrl.startsWith('data:application/pdf') || viewingDoc.name.toLowerCase().includes('.pdf')) ? (
                                <iframe
                                    src={viewingDoc.fileUrl}
                                    title={viewingDoc.name}
                                    style={{
                                        width: '100%',
                                        height: '550px',
                                        border: 'none',
                                        borderRadius: '8px',
                                        background: '#ffffff'
                                    }}
                                />
                            ) : viewingDoc.fileUrl ? (
                                <iframe
                                    src={viewingDoc.fileUrl}
                                    title={viewingDoc.name}
                                    style={{
                                        width: '100%',
                                        height: '550px',
                                        border: 'none',
                                        borderRadius: '8px',
                                        background: '#ffffff'
                                    }}
                                />
                            ) : (
                                <div style={{ textAlign: 'center', color: '#64748b' }}>
                                    <i className="fas fa-file-excel" style={{ fontSize: '48px', marginBottom: '12px', display: 'block' }}></i>
                                    <p>Document preview is currently unavailable.</p>
                                </div>
                            )}
                        </div>

                        <div className="ud-modal-footer">
                            <div style={{ fontSize: '12px', color: '#64748b' }}>
                                Category: <strong>{viewingDoc.type}</strong>
                            </div>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                {viewingDoc.fileUrl && (
                                    <a
                                        href={viewingDoc.fileUrl}
                                        download={viewingDoc.name}
                                        className="ud-btn-view"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <i className="fas fa-download"></i> Download
                                    </a>
                                )}
                                <button
                                    className="ud-btn-replace"
                                    onClick={() => setViewingDoc(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserData;
