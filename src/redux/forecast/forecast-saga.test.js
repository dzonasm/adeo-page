import { fetchForecastAsync } from './forecast-sagas'
import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { fetchForecastFailure, fetchForecastSuccess } from './forecast-actions'

it('failure triggers failure action', () => {
    const url = 'https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places/kaunas/forecasts/long-term'
    const gen = fetchForecastAsync()
    const response = {}

    expect(gen.next().value)
        .toEqual(call(axios.get, url))

    expect(gen.next(response).value)
        .toEqual(put(fetchForecastFailure("Cannot read property 'forecastTimestamps' of undefined")))

    expect(gen.next())
        .toEqual({ done: true, value: undefined })
})

it('success calls the forecast success reducer', () => {
    const url = 'https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places/kaunas/forecasts/long-term'
    const response = {
        data: {
            forecastTimestamps: {}
        }
    }

    const timestampData = [{ conditionCode: 'test' }]
    const gen = fetchForecastAsync()

    expect(gen.next().value)
        .toEqual(call(axios.get, url))

    expect(gen.next(response).value)
        .toEqual(response.data.forecastTimestamps)

    expect(gen.next(timestampData).value)
        .toEqual('test')

    expect(gen.next('test').value)
        .toEqual(put(fetchForecastSuccess('test')))

})