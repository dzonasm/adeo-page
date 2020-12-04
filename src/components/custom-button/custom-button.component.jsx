import React from 'react'

import './custom-button.scss'

const CustomButton = ({ isInverted, text }) => {
    return (
        <button
            className={`
            ${isInverted ? 'inverted' : null} 
            custom-button`}
        >
            <span className='button-text'>{text.toUpperCase()}</span>
        </button>
    )
}

export default CustomButton