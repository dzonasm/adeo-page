import { put, all, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'

import { fetchForecastFailure, fetchForecastSuccess } from './forecast-actions'

import forecastActionTypes from './forecast-action-types'

export function* fetchForecastAsync() {
    try {
        //calling the api
        const url = 'https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places/kaunas/forecasts/long-term'
        const response = yield call(axios.get, url)
        const timestampData = yield response.data.forecastTimestamps
        const latestForecast = yield timestampData[0].conditionCode

        yield put(fetchForecastSuccess(latestForecast))
    } catch (error) {
        yield put(fetchForecastFailure(error.message))
    }
}

export function* watchfetchForecastAsync() {
    yield takeEvery(forecastActionTypes.FORECAST_FETCH_START, fetchForecastAsync)
}


export default function* forecastSagas() {
    yield all([
        call(watchfetchForecastAsync)
    ])
}

//api link. cors handeled
//https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places/kaunas/forecasts/long-term