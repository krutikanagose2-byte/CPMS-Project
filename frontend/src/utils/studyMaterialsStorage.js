// Utility for managing saved study materials & ongoing learning with MongoDB backend persistence and localStorage caching
import { apiFetch } from './api';

const SAVED_MATERIALS_KEY = 'cpms_saved_study_materials';
const ONGOING_COURSES_KEY = 'cpms_ongoing_learning_courses';

// Retrieve currently logged-in user from storage
export const getLoggedInUser = () => {
    try {
        const session = sessionStorage.getItem('user');
        if (session) return JSON.parse(session);
        const local = localStorage.getItem('user');
        if (local) return JSON.parse(local);
    } catch (e) {
        console.error('Failed to read logged in user', e);
    }
    return null;
};

// Sync updated saved materials list to backend DB
const syncSavedMaterialsToBackend = async (materials) => {
    try {
        const user = getLoggedInUser();
        const userId = user?._id || user?.id;
        if (!userId) return;

        // Keep local user session in sync
        const updatedUser = { ...user, savedStudyMaterials: materials };
        try {
            sessionStorage.setItem('user', JSON.stringify(updatedUser));
            localStorage.setItem('user', JSON.stringify(updatedUser));
        } catch (e) {}

        // Persist to MongoDB through student profile API
        await apiFetch(`/api/student/profile/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ savedStudyMaterials: materials })
        });
    } catch (err) {
        console.warn('Background sync of saved study materials to database failed (stored locally):', err);
    }
};

// Sync when user logs in or updates profile
export const syncUserSavedMaterials = (user) => {
    if (!user) return;
    try {
        const localMaterials = getSavedMaterials();
        const dbMaterials = Array.isArray(user.savedStudyMaterials) ? user.savedStudyMaterials : [];

        // Merge keeping unique by item.id
        const map = new Map();
        localMaterials.forEach(item => {
            if (item && item.id) map.set(item.id, item);
        });
        dbMaterials.forEach(item => {
            if (item && item.id) map.set(item.id, item);
        });

        const merged = Array.from(map.values());
        localStorage.setItem(SAVED_MATERIALS_KEY, JSON.stringify(merged));
        window.dispatchEvent(new CustomEvent('studyMaterialsUpdated'));

        // If local had newer items not yet in DB, sync them up
        if (merged.length > dbMaterials.length) {
            syncSavedMaterialsToBackend(merged);
        }
    } catch (e) {
        console.error('Failed to sync user saved materials', e);
    }
};

export const getSavedMaterials = () => {
    try {
        const data = localStorage.getItem(SAVED_MATERIALS_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        console.error('Failed to parse saved study materials', e);
        return [];
    }
};

export const isMaterialSaved = (id) => {
    if (!id) return false;
    const saved = getSavedMaterials();
    return saved.some(item => item.id === id);
};

export const saveMaterial = (item) => {
    if (!item || !item.id) return false;
    const saved = getSavedMaterials();
    if (!saved.some(i => i.id === item.id)) {
        const updated = [{ ...item, savedAt: new Date().toISOString() }, ...saved];
        localStorage.setItem(SAVED_MATERIALS_KEY, JSON.stringify(updated));
        window.dispatchEvent(new CustomEvent('studyMaterialsUpdated'));
        // Asynchronously persist to backend database
        syncSavedMaterialsToBackend(updated);
        return true;
    }
    return false;
};

export const removeSavedMaterial = (id) => {
    if (!id) return;
    const saved = getSavedMaterials();
    const updated = saved.filter(i => i.id !== id);
    localStorage.setItem(SAVED_MATERIALS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('studyMaterialsUpdated'));
    // Asynchronously persist to backend database
    syncSavedMaterialsToBackend(updated);
};

export const toggleSaveMaterial = (item) => {
    if (!item || !item.id) return false;
    if (isMaterialSaved(item.id)) {
        removeSavedMaterial(item.id);
        return false;
    } else {
        saveMaterial(item);
        return true;
    }
};

export const getOngoingCourses = () => {
    try {
        const data = localStorage.getItem(ONGOING_COURSES_KEY);
        if (data) return JSON.parse(data);
    } catch (e) {
        console.error('Failed to parse ongoing courses', e);
    }
    // Default initial ongoing courses if empty
    return [
        {
            id: 'ongoing-1',
            category: 'Aptitude',
            topic: 'Quantitative Aptitude & Numerical Ability',
            title: 'Complete 220+ Video Masterclass Series',
            type: 'YouTube Video Playlist',
            badgeColor: '#ef4444',
            badgeBg: '#fee2e2',
            url: 'https://youtube.com/playlist?list=PLMufDeLh5x2Aaig0ZieDTUsKSmvmz1RBN',
            actionText: 'Continue Studying ↗',
            progress: 65
        },
        {
            id: 'ongoing-2',
            category: 'DSA',
            topic: 'Data Structures & Algorithms',
            title: 'Blind 75 & Placement Coding Sheet with Explanations',
            type: 'Interactive Roadmap',
            badgeColor: '#7c3aed',
            badgeBg: '#ede9fe',
            url: 'https://leetcode.com',
            actionText: 'Continue Studying ↗',
            progress: 40
        }
    ];
};

export const markAsOngoing = (item) => {
    try {
        if (!item || !item.id) return;
        const ongoing = getOngoingCourses();
        if (!ongoing.some(i => i.id === item.id)) {
            const updated = [{ ...item, progress: 10, lastAccessed: new Date().toISOString() }, ...ongoing];
            localStorage.setItem(ONGOING_COURSES_KEY, JSON.stringify(updated));
            window.dispatchEvent(new CustomEvent('studyMaterialsUpdated'));
        }
    } catch (e) {
        console.error('Failed to update ongoing course', e);
    }
};
