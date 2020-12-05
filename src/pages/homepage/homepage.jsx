import React from 'react'

import Welcome from '../../components/welcome/welcome.component'
import UiUxDesign from '../../components/ui-ux-design/ui-ux-design.component'
import Forecast from '../../components/forecast/forecast.component'

import './homepage.styles.scss'

const HomePage = () => {
    return (
        <div className='homepage-container'>
            <div className='homepage-content'>
                <div className='homepage-first-two-items'>
                    <Welcome />
                    <UiUxDesign />
                </div>

                <Forecast />
            </div>
        </div>
    )
}

export default HomePage