import React, { useState, useEffect } from 'react';
import { getSavedMaterials, getOngoingCourses, removeSavedMaterial, markAsOngoing } from '../../utils/studyMaterialsStorage';

const StudentStudyMaterials = () => {
    const [selectedTab, setSelectedTab] = useState('Ongoing Courses');
    const [savedList, setSavedList] = useState([]);
    const [ongoingList, setOngoingList] = useState([]);

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

    const tabs = ['Ongoing Courses', 'Saved for Later'];

    const handleActionClick = (item) => {
        markAsOngoing(item);
        if (item.url) {
            window.open(item.url, '_blank');
        }
    };

    const handleRemoveSaved = (id, e) => {
        e.stopPropagation();
        removeSavedMaterial(id);
    };

    const renderFilteredMaterials = () => {
        if (selectedTab === 'Saved for Later') {
            return (
                <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                        <span style={{ fontSize: '22px' }}>📌</span>
                        <h3 style={{ fontSize: '16.5px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
                            Saved for Later ({savedList.length})
                        </h3>
                    </div>
                    {savedList.length > 0 ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                            {savedList.map(item => (
                                <div key={item.id} style={{
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '12px',
                                    padding: '18px',
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justify: 'space-between',
                                    position: 'relative'
                                }}>
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                                            <span style={{
                                                padding: '4px 10px',
                                                borderRadius: '6px',
                                                fontSize: '11.5px',
                                                fontWeight: '600',
                                                backgroundColor: item.badgeBg || '#fee2e2',
                                                color: item.badgeColor || '#ef4444'
                                            }}>
                                                {item.type || item.category || 'Saved Resource'}
                                            </span>
                                            <button
                                                onClick={(e) => handleRemoveSaved(item.id, e)}
                                                title="Remove from saved"
                                                style={{ border: 'none', background: 'transparent', color: '#94a3b8', cursor: 'pointer', fontSize: '18px' }}
                                            >
                                                ✕
                                            </button>
                                        </div>
                                        <h4 style={{ fontSize: '14.5px', fontWeight: '600', color: '#0f172a', margin: '0 0 6px 0', lineHeight: '1.4' }}>
                                            {item.title}
                                        </h4>
                                        {item.company && (
                                            <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 14px 0' }}>
                                                🏢 {item.company} Prep
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => handleActionClick(item)}
                                        style={{
                                            marginTop: '12px',
                                            padding: '9px 16px',
                                            borderRadius: '8px',
                                            backgroundColor: 'var(--primary, #2563eb)',
                                            color: '#ffffff',
                                            border: 'none',
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            width: '100%',
                                            textAlign: 'center'
                                        }}
                                    >
                                        Start Studying ↗
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '48px 24px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
                            <span style={{ fontSize: '36px', display: 'block', marginBottom: '12px' }}>📌</span>
                            <h4 style={{ margin: '0 0 6px 0', color: '#334155', fontSize: '16px' }}>No Saved Courses Yet</h4>
                            <p style={{ margin: 0, fontSize: '13.5px', color: '#64748b' }}>
                                Click the 3-dots menu (<b>⋮</b>) &rarr; <b>Save for Later</b> on any course card in Company Preparation to view it here.
                            </p>
                        </div>
                    )}
                </div>
            );
        }

        // Ongoing Courses Tab (Default)
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
                    <h2>Study Materials & Courses</h2>
                    <p>Track your ongoing learning courses and access your saved materials directly.</p>
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
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {tab}
                                {tab === 'Saved for Later' && savedList.length > 0 && (
                                    <span style={{
                                        marginLeft: '8px',
                                        backgroundColor: '#2563eb',
                                        color: '#fff',
                                        borderRadius: '10px',
                                        padding: '2px 8px',
                                        fontSize: '11px'
                                    }}>
                                        {savedList.length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {renderFilteredMaterials()}
            </div>
        </div>
    );
};

export default StudentStudyMaterials;
