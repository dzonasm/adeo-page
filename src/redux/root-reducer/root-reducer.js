import { combineReducers } from 'redux'
import dropdownMenuReducer from '../dropdown-reducer/dropdown-reducer'
import forecastReducer from '../forecast/forecast-reducer'
import hamburgerMenuReducer from '../burger-reducer/burger-reducer'
import { connectRouter } from 'connected-react-router'


const createRootReducer = (history) => combineReducers({
    dropdownMenu: dropdownMenuReducer,
    forecast: forecastReducer,
    hamburgerMenu: hamburgerMenuReducer,
    router: connectRouter(history)

})

export default createRootReducer