import {
    getBlockScriptUrl,
    storageSet,
    BLOCK_SCRIPT_KEY,
    DEFAULT_BLOCK_SCRIPT_URL
} from './storage';

window.addEventListener('load', async () => {
    const blockScriptUrl = await getBlockScriptUrl();

    const view = getView();
    view.blockScriptInput.value = blockScriptUrl;

    view.saveButton.addEventListener('click', async () => {
        let value = view.blockScriptInput.value;
        if (!value) {
            value = DEFAULT_BLOCK_SCRIPT_URL;
            view.blockScriptInput.value = value;
            console.log('invalid value, use default', value);
        }
        await storageSet(BLOCK_SCRIPT_KEY, value);
    });
});

function getView() {
    return {
        blockScriptInput: document.getElementById('block-script-input'),
        saveButton: document.getElementById('save-button')
    };
}
