import React from 'react'
import { useHistory } from 'react-router'

const HelloFromRouter = () => {
    const history = useHistory()
    const handleBack = () => { history.goBack() }

    return (
        <div>
            <button onClick={handleBack}>GO BACK</button>
            <h1>Hello from router</h1>
        </div>

    )
}

export default HelloFromRouter