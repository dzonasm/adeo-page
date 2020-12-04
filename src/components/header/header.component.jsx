import React from 'react'
import DropDownMenu from '../withDropdownMenu/dropdown-menu.component'
import { useSelector, useDispatch } from 'react-redux'


import "./header.styles.scss"
import { hideDropdownMenu, showDropdownMenu } from '../../redux/dropdown-reducer/dropdown-actions'

const Header = () => {
    const selectDropdownMenuState = state => state.dropdownMenu.showDropdownMenu
    const dropdownMenuVisible = useSelector(selectDropdownMenuState)
    console.log(dropdownMenuVisible)
    const dispatch = useDispatch()

    const hide = () => {
        dispatch(hideDropdownMenu)
    }
    const show = () => {
        dispatch(showDropdownMenu)
    }

    return (
        <div className='header'>
            <div className='header-content-container'>
                <div className='header-menu-text-items'>
                    <div className='header-item'>MENU</div>
                    <div className='header-item'>SOME TEXT</div>
                    <div className='header-item'>ANOTHER ITEM</div>
                    <div className='header-item'>ONE MORE</div>
                    <div className='header-item'>AND LAST ONE</div>
                </div>
                <div className='header-demosite-text'>
                    <h1>
                        DEMO<span>SITE</span>
                    </h1>
                </div>
                <div className='header-nav'>
                    <div className='nav-item'>HOME</div>
                    <div className='nav-item'>SERVICE</div>
                    <div
                        onMouseEnter={show}
                        onMouseLeave={hide}
                        className='nav-item'>WORKS</div>
                    {
                        dropdownMenuVisible ?
                            <DropDownMenu />
                            :
                            null
                    }
                    <div className='nav-item'>ABOUT ME</div>
                    <div className='nav-item'>CONTACT</div>
                </div>
            </div>
        </div>
    )
}

export default Header