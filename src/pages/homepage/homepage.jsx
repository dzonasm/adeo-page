import React from 'react'

import Welcome from '../../components/welcome/welcome.component'

import './homepage.styles.scss'

const HomePage = () => {
    return (
        <div className='homepage-container'>
            <div className='homepage-content'>
                <Welcome />
            </div>
        </div>
    )
}

export default HomePage