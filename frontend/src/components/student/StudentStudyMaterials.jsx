import React, { useState } from 'react';

const StudentStudyMaterials = () => {
    const [selectedTab, setSelectedTab] = useState('All Topics');

    const materials = [
        {
            id: 1,
            category: 'Aptitude',
            topic: 'Quantitative Aptitude & Numerical Ability',
            title: 'Complete 220+ Video Masterclass Series (Number System, Percentages, Time & Work, Speed & Distance)',
            type: 'YouTube Video Playlist',
            badgeColor: '#ef4444',
            badgeBg: '#fee2e2',
            url: 'https://youtube.com/playlist?list=PLMufDeLh5x2Aaig0ZieDTUsKSmvmz1RBN&si=PxI3O6thsdfQ_V7g',
            actionText: 'Watch Playlist ↗'
        },
        {
            id: 2,
            category: 'Aptitude',
            topic: 'Quantitative Aptitude PYQs',
            title: 'Previous Year Question Papers with Step-by-Step Solutions',
            type: 'PDF Material',
            badgeColor: '#2563eb',
            badgeBg: '#dbeafe',
            url: '/pyq/pyq1.pdf',
            actionText: 'Download PDF ↓'
        },
        {
            id: 3,
            category: 'DSA',
            topic: 'Data Structures & Algorithms',
            title: 'Blind 75 & Placement Coding Sheet with Explanations',
            type: 'Interactive Roadmap',
            badgeColor: '#7c3aed',
            badgeBg: '#ede9fe',
            url: 'https://leetcode.com',
            actionText: 'View Problems ↗'
        },
        {
            id: 4,
            category: 'SQL',
            topic: 'Database Management Systems & SQL',
            title: 'Top 50 Most Asked SQL Query Questions in Technical Interviews',
            type: 'Cheatsheet',
            badgeColor: '#059669',
            badgeBg: '#d1fae5',
            url: 'https://www.w3schools.com/sql/',
            actionText: 'Study Guide ↗'
        },
        {
            id: 5,
            category: 'Java',
            topic: 'Core Java & OOP Concepts',
            title: 'Complete Java Interview Prep - Collections, Concurrency & Streams',
            type: 'Documentation',
            badgeColor: '#ea580c',
            badgeBg: '#ffedd5',
            url: 'https://docs.oracle.com/en/java/',
            actionText: 'Read Docs ↗'
        },
        {
            id: 6,
            category: 'System Design',
            topic: 'Low Level & High Level System Design',
            title: 'System Design Primer for Campus & Entry Level Engineering Roles',
            type: 'Guide',
            badgeColor: '#0891b2',
            badgeBg: '#cffafe',
            url: 'https://github.com/donnemartin/system-design-primer',
            actionText: 'Explore Guide ↗'
        }
    ];

    const tabs = ['All Topics', 'Aptitude', 'DSA', 'SQL', 'Java', 'System Design'];

    const filteredMaterials = selectedTab === 'All Topics'
        ? materials
        : materials.filter(m => m.category === selectedTab);

    return (
        <div className="overview-container">
            <div className="overview-header">
                <div>
                    <h2>Study Materials</h2>
                    <p>Access curated study resources, video playlists, and practice sheets to ace your placement exams.</p>
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
                                    padding: '16px 24px',
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: selectedTab === tab ? '2px solid var(--primary)' : '2px solid transparent',
                                    color: selectedTab === tab ? 'var(--primary)' : 'var(--text-muted)',
                                    fontWeight: selectedTab === tab ? '600' : '500',
                                    fontSize: '13px',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <table className="t-table">
                    <thead>
                        <tr>
                            <th>Topic</th>
                            <th>Resource Title</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMaterials.length > 0 ? (
                            filteredMaterials.map(item => (
                                <tr key={item.id}>
                                    <td style={{ fontWeight: '600', color: 'var(--text-main, #1e293b)' }}>
                                        {item.topic}
                                    </td>
                                    <td>
                                        <div style={{ fontSize: '13.5px', color: '#334155' }}>
                                            {item.title}
                                        </div>
                                    </td>
                                    <td>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '4px 10px',
                                            borderRadius: '9999px',
                                            fontSize: '12px',
                                            fontWeight: '600',
                                            backgroundColor: item.badgeBg,
                                            color: item.badgeColor
                                        }}>
                                            {item.type}
                                        </span>
                                    </td>
                                    <td>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                padding: '6px 14px',
                                                borderRadius: '6px',
                                                backgroundColor: item.category === 'Aptitude' && item.type.includes('YouTube') ? '#ef4444' : 'var(--primary)',
                                                color: '#ffffff',
                                                textDecoration: 'none',
                                                fontSize: '12.5px',
                                                fontWeight: '600'
                                            }}
                                        >
                                            {item.actionText}
                                        </a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" style={{ textAlign: 'center', padding: '24px' }}>
                                    No study materials available under {selectedTab} at the moment.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentStudyMaterials;

