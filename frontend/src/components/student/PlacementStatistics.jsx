import React from 'react';

const PlacementStatistics = () => {
    return (
        <div className="overview-container">
            <div className="overview-header">
                <div>
                    <h2>Placement Statistics</h2>
                    <p>Track your placement progress.</p>
                </div>
            </div>

            <div className="stats-row" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                <div className="t-card stat-box">
                    <div className="stat-icon-bg bg-blue-light text-blue"><i className="fas fa-file-alt"></i></div>
                    <div className="stat-content">
                        <span className="stat-label">Total Applications</span>
                        <span className="stat-value">05</span>
                    </div>
                </div>
                <div className="t-card stat-box">
                    <div className="stat-icon-bg bg-orange-light text-orange"><i className="fas fa-user-check"></i></div>
                    <div className="stat-content">
                        <span className="stat-label">Shortlisted</span>
                        <span className="stat-value">02</span>
                    </div>
                </div>
                <div className="t-card stat-box">
                    <div className="stat-icon-bg bg-purple-light text-purple"><i className="fas fa-comments"></i></div>
                    <div className="stat-content">
                        <span className="stat-label">Interviews</span>
                        <span className="stat-value">01</span>
                    </div>
                </div>
                <div className="t-card stat-box">
                    <div className="stat-icon-bg bg-green-light text-green"><i className="fas fa-trophy"></i></div>
                    <div className="stat-content">
                        <span className="stat-label">Offers</span>
                        <span className="stat-value">00</span>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div className="t-card">
                    <div className="t-card-header">
                        <h3 className="t-card-title">Application Overview</h3>
                    </div>
                    <div style={{ padding: '24px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '250px', borderBottom: '1px solid var(--border-color)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>05</span>
                            <div style={{ width: '40px', height: '150px', background: 'var(--primary)', borderRadius: '4px 4px 0 0' }}></div>
                            <span style={{ fontSize: '12px', color: 'var(--text-dark)' }}>Applied</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>02</span>
                            <div style={{ width: '40px', height: '80px', background: 'var(--warning)', borderRadius: '4px 4px 0 0' }}></div>
                            <span style={{ fontSize: '12px', color: 'var(--text-dark)' }}>Shortlisted</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>01</span>
                            <div style={{ width: '40px', height: '40px', background: '#38bdf8', borderRadius: '4px 4px 0 0' }}></div>
                            <span style={{ fontSize: '12px', color: 'var(--text-dark)' }}>In Process</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>01</span>
                            <div style={{ width: '40px', height: '40px', background: 'var(--danger)', borderRadius: '4px 4px 0 0' }}></div>
                            <span style={{ fontSize: '12px', color: 'var(--text-dark)' }}>Rejected</span>
                        </div>
                    </div>
                    <div style={{ padding: '16px', fontSize: '12px', color: 'var(--text-muted)' }}>Count</div>
                </div>

                <div className="t-card">
                    <div className="t-card-header">
                        <h3 className="t-card-title">Status Percentage</h3>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '280px', gap: '40px' }}>
                        <div className="donut-chart" style={{ width: '180px', height: '180px' }}>
                            <div className="donut-hole" style={{ width: '130px', height: '130px' }}>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '120px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span className="dot bg-blue"></span><span style={{ fontSize: '12px' }}>Applied</span></div>
                                <strong style={{ fontSize: '12px' }}>50%</strong>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '120px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span className="dot bg-yellow"></span><span style={{ fontSize: '12px' }}>Shortlisted</span></div>
                                <strong style={{ fontSize: '12px' }}>20%</strong>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '120px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span className="dot" style={{ background: '#38bdf8' }}></span><span style={{ fontSize: '12px' }}>In Process</span></div>
                                <strong style={{ fontSize: '12px' }}>10%</strong>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '120px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span className="dot bg-red"></span><span style={{ fontSize: '12px' }}>Rejected</span></div>
                                <strong style={{ fontSize: '12px' }}>20%</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--primary)', marginTop: '20px' }}>
                <i className="fas fa-star"></i> Keep applying and stay consistent! <i className="fas fa-star"></i>
            </div>
        </div>
    );
};

export default PlacementStatistics;
