import React, { useState, useRef, useEffect } from 'react';

const MyDocuments = ({ user, onUpdateUser }) => {
    const fileInputRef = useRef(null);
    const [activeDocId, setActiveDocId] = useState(null);
    const [viewingDoc, setViewingDoc] = useState(null);
    const [isSaving, setIsSaving] = useState(false);

    // Default template if user has no saved documents
    const defaultDocs = [
        { id: 1, name: 'Resume_xyz.pdf', type: 'Resume', date: '10 May 2025', icon: 'fas fa-file-pdf text-red', uploaded: false, fileUrl: null },
        { id: 2, name: '10th_Marksheet', type: 'Marksheet', date: '15 May 2025', icon: 'fas fa-file-image text-blue', uploaded: false, fileUrl: null },
        { id: 3, name: '12th_Marksheet', type: 'Marksheet', date: '15 May 2025', icon: 'fas fa-file-image text-blue', uploaded: false, fileUrl: null },
        { id: 4, name: 'B.Tech_Marksheet', type: 'Marksheet', date: '15 May 2025', icon: 'fas fa-file-pdf text-red', uploaded: false, fileUrl: null },
        { id: 5, name: 'Certificates.zip', type: 'Others', date: '16 May 2025', icon: 'fas fa-file-archive text-yellow', uploaded: false, fileUrl: null },
    ];

    const [documents, setDocuments] = useState(
        user?.myDocuments && user.myDocuments.length > 0 ? user.myDocuments : defaultDocs
    );

    // Sync state if user prop changes
    useEffect(() => {
        if (user?.myDocuments && user.myDocuments.length > 0) {
            setDocuments(user.myDocuments);
        }
    }, [user]);

    const saveDocumentsToBackend = async (updatedDocs) => {
        const userId = user?._id || user?.id;
        if (!userId) return;
        setIsSaving(true);
        try {
            const response = await fetch(`http://localhost:5000/api/student/profile/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...user, myDocuments: updatedDocs })
            });
            if (response.ok) {
                const updatedUser = await response.json();
                if (onUpdateUser) onUpdateUser(updatedUser);
                localStorage.setItem('user', JSON.stringify(updatedUser));
            } else {
                console.error("Failed to save documents to database");
            }
        } catch (error) {
            console.error("Error saving documents:", error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleActionClick = (docId, action) => {
        if (action === 'upload' || action === 'edit') {
            setActiveDocId(docId);
            if (action === 'edit') {
                setViewingDoc(null); // Close modal before picking a new file
            }
            fileInputRef.current.click();
        } else if (action === 'view') {
            const doc = documents.find(d => d.id === docId);
            if (doc && doc.fileUrl) {
                setViewingDoc(doc);
            }
        } else if (action === 'remove') {
            const updatedDocs = documents.map(doc => {
                if (doc.id === docId) {
                    return {
                        ...doc,
                        uploaded: false,
                        fileUrl: null
                    };
                }
                return doc;
            });
            setDocuments(updatedDocs);
            setViewingDoc(null);
            saveDocumentsToBackend(updatedDocs);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && activeDocId) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                const updatedDocs = documents.map(doc => {
                    if (doc.id === activeDocId) {
                        let icon = 'fas fa-file text-gray';
                        if (file.type.includes('pdf')) icon = 'fas fa-file-pdf text-red';
                        else if (file.type.includes('image')) icon = 'fas fa-file-image text-blue';
                        else if (file.name.includes('.zip')) icon = 'fas fa-file-archive text-yellow';

                        return {
                            ...doc,
                            icon: icon,
                            date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
                            uploaded: true,
                            fileUrl: base64String
                        };
                    }
                    return doc;
                });

                setDocuments(updatedDocs);
                saveDocumentsToBackend(updatedDocs);
            };
            reader.readAsDataURL(file); // Convert file to base64 string
        }
        e.target.value = ''; // Reset input
        setActiveDocId(null);
    };

    return (
        <div className="overview-container">
            <div className="overview-header">
                <div>
                    <h2>My Documents {isSaving && <span style={{ fontSize: '14px', color: 'var(--text-muted)', marginLeft: '10px' }}><i className="fas fa-spinner fa-spin"></i> Saving...</span>}</h2>
                    <p>Manage and upload your important documents.</p>
                </div>
            </div>

            <div className="t-card">
                <div className="t-card-header">
                    <h3 className="t-card-title">My Documents</h3>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                </div>

                <table className="t-table">
                    <thead>
                        <tr>
                            <th style={{ width: '40%' }}>Document Name</th>
                            <th style={{ width: '20%' }}>Type</th>
                            <th style={{ width: '20%' }}>Uploaded On</th>
                            <th style={{ width: '20%', textAlign: 'center' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map((doc) => (
                            <tr key={doc.id}>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <i className={doc.icon} style={{ fontSize: '20px' }}></i>
                                        <strong>{doc.name}</strong>
                                    </div>
                                </td>
                                <td>{doc.type}</td>
                                <td>{doc.date}</td>
                                <td>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                                        {!doc.uploaded ? (
                                            <button onClick={() => handleActionClick(doc.id, 'upload')} style={{ background: '#10b981', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: '500' }}>
                                                <i className="fas fa-upload" style={{ marginRight: '4px' }}></i> Upload
                                            </button>
                                        ) : (
                                            <button onClick={() => handleActionClick(doc.id, 'view')} style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: '500' }}>
                                                <i className="fas fa-eye" style={{ marginRight: '4px' }}></i> View
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ padding: '16px 20px', background: '#f8fafc', fontSize: '11px', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)' }}>
                    <i className="fas fa-info-circle text-blue"></i> Note: Allowed file types: PDF, DOC, DOCX, ZIP (Max size: 5MB)
                </div>
            </div>

            {/* Document Viewer Modal */}
            {viewingDoc && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 9999,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '40px'
                }}>
                    <div style={{
                        background: 'white', width: '100%', maxWidth: '900px', height: '100%', maxHeight: '80vh',
                        borderRadius: '12px', display: 'flex', flexDirection: 'column', overflow: 'hidden',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}>
                        <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb' }}>
                            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>{viewingDoc.name}</h3>
                            <button onClick={() => setViewingDoc(null)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#6b7280', padding: '0 8px' }}>
                                &times;
                            </button>
                        </div>

                        <div style={{ flex: 1, backgroundColor: '#f3f4f6', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', padding: '24px' }}>
                            {viewingDoc.icon.includes('pdf') ? (
                                <iframe src={viewingDoc.fileUrl} style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px', backgroundColor: 'white' }} title={viewingDoc.name} />
                            ) : viewingDoc.icon.includes('image') ? (
                                <img src={viewingDoc.fileUrl} alt={viewingDoc.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                            ) : (
                                <div style={{ textAlign: 'center', color: '#6b7280' }}>
                                    <i className={viewingDoc.icon} style={{ fontSize: '64px', marginBottom: '16px', display: 'block' }}></i>
                                    <p>Preview not available for this file type.</p>
                                </div>
                            )}
                        </div>

                        <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'flex-end', gap: '12px', borderTop: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                            <button onClick={() => handleActionClick(viewingDoc.id, 'edit')} style={{ background: '#eab308', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '500', display: 'flex', alignItems: 'center' }}>
                                <i className="fas fa-edit" style={{ marginRight: '8px' }}></i> Replace Document
                            </button>
                            <button onClick={() => handleActionClick(viewingDoc.id, 'remove')} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '500', display: 'flex', alignItems: 'center' }}>
                                <i className="fas fa-trash-alt" style={{ marginRight: '8px' }}></i> Remove Document
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyDocuments;
