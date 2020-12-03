import React from 'react'

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
                    <div className='demo-text'>
                        DEMO
            </div>
                    <div className='site-text'>SITE</div>
                </div>
                <div className='header-nav'>
                    <div className='nav-item'>HOME</div>
                    <div className='nav-item'>SERVICE</div>
                    <div className='nav-item'>WORKS</div>
                    <div className='nav-item'>ABOUT ME</div>
                    <div className='nav-item'>CONTACT</div>
                </div>
            </div>
        </div>
    )
}

export default Header