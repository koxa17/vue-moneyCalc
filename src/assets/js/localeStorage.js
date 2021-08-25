export function saveToLocaleStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}

export function getLocalStorage(key) {
   return localStorage.getItem(key)
}

export function deleteLocalStorage() {
    localStorage.removeItem(key);
}