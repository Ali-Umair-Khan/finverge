'use client'
import Link from 'next/link';
import './style4.css';
import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMinimize,
  faBars,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const ResponsiveMenu = () => {
    
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Close the menu when a menu item is clicked
  };


    return(
        <nav>
            <ul className='navbar'>
                <li onClick={handleMenuItemClick} className='navbar__logo'><Link href='/'><img src='X__logoA.png' alt="" /></Link></li>
                <input type='checkbox' id='check' className='navbar__checkbox' checked={menuOpen} onChange={handleMenuToggle}/>
                <span className='navbar__menu'>
                    <li onClick={handleMenuItemClick}><Link href='/'>Home</Link></li>
                    <li onClick={handleMenuItemClick}><Link href='/'>Docs</Link></li>
                    <li onClick={handleMenuItemClick}><Link href='/'>Pricing</Link></li>
                    <li onClick={handleMenuItemClick}><Link href='/'>Contact <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.5rem', marginLeft:'0.5rem'}} /></Link></li>
                    <label for='check' className='navbar__close'><FontAwesomeIcon icon={faWindowMinimize} style={{ fontSize: '3rem', color:'white'}}/></label>
                </span>
                <label for='check' className='navbar__open'><FontAwesomeIcon icon={faBars} style={{ fontSize: '3rem' }}/></label>
            </ul>
        </nav>
    )
}


export default ResponsiveMenu