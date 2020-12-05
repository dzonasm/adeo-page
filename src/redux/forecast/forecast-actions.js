import forecastActionTypes from './forecast-action-types'

export const fetchForecastStart = () => ({
    type: forecastActionTypes.FORECAST_FETCH_START,
})

export const fetchForecastSuccess = () => ({
    type: forecastActionTypes.FORECAST_FETCH_SUCCESS,
    payload: data
})

export const fetchForecastFailure = (errorMessage) => ({
    type: forecastActionTypes.FORECAST_FETCH_FAILURE,
    payload: errorMessage
})