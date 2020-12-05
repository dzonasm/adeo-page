import { combineReducers } from 'redux'
import dropdownMenuReducer from '../dropdown-reducer/dropdown-reducer'
import forecastReducer from '../forecast/forecast-reducer'


const rootReducer = combineReducers({
    dropdownMenu: dropdownMenuReducer,
    forecast: forecastReducer
})

export default rootReducer