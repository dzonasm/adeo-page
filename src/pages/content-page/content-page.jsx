import React from 'react'
import { useParams, useHistory } from 'react-router'
import { LoremIpsum } from 'react-lorem-ipsum'
import CustomButton from '../../components/custom-button/custom-button.component'

import './content-page.styles.scss'

const ContentPage = () => {

    const { pageName } = useParams()


    const history = useHistory()
    const handleBack = () => { history.goBack() }

    return (
        <div className='content-page-container'>
            <div className='content-page-content'>
                <div className='heading'>
                    <h1>{pageName.toUpperCase()}</h1>
                    <CustomButton isBackButton onClick={handleBack} />
                </div>
                <div className='text-seperator' style={{ backgroundColor: 'black' }}></div>
                <div className='content-page-text'>
                    <LoremIpsum p={6} avgSentencesPerParagraph={12} avgWordsPerSentence={9} />
                </div>
            </div>
        </div>
    )
}

export default ContentPage