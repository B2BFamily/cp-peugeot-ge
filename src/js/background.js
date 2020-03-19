import { getBlockScriptUrl, BLOCK_SCRIPT_KEY } from './storage';

//
// blocking api callback must be sync, because of that
// we prepare the blocking value in the global space,
// and continuously track changes in the storage
//
let blockScriptUrl = '';
(async () => {
    blockScriptUrl = await getBlockScriptUrl();

    chrome.storage.onChanged.addListener((changes, ns) => {
        const blockScriptChanges = changes[BLOCK_SCRIPT_KEY];
        if (blockScriptChanges) {
            blockScriptUrl = blockScriptChanges.newValue;
        }
    });

})();

function blockProductionScript(details) {
    if (details.url === blockScriptUrl) {
        return { cancel: true };
    }
}

chrome.webRequest.onBeforeRequest.addListener(
    blockProductionScript,
    { urls: ["<all_urls>"] },
    ["blocking"]
);
