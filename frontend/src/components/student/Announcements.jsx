import React from 'react';

const Announcements = () => {
    return (
        <div className="overview-container">
            <div className="overview-header">
                <div>
                    <h2>Announcements</h2>
                    <p>Stay updated with the latest updates.</p>
                </div>
            </div>

            <div className="t-card">
                <div className="t-card-header">
                    <h3 className="t-card-title">Latest Announcements</h3>
                </div>
                <div style={{ padding: '0 24px' }}>
                    
                    <div style={{ display: 'flex', gap: '16px', padding: '24px 0', borderBottom: '1px solid var(--border-color)' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>
                            <i className="fas fa-bullhorn"></i>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <h4 style={{ margin: 0, fontSize: '15px', color: 'var(--text-dark)' }}>TCS NQT Drive</h4>
                                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>10 May 2025</span>
                            </div>
                            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>TCS NQT drive is scheduled on 25 May 2025. Prepare well and apply on time.</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', padding: '24px 0', borderBottom: '1px solid var(--border-color)' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>
                            <i className="fas fa-building"></i>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <h4 style={{ margin: 0, fontSize: '15px', color: 'var(--text-dark)' }}>Infosys Off-Campus Drive</h4>
                                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>08 May 2025</span>
                            </div>
                            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>Infosys off-campus is live open for 2025 batch.</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', padding: '24px 0', borderBottom: '1px solid var(--border-color)' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>
                            <i className="fas fa-file-alt"></i>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <h4 style={{ margin: 0, fontSize: '15px', color: 'var(--text-dark)' }}>Aptitude Test Practice Session</h4>
                                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>05 May 2025</span>
                            </div>
                            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>Attend the aptitude test practice on 14 May 2025 at 5:00 PM.</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', padding: '24px 0' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <h4 style={{ margin: 0, fontSize: '15px', color: 'var(--text-dark)' }}>Mock Test - TCS NQT</h4>
                                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>02 May 2025</span>
                            </div>
                            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>TCS NQT mock test will be conducted on 20 May 2025.</p>
                        </div>
                    </div>

                </div>
                <div style={{ textAlign: 'center', padding: '16px', borderTop: '1px solid var(--border-color)' }}>
                    <a href="#" className="view-all-link" style={{ fontWeight: '600' }}>View All Announcements <i className="fas fa-chevron-right" style={{ fontSize: '10px' }}></i></a>
                </div>
            </div>
        </div>
    );
};

export default Announcements;
