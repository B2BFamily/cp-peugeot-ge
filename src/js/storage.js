export const BLOCK_SCRIPT_KEY = 'block-script-url';
export const DEFAULT_BLOCK_SCRIPT_URL = 'https://cpf.tadam.ai/peugeot/peugeotClub.umd.min.js';

export function storageGet(key) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.sync.get([key], (result) => {
                resolve(result[key]);
            });
        } catch (e) {
            reject(e);
        }
    });
}

export function storageSet(key, value) {
    return new Promise((resolve, reject) => {
        try {
            const kv = { [key]: value };
            chrome.storage.sync.set(kv, () => {
                resolve();
            })
        } catch (e) {
            reject(e);
        }
    });
}

export async function getBlockScriptUrl() {
    const value = await storageGet(BLOCK_SCRIPT_KEY);
    if (!value) {
        return DEFAULT_BLOCK_SCRIPT_URL;
    }
    return value;
}
