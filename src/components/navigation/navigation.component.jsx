import React from 'react'
import DropDownMenu from '../dropdownMenu/dropdown-menu.component'

import './navigation.styles.scss'

const Navigation = ({ isFooterNav }) => {
    return (
        <ul className={`${isFooterNav ? 'isFooterNav' : 'null'} navigation`}>
            <li className='nav-item'>HOME</li>
            <li className='nav-item'>SERVICE</li>
            <DropDownMenu isFooterNav={isFooterNav} />
            <li className='nav-item'>ABOUT ME</li>
            <li className='nav-item'>CONTACT</li>
        </ul>
    )
}

export default Navigation