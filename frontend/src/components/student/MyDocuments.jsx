import React from 'react';

const MyDocuments = () => {
    return (
        <div className="overview-container">
            <div className="overview-header">
                <div>
                    <h2>My Documents</h2>
                    <p>Manage and upload your important documents.</p>
                </div>
            </div>

            <div className="t-card">
                <div className="t-card-header">
                    <h3 className="t-card-title">My Documents</h3>
                    <button className="t-action-btn" style={{ background: 'var(--primary)', color: 'white' }}>
                        <i className="fas fa-upload" style={{ marginRight: '8px' }}></i> Upload Document
                    </button>
                </div>
                
                <table className="t-table">
                    <thead>
                        <tr>
                            <th>Document Name</th>
                            <th>Type</th>
                            <th>Uploaded On</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <i className="fas fa-file-pdf text-red" style={{ fontSize: '20px' }}></i>
                                    <strong>Resume_ShwetaRathod.pdf</strong>
                                </div>
                            </td>
                            <td>Resume</td>
                            <td>10 May 2025</td>
                            <td>
                                <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)' }}>
                                    <i className="fas fa-eye" style={{ cursor: 'pointer' }}></i>
                                    <i className="fas fa-download" style={{ cursor: 'pointer' }}></i>
                                    <i className="fas fa-trash-alt text-red" style={{ cursor: 'pointer' }}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <i className="fas fa-file-image text-blue" style={{ fontSize: '20px' }}></i>
                                    <strong>10th_Marksheet.pdf</strong>
                                </div>
                            </td>
                            <td>Marksheet</td>
                            <td>15 May 2025</td>
                            <td>
                                <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)' }}>
                                    <i className="fas fa-eye" style={{ cursor: 'pointer' }}></i>
                                    <i className="fas fa-download" style={{ cursor: 'pointer' }}></i>
                                    <i className="fas fa-trash-alt text-red" style={{ cursor: 'pointer' }}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <i className="fas fa-file-image text-blue" style={{ fontSize: '20px' }}></i>
                                    <strong>12th_Marksheet.pdf</strong>
                                </div>
                            </td>
                            <td>Marksheet</td>
                            <td>15 May 2025</td>
                            <td>
                                <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)' }}>
                                    <i className="fas fa-eye" style={{ cursor: 'pointer' }}></i>
                                    <i className="fas fa-download" style={{ cursor: 'pointer' }}></i>
                                    <i className="fas fa-trash-alt text-red" style={{ cursor: 'pointer' }}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <i className="fas fa-file-pdf text-red" style={{ fontSize: '20px' }}></i>
                                    <strong>BE_Semester_Marks.pdf</strong>
                                </div>
                            </td>
                            <td>Marksheet</td>
                            <td>15 May 2025</td>
                            <td>
                                <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)' }}>
                                    <i className="fas fa-eye" style={{ cursor: 'pointer' }}></i>
                                    <i className="fas fa-download" style={{ cursor: 'pointer' }}></i>
                                    <i className="fas fa-trash-alt text-red" style={{ cursor: 'pointer' }}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <i className="fas fa-file-archive text-yellow" style={{ fontSize: '20px' }}></i>
                                    <strong>Certificates.zip</strong>
                                </div>
                            </td>
                            <td>Others</td>
                            <td>16 May 2025</td>
                            <td>
                                <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)' }}>
                                    <i className="fas fa-eye" style={{ cursor: 'pointer' }}></i>
                                    <i className="fas fa-download" style={{ cursor: 'pointer' }}></i>
                                    <i className="fas fa-trash-alt text-red" style={{ cursor: 'pointer' }}></i>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ padding: '16px 20px', background: '#f8fafc', fontSize: '11px', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)' }}>
                    <i className="fas fa-info-circle text-blue"></i> Note: Allowed file types: PDF, DOC, DOCX, ZIP (Max size: 5MB)
                </div>
            </div>
        </div>
    );
};

export default MyDocuments;
