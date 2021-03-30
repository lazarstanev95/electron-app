import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const snackbar = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        openSnackbar(state, { payload }) {
            state.message = payload.message;
            state.severity = payload.severity;
            state.snackbarIsOpen = true;
        },
        closeSnackbar(state) {
            state.snackbarIsOpen = false;
            state.message = '';
        }
    }
});

export const {
    openSnackbar,
    closeSnackbar
} = snackbar.actions;

export default snackbar.reducer;

export const getSnackbar = (state) => state.snackbar;