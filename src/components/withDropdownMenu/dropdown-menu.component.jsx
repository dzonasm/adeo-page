import React from 'react'

import './dropdown-menu.styles.scss'

const DropDownMenu = () => {

    return (
        <div className='dropdown-menu'>
            <div className='dropdown-menu-pointer'></div>
            <p className='dropdown-menu-item'>ALL</p>
            <p className='dropdown-menu-item'>GRAPHIC</p>
            <p className='dropdown-menu-item'>DESIGN</p>
            <p className='dropdown-menu-item'>LOGO</p>
            <p className='dropdown-menu-item'>WEBSITE</p>

        </div>
    )

}
export default DropDownMenu