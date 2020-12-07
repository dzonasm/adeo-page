import React from 'react'
import Navigation from '../../components/navigation/navigation.component'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHamburgerMenu } from '../../redux/burger-reducer/burger-actions'

import "./header.styles.scss"
import Burger from '../burger/burger.component'

const Header = () => {

    const dispatch = useDispatch()
    const selectHamburgerState = state => state.hamburgerMenu.showHamburgerMenu
    const showHamburgerMenu = useSelector(selectHamburgerState)

    const handleNav = () => {
        dispatch(toggleHamburgerMenu)
    }

    const handleLinkClick = () => {
        if (showHamburgerMenu) {
            dispatch(toggleHamburgerMenu)
        } else return
    }

    return (
        <div className='header'>
            <div className='header-content-container'>
                <div className='header-left-side'>
                    <div className='header-menu-text-items'>
                        <Link onClick={handleLinkClick} className='header-item' to='/page/menu'>
                            <div >MENU</div>
                        </Link>
                        <Link className='header-item' to='/page/some text'>
                            <div >SOME TEXT</div>
                        </Link>
                        <Link className='header-item' to='/page/another item'>
                            <div >ANOTHER ITEM</div>
                        </Link>
                        <Link className='header-item' to='/page/one more'>
                            <div >ONE MORE</div>
                        </Link>
                        <Link className='header-item' to='/page/and last one'>
                            <div >AND LAST ONE</div>
                        </Link>
                    </div>
                    <div className='header-demosite-text'>
                        <Link to='/'>
                            <h1>
                                DEMO<span>SITE</span>
                            </h1>
                        </Link>
                    </div>
                </div>
                <div className='header-nav-container'>
                    <Navigation />
                    <div onClick={handleNav} className='nav-burger-container'>
                        <Burger />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header