'use client';
// The ParallaxText component is a React functional component that creates a horizontal parallax scrolling effect.
//  It uses the framer-motion library for animations and utilities from @motionone/utils.
 

import { useRef } from 'react';
// Imports the useRef hook from React. This hook is used to create a mutable object that persists across renders, 
// often used to hold a reference to DOM elements or mutable values.

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import './styles.css';

// Imports the necessary hooks and components from the framer-motion library:
// motion: Used to animate React components.
// useScroll: Tracks scroll progress and returns a scrollY motion value.
// useSpring: Creates a spring animation based on input values, useful for smooth motion.
// useTransform: Transforms a motion value into another value based on a defined range.
// useMotionValue: Creates a motion value, which can be animated and tracked.
// useVelocity: Calculates the velocity of a motion value.
// useAnimationFrame: Executes a callback function on each frame, similar to requestAnimationFrame.

import { wrap } from '@motionone/utils';
// Imports the wrap utility function from the @motionone/utils package.
//  This function wraps a value within a specific range, ensuring that values exceeding the range "wrap around" instead of continuing 
//  linearly.

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

// Defines a TypeScript interface ParallaxProps for the props passed to the ParallaxText component. It has two properties:
// children: The content to be rendered inside the parallax effect, expected to be React nodes.
// baseVelocity: A number representing the base velocity for the parallax scrolling effect.

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  // Defines the ParallaxText functional component.
  //  It destructures children and baseVelocity from the props and assigns a default value of 100 to baseVelocity.

  const baseX = useMotionValue(0);
  // Initializes a motionValue called baseX with an initial value of 0. 
  // This value will be used to control the horizontal position of the text.

  const { scrollY } = useScroll();
  // Retrieves the scrollY motion value from the useScroll hook. This value tracks the vertical scroll position of the page.

  const scrollVelocity = useVelocity(scrollY);
  // Calculates the velocity (rate of change) of the scrollY value using the useVelocity hook. 
  // This value indicates how fast the user is scrolling.

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  // Smooths the scrollVelocity value using a spring animation. 
  // The damping and stiffness values control the "bounciness" and speed of the spring.
  //  This makes the velocity change more fluid rather than abrupt.

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  // Transforms the smoothed velocity into a new value, velocityFactor, which ranges from 0 to 5 based on the input range [0, 1000].
  //  This value will control the speed and direction of the parallax effect. 
  //  The clamp: false option allows values outside the defined range.

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  // Transforms the baseX value using the wrap function to create a looping effect. 
  // The wrap function keeps the value between -20% and -45%, creating a continuous scrolling effect where the text 
  // appears to loop infinitely.

  const directionFactor = useRef<number>(1);
  // Initializes a ref called directionFactor, which stores the current scrolling direction. 
  // It starts with an initial value of 1, indicating the initial direction is forward (positive).

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    //  Calculates the amount to move the text by based on the current direction, base velocity, and time elapsed (delta).

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
//  The if block changes the direction of scrolling based on the velocityFactor.
//  If the velocity is negative, the direction is reversed, and if it's positive, the direction remains forward.


    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
    // Updates the baseX value by adding the calculated movement to its current value, creating the scrolling effect.

  });
  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax-xe">
      <motion.div className="scroller-xe" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default ParallaxText;

// The ParallaxText component renders a div with a class name parallax. 
// Inside this div, there's another motion.div with a style prop bound to the x value (which controls the horizontal position of the text). 
// The motion.div contains four spans, each rendering the children content.

// style={{ x }}: The x value is applied as an inline style to animate the horizontal position of the text.
// Repeating children: The children content is repeated four times to create the effect of continuous scrolling.
// 16. export default ParallaxText;
// Exports the ParallaxText component as the default export from the module, making it available for use in other parts of the application.

// The useAnimationFrame hook in the ParallaxText component serves multiple purposes beyond just updating the baseX value. 
// Here's a breakdown of its roles:

// Smooth, Frame-by-Frame Updates:

// useAnimationFrame ensures that the baseX value is updated continuously and smoothly on every animation frame. 
// This creates a fluid parallax scrolling effect, rather than choppy or discrete movements.
//  The updates are synchronized with the browser's rendering loop, resulting in smoother animations.
// Handling Time-Based Animations:

// The delta parameter provided to the useAnimationFrame callback represents the time difference between the current and the last frame in milliseconds. 
// This allows the component to calculate movement in a way that is consistent regardless of the frame rate.
// For example, the moveBy calculation (delta / 1000) adjusts the movement by the elapsed time, 
// ensuring that the animation speed is constant across different devices or rendering conditions.
// Responding to Scroll Velocity:

// The useAnimationFrame hook is responsible for continuously checking the velocityFactor, which is derived from the scroll velocity. 
// The velocityFactor determines how fast and in what direction the text should move.
// Based on the current scroll velocity (calculated by useVelocity and smoothed by useSpring), 
// useAnimationFrame adjusts the movement direction and speed accordingly. 
// If the user scrolls faster or changes scroll direction, the component reacts dynamically by adjusting the animation on every frame.
// Changing Scroll Direction:

// The useAnimationFrame hook monitors the current scroll direction and reverses the direction of the animation if necessary. 
// By checking the value of velocityFactor during each frame, 
// it can flip the direction (directionFactor.current = -1 or 1) when the scroll velocity changes from positive to negative or vice versa.
// Real-Time Interactivity:

// useAnimationFrame enables the component to respond in real time to user interactions, such as scrolling,
//  without requiring explicit re-renders or updates from React.
//  This creates a seamless user experience where the parallax effect is continuously updated as the user scrolls, without any noticeable lag.
// In Summary:
// useAnimationFrame provides smooth and continuous updates to the parallax animation, 
// handles time-based movement to ensure consistent animation speeds, reacts to changing scroll velocity and direction, 
// and enhances the overall user experience by keeping the animation in sync with the browser's rendering loop.