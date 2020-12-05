import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

import './ui-ux-design.styles.scss'

const UiUxDesign = () => (
    <div className='ui-ux-design-container'>
        <div className='background-image'></div>
        <div className='ui-ux-text'>
            <h2>UI/UX DESIGN</h2>
            <LoremIpsum avgSentencesPerParagraph={4} p={1} />
            <LoremIpsum avgSentencesPerParagraph={4} p={1} />
        </div>
    </div>
)

export default UiUxDesign