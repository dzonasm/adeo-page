import dropdownMenuActionTypes from './dropdown-types'

const initialState = {
    showDropdownMenu: false
}

function dropdownMenuReducer(state = initialState, action) {
    switch (action.type) {
        case dropdownMenuActionTypes.SHOW_DROPDOWN_MENU:
            return {
                ...state,
                showDropdownMenu: true
            }
        case dropdownMenuActionTypes.HIDE_DROPDOWN_MENU:
            return {
                ...state,
                showDropdownMenu: false
            }
        default:
            return state
    }
}

export default dropdownMenuReducer