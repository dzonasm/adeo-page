import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideDropdownMenu, showDropdownMenu } from '../../redux/dropdown-reducer/dropdown-actions'
import DropdownLink from './dropdown-menu-link'
import { v4 as uuidv4 } from 'uuid'
import { withRouter } from 'react-router-dom'

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

    const links = ['all', 'graphic', 'design', 'logo', 'website']


    return (
        <div className='dropdown-container'>
            <div
                onMouseEnter={show}
                onMouseLeave={hide}
                className='dropdown-item'
            >
                <div
                    style={{ display: `${dropdownMenuVisible ? 'flex' : 'none'}` }}
                    className='dropdown-menu'
                >
                    {
                        links.map(link => <DropdownLink key={uuidv4()} link={link} />)
                    }
                    <div className='arrow'></div>
                    <ul>

                    </ul>

                </div>
            </div>
        </div>
    )

}
export default withRouter(DropDownMenu)



// <Link to='page/all'>
//                         <li className='dropdown-menu-item'>ALL</li>
//                     </Link>
//                     <Link to='page/graphic'>
//                         <li className='dropdown-menu-item'>GRAPHIC</li>
//                     </Link>
//                     <Link to='page/design'>
//                         <li className='dropdown-menu-item'>DESIGN</li>
//                     </Link>
//                     <Link to='page/logo'>
//                         <li className='dropdown-menu-item'>LOGO</li>
//                     </Link>
//                     <Link to='page/item'>
//                         <li className='dropdown-menu-item'>WEBSITE</li>
//                     </Link>