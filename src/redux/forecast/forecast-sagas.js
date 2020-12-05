import { put, all, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'

import forecastActionTypes from './forecast-action-types'

export function* fetchForecastAsync() {
    try {
        //calling the api
        console.log('attempt to call')
        const url = 'https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places/kaunas/forecasts/long-term'
        const response = yield call(axios.get, url)
        const timestampData = yield response.data.forecastTimestamps
        const latestForecast = yield timestampData[0].conditionCode


        yield put({
            type: forecastActionTypes.FORECAST_FETCH_SUCCESS, payload: latestForecast
        })

    } catch (error) {
        yield put({
            type: forecastActionTypes.FORECAST_FETCH_FAILURE, payload: error.message
        })
    }
}

export function* watchfetchForecastAsync() {
    yield console.log('im running')
    yield takeEvery(forecastActionTypes.FORECAST_FETCH_START, fetchForecastAsync)
}


export default function* forecastSagas() {
    yield all([
        call(watchfetchForecastAsync)
    ])
}

//api link. cors handeled
//https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places/kaunas/forecasts/long-term