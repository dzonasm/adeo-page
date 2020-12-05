import forecastActionTypes from './forecast-action-types'

const INITIAL_STATE = {
    isFetching: true,
    forecast: null,
    errorMessage: undefined
}


const forecastReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case forecastActionTypes.FORECAST_FETCH_START:
            return {
                ...state,
                isFetching: true
            }
        case forecastActionTypes.FORECAST_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                forecast: action.payload
            }
        case forecastActionTypes.FORECAST_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;

    }
}

export default forecastReducer