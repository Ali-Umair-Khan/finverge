'use client';
// This directive at the top of the file indicates that this component should run in the client-side environment, 
// typically used in Next.js to enforce client-side rendering for specific components.


// This React component, RevealCover, uses Framer Motion to animate a div, which acts as a cover, 
// revealing content as it scrolls into view. Below is a detailed explanation of each part of the code:

import { motion } from 'framer-motion';
// The motion component is imported from Framer Motion, a popular animation library for React. 
// This component allows you to add animations to HTML elements easily.


import './style.css';
// import styled from 'styled-components';

const variant = {
  hidden: {
    width: '100%',
  },
  visible: {
    width: '0%',
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const RevealCover = () => {
  
const reveal : React.CSSProperties = {
  content: '',
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#000000',
  zIndex: 10,
}

  return (
    <motion.div className='reveal-element' style={reveal}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.9, once: false }}
    ></motion.div>
  );
};

export default RevealCover;
