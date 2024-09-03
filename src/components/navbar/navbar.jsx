import React from 'react'
import './style.css'
import ResponsiveMenu from './responsiveMenu'
import ResMenu from './resMenu'
const Navbar = () => {
  return (
    <div className='nav__flex'>
        {/* <div className='logo__img'>  */}
            {/* <img src='/logo-white.png' alt='' className='logo__img'/> */}
        {/* </div> */}
        <h1>Growth</h1>
        <ResMenu/>
    </div>
  )
}

export default Navbar
