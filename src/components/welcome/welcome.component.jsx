import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'
import { withRouter } from 'react-router'

import CustomButton from '../custom-button/custom-button.component'

import './welcome.styles.scss'

const Welcome = ({ history }) => {

    const handleClick = () => {
        history.push('/page/learn more')
    }

    return (
        <div className='welcome-container'>
            <h1 className='welcome-text'>WELCOME</h1>
            <div className='text-seperator'></div>
            <LoremIpsum avgSentencesPerParagraph={4} p={1} />
            <div className='button-container'>
                <CustomButton onClick={handleClick} text='learn more' />
            </div>

        </div>
    )
}

export default withRouter(Welcome)