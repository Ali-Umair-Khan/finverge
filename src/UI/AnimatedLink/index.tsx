'use client';
import { useState } from 'react';
// import { Div, Word, Span, AbsoluteContainer } from './styles';
import {motion} from 'framer-motion';
import './styles.scss';

type AnimationProps = {
  rest: {
    y: number;
  };
  hover: {
    y: number;
    transition: {
      duration: number;
      ease: number[];
      type: string;
    };
  };
};

const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.005,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.005,
    },
  },
};

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -25,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

const letterAnimationTwo = {
  rest: {
    y: 25,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

type AnimationLinkProps = {
  title:string,
  key?:number
}

const AnimatedLink = ({ title, key } : AnimationLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div className='Div-ani'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <AbsoluteContainer> */}
        <AnimatedWord
          title={title}
          animations={letterAnimation}
          isHovered={isHovered}
        />
      {/* </AbsoluteContainer> */}

      <div className='absContainer-ani'>
         <AnimatedWord
           title={title} 
           animations={letterAnimationTwo} 
           isHovered={isHovered} 
         />  
      </div>
    </motion.div>
  );
};

export default AnimatedLink;

const AnimatedWord = ({
  title,
  animations,
  isHovered,
}: {
  title: string;
  animations: AnimationProps;
  isHovered: boolean;
}) => (
  <motion.div className='word-ani'
    variants={titleAnimation}
    initial="rest"
    animate={isHovered ? 'hover' : 'rest'}
  >
    {title.split('').map((char, i) =>
      char === ' ' ? (
        <motion.span className='Span-ani' key={i}>&nbsp;</motion.span>
      ) : (
        <motion.span className='Span-ani' variants={animations} key={i}>
          {char}
        </motion.span>
      )
    )}
  </motion.div>
);