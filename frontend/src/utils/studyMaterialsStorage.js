// Utility for managing saved courses / materials & ongoing learning in localStorage

const SAVED_MATERIALS_KEY = 'cpms_saved_study_materials';
const ONGOING_COURSES_KEY = 'cpms_ongoing_learning_courses';

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
    const saved = getSavedMaterials();
    return saved.some(item => item.id === id);
};

export const saveMaterial = (item) => {
    const saved = getSavedMaterials();
    if (!saved.some(i => i.id === item.id)) {
        const updated = [...saved, { ...item, savedAt: new Date().toISOString() }];
        localStorage.setItem(SAVED_MATERIALS_KEY, JSON.stringify(updated));
        window.dispatchEvent(new CustomEvent('studyMaterialsUpdated'));
        return true;
    }
    return false;
};

export const removeSavedMaterial = (id) => {
    const saved = getSavedMaterials();
    const updated = saved.filter(i => i.id !== id);
    localStorage.setItem(SAVED_MATERIALS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('studyMaterialsUpdated'));
};

export const toggleSaveMaterial = (item) => {
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
