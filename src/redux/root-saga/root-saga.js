import { all, call } from 'redux-saga/effects'

import forecastSagas from '../forecast/forecast-sagas'

export default function* rootSaga() {
    yield all([
        call(forecastSagas)
    ])
}