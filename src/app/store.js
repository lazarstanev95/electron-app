import { configureStore } from '@reduxjs/toolkit';
import snackbarReducer from '../components/shared/dynamicSnackbar/DynamicSnackbarSlice';
import weatherReducer from '../components/WeatherSlice';

export const store = configureStore({
    reducer: {
        snackbar: snackbarReducer,
        weather: weatherReducer
    }
});