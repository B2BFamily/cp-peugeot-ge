import {
    getBlacklist,
    setBlacklist,
    DEFAULT_BLACKLIST,
} from './storage';

window.addEventListener('load', async () => {
    const blacklist = await getBlacklist();

    const view = getView();
    view.blacklist.value = blacklist.join('\n');

    view.saveButton.addEventListener('click', async () => {
        const value = view.blacklist.value;
        const newBlacklist = value ? value.split('\n') : [];
        await setBlacklist(newBlacklist);
    });
});

function getView() {
    return {
        blacklist: document.getElementById('blacklist'),
        saveButton: document.getElementById('save-button')
    };
}
