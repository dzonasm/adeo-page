import { burgerActionTypes } from './burger-action-types'

const INITIAL_STATE = {
    showHamburgerMenu: false
}

const hamburgerMenuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case burgerActionTypes.TOGGLE_HAMBURGER_MENU:
            return {
                ...state,
                showHamburgerMenu: !state.showHamburgerMenu
            }
        default:
            return state
    }
}

export default hamburgerMenuReducer
