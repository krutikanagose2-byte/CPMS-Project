import React, { useState, useEffect } from 'react';
import { getSavedMaterials, getOngoingCourses, removeSavedMaterial, markAsOngoing } from '../../utils/studyMaterialsStorage';

const StudentStudyMaterials = () => {
    const [selectedTab, setSelectedTab] = useState('Saved for Later');
    const [savedList, setSavedList] = useState([]);
    const [ongoingList, setOngoingList] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const loadData = () => {
        setSavedList(getSavedMaterials());
        setOngoingList(getOngoingCourses());
    };

    useEffect(() => {
        loadData();
        const handleUpdate = () => loadData();
        window.addEventListener('studyMaterialsUpdated', handleUpdate);
        return () => window.removeEventListener('studyMaterialsUpdated', handleUpdate);
    }, []);

    const tabs = ['Saved for Later', 'Ongoing Courses'];

    const handleActionClick = (item) => {
        markAsOngoing(item);
        if (item.url) {
            window.open(item.url, '_blank', 'noopener,noreferrer');
        }
    };

    const handleRemoveSaved = (id, e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        removeSavedMaterial(id);
    };

    // Categorization counts
    const videoCount = savedList.filter(i => (i.type && i.type.toLowerCase().includes('video')) || (i.url && i.url.includes('youtube'))).length;
    const pdfCount = savedList.filter(i => (i.type && i.type.toLowerCase().includes('pdf')) || (i.url && i.url.toLowerCase().includes('.pdf'))).length;

    const filteredSaved = savedList.filter(item => {
        const matchesFilter =
            activeFilter === 'All' ? true :
            activeFilter === 'Videos' ? ((item.type && item.type.toLowerCase().includes('video')) || (item.url && item.url.includes('youtube'))) :
            activeFilter === 'PDFs' ? ((item.type && item.type.toLowerCase().includes('pdf')) || (item.url && item.url.toLowerCase().includes('.pdf'))) :
            true;

        const matchesSearch = searchQuery.trim() === '' ||
            (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.channel && item.channel.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesFilter && matchesSearch;
    });

    const renderSavedForLater = () => {
        return (
            <div style={{ padding: '24px' }}>
                {/* Section Header with Stats and Filters */}
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

                    {/* Filter Pills */}
                    {savedList.length > 0 && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                            <button
                                type="button"
                                onClick={() => setActiveFilter('All')}
                                style={{
                                    padding: '6px 14px',
                                    borderRadius: '20px',
                                    fontSize: '12.5px',
                                    fontWeight: '600',
                                    border: '1px solid',
                                    borderColor: activeFilter === 'All' ? '#2563eb' : '#cbd5e1',
                                    backgroundColor: activeFilter === 'All' ? '#2563eb' : '#ffffff',
                                    color: activeFilter === 'All' ? '#ffffff' : '#475569',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                All ({savedList.length})
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveFilter('Videos')}
                                style={{
                                    padding: '6px 14px',
                                    borderRadius: '20px',
                                    fontSize: '12.5px',
                                    fontWeight: '600',
                                    border: '1px solid',
                                    borderColor: activeFilter === 'Videos' ? '#dc2626' : '#cbd5e1',
                                    backgroundColor: activeFilter === 'Videos' ? '#fee2e2' : '#ffffff',
                                    color: activeFilter === 'Videos' ? '#dc2626' : '#475569',
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <span>▶</span> YouTube Videos ({videoCount})
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveFilter('PDFs')}
                                style={{
                                    padding: '6px 14px',
                                    borderRadius: '20px',
                                    fontSize: '12.5px',
                                    fontWeight: '600',
                                    border: '1px solid',
                                    borderColor: activeFilter === 'PDFs' ? '#059669' : '#cbd5e1',
                                    backgroundColor: activeFilter === 'PDFs' ? '#d1fae5' : '#ffffff',
                                    color: activeFilter === 'PDFs' ? '#059669' : '#475569',
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <span>📄</span> PDF Resources ({pdfCount})
                            </button>
                        </div>
                    )}
                </div>

                {/* Search Bar if items > 3 */}
                {savedList.length > 3 && (
                    <div style={{ marginBottom: '20px' }}>
                        <input
                            type="text"
                            placeholder="Search saved materials by title, topic, or channel..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                maxWidth: '420px',
                                padding: '10px 14px',
                                borderRadius: '8px',
                                border: '1px solid #cbd5e1',
                                fontSize: '13.5px',
                                outline: 'none'
                            }}
                        />
                    </div>
                )}

                {/* Saved Items Grid */}
                {filteredSaved.length > 0 ? (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
                        gap: '20px'
                    }}>
                        {filteredSaved.map(item => {
                            const isVideo = (item.type && item.type.toLowerCase().includes('video')) || (item.url && item.url.includes('youtube'));
                            const isPdf = (item.type && item.type.toLowerCase().includes('pdf')) || (item.url && item.url.toLowerCase().includes('.pdf'));

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
                                        position: 'relative',
                                        transition: 'transform 0.2s, box-shadow 0.2s'
                                    }}
                                >
                                    {/* Thumbnail Image Container */}
                                    <div
                                        onClick={() => handleActionClick(item)}
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
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    display: 'block'
                                                }}
                                                onError={(e) => {
                                                    // Fallback image if local thumbnail fails
                                                    e.target.onerror = null;
                                                    e.target.src = isVideo
                                                        ? 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60'
                                                        : '/pyq/quant_pyq1_thumb.png';
                                                }}
                                            />
                                        ) : (
                                            <div style={{
                                                width: '100%',
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: isVideo ? '#1e293b' : '#f1f5f9',
                                                color: isVideo ? '#ffffff' : '#475569'
                                            }}>
                                                <span style={{ fontSize: '38px' }}>{isVideo ? '▶' : '📄'}</span>
                                            </div>
                                        )}

                                        {/* Play icon overlay for videos */}
                                        {isVideo && (
                                            <div style={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.5) 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                pointerEvents: 'none'
                                            }}>
                                                <div style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    backgroundColor: 'rgba(220, 38, 38, 0.95)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#ffffff',
                                                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                                                }}>
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                                                        <path d="M8 5v14l11-7z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        )}

                                        {/* Media Type Badge */}
                                        <span style={{
                                            position: 'absolute',
                                            bottom: '8px',
                                            left: '8px',
                                            backgroundColor: isVideo ? 'rgba(220, 38, 38, 0.92)' : 'rgba(15, 23, 42, 0.88)',
                                            color: '#ffffff',
                                            fontSize: '11px',
                                            fontWeight: '700',
                                            padding: '3px 8px',
                                            borderRadius: '4px',
                                            letterSpacing: '0.3px',
                                            textTransform: 'uppercase'
                                        }}>
                                            {isVideo ? 'YouTube Video' : 'PDF Resource'}
                                        </span>

                                        {/* Bookmark / Remove Button */}
                                        <button
                                            type="button"
                                            onClick={(e) => handleRemoveSaved(item.id, e)}
                                            title="Remove from Saved for Later"
                                            style={{
                                                position: 'absolute',
                                                top: '8px',
                                                right: '8px',
                                                width: '34px',
                                                height: '34px',
                                                borderRadius: '50%',
                                                backgroundColor: '#2563eb',
                                                color: '#ffffff',
                                                border: '1px solid #1d4ed8',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
                                                transition: 'transform 0.2s',
                                                zIndex: 10
                                            }}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Content Body */}
                                    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                                                <span style={{
                                                    fontSize: '11px',
                                                    fontWeight: '700',
                                                    color: isVideo ? '#dc2626' : '#2563eb',
                                                    backgroundColor: isVideo ? '#fee2e2' : '#dbeafe',
                                                    padding: '2px 8px',
                                                    borderRadius: '4px',
                                                    textTransform: 'uppercase'
                                                }}>
                                                    {item.category || item.tag || 'Placement Prep'}
                                                </span>

                                                {item.duration && (
                                                    <span style={{ fontSize: '11.5px', color: '#64748b', fontWeight: '500' }}>
                                                        ⏱ {item.duration}
                                                    </span>
                                                )}
                                            </div>

                                            <h4
                                                onClick={() => handleActionClick(item)}
                                                style={{
                                                    fontSize: '14.5px',
                                                    fontWeight: '600',
                                                    color: '#0f172a',
                                                    margin: '0 0 6px 0',
                                                    lineHeight: '1.4',
                                                    cursor: 'pointer',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden'
                                                }}
                                                title={item.title}
                                            >
                                                {item.title}
                                            </h4>

                                            {item.channel && (
                                                <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                    <span>👤</span> {item.channel}
                                                </p>
                                            )}

                                            {item.company && (
                                                <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 8px 0' }}>
                                                    🏢 {item.company} Prep
                                                </p>
                                            )}
                                        </div>

                                        {/* Action Button */}
                                        <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
                                            <button
                                                type="button"
                                                onClick={() => handleActionClick(item)}
                                                style={{
                                                    flex: 1,
                                                    padding: '9px 14px',
                                                    borderRadius: '8px',
                                                    backgroundColor: isVideo ? '#dc2626' : '#2563eb',
                                                    color: '#ffffff',
                                                    border: 'none',
                                                    fontSize: '13px',
                                                    fontWeight: '600',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '6px',
                                                    boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                                                }}
                                            >
                                                <span>{isVideo ? '▶ Watch Video' : '📄 Open PDF'}</span>
                                                <span>↗</span>
                                            </button>

                                            <button
                                                type="button"
                                                onClick={(e) => handleRemoveSaved(item.id, e)}
                                                title="Remove from saved"
                                                style={{
                                                    padding: '9px 12px',
                                                    borderRadius: '8px',
                                                    backgroundColor: '#f1f5f9',
                                                    color: '#64748b',
                                                    border: '1px solid #e2e8f0',
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
                    <div style={{
                        textAlign: 'center',
                        padding: '56px 24px',
                        backgroundColor: '#f8fafc',
                        borderRadius: '16px',
                        border: '1px dashed #cbd5e1'
                    }}>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            backgroundColor: '#eff6ff',
                            color: '#2563eb',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '28px',
                            margin: '0 auto 16px auto'
                        }}>
                            🔖
                        </div>
                        <h4 style={{ margin: '0 0 8px 0', color: '#1e293b', fontSize: '17px', fontWeight: '700' }}>
                            {searchQuery ? 'No Matching Saved Resources' : 'No Saved Study Resources Yet'}
                        </h4>
                        <p style={{ margin: '0 auto', maxWidth: '440px', fontSize: '13.5px', color: '#64748b', lineHeight: '1.5' }}>
                            Click the bookmark icon on any <b>YouTube video card</b> or <b>PDF Previous Year Questions card</b> in Company Preparation to save them here for quick access anytime!
                        </p>
                    </div>
                )}
            </div>
        );
    };

    const renderOngoingCourses = () => {
        return (
            <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                    <span style={{ fontSize: '22px' }}>⚡</span>
                    <h3 style={{ fontSize: '16.5px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
                        Ongoing Learning Courses
                    </h3>
                </div>
                {ongoingList.length > 0 ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                        {ongoingList.map(item => (
                            <div key={item.id} style={{
                                border: '1px solid #cbd5e1',
                                borderRadius: '12px',
                                padding: '20px',
                                backgroundColor: '#ffffff',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#475569', textTransform: 'uppercase' }}>
                                        {item.category}
                                    </span>
                                    <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#2563eb' }}>
                                        {item.progress || 35}% Completed
                                    </span>
                                </div>
                                <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#0f172a', margin: '0 0 12px 0', lineHeight: '1.4' }}>
                                    {item.title}
                                </h4>
                                
                                {/* Progress bar */}
                                <div style={{ width: '100%', height: '7px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden', marginBottom: '18px' }}>
                                    <div style={{ width: `${item.progress || 35}%`, height: '100%', backgroundColor: '#2563eb', borderRadius: '4px', transition: 'width 0.3s' }} />
                                </div>

                                <button
                                    onClick={() => handleActionClick(item)}
                                    style={{
                                        padding: '9px 16px',
                                        borderRadius: '8px',
                                        backgroundColor: '#1e293b',
                                        color: '#ffffff',
                                        border: 'none',
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '6px'
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
                            Open any study course to track your progress here.
                        </p>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="overview-container">
            <div className="overview-header">
                <div>
                    <h2>Study Materials & Resources</h2>
                    <p>Track your saved learning videos, PDF question papers, and courses directly in your profile.</p>
                </div>
            </div>

            <div className="t-card">
                <div className="t-card-header" style={{ padding: '0', borderBottom: '1px solid var(--border-color)', overflowX: 'auto' }}>
                    <div style={{ display: 'flex' }}>
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                style={{
                                    padding: '16px 28px',
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: selectedTab === tab ? '2px solid var(--primary, #2563eb)' : '2px solid transparent',
                                    color: selectedTab === tab ? 'var(--primary, #2563eb)' : 'var(--text-muted, #64748b)',
                                    fontWeight: selectedTab === tab ? '700' : '500',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                            >
                                <span>{tab === 'Saved for Later' ? '📌' : '⚡'}</span>
                                {tab}
                                {tab === 'Saved for Later' && savedList.length > 0 && (
                                    <span style={{
                                        backgroundColor: '#2563eb',
                                        color: '#fff',
                                        borderRadius: '10px',
                                        padding: '2px 8px',
                                        fontSize: '11px',
                                        fontWeight: '700'
                                    }}>
                                        {savedList.length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {selectedTab === 'Saved for Later' ? renderSavedForLater() : renderOngoingCourses()}
            </div>
        </div>
    );
};

export default StudentStudyMaterials;
