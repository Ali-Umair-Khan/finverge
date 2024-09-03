'use client'
import React, { useState } from 'react';
import './style2.css'; // Import your CSS file

const ResMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {/* <div className="logo">Your Logo</div> */}
      <ul className={`nav-links ${isOpen ? "show-nav" : ""} `}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default ResMenu;
