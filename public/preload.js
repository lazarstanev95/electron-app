//window.ipcRenderer = require('electron').ipcRenderer;
const electron = require('electron');
console.log('electron', electron)
window.electron = electron;
window.electron.dialog = electron.remote;
//window.require = require;
/* window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
}) */