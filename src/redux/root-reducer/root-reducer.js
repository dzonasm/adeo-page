import { combineReducers } from 'redux'
import dropdownMenuReducer from '../dropdown-reducer/dropdown-reducer'


const rootReducer = combineReducers({
    dropdownMenu: dropdownMenuReducer
})

export default rootReducer