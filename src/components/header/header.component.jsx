import React from 'react'
import DropDownMenu from '../dropdownMenu/dropdown-menu.component'

import "./header.styles.scss"

const Header = () => {


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
                <ul className='header-nav'>
                    <li className='nav-item'>HOME</li>
                    <li className='nav-item'>SERVICE</li>
                    <DropDownMenu />
                    <li className='nav-item'>ABOUT ME</li>
                    <li className='nav-item'>CONTACT</li>
                </ul>
            </div>
        </div>
    )
}

export default Header