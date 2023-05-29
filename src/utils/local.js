export const saveToLocalStorage = (key, value) => {
    try {
        const check = getFromLocalStorage(key);
        if (check === value) return;
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn('Error saving to localStorage: ', error);
    }
};

export const getFromLocalStorage = (key, defaultValue = null) => {
    try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
        console.warn('Error getting from localStorage: ', error);
        return defaultValue;
    }
};

export const removeFromLocalStorage = key => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.warn('Error removing from localStorage: ', error);
    }
};
