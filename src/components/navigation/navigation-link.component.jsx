import React from 'react'
import { withRouter } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { toggleHamburgerMenu } from '../../redux/burger-reducer/burger-actions'



const NavigationLink = ({ page, history }) => {
    const selectBurgerState = state => state.hamburgerMenu.showHamburgerMenu
    const isBurgerVisible = useSelector(selectBurgerState)
    const dispatch = useDispatch()


    const handleLinkClick = () => {
        history.push(`/page/${page}`)
        if (isBurgerVisible) {
            dispatch(toggleHamburgerMenu)
        } else return
    }

    return (
        <li style={{ cursor: 'pointer' }} onClick={handleLinkClick}>{page.toUpperCase()}</li>

    )
}

export default withRouter(NavigationLink)