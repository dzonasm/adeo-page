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
                <div className='footer-nav-container'>
                    <Navigation isFooterNav />
                </div>
                <div className='copyright'>
                    <p>
                        &copy; <span>DEMO</span>SITE All rights reserved
                </p>
                </div>
            </div>
        </div>
    )
}

export default Footer