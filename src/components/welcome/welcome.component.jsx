import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

import './welcome.styles.scss'

const Welcome = () => {
    return (
        <div className='welcome-container'>
            <h1>WELCOME</h1>
            <div className='text-seperator'></div>
            <LoremIpsum avgSentencesPerParagraph={2} p={1} />

        </div>
    )
}

export default Welcome