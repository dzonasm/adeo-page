import React from 'react'
import Navigation from '../../components/navigation/navigation.component'
import { Link } from 'react-router-dom'

import "./header.styles.scss"

const Header = () => {

    return (
        <div className='header'>
            <div className='header-content-container'>
                <div className='header-menu-text-items'>
                    <Link to='/page/menu'>
                        <div className='header-item'>MENU</div>
                    </Link>
                    <Link to='/page/some text'>
                        <div className='header-item'>SOME TEXT</div>
                    </Link>
                    <Link to='/page/another item'>
                        <div className='header-item'>ANOTHER ITEM</div>
                    </Link>
                    <Link to='/page/one more'>
                        <div className='header-item'>ONE MORE</div>
                    </Link>
                    <Link to='/page/and last one'>
                        <div className='header-item'>AND LAST ONE</div>
                    </Link>
                </div>
                <div className='header-demosite-text'>
                    <Link to='/'>
                        <h1>
                            DEMO<span>SITE</span>
                        </h1>
                    </Link>
                </div>
                <Navigation />
            </div>
        </div>
    )
}

export default Header