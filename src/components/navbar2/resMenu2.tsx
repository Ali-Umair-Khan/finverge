/* eslint-disable @next/next/no-img-element */
'use client'
// import Link from 'next/link';
// import { Link } from "react-scroll";
import Link from 'next/link';
import './style4.scss';
// import './navbar.scss';
import AnimatedLink from '@/UI/AnimatedLink'
import React, {useState, useRef} from 'react';
import { useClickAway } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowMinimize,
  faBars,
  faUser,
  faDollarSign,
  faHurricane,
  faAddressBook,
  faWrench
} from "@fortawesome/free-solid-svg-icons";

const ResponsiveMenu = () => {
  const linkUrl = 'https://calendly.com/aliumairkhan/30min';


  const [menuOpen, setMenuOpen] = useState(false);
  const solution= ['Risk Managament','Crimes Complaince','Customer Experience','Pandemics Analytics'];
  const technology= ['Articial Intelligence','Analytics in Cloud','Data Management','Micro Analysis'];
  const company= ['Your Career','Open Positions','About us','Our Offices'];
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    // setTimeout(() => {
      setMenuOpen(false);
    // }, 50); // Adjust the delay time as needed

  //   Events.scrollEvent.register('end', () => {
  //   setMenuOpen(false);
  // });

   };

  //  {solutions.map((link, i) => (
  //   <p><AnimatedLink key={i} title={link.linkTo} /></p>
  // ))}

  // onChange={handleMenuToggle}
  // style={{ mask: 'url(#curved-mask)' }}

  // Ref to store a reference to the DOM element
  const ref = useRef(null);

  // Custom hook to detect clicks outside of the navigation and close it
  useClickAway(ref, handleMenuItemClick);

    return(
        <nav>
              <ul className='navbar'>
                <div className='navbar__left' onClick={handleMenuItemClick}>
                    <div className='navbar__left-image'>
                        <img src='./finverge.png' alt="AUK"/>
                    </div>
                    <AnimatedLink title='Finverge'/>
                </div>
                {/* <li onClick={handleMenuItemClick} className='navbar__logo'><Link href='/'><img src='ak.gif' alt="" /></Link></li> */}
                <input type='checkbox' id='check' className='navbar__checkbox' checked={menuOpen} onChange={handleMenuToggle}/>
                <span className='navbar__menu' ref={ref}>
                    {/* <li onClick={handleMenuItemClick}>
                      <Link to='me'  smooth={true} duration={500}>
                          <a onClick={handleMenuItemClick}>Who I am</a>
                      </Link>
                    </li> */}
                    <li onClick={handleMenuItemClick} className='navbar__menu-item'>
                      <Link href='/' passHref={true}>
                          <a onClick={handleMenuItemClick} className='styled-link'><AnimatedLink title='Solutions'/> <FontAwesomeIcon icon={faHurricane} style={{ fontSize: '1.5rem', marginLeft:'0.5rem'}} /></a>
                          <div className='dropdown-menu'>
                           {solution.map((link, i) => (
                           <div className='drop-ani' key={i}><AnimatedLink title={link}/></div>
                           ))}
                          </div>
                      </Link>
                    </li>
                    <li onClick={handleMenuItemClick} className='navbar__menu-item'>
                      <Link href='/' passHref={true}>
                          <a onClick={handleMenuItemClick} className='styled-link'><AnimatedLink title='Technology'/> <FontAwesomeIcon icon={faWrench} style={{ fontSize: '1.5rem', marginLeft:'0.5rem'}} /></a>
                          <div className='dropdown-menu'>
                            {technology.map((link, i) => (
                           <div className='drop-ani' key={i}><AnimatedLink title={link}/></div>
                          ))}                          
                           </div>
                      </Link>
                    </li>
                    <li onClick={handleMenuItemClick} className='navbar__menu-item'>
                      <Link href='/' passHref={true}>
                          <a onClick={handleMenuItemClick} className='styled-link'><AnimatedLink title='Company'/> <FontAwesomeIcon icon={faDollarSign} style={{ fontSize: '1.5rem', marginLeft:'0.5rem'}} /></a>
                          <div className='dropdown-menu'>
                          {company.map((link, i) => (
                           <div className='drop-ani' key={i}><AnimatedLink title={link}/></div>
                           ))}                         
                          </div>
                      </Link>
                    </li>
                    <li className='contact_li' onClick={handleMenuItemClick}><a href={linkUrl} target="_blank" rel="noopener noreferrer" onClick={handleMenuItemClick}><AnimatedLink title='Contact'/> <FontAwesomeIcon icon={faAddressBook} style={{ fontSize: '1.5rem', marginLeft:'0.5rem'}} /></a></li>
                    <label htmlFor='check' className='navbar__close'><FontAwesomeIcon icon={faWindowMinimize} style={{ fontSize: '3rem', color:'white'}}/></label>
                </span>
                <label htmlFor='check' className='navbar__open'><FontAwesomeIcon icon={faBars} style={{ fontSize: '3rem' }}/></label>
            </ul>
        </nav>
    )
}


export default ResponsiveMenu