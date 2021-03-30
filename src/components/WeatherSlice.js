import { createSlice } from '@reduxjs/toolkit';
import { openSnackbar } from './shared/dynamicSnackbar/DynamicSnackbarSlice';

import DataService from '../services/dataService';

const weatherInitialState = {
    isLoading: false,
    error: null
}

const weather = createSlice({
    name: 'weather',
    initialState: weatherInitialState,
    reducers: {
        getWeatherSuccess(state, {payload}) {
            state.data = payload
        }
    }
});

export const {
    getWeatherSuccess
} = weather.actions;

export default weather.reducer;

export const getWeather = (lat, long) => async dispatch => {
    try {
        const response = await DataService.get(`/proxy/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`);
        dispatch(getWeatherSuccess(response.data));
        //new Notification('success title', {body: 'success fetched data from server'})
        dispatch(openSnackbar({
            message: 'success fetched data from server',
            severity: 'success'
        }))
    } catch (err) {
        console.log('err', err);
    }
};

export const getWeatherData = (state) => state.weather;
