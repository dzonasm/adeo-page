import React from 'react'
import Navigation from '../../components/navigation/navigation.component'

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
                <Navigation />
            </div>
        </div>
    )
}

export default Header