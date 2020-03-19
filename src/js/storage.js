export const BLACKLIST_KEY = 'blacklist';
export const DEFAULT_BLACKLIST = [
    'https://cpf.tadam.ai/peugeot/peugeotClub.umd.min.js',
    'https://cpf.tadam.ai/passat/passatClub.umd.min.js'
];

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

export async function getBlacklist() {
    const value = await storageGet(BLACKLIST_KEY);
    if (!value) {
        return DEFAULT_BLACKLIST;
    }
    return value;
}

export function setBlacklist(value) {
    return storageSet(BLACKLIST_KEY, value);
}

//
// blocking api callback must be sync, because of that
// we prepare the blocking value in the global space,
// and continuously track changes in the storage
//
let _currentBlacklist = DEFAULT_BLACKLIST;
(async () => {
    _currentBlacklist = await getBlacklist();

    chrome.storage.onChanged.addListener((changes, ns) => {
        const blacklistChanges = changes[BLACKLIST_KEY];
        if (blacklistChanges) {
            _currentBlacklist = blacklistChanges.newValue;
        }
    });

})();

export function getBlacklistSync() {
    return _currentBlacklist;
}
