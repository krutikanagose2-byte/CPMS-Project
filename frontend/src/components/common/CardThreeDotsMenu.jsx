import React, { useState, useEffect, useRef } from 'react';
import { isMaterialSaved, toggleSaveMaterial, markAsOngoing } from '../../utils/studyMaterialsStorage';

const CardThreeDotsMenu = ({ item, customStyle = {} }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [saved, setSaved] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const menuRef = useRef(null);

    useEffect(() => {
        if (item && item.id) {
            setSaved(isMaterialSaved(item.id));
        }

        const handleUpdate = () => {
            if (item && item.id) {
                setSaved(isMaterialSaved(item.id));
            }
        };

        window.addEventListener('studyMaterialsUpdated', handleUpdate);
        return () => window.removeEventListener('studyMaterialsUpdated', handleUpdate);
    }, [item]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleToggleSave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!item) return;

        const isNowSaved = toggleSaveMaterial(item);
        setSaved(isNowSaved);
        setIsOpen(false);

        setToastMessage(isNowSaved ? 'Saved to Study Materials!' : 'Removed from Saved');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
    };

    const handleOpenCourse = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (item) {
            markAsOngoing(item);
            if (item.url) {
                window.open(item.url, '_blank');
            }
        }
        setIsOpen(false);
    };

    return (
        <div 
            ref={menuRef} 
            className="card-three-dots-container" 
            style={{ 
                position: 'absolute', 
                top: '12px', 
                right: '12px', 
                zIndex: 1000, 
                pointerEvents: 'auto',
                ...customStyle 
            }}
        >
            <button
                type="button"
                className="card-three-dots-btn"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
                title="Save for Later & Options"
                style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #cbd5e1',
                    color: '#0f172a',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    transition: 'all 0.2s ease',
                    lineHeight: '1'
                }}
            >
                &#8942;
            </button>

            {isOpen && (
                <div
                    className="card-three-dots-dropdown"
                    style={{
                        position: 'absolute',
                        top: '40px',
                        right: '0',
                        backgroundColor: '#ffffff',
                        border: '1px solid #cbd5e1',
                        borderRadius: '10px',
                        boxShadow: '0 12px 28px rgba(0,0,0,0.18)',
                        minWidth: '170px',
                        padding: '6px 0',
                        zIndex: 1001
                    }}
                >
                    <button
                        type="button"
                        onClick={handleToggleSave}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            width: '100%',
                            padding: '10px 14px',
                            fontSize: '13px',
                            fontWeight: '600',
                            color: saved ? '#059669' : '#0f172a',
                            backgroundColor: saved ? '#f0fdf4' : 'transparent',
                            border: 'none',
                            textAlign: 'left',
                            cursor: 'pointer'
                        }}
                    >
                        <span>{saved ? '✓' : '🔖'}</span>
                        <span>{saved ? 'Saved for Later' : 'Save for Later'}</span>
                    </button>

                    {item && item.url && (
                        <button
                            type="button"
                            onClick={handleOpenCourse}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                width: '100%',
                                padding: '10px 14px',
                                fontSize: '13px',
                                fontWeight: '500',
                                color: '#2563eb',
                                backgroundColor: 'transparent',
                                border: 'none',
                                textAlign: 'left',
                                cursor: 'pointer',
                                borderTop: '1px solid #f1f5f9'
                            }}
                        >
                            <span>▶</span>
                            <span>Start / Continue</span>
                        </button>
                    )}
                </div>
            )}

            {showToast && (
                <div style={{
                    position: 'absolute',
                    top: '44px',
                    right: '0',
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    zIndex: 1002,
                    animation: 'fadeIn 0.2s ease'
                }}>
                    {toastMessage}
                </div>
            )}
        </div>
    );
};

export default CardThreeDotsMenu;
