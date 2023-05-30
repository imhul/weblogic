export const saveToSessionStorage = (key, value) => {
    try {
        const check = getFromSessionStorage(key);
        if (check === value) return;
        sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn('Error saving to sessionStorage:', error);
    }
};

export const getFromSessionStorage = (key, defaultValue = null) => {
    try {
        const storedValue = sessionStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
        console.warn('Error getting from sessionStorage:', error);
        return defaultValue;
    }
};

export const removeFromSessionStorage = key => {
    try {
        sessionStorage.removeItem(key);
    } catch (error) {
        console.warn('Error removing from sessionStorage:', error);
    }
};
