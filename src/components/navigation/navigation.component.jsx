import React from 'react'
import DropDownMenu from '../dropdownMenu/dropdown-menu.component'
import { Link } from 'react-router-dom'

import './navigation.styles.scss'

const Navigation = ({ isFooterNav }) => {
    return (
        <ul className={`${isFooterNav ? 'isFooterNav' : 'null'} navigation`}>
            <Link to='/page/Home'>
                <li className='nav-item'>HOME</li>
            </Link>
            <Link to='/page/service'>
                <li className='nav-item'>SERVICE</li>
            </Link>
            <Link to='/page/works'>
                <DropDownMenu isFooterNav={isFooterNav} />
            </Link>
            <Link to='/page/about me'>
                <li className='nav-item'>ABOUT ME</li>
            </Link>
            <Link to='/page/contact'>
                <li className='nav-item'>CONTACT</li>
            </Link>
        </ul>
    )
}

export default Navigation