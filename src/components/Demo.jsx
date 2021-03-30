import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openSnackbar } from '../components/shared/dynamicSnackbar/DynamicSnackbarSlice';
import DataService from '../services/dataService';
const electron = window.require('electron');
const { ipcRenderer, clipboard } = electron;

export default function Weather() {
    const [isDarkMode, setDarkMode] = useState(false);
    const dispatch = useDispatch();
    const handleToggleDarkMode = async () => {
        const isDarkMode = await ipcRenderer.invoke('dark-mode:toggle');
        setDarkMode(isDarkMode);
        console.log('isDarkMode', isDarkMode);
    }

    const handleResetClick = async () => {
        await ipcRenderer.invoke('dark-mode:system');
        setDarkMode(false);
    }

    const handleFetchData = () => {
        DataService.get('/test')
            .then(response => {
                console.log('response', response.data.message);
                dispatch(openSnackbar({
                    message: response.data.message,
                    severity: 'success'
                }));
                new Notification('success title', { body: response.data.message })
            });
    }

    const handleOpenDialog = async () => {
        let result = await ipcRenderer.invoke('dialog:open');
        console.log('result', result)
    }

    const handleCopyToClipboard = () => {
        clipboard.writeText('hello i am a bit of text!');
        const text = clipboard.readText();
        dispatch(openSnackbar({
            message: `Copied text: ${text}`,
            severity: 'success'
        }));
        console.log(text);
    }
    return (
        <div>
            <p>Current theme source: <strong id="theme-source">{isDarkMode ? 'Dark' : 'Light'}</strong></p>
            <button onClick={handleToggleDarkMode} id="toggle-dark-mode">Toggle Dark Mode</button>
            <button onClick={handleResetClick} id="reset-to-system">Reset to System Theme</button>
            <button onClick={handleFetchData}>
                fetch data
            </button>
            <button onClick={handleOpenDialog}>
                open dialog
            </button>
            <button onClick={handleCopyToClipboard}>
                copy to clipboard
            </button>
        </div>
    )
}