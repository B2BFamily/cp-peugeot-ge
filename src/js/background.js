import { getBlacklistSync } from './storage';

function isBlockedUrl(url) {
    const blacklist = getBlacklistSync();
    return blacklist.some((x) => x === url);
}

function blockProductionScript(details) {
    if (isBlockedUrl(details.url)) {
        return { cancel: true };
    }
}

chrome.webRequest.onBeforeRequest.addListener(
    blockProductionScript,
    { urls: ["<all_urls>"] },
    ["blocking"]
);
