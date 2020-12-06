import React from 'react'
import Navigation from '../navigation/navigation.component'
import { LoremIpsum } from 'react-lorem-ipsum'

import './footer.styles.scss'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='footer-text'>
                    <LoremIpsum avgSentencesPerParagraph={2} p={1} />
                </div>
                <Navigation isFooterNav />
                <div className='copyright'>&copy; <span>DEMO</span>SITE All rights reserved</div>
            </div>
        </div>
    )
}

export default Footer