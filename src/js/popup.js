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
        let value = view.blacklist.value.split('\n');
        if (!value) {
            value = DEFAULT_BLACKLIST;
            view.blacklist.value = value.join('\n');
            console.log('invalid value, use default', value);
        }
        await setBlacklist(value);
    });
});

function getView() {
    return {
        blacklist: document.getElementById('blacklist'),
        saveButton: document.getElementById('save-button')
    };
}
