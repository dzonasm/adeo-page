import React from 'react'
import { withRouter } from 'react-router'



const DropdownMenuLink = ({ link, history }) => {

    const handleLinkClick = () => {
        history.push(`/page/${link}`)
    }

    return (
        <span className='dropdown-menu-item' onClick={handleLinkClick}>{link.toUpperCase()}</span>

    )
}

export default withRouter(DropdownMenuLink)