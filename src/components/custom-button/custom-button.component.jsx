import React from 'react'

import './custom-button.scss'

const CustomButton = ({ isFormButton, isInverted, isBackButton, text, onClick }) => {

    return (
        <button
            className={`
            ${isInverted ? 'inverted' : null} 
            ${isFormButton ? 'formButton' : null}
            custom-button`}
            onClick={onClick}
        >
            {
                isBackButton ? <span> &#11013; BACK </span> :
                    <span className='button-text'> {text.toUpperCase()}</span>
            }

        </button>
    )
}

export default CustomButton