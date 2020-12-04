import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

import CustomButton from '../custom-button/custom-button.component'

import './welcome.styles.scss'

const Welcome = () => {
    return (
        <div className='welcome-container'>
            <h1 className='welcome-text'>WELCOME</h1>
            <div className='text-seperator'></div>
            <LoremIpsum avgSentencesPerParagraph={4} p={1} />
            <div className='button-container'>
                <CustomButton text='learn more' />
            </div>

        </div>
    )
}

export default Welcome