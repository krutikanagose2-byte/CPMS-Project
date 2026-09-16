import React, { useState, useEffect } from 'react';
import './UserMessages.css';

export default function UserMessages({ user }) {
    const isAdmin = user?.role === 'admin';
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    // Filters & Search
    const [searchQuery, setSearchQuery] = useState('');
    const [activeStatusTab, setActiveStatusTab] = useState('All'); // 'All' | 'Unread' | 'Replied' | 'Read'
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    // Reply State
    const [replyingId, setReplyingId] = useState(null);
    const [replyText, setReplyText] = useState('');
    const [isSubmittingReply, setIsSubmittingReply] = useState(false);
    
    // Compose Modal State
    const [showComposeModal, setShowComposeModal] = useState(false);
    const [composeData, setComposeData] = useState({
        userName: user?.name || '',
        enrollmentNo: user?.enrollmentNo || '',
        userEmail: user?.email || '',
        category: 'General Inquiry',
        subject: '',
        message: ''
    });
    const [isSubmittingNew, setIsSubmittingNew] = useState(false);
    const [actionFeedback, setActionFeedback] = useState({ text: '', type: '' });

    const showToast = (text, type = 'success') => {
        setActionFeedback({ text, type });
        setTimeout(() => {
            setActionFeedback({ text: '', type: '' });
        }, 4000);
    };

    const fetchMessages = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await fetch('http://localhost:5000/api/messages');
            if (!res.ok) throw new Error('Failed to fetch messages');
            const data = await res.json();
            setMessages(data);
        } catch (err) {
            console.error('Error fetching messages:', err);
            setError('Could not connect to server to fetch messages.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    // Status counts
    const unreadCount = messages.filter(m => m.status === 'Unread').length;
    const repliedCount = messages.filter(m => m.status === 'Replied').length;
    const readCount = messages.filter(m => m.status === 'Read').length;

    // Filtered list
    const filteredMessages = messages.filter(msg => {
        // If student, they only see their own messages unless admin
        if (!isAdmin && user?.email && msg.userEmail && msg.userEmail.toLowerCase() !== user.email.toLowerCase()) {
            return false;
        }

        // Status Tab filter
        if (activeStatusTab !== 'All' && msg.status !== activeStatusTab) {
            return false;
        }

        // Category filter
        if (selectedCategory !== 'All' && msg.category !== selectedCategory) {
            return false;
        }

        // Search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            const nameMatch = msg.userName?.toLowerCase().includes(query);
            const enrollMatch = msg.enrollmentNo?.toLowerCase().includes(query);
            const emailMatch = msg.userEmail?.toLowerCase().includes(query);
            const subjectMatch = msg.subject?.toLowerCase().includes(query);
            const messageMatch = msg.message?.toLowerCase().includes(query);
            return nameMatch || enrollMatch || emailMatch || subjectMatch || messageMatch;
        }

        return true;
    });

    const handleSendReply = async (messageId) => {
        if (!replyText.trim()) return;
        setIsSubmittingReply(true);
        try {
            const res = await fetch(`http://localhost:5000/api/messages/${messageId}/reply`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    reply: replyText.trim(),
                    repliedBy: user?.name ? `${user.name} (Admin)` : 'Placement Cell Administrator'
                })
            });

            if (!res.ok) throw new Error('Failed to save reply');
            const result = await res.json();
            
            // Update local state
            setMessages(prev => prev.map(m => m._id === messageId ? result.data : m));
            setReplyingId(null);
            setReplyText('');
            showToast('Reply submitted and sent to student successfully!');
        } catch (err) {
            console.error('Error replying:', err);
            showToast('Failed to submit reply. Please try again.', 'error');
        } finally {
            setIsSubmittingReply(false);
        }
    };

    const handleUpdateStatus = async (messageId, newStatus) => {
        try {
            const res = await fetch(`http://localhost:5000/api/messages/${messageId}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });

            if (!res.ok) throw new Error('Failed to update status');
            const result = await res.json();
            setMessages(prev => prev.map(m => m._id === messageId ? result.data : m));
            showToast(`Message marked as ${newStatus}`);
        } catch (err) {
            console.error('Error updating status:', err);
            showToast('Failed to update status', 'error');
        }
    };

    const handleDeleteMessage = async (messageId) => {
        if (!window.confirm('Are you sure you want to delete this message record?')) return;
        try {
            const res = await fetch(`http://localhost:5000/api/messages/${messageId}`, {
                method: 'DELETE'
            });

            if (!res.ok) throw new Error('Failed to delete message');
            setMessages(prev => prev.filter(m => m._id !== messageId));
            showToast('Message deleted successfully');
        } catch (err) {
            console.error('Error deleting message:', err);
            showToast('Failed to delete message', 'error');
        }
    };

    const handleCreateMessage = async (e) => {
        e.preventDefault();
        if (!composeData.subject || !composeData.message || !composeData.userName || !composeData.userEmail) {
            showToast('Please fill all required fields.', 'error');
            return;
        }

        setIsSubmittingNew(true);
        try {
            const res = await fetch('http://localhost:5000/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(composeData)
            });

            if (!res.ok) throw new Error('Failed to send message');
            const result = await res.json();
            setMessages(prev => [result.data, ...prev]);
            setShowComposeModal(false);
            setComposeData({
                userName: user?.name || '',
                enrollmentNo: user?.enrollmentNo || '',
                userEmail: user?.email || '',
                category: 'General Inquiry',
                subject: '',
                message: ''
            });
            showToast('Inquiry / Message submitted successfully!');
        } catch (err) {
            console.error('Error submitting message:', err);
            showToast('Failed to submit message.', 'error');
        } finally {
            setIsSubmittingNew(false);
        }
    };

    const quickReplies = [
        "Your documents have been verified and approved in the system.",
        "The drive schedule has been published on the official Notice Board.",
        "Your student registration has been verified and activated. You can now login.",
        "Please re-upload your semester marksheets in PDF format for verification.",
        "Issue has been resolved by the technical team. Please verify again."
    ];

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        return d.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getInitials = (name) => {
        if (!name) return 'U';
        const parts = name.trim().split(' ');
        if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
        return name.substring(0, 2).toUpperCase();
    };

    return (
        <div className="user-messages-container">
            {/* Action Feedback Toast */}
            {actionFeedback.text && (
                <div style={{
                    position: 'fixed',
                    top: '20px',
                    right: '25px',
                    zIndex: 10000,
                    padding: '12px 20px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 600,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: actionFeedback.type === 'error' ? '#ef4444' : '#10b981',
                    color: '#ffffff',
                    animation: 'fadeIn 0.25s ease'
                }}>
                    <i className={actionFeedback.type === 'error' ? 'fas fa-exclamation-circle' : 'fas fa-check-circle'}></i>
                    {actionFeedback.text}
                </div>
            )}

            {/* Header */}
            <div className="um-header">
                <div>
                    <h2>
                        <i className="fas fa-comments" style={{ color: '#2563eb' }}></i>
                        {isAdmin ? 'User Messages & Student Inquiries' : 'Placement Cell Queries & Support'}
                    </h2>
                    <p>
                        {isAdmin 
                            ? 'Review student messages, document verification doubts, and dispatch official replies' 
                            : 'Submit queries directly to the PRMIT&R Training & Placement cell and check responses'}
                    </p>
                </div>
                <div className="um-header-actions">
                    <button 
                        className="um-btn um-btn-outline" 
                        onClick={fetchMessages} 
                        disabled={loading}
                        title="Reload Messages"
                    >
                        <i className={`fas fa-sync-alt ${loading ? 'fa-spin' : ''}`}></i>
                        Refresh
                    </button>
                    <button 
                        className="um-btn um-btn-primary" 
                        onClick={() => setShowComposeModal(true)}
                    >
                        <i className="fas fa-pen"></i>
                        {isAdmin ? 'New Message / Inquiry' : 'Ask a Question'}
                    </button>
                </div>
            </div>

            {/* Toolbar: Search, Status Tabs & Category Filter */}
            <div className="um-toolbar">
                <div className="um-filter-tabs">
                    <button 
                        className={`um-tab-btn ${activeStatusTab === 'All' ? 'active' : ''}`}
                        onClick={() => setActiveStatusTab('All')}
                    >
                        All <span className="um-tab-count">{messages.length}</span>
                    </button>
                    <button 
                        className={`um-tab-btn ${activeStatusTab === 'Unread' ? 'active' : ''}`}
                        onClick={() => setActiveStatusTab('Unread')}
                    >
                        Unread <span className={`um-tab-count ${unreadCount > 0 ? 'urgent' : ''}`}>{unreadCount}</span>
                    </button>
                    <button 
                        className={`um-tab-btn ${activeStatusTab === 'Replied' ? 'active' : ''}`}
                        onClick={() => setActiveStatusTab('Replied')}
                    >
                        Replied <span className="um-tab-count">{repliedCount}</span>
                    </button>
                    <button 
                        className={`um-tab-btn ${activeStatusTab === 'Read' ? 'active' : ''}`}
                        onClick={() => setActiveStatusTab('Read')}
                    >
                        Read <span className="um-tab-count">{readCount}</span>
                    </button>
                </div>

                <div className="um-search-group">
                    <div className="um-search-box">
                        <i className="fas fa-search"></i>
                        <input 
                            type="text" 
                            className="um-search-input" 
                            placeholder="Search by student, enrollment, subject..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <select 
                        className="um-category-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="All">All Categories</option>
                        <option value="Placement Drive">Placement Drive</option>
                        <option value="Document Verification">Document Verification</option>
                        <option value="Registration Query">Registration Query</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="General Inquiry">General Inquiry</option>
                    </select>
                </div>
            </div>

            {/* Messages List */}
            {loading && messages.length === 0 ? (
                <div className="um-empty-state">
                    <i className="fas fa-spinner fa-spin"></i>
                    <h4>Loading User Messages...</h4>
                    <p>Connecting to database, please wait a moment.</p>
                </div>
            ) : filteredMessages.length === 0 ? (
                <div className="um-empty-state">
                    <i className="fas fa-comments"></i>
                    <h4>No messages found</h4>
                    <p>{searchQuery || activeStatusTab !== 'All' || selectedCategory !== 'All' 
                        ? 'No user inquiries match your active filter criteria.' 
                        : 'No messages have been submitted yet.'}
                    </p>
                </div>
            ) : (
                <div className="um-messages-list">
                    {filteredMessages.map((msg) => {
                        const isUnread = msg.status === 'Unread';
                        const isReplied = msg.status === 'Replied';
                        const isReplyingThis = replyingId === msg._id;

                        return (
                            <div 
                                key={msg._id} 
                                className={`um-message-card ${isUnread ? 'unread' : ''} ${isReplied ? 'replied' : ''} ${msg.status === 'Read' ? 'read' : ''}`}
                            >
                                {/* Top Meta Row */}
                                <div className="um-card-top">
                                    <div className="um-user-info-meta">
                                        <div className="um-user-avatar">
                                            {getInitials(msg.userName)}
                                        </div>
                                        <div className="um-user-details">
                                            <h4>
                                                {msg.userName}
                                                {msg.enrollmentNo && (
                                                    <span style={{ 
                                                        background: '#e2e8f0', 
                                                        color: '#334155', 
                                                        fontSize: '11px', 
                                                        padding: '1px 6px', 
                                                        borderRadius: '4px',
                                                        fontWeight: 600
                                                    }}>
                                                        {msg.enrollmentNo}
                                                    </span>
                                                )}
                                            </h4>
                                            <p>
                                                <span>
                                                    <i className="fas fa-envelope" style={{ marginRight: '4px', color: '#94a3b8' }}></i>
                                                    <a href={`mailto:${msg.userEmail}`}>{msg.userEmail}</a>
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="um-card-badges">
                                        <span className="um-badge um-badge-category">
                                            <i className="fas fa-tag"></i> {msg.category || 'General'}
                                        </span>
                                        <span className={`um-badge status-${(msg.status || 'Unread').toLowerCase()}`}>
                                            {isUnread && <i className="fas fa-circle" style={{ fontSize: '7px' }}></i>}
                                            {isReplied && <i className="fas fa-check"></i>}
                                            {msg.status || 'Unread'}
                                        </span>
                                        <span className="um-date-text">
                                            <i className="far fa-clock" style={{ marginRight: '4px' }}></i>
                                            {formatDate(msg.createdAt)}
                                        </span>
                                    </div>
                                </div>

                                {/* Subject */}
                                <h3 className="um-subject-line">
                                    <i className="fas fa-question-circle" style={{ color: '#3b82f6', fontSize: '14px' }}></i>
                                    {msg.subject}
                                </h3>

                                {/* Message Content Body */}
                                <div className="um-message-body">
                                    {msg.message}
                                </div>

                                {/* Official Reply Box if answered */}
                                {msg.reply && (
                                    <div className="um-reply-box">
                                        <div className="um-reply-header">
                                            <span>
                                                <i className="fas fa-reply" style={{ marginRight: '6px' }}></i>
                                                Official Response from {msg.repliedBy || 'T&P Cell'}
                                            </span>
                                            {msg.repliedAt && (
                                                <span style={{ fontSize: '11px', color: '#15803d' }}>
                                                    {formatDate(msg.repliedAt)}
                                                </span>
                                            )}
                                        </div>
                                        <p className="um-reply-content">{msg.reply}</p>
                                    </div>
                                )}

                                {/* Admin Action Toolbar */}
                                {isAdmin && (
                                    <div className="um-card-actions">
                                        <button 
                                            className="um-action-btn reply"
                                            onClick={() => {
                                                if (isReplyingThis) {
                                                    setReplyingId(null);
                                                } else {
                                                    setReplyingId(msg._id);
                                                    setReplyText(msg.reply || '');
                                                }
                                            }}
                                        >
                                            <i className="fas fa-reply"></i>
                                            {msg.reply ? 'Update Reply' : 'Reply to Student'}
                                        </button>

                                        {isUnread ? (
                                            <button 
                                                className="um-action-btn status"
                                                onClick={() => handleUpdateStatus(msg._id, 'Read')}
                                                title="Mark as Read"
                                            >
                                                <i className="fas fa-check"></i> Mark Read
                                            </button>
                                        ) : (
                                            <button 
                                                className="um-action-btn status"
                                                onClick={() => handleUpdateStatus(msg._id, 'Unread')}
                                                title="Mark as Unread"
                                            >
                                                <i className="fas fa-envelope"></i> Mark Unread
                                            </button>
                                        )}

                                        <button 
                                            className="um-action-btn delete"
                                            onClick={() => handleDeleteMessage(msg._id)}
                                            title="Delete Message"
                                        >
                                            <i className="fas fa-trash-alt"></i> Delete
                                        </button>
                                    </div>
                                )}

                                {/* Inline Reply Composer Drawer */}
                                {isReplyingThis && (
                                    <div className="um-inline-reply-drawer">
                                        <div className="um-reply-title">
                                            <i className="fas fa-paper-plane"></i> Write Official Reply to {msg.userName}:
                                        </div>

                                        {/* Quick Reply Chips */}
                                        <div className="um-quick-replies">
                                            <span style={{ fontSize: '11px', color: '#64748b', alignSelf: 'center', marginRight: '4px' }}>Quick Fill:</span>
                                            {quickReplies.map((tmpl, idx) => (
                                                <button 
                                                    key={idx}
                                                    type="button"
                                                    className="um-quick-reply-btn"
                                                    onClick={() => setReplyText(tmpl)}
                                                >
                                                    {tmpl.length > 35 ? tmpl.substring(0, 35) + '...' : tmpl}
                                                </button>
                                            ))}
                                        </div>

                                        <textarea 
                                            className="um-reply-textarea"
                                            placeholder="Type your response here..."
                                            value={replyText}
                                            onChange={(e) => setReplyText(e.target.value)}
                                        />

                                        <div className="um-reply-drawer-actions">
                                            <button 
                                                className="um-btn um-btn-outline"
                                                onClick={() => setReplyingId(null)}
                                            >
                                                Cancel
                                            </button>
                                            <button 
                                                className="um-btn um-btn-primary"
                                                onClick={() => handleSendReply(msg._id)}
                                                disabled={isSubmittingReply || !replyText.trim()}
                                            >
                                                <i className={`fas fa-paper-plane ${isSubmittingReply ? 'fa-spin' : ''}`}></i>
                                                {isSubmittingReply ? 'Sending...' : 'Send Official Reply'}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Compose New Message Modal */}
            {showComposeModal && (
                <div className="um-modal-overlay" onClick={() => setShowComposeModal(false)}>
                    <div className="um-modal-container" onClick={(e) => e.stopPropagation()}>
                        <div className="um-modal-header">
                            <h3>
                                <i className="fas fa-comment-dots"></i>
                                {isAdmin ? 'Create Message / Student Inquiry' : 'Submit Placement Query'}
                            </h3>
                            <button className="um-modal-close" onClick={() => setShowComposeModal(false)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <form onSubmit={handleCreateMessage}>
                            <div className="um-modal-body">
                                <div className="um-form-group">
                                    <label>Student Full Name *</label>
                                    <input 
                                        type="text" 
                                        className="um-form-input" 
                                        required
                                        placeholder="e.g. Rahul Sharma"
                                        value={composeData.userName}
                                        onChange={(e) => setComposeData({ ...composeData, userName: e.target.value })}
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                    <div className="um-form-group">
                                        <label>Enrollment Number</label>
                                        <input 
                                            type="text" 
                                            className="um-form-input" 
                                            placeholder="e.g. 21BTCS101"
                                            value={composeData.enrollmentNo}
                                            onChange={(e) => setComposeData({ ...composeData, enrollmentNo: e.target.value })}
                                        />
                                    </div>
                                    <div className="um-form-group">
                                        <label>Student Email *</label>
                                        <input 
                                            type="email" 
                                            className="um-form-input" 
                                            required
                                            placeholder="student@prmitr.edu.in"
                                            value={composeData.userEmail}
                                            onChange={(e) => setComposeData({ ...composeData, userEmail: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="um-form-group">
                                    <label>Inquiry Category *</label>
                                    <select 
                                        className="um-form-select"
                                        value={composeData.category}
                                        onChange={(e) => setComposeData({ ...composeData, category: e.target.value })}
                                    >
                                        <option value="Placement Drive">Placement Drive</option>
                                        <option value="Document Verification">Document Verification</option>
                                        <option value="Registration Query">Registration Query</option>
                                        <option value="Technical Support">Technical Support</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                    </select>
                                </div>

                                <div className="um-form-group">
                                    <label>Subject *</label>
                                    <input 
                                        type="text" 
                                        className="um-form-input" 
                                        required
                                        placeholder="e.g. Query regarding TCS drive schedule"
                                        value={composeData.subject}
                                        onChange={(e) => setComposeData({ ...composeData, subject: e.target.value })}
                                    />
                                </div>

                                <div className="um-form-group">
                                    <label>Message / Description *</label>
                                    <textarea 
                                        className="um-form-textarea" 
                                        rows="4"
                                        required
                                        placeholder="Type detailed inquiry or query here..."
                                        value={composeData.message}
                                        onChange={(e) => setComposeData({ ...composeData, message: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="um-modal-footer">
                                <button 
                                    type="button" 
                                    className="um-btn um-btn-outline" 
                                    onClick={() => setShowComposeModal(false)}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    className="um-btn um-btn-primary"
                                    disabled={isSubmittingNew}
                                >
                                    <i className={`fas fa-paper-plane ${isSubmittingNew ? 'fa-spin' : ''}`}></i>
                                    {isSubmittingNew ? 'Submitting...' : 'Submit Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
