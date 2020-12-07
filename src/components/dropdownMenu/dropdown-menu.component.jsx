import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideDropdownMenu, showDropdownMenu } from '../../redux/dropdown-reducer/dropdown-actions'
import { Link } from 'react-router-dom'

import './dropdown-menu.styles.scss'

const DropDownMenu = ({ isFooterNav }) => {
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
                className={`${isFooterNav ? 'items-up' : null} dropdown-menu`}
            >
                <div className='arrow'></div>
                <ul>
                    <Link to='page/all'>
                        <li className='dropdown-menu-item'>ALL</li>
                    </Link>
                    <Link to='page/graphic'>
                        <li className='dropdown-menu-item'>GRAPHIC</li>
                    </Link>
                    <Link to='page/design'>
                        <li className='dropdown-menu-item'>DESIGN</li>
                    </Link>
                    <Link to='page/logo'>
                        <li className='dropdown-menu-item'>LOGO</li>
                    </Link>
                    <Link to='page/item'>
                        <li className='dropdown-menu-item'>WEBSITE</li>
                    </Link>
                </ul>

            </div>
        </li>
    )

}
export default DropDownMenu