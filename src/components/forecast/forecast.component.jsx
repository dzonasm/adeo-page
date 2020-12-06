import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import forecastActionTypes from '../../redux/forecast/forecast-action-types'
import Spinner from '../spinner/spinner.component'
import { imageLogic } from './forecast.utils'

import { ReactComponent as Sunglasses } from '../../Assets/sunglasses.svg'
import { ReactComponent as SnowFlake } from '../../Assets/snowflake.svg'
import { ReactComponent as Umbrella } from '../../Assets/umbrella.svg'
import { ReactComponent as demosite } from '../../Assets/DEMOSITE.svg'

import './forecast.styles.scss'

const Forecast = () => {
    const dispatch = useDispatch()
    const selectForecasts = state => state.forecast.forecast
    const forecast = useSelector(selectForecasts)


    let forecastImage
    if (forecast) {
        const image = imageLogic(forecast)
        if (image === 'sunglasses') {
            forecastImage = <Sunglasses className='forecast-image' />
        }
        if (image === 'snow') {
            forecastImage = <SnowFlake className='forecast-image' />
        }
        if (image === 'umbrella') {
            forecastImage = <Umbrella className='forecast-image' />
        }
    }


    useEffect(() => {
        dispatch({ type: forecastActionTypes.FORECAST_FETCH_START, })
    }, [dispatch])


    return (
        <div className='forecast-container'>
            <div className='forecast-image-container'>
                {
                    forecast ?
                        forecastImage
                        :
                        <Spinner />
                }
            </div>
        </div>
    )
}

export default Forecast

