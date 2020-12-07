import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import DropDownMenu from '../dropdownMenu/dropdown-menu.component'
import { toggleHamburgerMenu } from '../../redux/burger-reducer/burger-actions'
import NavigationLink from './navigation-link.component'
import { v4 as uuidv4 } from 'uuid'


import './navigation.styles.scss'

const Navigation = ({ isHeaderNav, isFooterNav }) => {

    const selectBurgerState = state => state.hamburgerMenu.showHamburgerMenu
    const isBurgerVisible = useSelector(selectBurgerState)
    const dispatch = useDispatch()


    const handleLinkClick = () => {
        if (isBurgerVisible) {
            dispatch(toggleHamburgerMenu)
        } else return
    }



    const navStyle = isBurgerVisible ? { transform: 'translateX(0%)' } : null
    const pages = ['home', 'service', 'works', 'about me', 'contact']

    return (
        <ul className='nav-items' style={navStyle}>
            {
                pages.map(page => <NavigationLink key={uuidv4()} page={page} />)
            }
            <DropDownMenu />
        </ul>
    )
}

export default Navigation


// <Link onClick={handleLinkClick} to='/page/Home'>
//                 <li>HOME</li>
//             </Link>
//             <Link onClick={handleLinkClick} to='/page/service'>
//                 <li>SERVICE</li>
//             </Link>
//             <Link onClick={handleLinkClick} to='/page/works'>
//                 {isFooterNav ? <li>WORKS</li> : isBurgerVisible ? <li>WORKS</li> :  <DropDownMenu isFooterNav={isFooterNav} />}
//             </Link>
//             <Link onClick={handleLinkClick} to='/page/about me'>
//                 <li>ABOUT ME</li>
//             </Link>
//             <Link onClick={handleLinkClick} to='/page/contact'>
//                 <li >CONTACT</li>
//             </Link>


// import React from 'react'
// import DropDownMenu from '../dropdownMenu/dropdown-menu.component'
// import { Link } from 'react-router-dom'
// import BurgerNavigation from '../burger-navigation/burger-navigation'

// import './navigation.styles.scss'

// const Navigation = ({ isFooterNav }) => {
//     return (
//         <ul className={`${isFooterNav ? 'isFooterNav' : 'null'} navigation`}>
//             <Link to='/page/Home'>
//                 <li>HOME</li>
//             </Link>
//             <Link to='/page/service'>
//                 <li>SERVICE</li>
//             </Link>
//             <Link to='/page/works'>
//                 <DropDownMenu isFooterNav={isFooterNav} />
//             </Link>
//             <Link to='/page/about me'>
//                 <li>ABOUT ME</li>
//             </Link>
//             <Link to='/page/contact'>
//                 <li >CONTACT</li>
//             </Link>
//         </ul>
//     )
// }

// export default Navigation