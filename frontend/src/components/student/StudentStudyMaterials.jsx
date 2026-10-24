import React, { useState, useEffect } from 'react';
import {
    getSavedMaterials,
    getOngoingCourses,
    removeSavedMaterial,
    saveMaterial,
    isMaterialSaved,
    markAsOngoing
} from '../../utils/studyMaterialsStorage';
import { apiFetch } from '../../utils/api';
import './StudentStudyMaterials.css';

const StudentStudyMaterials = ({ user: propUser }) => {
    // Current user resolution
    const [currentUser, setCurrentUser] = useState(() => {
        if (propUser) return propUser;
        try {
            const s = sessionStorage.getItem('user');
            if (s) return JSON.parse(s);
            const l = localStorage.getItem('user');
            if (l) return JSON.parse(l);
        } catch (e) {}
        return null;
    });

    useEffect(() => {
        if (propUser) setCurrentUser(propUser);
    }, [propUser]);

    const isAdmin = currentUser?.role === 'admin' || currentUser?.enrollmentNo === '24BTBT2005';

    // Unified tabs for both students and admins
    const tabs = ['Study Materials', 'Saved for Later', 'Ongoing Courses'];
    const [selectedTab, setSelectedTab] = useState('Study Materials');

    // Data states
    const [sharedMaterials, setSharedMaterials] = useState([]);
    const [isLoadingShared, setIsLoadingShared] = useState(true);
    const [savedList, setSavedList] = useState([]);
    const [ongoingList, setOngoingList] = useState([]);

    // Filter & Search states
    const [activeTypeFilter, setActiveTypeFilter] = useState('All');
    const [activeCategoryFilter, setActiveCategoryFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Modal state for Add / Edit
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add'); // 'add' | 'edit'
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [toastMessage, setToastMessage] = useState(null);

    const initialFormState = {
        _id: null,
        title: '',
        type: 'video',
        category: 'Quantitative Aptitude',
        company: 'All Companies',
        url: '',
        thumbnail: '',
        author: '',
        description: '',
        tags: ''
    };

    const [formData, setFormData] = useState(initialFormState);

    // Load saved bookmarks and ongoing courses
    const loadSavedData = () => {
        setSavedList(getSavedMaterials());
        setOngoingList(getOngoingCourses());
    };

    // Fetch shared materials from MongoDB backend
    const fetchSharedMaterials = async () => {
        setIsLoadingShared(true);
        try {
            const res = await apiFetch('/api/study-materials');
            const data = await res.json();
            if (data && data.success && Array.isArray(data.data)) {
                setSharedMaterials(data.data);
            }
        } catch (err) {
            console.warn('Failed to fetch study materials from backend:', err);
        } finally {
            setIsLoadingShared(false);
        }
    };

    useEffect(() => {
        loadSavedData();
        fetchSharedMaterials();

        const handleUpdate = () => {
            loadSavedData();
            fetchSharedMaterials();
        };
        window.addEventListener('studyMaterialsUpdated', handleUpdate);
        return () => window.removeEventListener('studyMaterialsUpdated', handleUpdate);
    }, []);

    // Show temporary toast notification
    const showToast = (text, type = 'success') => {
        setToastMessage({ text, type });
        setTimeout(() => setToastMessage(null), 3500);
    };

    // Open Add Modal
    const handleOpenAddModal = () => {
        setModalMode('add');
        setFormData({
            ...initialFormState,
            author: currentUser?.name || 'PRMIT&R Placement Cell'
        });
        setFormErrors({});
        setIsModalOpen(true);
    };

    // Open Edit Modal
    const handleOpenEditModal = (material, e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setModalMode('edit');
        setFormData({
            _id: material._id,
            title: material.title || '',
            type: material.type || 'video',
            category: material.category || 'Quantitative Aptitude',
            company: material.company || 'All Companies',
            url: material.url || '',
            thumbnail: material.thumbnail || '',
            author: material.author || '',
            description: material.description || '',
            tags: Array.isArray(material.tags) ? material.tags.join(', ') : (material.tags || '')
        });
        setFormErrors({});
        setIsModalOpen(true);
    };

    // Handle URL change with smart YouTube thumbnail auto-extraction
    const handleUrlChange = (value) => {
        const updated = { ...formData, url: value };

        // Check if YouTube URL
        const ytMatch = value.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
        if (ytMatch && ytMatch[1]) {
            updated.type = 'video';
            if (!formData.thumbnail || formData.thumbnail.includes('img.youtube.com')) {
                updated.thumbnail = `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`;
            }
        }
        setFormData(updated);
    };

    // Validate Form
    const validateForm = () => {
        const errors = {};
        if (!formData.title || formData.title.trim().length < 3) {
            errors.title = 'Title must be at least 3 characters long.';
        }
        if (!formData.type) {
            errors.type = 'Please select a resource type.';
        }
        if (!formData.category || formData.category.trim() === '') {
            errors.category = 'Please select or enter a category.';
        }
        if (!formData.url || formData.url.trim() === '') {
            errors.url = 'Resource URL / link is required.';
        } else if (!formData.url.startsWith('http://') && !formData.url.startsWith('https://') && !formData.url.startsWith('/')) {
            errors.url = 'URL must start with http://, https://, or a valid path (/pyq/...).';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Submit Add or Edit
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            const endpoint = modalMode === 'edit'
                ? `/api/study-materials/${formData._id}`
                : '/api/study-materials';

            const method = modalMode === 'edit' ? 'PUT' : 'POST';

            const res = await apiFetch(endpoint, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'x-user-role': currentUser?.role || (isAdmin ? 'admin' : 'student'),
                    'x-user-id': currentUser?._id || currentUser?.id || '',
                    'x-user-enrollment': currentUser?.enrollmentNo || (isAdmin ? '24BTBT2005' : '')
                },
                body: JSON.stringify({
                    title: formData.title,
                    type: formData.type,
                    category: formData.category,
                    company: formData.company,
                    url: formData.url,
                    thumbnail: formData.thumbnail,
                    author: formData.author,
                    description: formData.description,
                    tags: formData.tags ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
                    createdByName: currentUser?.name || 'Administrator'
                })
            });

            const data = await res.json();
            if (res.ok && data.success) {
                showToast(modalMode === 'edit' ? 'Study material updated successfully!' : 'New study material published for all users!');
                setIsModalOpen(false);
                fetchSharedMaterials();
                window.dispatchEvent(new CustomEvent('studyMaterialsUpdated'));
            } else {
                showToast(data.message || 'Failed to save study material.', 'error');
            }
        } catch (err) {
            console.error('Error saving study material:', err);
            showToast('Network error while saving study material.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Delete Study Material (Admin Only)
    const handleDeleteMaterial = async (material, e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        const confirmMsg = `Are you sure you want to delete "${material.title}"?\n\nThis will remove it from the Study Materials section for all registered students.`;
        if (!window.confirm(confirmMsg)) return;

        try {
            const res = await apiFetch(`/api/study-materials/${material._id}`, {
                method: 'DELETE',
                headers: {
                    'x-user-role': currentUser?.role || (isAdmin ? 'admin' : 'student'),
                    'x-user-id': currentUser?._id || currentUser?.id || '',
                    'x-user-enrollment': currentUser?.enrollmentNo || (isAdmin ? '24BTBT2005' : '')
                }
            });

            const data = await res.json();
            if (res.ok && data.success) {
                showToast('Study material deleted successfully.');
                // Also remove from personal bookmarks if present
                removeSavedMaterial(material._id);
                fetchSharedMaterials();
                window.dispatchEvent(new CustomEvent('studyMaterialsUpdated'));
            } else {
                showToast(data.message || 'Failed to delete study material.', 'error');
            }
        } catch (err) {
            console.error('Error deleting material:', err);
            showToast('Network error while deleting study material.', 'error');
        }
    };

    // Bookmark Toggle for Shared Materials
    const handleToggleBookmark = (item, e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        const itemId = item._id || item.id;
        const alreadySaved = isMaterialSaved(itemId);

        if (alreadySaved) {
            removeSavedMaterial(itemId);
            showToast('Removed from Saved for Later.');
        } else {
            const bookmarkItem = {
                id: itemId,
                title: item.title,
                type: item.type === 'video' ? 'YouTube Video' : item.type === 'pdf' ? 'PDF Material' : item.type === 'notes' ? 'Notes' : 'Course Link',
                category: item.category,
                url: item.url,
                thumbnail: item.thumbnail,
                author: item.author,
                channel: item.author,
                company: item.company,
                description: item.description
            };
            saveMaterial(bookmarkItem);
            showToast('Saved to your profile under "Saved for Later"!');
        }
        loadSavedData();
    };

    // Open resource link & track ongoing
    const handleOpenResource = (item) => {
        markAsOngoing(item);
        if (item.url) {
            window.open(item.url, '_blank', 'noopener,noreferrer');
        }
    };

    // Filter shared materials
    const filteredSharedMaterials = sharedMaterials.filter(item => {
        const matchesType = activeTypeFilter === 'All' ? true : item.type === activeTypeFilter;
        const matchesCategory = activeCategoryFilter === 'All' ? true : item.category === activeCategoryFilter;
        const matchesSearch = searchQuery.trim() === '' ||
            (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.company && item.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesType && matchesCategory && matchesSearch;
    });

    // Counts for Shared Materials
    const sharedVideoCount = sharedMaterials.filter(m => m.type === 'video').length;
    const sharedPdfCount = sharedMaterials.filter(m => m.type === 'pdf').length;
    const sharedNotesCount = sharedMaterials.filter(m => m.type === 'notes').length;
    const sharedCourseCount = sharedMaterials.filter(m => m.type === 'course').length;

    // Filter Saved for Later items
    const filteredSaved = savedList.filter(item => {
        const matchesFilter =
            activeTypeFilter === 'All' ? true :
            activeTypeFilter === 'video' ? ((item.type && item.type.toLowerCase().includes('video')) || (item.url && item.url.includes('youtube'))) :
            activeTypeFilter === 'pdf' ? ((item.type && item.type.toLowerCase().includes('pdf')) || (item.url && item.url.toLowerCase().includes('.pdf'))) :
            activeTypeFilter === 'notes' ? (item.type && item.type.toLowerCase().includes('note')) :
            activeTypeFilter === 'course' ? (item.type && item.type.toLowerCase().includes('course')) :
            true;

        const matchesSearch = searchQuery.trim() === '' ||
            (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.channel && item.channel.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesFilter && matchesSearch;
    });

    // Render Type Badge
    const renderTypeBadge = (type) => {
        switch (type) {
            case 'video':
                return <span className="resource-badge badge-video">▶ YOUTUBE VIDEO</span>;
            case 'pdf':
                return <span className="resource-badge badge-pdf">📄 PDF QUESTION PAPER</span>;
            case 'notes':
                return <span className="resource-badge badge-notes">📝 REVISION NOTES</span>;
            case 'course':
                return <span className="resource-badge badge-course">🌐 COURSE LINK</span>;
            default:
                return <span className="resource-badge badge-default">RESOURCE</span>;
        }
    };

    // -------------------------------------------------------------
    // TAB 1: ADMIN RESOURCE MANAGER (Manage All Resources)
    // -------------------------------------------------------------
    const renderStudyMaterials = () => {
        return (
            <div className="admin-materials-view">
                {/* Top Action & Stats Bar */}
                {isAdmin ? (
                    <div className="admin-materials-topbar">
                        <div className="topbar-left">
                            <div className="admin-section-heading">
                                <span className="section-icon">📚</span>
                                <div>
                                    <h3 className="section-title">Admin Study Materials Hub</h3>
                                    <p className="section-subtitle">
                                        Add, edit, or delete shared learning resources for all registered students across the college.
                                    </p>
                                </div>
                            </div>

                            {/* Quick Stats Chips */}
                            <div className="admin-stats-strip">
                                <span className="stat-chip">Total: <strong>{sharedMaterials.length}</strong></span>
                                <span className="stat-chip">Videos: <strong>{sharedVideoCount}</strong></span>
                                <span className="stat-chip">PDF Papers: <strong>{sharedPdfCount}</strong></span>
                                <span className="stat-chip">Notes: <strong>{sharedNotesCount}</strong></span>
                                <span className="stat-chip">Courses: <strong>{sharedCourseCount}</strong></span>
                            </div>
                        </div>

                        <div className="topbar-right">
                            <button
                                type="button"
                                className="btn-add-resource"
                                onClick={handleOpenAddModal}
                                title="Add a new study material to the database"
                            >
                                <span className="btn-icon">+</span> Add New Study Material
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="admin-materials-topbar" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)', borderRadius: '12px', padding: '16px 20px', border: '1px solid #dbeafe', marginBottom: '20px' }}>
                        <div className="topbar-left">
                            <div className="admin-section-heading">
                                <span className="section-icon" style={{ background: '#dbeafe', color: '#1d4ed8' }}>🎓</span>
                                <div>
                                    <h3 className="section-title" style={{ color: '#1e3a8a' }}>Placement Study Materials Hub</h3>
                                    <p className="section-subtitle" style={{ color: '#3b82f6' }}>
                                        Curated YouTube lectures, previous year question papers (PDFs), hand-written revision notes, and full certification courses uploaded by placement faculty.
                                    </p>
                                </div>
                            </div>
                            <div className="admin-stats-strip" style={{ marginTop: '10px' }}>
                                <span className="stat-chip">Available: <strong>{sharedMaterials.length}</strong></span>
                                <span className="stat-chip">Videos: <strong>{sharedVideoCount}</strong></span>
                                <span className="stat-chip">PDF Papers: <strong>{sharedPdfCount}</strong></span>
                                <span className="stat-chip">Notes: <strong>{sharedNotesCount}</strong></span>
                                <span className="stat-chip">Courses: <strong>{sharedCourseCount}</strong></span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Filter and Search Bar */}
                <div className="materials-controls-bar">
                    {/* Type Filter Pills */}
                    <div className="type-filter-group">
                        <button
                            type="button"
                            className={`type-pill ${activeTypeFilter === 'All' ? 'active' : ''}`}
                            onClick={() => setActiveTypeFilter('All')}
                        >
                            All ({sharedMaterials.length})
                        </button>
                        <button
                            type="button"
                            className={`type-pill pill-video ${activeTypeFilter === 'video' ? 'active' : ''}`}
                            onClick={() => setActiveTypeFilter('video')}
                        >
                            ▶ Videos ({sharedVideoCount})
                        </button>
                        <button
                            type="button"
                            className={`type-pill pill-pdf ${activeTypeFilter === 'pdf' ? 'active' : ''}`}
                            onClick={() => setActiveTypeFilter('pdf')}
                        >
                            📄 PDF Papers ({sharedPdfCount})
                        </button>
                        <button
                            type="button"
                            className={`type-pill pill-notes ${activeTypeFilter === 'notes' ? 'active' : ''}`}
                            onClick={() => setActiveTypeFilter('notes')}
                        >
                            📝 Notes ({sharedNotesCount})
                        </button>
                        <button
                            type="button"
                            className={`type-pill pill-course ${activeTypeFilter === 'course' ? 'active' : ''}`}
                            onClick={() => setActiveTypeFilter('course')}
                        >
                            🌐 Courses ({sharedCourseCount})
                        </button>
                    </div>

                    {/* Category Dropdown & Search Bar */}
                    <div className="filter-search-row">
                        <select
                            className="category-dropdown"
                            value={activeCategoryFilter}
                            onChange={(e) => setActiveCategoryFilter(e.target.value)}
                        >
                            <option value="All">All Categories</option>
                            <option value="Quantitative Aptitude">Quantitative Aptitude</option>
                            <option value="Logical Reasoning">Logical Reasoning</option>
                            <option value="Verbal Ability">Verbal Ability</option>
                            <option value="Technical & Coding">Technical & Coding</option>
                            <option value="Data Interpretation">Data Interpretation</option>
                            <option value="Company Specific">Company Specific</option>
                            <option value="General Preparation">General Preparation</option>
                        </select>

                        <div className="search-box-wrapper">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search by title, author, topic, or company..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button className="clear-search-btn" onClick={() => setSearchQuery('')}>×</button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Materials Grid */}
                {isLoadingShared ? (
                    <div className="materials-loading-state">
                        <div className="spinner-blue"></div>
                        <p>Loading database study materials...</p>
                    </div>
                ) : filteredSharedMaterials.length > 0 ? (
                    <div className="materials-cards-grid">
                        {filteredSharedMaterials.map((material) => {
                            const isSaved = isMaterialSaved(material._id);
                            return (
                                <div key={material._id} className="admin-material-card">
                                    {/* Thumbnail Image Container */}
                                    <div
                                        className="card-thumb-container"
                                        onClick={() => handleOpenResource(material)}
                                        title={`Open ${material.title}`}
                                    >
                                        {material.thumbnail ? (
                                            <img
                                                src={material.thumbnail}
                                                alt={material.title}
                                                className="card-thumb-img"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = material.type === 'video'
                                                        ? 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60'
                                                        : '/pyq/tech_pyq1_thumb.png';
                                                }}
                                            />
                                        ) : (
                                            <div className="thumb-fallback-box">
                                                <span className="thumb-fallback-icon">
                                                    {material.type === 'video' ? '▶' : material.type === 'pdf' ? '📄' : material.type === 'notes' ? '📝' : '🌐'}
                                                </span>
                                            </div>
                                        )}

                                        <div className="thumb-badge-overlay">
                                            {renderTypeBadge(material.type)}
                                        </div>

                                        {/* Save for later bookmark toggle */}
                                        <button
                                            type="button"
                                            className={`card-bookmark-btn ${isSaved ? 'saved' : ''}`}
                                            onClick={(e) => handleToggleBookmark(material, e)}
                                            title={isSaved ? 'Remove from Saved for Later' : 'Save for Later'}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill={isSaved ? '#2563eb' : 'none'} stroke={isSaved ? '#2563eb' : '#ffffff'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Content Details */}
                                    <div className="card-content-area">
                                        <div className="card-tags-row">
                                            <span className="card-cat-pill">{material.category}</span>
                                            {material.company && material.company !== 'All Companies' && (
                                                <span className="card-comp-pill">{material.company}</span>
                                            )}
                                        </div>

                                        <h4 className="card-title" title={material.title}>
                                            {material.title}
                                        </h4>

                                        {material.description && (
                                            <p className="card-description">
                                                {material.description}
                                            </p>
                                        )}

                                        <div className="card-meta-author">
                                            <span className="meta-author-icon">👤</span>
                                            <span className="meta-author-name">{material.author || 'PRMIT&R Placement Cell'}</span>
                                        </div>

                                        {/* Action Buttons: Primary Resource Link + Bookmark + Admin Controls */}
                                        <div className="card-actions-row">
                                            <button
                                                type="button"
                                                className="btn-action-primary"
                                                onClick={() => handleOpenResource(material)}
                                            >
                                                {material.type === 'video' ? '▶ Watch Video ↗' : material.type === 'pdf' ? '📄 Open PDF ↗' : material.type === 'notes' ? '📝 Read Notes ↗' : '🌐 View Course ↗'}
                                            </button>

                                            <button
                                                type="button"
                                                className={`btn-save-toggle ${isMaterialSaved(material._id) ? 'saved' : ''}`}
                                                onClick={(e) => handleToggleBookmark(material, e)}
                                                title={isMaterialSaved(material._id) ? 'Remove from Saved for Later' : 'Save for Later in your Profile'}
                                            >
                                                {isMaterialSaved(material._id) ? '✓ Saved' : '🔖 Save'}
                                            </button>

                                            {isAdmin && (
                                                <div className="admin-card-btn-group">
                                                    <button
                                                        type="button"
                                                        className="btn-admin-edit"
                                                        onClick={(e) => handleOpenEditModal(material, e)}
                                                        title="Edit this study material"
                                                    >
                                                        ✏️ Edit
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn-admin-delete"
                                                        onClick={(e) => handleDeleteMaterial(material, e)}
                                                        title="Delete this study material from database"
                                                    >
                                                        🗑️
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="empty-materials-state">
                        <span className="empty-icon">📂</span>
                        <h4>No Study Materials Found</h4>
                        <p>No resources match your current filter or search criteria.</p>
                        {isAdmin && (
                            <button type="button" className="btn-add-resource" onClick={handleOpenAddModal}>
                                + Upload First Study Material
                            </button>
                        )}
                    </div>
                )}
            </div>
        );
    };

    // TAB 3: SAVED FOR LATER (Personal Bookmarks)
    // -------------------------------------------------------------
    const renderSavedForLater = () => {
        return (
            <div style={{ padding: '24px' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                    flexWrap: 'wrap',
                    gap: '16px'
                }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <span style={{ fontSize: '22px' }}>📌</span>
                            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                                Saved for Later ({savedList.length})
                            </h3>
                        </div>
                        <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
                            All your bookmarked YouTube lectures, masterclasses, and PDF previous year questions in one place.
                        </p>
                    </div>

                    {savedList.length > 0 && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                            <button
                                type="button"
                                onClick={() => setActiveTypeFilter('All')}
                                className={`filter-pill ${activeTypeFilter === 'All' ? 'active' : ''}`}
                            >
                                All ({savedList.length})
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTypeFilter('video')}
                                className={`filter-pill ${activeTypeFilter === 'video' ? 'active' : ''}`}
                            >
                                ▶ Videos ({savedList.filter(i => (i.type && i.type.toLowerCase().includes('video')) || (i.url && i.url.includes('youtube'))).length})
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTypeFilter('pdf')}
                                className={`filter-pill ${activeTypeFilter === 'pdf' ? 'active' : ''}`}
                            >
                                📄 PDF Papers ({savedList.filter(i => (i.type && i.type.toLowerCase().includes('pdf')) || (i.url && i.url.toLowerCase().includes('.pdf'))).length})
                            </button>
                        </div>
                    )}
                </div>

                {filteredSaved.length > 0 ? (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
                        gap: '20px'
                    }}>
                        {filteredSaved.map(item => {
                            const isVideo = (item.type && item.type.toLowerCase().includes('video')) || (item.url && item.url.includes('youtube'));
                            return (
                                <div
                                    key={item.id}
                                    style={{
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '14px',
                                        overflow: 'hidden',
                                        backgroundColor: '#ffffff',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        position: 'relative'
                                    }}
                                >
                                    <div
                                        onClick={() => handleOpenResource(item)}
                                        style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '170px',
                                            backgroundColor: '#0f172a',
                                            overflow: 'hidden',
                                            cursor: 'pointer'
                                        }}
                                        title={`Open ${item.title}`}
                                    >
                                        {item.thumbnail ? (
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = isVideo
                                                        ? 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60'
                                                        : '/pyq/tech_pyq1_thumb.png';
                                                }}
                                            />
                                        ) : (
                                            <div style={{
                                                width: '100%',
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: '#1e293b',
                                                color: '#ffffff'
                                            }}>
                                                <span style={{ fontSize: '38px' }}>{isVideo ? '▶' : '📄'}</span>
                                            </div>
                                        )}

                                        <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                                            {renderTypeBadge(isVideo ? 'video' : 'pdf')}
                                        </div>

                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                removeSavedMaterial(item.id);
                                                showToast('Removed from Saved for Later.');
                                                loadSavedData();
                                            }}
                                            style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '50%',
                                                backgroundColor: '#2563eb',
                                                border: 'none',
                                                color: '#fff',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                            title="Saved (Click to remove)"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="2.5">
                                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                            </svg>
                                        </button>
                                    </div>

                                    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                        {item.category && (
                                            <span style={{
                                                alignSelf: 'flex-start',
                                                backgroundColor: '#f1f5f9',
                                                color: '#475569',
                                                fontSize: '11px',
                                                fontWeight: '700',
                                                padding: '2px 8px',
                                                borderRadius: '6px',
                                                marginBottom: '8px'
                                            }}>
                                                {item.category}
                                            </span>
                                        )}

                                        <h4 style={{
                                            margin: '0 0 8px 0',
                                            fontSize: '14.5px',
                                            fontWeight: '700',
                                            color: '#0f172a',
                                            lineHeight: 1.4
                                        }}>
                                            {item.title}
                                        </h4>

                                        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', paddingTop: '12px' }}>
                                            <button
                                                type="button"
                                                onClick={() => handleOpenResource(item)}
                                                style={{
                                                    flex: 1,
                                                    backgroundColor: isVideo ? '#dc2626' : '#2563eb',
                                                    color: '#ffffff',
                                                    border: 'none',
                                                    padding: '8px 12px',
                                                    borderRadius: '8px',
                                                    fontSize: '12.5px',
                                                    fontWeight: '600',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {isVideo ? '▶ Watch Video ↗' : '📄 Open PDF ↗'}
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    removeSavedMaterial(item.id);
                                                    showToast('Removed from Saved for Later.');
                                                    loadSavedData();
                                                }}
                                                style={{
                                                    backgroundColor: '#fee2e2',
                                                    color: '#b91c1c',
                                                    border: '1px solid #fca5a5',
                                                    padding: '8px 12px',
                                                    borderRadius: '8px',
                                                    fontSize: '12px',
                                                    fontWeight: '600',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
                        <span style={{ fontSize: '42px', display: 'block', marginBottom: '12px' }}>📌</span>
                        <h4 style={{ margin: '0 0 6px 0', color: '#1e293b', fontSize: '17px' }}>No Saved Materials Yet</h4>
                        <p style={{ margin: '0 0 16px 0', fontSize: '13.5px', color: '#64748b' }}>
                            Bookmark YouTube lectures, PDF question papers, or course links from the Explore tab to save them here.
                        </p>
                        <button
                            type="button"
                            onClick={() => setSelectedTab(isAdmin ? 'Manage All Resources' : 'Explore Study Materials')}
                            className="btn-add-resource"
                        >
                            Browse All Study Materials
                        </button>
                    </div>
                )}
            </div>
        );
    };

    // -------------------------------------------------------------
    // TAB 4: ONGOING COURSES
    // -------------------------------------------------------------
    const renderOngoingCourses = () => {
        return (
            <div style={{ padding: '24px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' }}>
                        Ongoing Learning & Courses ({ongoingList.length})
                    </h3>
                    <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
                        Pick up right where you left off with your tracked study materials.
                    </p>
                </div>

                {ongoingList.length > 0 ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '20px' }}>
                        {ongoingList.map(item => (
                            <div key={item.id} style={{ border: '1px solid #e2e8f0', borderRadius: '14px', padding: '16px', backgroundColor: '#ffffff' }}>
                                <span style={{ fontSize: '11px', fontWeight: '700', backgroundColor: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '6px' }}>
                                    {item.category || 'Ongoing'}
                                </span>
                                <h4 style={{ margin: '10px 0 6px 0', fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>
                                    {item.title}
                                </h4>
                                <button
                                    type="button"
                                    onClick={() => handleOpenResource(item)}
                                    style={{
                                        marginTop: '12px',
                                        backgroundColor: '#2563eb',
                                        color: '#ffffff',
                                        border: 'none',
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        fontSize: '12.5px',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        width: '100%'
                                    }}
                                >
                                    Continue Studying ↗
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ padding: '48px 24px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px dashed #cbd5e1', textAlign: 'center' }}>
                        <span style={{ fontSize: '36px', display: 'block', marginBottom: '12px' }}>⚡</span>
                        <h4 style={{ margin: '0 0 6px 0', color: '#334155', fontSize: '16px' }}>No Ongoing Courses</h4>
                        <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>
                            Click on any video, PDF paper, or course to track your ongoing progress here.
                        </p>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="overview-container">
            {/* Toast Notification */}
            {toastMessage && (
                <div className={`materials-toast toast-${toastMessage.type}`}>
                    <span>{toastMessage.type === 'success' ? '✅' : '⚠️'}</span>
                    <span>{toastMessage.text}</span>
                </div>
            )}

            <div className="overview-header">
                <div>
                    <h2>Study Materials & Resources</h2>
                    <p>
                        {isAdmin
                            ? 'Admin Resource Center: Add, edit, and organize placement study materials for all registered students.'
                            : 'Track your saved learning videos, PDF question papers, and courses directly in your profile.'}
                    </p>
                </div>
            </div>

            <div className="t-card">
                {/* Horizontal Tab Navigation */}
                <div className="t-card-header" style={{ padding: '0', borderBottom: '1px solid var(--border-color)', overflowX: 'auto' }}>
                    <div style={{ display: 'flex' }}>
                        {tabs.map(tab => {
                            const isTabActive = selectedTab === tab;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => {
                                        setSelectedTab(tab);
                                        setActiveTypeFilter('All');
                                        setSearchQuery('');
                                    }}
                                    style={{
                                        padding: '16px 24px',
                                        background: 'transparent',
                                        border: 'none',
                                        borderBottom: isTabActive ? '3px solid #2563eb' : '3px solid transparent',
                                        color: isTabActive ? '#2563eb' : '#64748b',
                                        fontWeight: isTabActive ? '700' : '600',
                                        fontSize: '14px',
                                        cursor: 'pointer',
                                        whiteSpace: 'nowrap',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <span>
                                        {tab === 'Study Materials' ? '📚' : tab === 'Saved for Later' ? '📌' : '⚡'}
                                    </span>
                                    {tab}
                                    {tab === 'Study Materials' && (
                                        <span className="tab-pill-counter">{sharedMaterials.length}</span>
                                    )}
                                    {tab === 'Saved for Later' && savedList.length > 0 && (
                                        <span className="tab-pill-counter blue">{savedList.length}</span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Tab Body */}
                {selectedTab === 'Study Materials' && renderStudyMaterials()}
                {selectedTab === 'Saved for Later' && renderSavedForLater()}
                {selectedTab === 'Ongoing Courses' && renderOngoingCourses()}
            </div>

            {/* ------------------------------------------------------------- */}
            {/* MODAL: ADD / EDIT STUDY MATERIAL (Admin Only) */}
            {/* ------------------------------------------------------------- */}
            {isModalOpen && (
                <div className="modal-backdrop-custom">
                    <div className="modal-dialog-custom">
                        <div className="modal-header-custom">
                            <div>
                                <h3 className="modal-title-custom">
                                    {modalMode === 'edit' ? '✏️ Edit Study Material' : '✨ Add New Study Material'}
                                </h3>
                                <p className="modal-subtitle-custom">
                                    {modalMode === 'edit'
                                        ? 'Update resource details, links, or categories in the database.'
                                        : 'Upload and publish YouTube videos, PDF question papers, notes, or course links for all students.'}
                                </p>
                            </div>
                            <button
                                type="button"
                                className="modal-close-btn"
                                onClick={() => setIsModalOpen(false)}
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleSubmitForm} className="modal-form-custom">
                            <div className="modal-scrollable-body">
                                {/* Title */}
                                <div className="form-group-custom">
                                    <label className="form-label-custom">
                                        Resource Title <span className="req-star">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-input-custom ${formErrors.title ? 'input-error' : ''}`}
                                        placeholder="e.g., Complete Quantitative Aptitude Course for Placements"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    />
                                    {formErrors.title && <span className="field-error-text">{formErrors.title}</span>}
                                </div>

                                {/* Resource Type Buttons */}
                                <div className="form-group-custom">
                                    <label className="form-label-custom">
                                        Resource Type <span className="req-star">*</span>
                                    </label>
                                    <div className="type-selector-grid">
                                        {[
                                            { id: 'video', label: '🎥 YouTube Video' },
                                            { id: 'pdf', label: '📄 PDF Question Paper' },
                                            { id: 'notes', label: '📝 Revision Notes' },
                                            { id: 'course', label: '🌐 Course Link' }
                                        ].map((t) => (
                                            <button
                                                key={t.id}
                                                type="button"
                                                className={`type-select-btn ${formData.type === t.id ? 'active' : ''}`}
                                                onClick={() => setFormData({ ...formData, type: t.id })}
                                            >
                                                {t.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Category & Target Company */}
                                <div className="form-row-2col">
                                    <div className="form-group-custom">
                                        <label className="form-label-custom">
                                            Category / Subject <span className="req-star">*</span>
                                        </label>
                                        <select
                                            className={`form-input-custom ${formErrors.category ? 'input-error' : ''}`}
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        >
                                            <option value="Quantitative Aptitude">Quantitative Aptitude</option>
                                            <option value="Logical Reasoning">Logical Reasoning</option>
                                            <option value="Verbal Ability">Verbal Ability</option>
                                            <option value="Technical & Coding">Technical & Coding</option>
                                            <option value="Data Interpretation">Data Interpretation</option>
                                            <option value="Visual Reasoning">Visual Reasoning</option>
                                            <option value="Company Specific">Company Specific</option>
                                            <option value="General Preparation">General Preparation</option>
                                        </select>
                                        {formErrors.category && <span className="field-error-text">{formErrors.category}</span>}
                                    </div>

                                    <div className="form-group-custom">
                                        <label className="form-label-custom">
                                            Target Company (Optional)
                                        </label>
                                        <select
                                            className="form-input-custom"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        >
                                            <option value="All Companies">All Companies</option>
                                            <option value="Wipro">Wipro</option>
                                            <option value="TCS">TCS</option>
                                            <option value="Cognizant">Cognizant</option>
                                            <option value="Infosys">Infosys</option>
                                            <option value="Accenture">Accenture</option>
                                            <option value="Deloitte">Deloitte</option>
                                            <option value="Capgemini">Capgemini</option>
                                            <option value="SAP">SAP</option>
                                            <option value="Microsoft">Microsoft</option>
                                            <option value="General Preparation">General Preparation</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Resource URL with Auto YouTube Detection */}
                                <div className="form-group-custom">
                                    <label className="form-label-custom">
                                        Resource URL / Web Link <span className="req-star">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-input-custom ${formErrors.url ? 'input-error' : ''}`}
                                        placeholder="https://www.youtube.com/watch?v=... or /pyq/tech_pyq1.pdf"
                                        value={formData.url}
                                        onChange={(e) => handleUrlChange(e.target.value)}
                                    />
                                    {formErrors.url && <span className="field-error-text">{formErrors.url}</span>}
                                    <span className="field-hint">
                                        💡 Pasting a YouTube link will automatically extract the video ID and high-res thumbnail.
                                    </span>
                                </div>

                                {/* Channel / Author Name & Custom Thumbnail URL */}
                                <div className="form-row-2col">
                                    <div className="form-group-custom">
                                        <label className="form-label-custom">
                                            Channel / Author / Faculty Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input-custom"
                                            placeholder="e.g., Love Babbar, PRMIT&R Placement Cell"
                                            value={formData.author}
                                            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                        />
                                    </div>

                                    <div className="form-group-custom">
                                        <label className="form-label-custom">
                                            Thumbnail Image URL (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input-custom"
                                            placeholder="https://... or auto-generated from YouTube"
                                            value={formData.thumbnail}
                                            onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Live Thumbnail Preview if available */}
                                {formData.thumbnail && (
                                    <div className="thumbnail-preview-box">
                                        <span className="preview-label">Live Thumbnail Preview:</span>
                                        <img
                                            src={formData.thumbnail}
                                            alt="Preview"
                                            className="preview-img"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                )}

                                {/* Description */}
                                <div className="form-group-custom">
                                    <label className="form-label-custom">
                                        Description & Key Topics Covered
                                    </label>
                                    <textarea
                                        rows={3}
                                        className="form-input-custom form-textarea-custom"
                                        placeholder="Summarize the concepts, formulas, or question types covered in this resource..."
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    />
                                </div>

                                {/* Tags */}
                                <div className="form-group-custom">
                                    <label className="form-label-custom">
                                        Tags (Comma separated)
                                    </label>
                                    <input
                                        type="text"
                                        className="form-input-custom"
                                        placeholder="e.g., NQT, Aptitude, Coding, 2024 Placement"
                                        value={formData.tags}
                                        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Modal Footer Actions */}
                            <div className="modal-footer-custom">
                                <button
                                    type="button"
                                    className="btn-cancel-modal"
                                    onClick={() => setIsModalOpen(false)}
                                    disabled={isSubmitting}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn-submit-modal"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner-white"></span> Saving to Database...
                                        </>
                                    ) : (
                                        modalMode === 'edit' ? '✓ Save Changes' : '🚀 Publish Study Material'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentStudyMaterials;
