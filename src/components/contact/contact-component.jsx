import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'
import CustomButton from '../custom-button/custom-button.component'

import './contact.styles.scss'

const Contact = () => {


    return (
        <div className='contact-container'>
            <h1>CONTACT</h1>
            <div className='text-seperator' style={{ backgroundColor: 'black' }}></div>
            <div className='text-and-form-container'>
                <div className='contact-text'>
                    <LoremIpsum avgSentencesPerParagraph={4} p={3} />
                </div>
                <div className='form-container'>
                    <form>
                        <label>NAME</label>
                        <input type='text'></input>
                        <label>EMAIL</label>
                        <input type='text'></input>
                        <label>MESSAGE</label>
                        <textarea rows='8'></textarea>
                        <CustomButton text='learn more' isInverted />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact