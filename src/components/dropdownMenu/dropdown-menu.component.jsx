import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideDropdownMenu, showDropdownMenu } from '../../redux/dropdown-reducer/dropdown-actions'

import './dropdown-menu.styles.scss'

const DropDownMenu = () => {
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
        <li
            onMouseEnter={show}
            onMouseLeave={hide}
            className='dropdown-item'
        >WORKS
            <div
                style={{ display: `${dropdownMenuVisible ? 'flex' : 'none'}` }}
                className='dropdown-menu'
            >
                <div className='arrow'></div>
                <ul>
                    <li className='dropdown-menu-item'>ALL</li>
                    <li className='dropdown-menu-item'>GRAPHIC</li>
                    <li className='dropdown-menu-item'>DESIGN</li>
                    <li className='dropdown-menu-item'>LOGO</li>
                    <li className='dropdown-menu-item'>WEBSITE</li>
                </ul>

            </div>
        </li>
    )

}
export default DropDownMenu