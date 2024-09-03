'use client';
import Image from 'next/image';
import finverge from '../../../public/finverge.png';
import './styles.scss';
// import { Wrapper, Inner, SecondOverlay } from './styles';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// 'use client';: Ensures the component runs on the client side.
// Image: A Next.js component for optimized image rendering.
// ic_import: An SVG image import.
// Wrapper, Inner, SecondOverlay: Styled components for the preloader.
// Dispatch, SetStateAction, useEffect, useRef: React hooks for state management, side effects, and references.
// gsap: GreenSock Animation Platform for animations.
const Preloader = ({
  setComplete,
}: {
  setComplete: Dispatch<SetStateAction<boolean>>;
})=> {
  const word = ['F', 'i', 'n', 'v','e', 'r', 'g', 'e'];

  const spans = useRef<any>([]); // Create a ref to store the span elements
  const imageRef = useRef(null);
  const secondOverlayRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    
    const tl = gsap.timeline();
    // Creates a new GSAP timeline, allowing for the sequencing of multiple animations.

    tl.to(imageRef.current, {
      rotate: '360deg',
      ease: 'back.out(1.7)', // Easing function
      duration: 1.4,
    });
    // Target: imageRef.current
    // Property: rotate
    // Value: '360deg' (rotates the image 360 degrees)
    // Easing: back.out(1.7) (creates a bouncing effect as it finishes the rotation)
    // Duration: 1.4 seconds

    tl.to(imageRef.current, {
      y: '-150%', // Move the spans up
      ease: 'back.out(1.7)', // Easing function
    });
    // Target: imageRef.current
    // Property: y
    // Value: '-100%' (moves the image upwards out of view)
    // Easing: back.out(1.7) (creates a bouncing effect as it finishes the movement)

    // Iterate through the span elements and animate them
    tl.to(spans.current, {
      y: '-100%', // Move the spans up
      ease: 'back.out(1.7)', // Easing function
      duration: 1.4, // Animation duration
      stagger: 0.05, // Stagger duration (0.2 seconds delay between each span)
    });
    // Target: spans.current (array of span elements)
    // Property: y
    // Value: '-100%' (moves each span upwards out of view)
    // Easing: back.out(1.7) (creates a bouncing effect as it finishes the movement)
    // Duration: 1.4 seconds
    // Stagger: 0.05 seconds (delays the start of each subsequent span animation by 0.05 seconds)

    // Animate both the wrapper and the second overlay almost at the same time
    tl.to([wrapperRef.current, secondOverlayRef.current], {
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'back.out(1.7)',
      duration: 2,
      stagger: 0.2,
      onComplete: () => {
        setComplete(true);
      },
    });
    // Target: [wrapperRef.current, secondOverlayRef.current] (both elements)
    // Property: scaleY
    // Value: 0 (scales both elements vertically to 0)
    // Transform Origin: top (scales from the top)
    // Easing: back.out(1.7) (creates a bouncing effect as it finishes the scaling)
    // Duration: 1 second
    // Stagger: 0.2 seconds (delays the start of the second element's animation by 0.2 seconds)
    // onComplete: setComplete(true) (calls setComplete(true) when the animation completes)

    // Apply a small delay to one of the elements (adjust as needed)
    tl.to(secondOverlayRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      ease: [0.83, 0, 0.17, 1] as any,
      duration: 1,
      delay: -0.9, // Adjust this delay as needed to fine-tune the timing
    });
    // Target: secondOverlayRef.current
    // Property: scaleY
    // Value: 0 (scales the element vertically to 0)
    // Transform Origin: top (scales from the top)
    // Easing: [0.83, 0, 0.17, 1] (custom cubic-bezier easing)
    // Duration: 1 second
    // Delay: -0.9 seconds (overlaps the previous animation by 0.9 seconds)

  }, [setComplete]);
  // The useEffect hook sets up a sequence of animations using GSAP's timeline.
  // The sequence includes rotating and moving the image, animating the spans, and scaling down the wrapper and overlay elements.
  // The animations use various easing functions and delays to create a smooth and visually appealing preloader effect.
  // Once the animations are complete, setComplete(true) is called to update the parent component's state, indicating the preloader has finished.
 
  return (
    <>
      <div className='Wrapper' ref={wrapperRef}>
        <div className='Inner'>
          {/* <Image ref={imageRef} src={finverge} alt="import icon" /> */}
          <div>
            {word.map((t, i) => (
              <div
                key={i}
                ref={(element) => (spans.current[i] = element)} // Assign ref to each span
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='SecondOverlay' ref={secondOverlayRef}></div>
    </>
  );
};

export default Preloader;


// Breakdown
// State and Refs:

// setComplete: Function to update the complete state in the parent component.
// spans: Ref to store span elements for the letters.
// imageRef, secondOverlayRef, wrapperRef: Refs to store references to DOM elements.
// useEffect Hook:

// The useEffect hook runs on component mount and sets up the GSAP timeline animations.
// GSAP Timeline:
// Image Rotation: Rotates the image by 360 degrees with easing.
// Image Movement: Moves the image upwards.
// Spans Movement: Animates the spans upwards with staggering.
// Wrapper and Overlay Animation: Scales the wrapper and overlay vertically to 0 with easing.
// Completion: Calls setComplete(true) once animations are complete.
// JSX Structure:

// Wrapper: Main container for the preloader.
// Inner: Inner container holding the image and spans.
// Spans: Displays the letters with animation refs assigned.
// SecondOverlay: Additional overlay for animation.
// Summary
// The Preloader component displays an image and a series of letters, animating them with GSAP.
// The animations include rotation, movement, and scaling with easing and staggering effects.
// Once the animations are complete, setComplete(true) is called to update the parent component's state.

// transformOrigin
// The transformOrigin property in CSS specifies the point around which a transformation is applied. 
// By default, this point is the center of the element, but it can be customized to be any point within or outside the element.

// Syntax: transform-origin: x-axis y-axis;
// x-axis: Horizontal position (e.g., left, center, right, percentage, or length).
// y-axis: Vertical position (e.g., top, center, bottom, percentage, or length).
// In the context of the GSAP animation:

// tl.to([wrapperRef.current, secondOverlayRef.current], {
//   scaleY: 0,
//   transformOrigin: 'top',
//   ease: 'back.out(1.7)',
//   duration: 1,
//   stagger: 0.2,
//   onComplete: () => {
//     setComplete(true);
//   },
// });
// transformOrigin: 'top': Sets the transformation origin to the top edge of the element. 
// This means any transformations (like scaling) will be applied relative to the top edge.

// Difference Between y and scaleY
// y
// Definition: The y property in GSAP animations is used to move an element along the vertical axis.
// Effect: It translates (moves) the element up or down without changing its size or shape.
// Example: y: '-100%' moves the element up by 100% of its own height.

// tl.to(imageRef.current, {
//   y: '-100%',
//   ease: 'back.out(1.7)',
// });
// In this example, the element is moved vertically upwards by 100% of its height.

// scaleY
// Definition: The scaleY property scales an element along the vertical axis.
// Effect: It changes the size of the element vertically, effectively stretching or compressing it without moving its position.
// Example: scaleY: 0 compresses the element to 0% of its original height, making it appear to collapse vertically.

// tl.to([wrapperRef.current, secondOverlayRef.current], {
//   scaleY: 0,
//   transformOrigin: 'top',
//   ease: 'back.out(1.7)',
//   duration: 1,
//   stagger: 0.2,
// });
// In this example, the elements are scaled vertically to 0, collapsing from the top edge down to give a shrinking effect.

// Summary
// transformOrigin: Defines the point around which transformations are applied.
//  Setting it to top means transformations occur relative to the top edge of the element.
// y: Moves the element along the vertical axis without altering its size.
// scaleY: Scales the element along the vertical axis, changing its height but not its position.
// By understanding these differences, you can effectively manipulate elements' positioning and scaling to create intricate animations and visual effects.


// explain scaleY command in gsap
// scaleY in GSAP (GreenSock Animation Platform) is a property that allows you to scale an element vertically, 
// making it taller or shorter while keeping its width unchanged.
// When you use scaleY, you can pass a value that represents the scaling factor:
// scaleY: 1 means no scaling (the element remains unchanged)
// scaleY: 0.5 means the element will be scaled down to 50% of its original height
// scaleY: 2 means the element will be scaled up to 200% of its original height
// Here's an example of how to use scaleY in a GSAP tween:
// JavaScript
// gsap.to("#myElement", { duration: 1, scaleY: 0.5 });
// This will scale the element with the ID myElement down to 50% of its original height over a duration of 1 second.
// You can also combine scaleY with other properties, like scaleX, to create more complex scaling effects. For example:
// JavaScript
// gsap.to("#myElement", { duration: 1, scaleX: 2, scaleY: 0.5 });
// This will scale the element horizontally to 200% of its original width and vertically to 50% of its original height.
// what does scaleY:0; means
// scaleY: 0 is a special case in GSAP. When you set scaleY to 0, it means the element will be scaled down to a height of 0, 
// effectively collapsing it vertically.
// In other words, the element will be squished down to a single point, with no height at all. 
// This can be useful for creating collapse or fold-in effects, where you want the element to disappear vertically.
// Here are some key things to note about scaleY: 0:
// The element will still occupy space horizontally (its width will remain unchanged).
// The element's content will be hidden from view, as its height is now 0.
// If you're using scaleY: 0 in a tween, the element will be scaled down to 0 height over the duration of the tween.
// To restore the element's original height, you can simply set scaleY back to 1 (or any other value greater than 0) in a subsequent tween.
// Example:
// JavaScript
// gsap.to("#myElement", { duration: 1, scaleY: 0 }); // collapse the element
// gsap.to("#myElement", { duration: 1, scaleY: 1 }); // restore the element's height

// By changing the transformOrigin value, you can control the point around which the transformation is applied, 
// creating different effects and animations.
// In the context of the code you provided, transformOrigin: 'top' means that the scaling transformation will be applied from 
// the top edge of the element, making it appear to collapse or expand from the top.


// In GSAP, the ease property determines the timing function of an animation, controlling how the animation progresses over time. 
// Here's a breakdown of the different ease values used in the code:
// ease: 'back.out(1.7)':
// back: A ease type that creates a "bouncing" effect, where the animation overshoots its target value and then returns to it.
// out: Specifies that the ease should be applied to the outgoing (ending) phase of the animation.
// (1.7): A parameter that adjusts the amount of overshoot. A higher value means more overshoot.
// ease: [0.83, 0, 0.17, 1]:
// This is a custom cubic-bezier ease curve, defined by four control points:
// 0.83: x-coordinate of the first control point
// 0: y-coordinate of the first control point
// 0.17: x-coordinate of the second control point
// 1: y-coordinate of the second control point
// This ease curve creates a smooth, fluid animation with a slight acceleration at the beginning and a gentle deceleration at the end.
// Other common ease values include:
// linear: A linear ease, where the animation progresses at a constant speed.
// in: An ease that applies to the incoming (starting) phase of the animation.
// out: An ease that applies to the outgoing (ending) phase of the animation.
// inOut: An ease that applies to both the incoming and outgoing phases of the animation.
// powerX, where X is a number (e.g., power2, power3, etc.): A ease that applies a power curve to the animation, 
// where higher values of X create more aggressive easing.
// By using different ease values, you can create a wide range of animation effects, from simple and linear to complex and dynamic.

