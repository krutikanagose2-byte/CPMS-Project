import React from 'react';

const PlacementDrives = () => {
    return (
        <div className="overview-container">
            <div className="overview-header">
                <div>
                    <h2>Placement Drives</h2>
                    <p>Register for placement drives.</p>
                </div>
            </div>

            <div className="t-card">
                <div className="t-card-header" style={{ padding: '0', borderBottom: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex' }}>
                        <button style={{ padding: '16px 24px', background: 'transparent', border: 'none', borderBottom: '2px solid var(--primary)', color: 'var(--primary)', fontWeight: '600', fontSize: '13px', cursor: 'pointer' }}>Upcoming Drives</button>
                        <button style={{ padding: '16px 24px', background: 'transparent', border: 'none', color: 'var(--text-muted)', fontWeight: '500', fontSize: '13px', cursor: 'pointer' }}>Registered Drives</button>
                        <button style={{ padding: '16px 24px', background: 'transparent', border: 'none', color: 'var(--text-muted)', fontWeight: '500', fontSize: '13px', cursor: 'pointer' }}>Past Drives</button>
                    </div>
                </div>

                <table className="t-table">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Role</th>
                            <th>Drive Date</th>
                            <th>Location</th>
                            <th>Registration Last Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>TCS</strong></td>
                            <td>Software Engineer</td>
                            <td>25 May 2025</td>
                            <td>Online</td>
                            <td>20 May 2025</td>
                            <td><button className="t-action-btn" style={{ background: 'var(--primary)', color: 'white' }}>Register</button></td>
                        </tr>
                        <tr>
                            <td><strong>Infosys</strong></td>
                            <td>System Engineer</td>
                            <td>29 May 2025</td>
                            <td>Online</td>
                            <td>22 May 2025</td>
                            <td><button className="t-action-btn" style={{ background: 'var(--primary)', color: 'white' }}>Register</button></td>
                        </tr>
                        <tr>
                            <td><strong>Capgemini</strong></td>
                            <td>Analyst</td>
                            <td>02 Jun 2025</td>
                            <td>Pune</td>
                            <td>25 May 2025</td>
                            <td><button className="t-action-btn" style={{ background: 'var(--primary)', color: 'white' }}>Register</button></td>
                        </tr>
                        <tr>
                            <td><strong>Wipro</strong></td>
                            <td>Project Engineer</td>
                            <td>05 Jun 2025</td>
                            <td>Bangalore</td>
                            <td>30 May 2025</td>
                            <td><button className="t-action-btn" style={{ background: 'var(--primary)', color: 'white' }}>Register</button></td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ padding: '16px 20px', background: '#f8fafc', fontSize: '11px', color: 'var(--primary)', borderTop: '1px solid var(--border-color)' }}>
                    <i className="fas fa-star"></i> Note: Register early to increase your chances!
                </div>
            </div>
        </div>
    );
};

export default PlacementDrives;
