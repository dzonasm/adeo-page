import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import forecastActionTypes from '../../redux/forecast/forecast-action-types'
import Spinner from '../spinner/spinner.component'

const Forecast = () => {
    const dispatch = useDispatch()

    const selectForecasts = state => state.forecast.forecast
    const forecast = useSelector(selectForecasts)



    useEffect(() => {
        dispatch({ type: forecastActionTypes.FORECAST_FETCH_START, })
    }, [dispatch])


    return (
        <div className='forecast-container'>
            {
                forecast ? <p>got it</p> : <Spinner />
            }
        </div>
    )
}

export default Forecast

// conditionCode - oro sąlygos, kodas.
// Galimos reikšmės:
// clear - giedra;
// isolated-clouds - mažai debesuota;
// scattered-clouds - debesuota su pragiedruliais;
// overcast - debesuota;
// light-rain - nedidelis lietus;
// moderate-rain - lietus;
// heavy-rain - smarkus lietus;
// sleet - šlapdriba;
// light-snow - nedidelis sniegas;
// moderate-snow - sniegas;
// heavy-snow - smarkus sniegas;
// fog - rūkas;
// na - oro sąlygos nenustatytos.