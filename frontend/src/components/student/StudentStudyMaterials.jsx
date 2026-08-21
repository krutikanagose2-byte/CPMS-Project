import React from 'react';

const StudentStudyMaterials = () => {
    return (
        <div className="overview-container">
            <div className="overview-header">
                <div>
                    <h2>Study Materials</h2>
                    <p>Access recommended study resources to prepare better.</p>
                </div>
            </div>

            <div className="t-card">
                <div className="t-card-header" style={{ padding: '0', borderBottom: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex' }}>
                        <button style={{ padding: '16px 24px', background: 'transparent', border: 'none', borderBottom: '2px solid var(--primary)', color: 'var(--primary)', fontWeight: '600', fontSize: '13px', cursor: 'pointer' }}>All Topics</button>
                        <button style={{ padding: '16px 24px', background: 'transparent', border: 'none', color: 'var(--text-muted)', fontWeight: '500', fontSize: '13px', cursor: 'pointer' }}>Aptitude</button>
                        <button style={{ padding: '16px 24px', background: 'transparent', border: 'none', color: 'var(--text-muted)', fontWeight: '500', fontSize: '13px', cursor: 'pointer' }}>DSA</button>
                        <button style={{ padding: '16px 24px', background: 'transparent', border: 'none', color: 'var(--text-muted)', fontWeight: '500', fontSize: '13px', cursor: 'pointer' }}>SQL</button>
                        <button style={{ padding: '16px 24px', background: 'transparent', border: 'none', color: 'var(--text-muted)', fontWeight: '500', fontSize: '13px', cursor: 'pointer' }}>Java</button>
                        <button style={{ padding: '16px 24px', background: 'transparent', border: 'none', color: 'var(--text-muted)', fontWeight: '500', fontSize: '13px', cursor: 'pointer' }}>System Design</button>
                    </div>
                </div>

                <table className="t-table">
                    <thead>
                        <tr>
                            <th>Topic</th>
                            <th>Resource</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center', padding: '24px' }}>No study materials available at the moment.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentStudyMaterials;
