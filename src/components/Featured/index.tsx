/* eslint-disable @next/next/no-img-element */
// This React component, named Featured, is a part of a Next.js application. 
// It uses Framer Motion for animations and the Next.js Image component to efficiently display images.
//  The component is designed to display a featured section on a webpage, including a banner image and a parallax effect 
//  with logos of companies.


'use client';
import Image from 'next/image';
import {motion} from 'framer-motion';
import big_banner from '../../../public/big_banner.png';
import featured_mobile_banner from '../../../public/featured_mobile_banner.png';
import ParallaxText from '@/UI/ParallaxImages';
import companies_image from '../../../public/companies.png';
import RevealCover from '@/UI/RevealCover';
import { useIsMobile } from '@/libs/useIsMobile';
import './styles.css';

// Image from 'next/image': This is a Next.js component used for optimizing images. 
// It handles image loading and responsiveness.
// motion from 'framer-motion': Framer Motion is a library for creating animations in React. 
// The motion component is used to animate HTML elements.
// big_banner and featured_mobile_banner: These are images imported from the project's public directory.
// ParallaxText from '@/components/Common/ParallaxImages': This is a custom component (likely implementing a parallax scrolling effect).
// companies_image: Another image, likely a banner or logo of various companies, also imported from the public directory.
// RevealCover from '@/components/Common/RevealCover': This is another custom component, probably used to create a "reveal" effect on elements as they come into view.
// useIsMobile from '../../../../libs/useIsMobile': A custom hook that likely detects whether the user is on a mobile device or not.


export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

// imageVariants: This is an object defining different animation states (hidden and visible) for an image.
// hidden: The image starts with a scale of 1.6 (enlarged).
// visible: The image smoothly transitions to a scale of 1 (its original size).
// transition: Specifies the duration and easing of the animation.


const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <section>
      <div className='Inner-fe'>
        <div className='ImageContainer-fe'>
          <RevealCover />
          <motion.div className='Div-fe'
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.45, once: true }}
          >
            {/* {isMobile ? (
              <Image
                src='/featured_mobile_banner.png'
                alt="featured_mobile_banner"
                fill
              />
            ) : (
              <Image src='/big_banner.png' alt="big_banner" fill />
            )} */}
            {/* <Image src='/startup-02.jpg' alt="big_banner" fill /> */}
            <picture>
               <source srcset="men-small.jpg" media="(max-width: 50rem)"/>
               <source srcset="men-medium.jpg" media="(max-width: 76rem)"/>
               <img src="men-large.jpg" alt="A responsive image"/>
            </picture>
          </motion.div>
        </div>
        <h2>Featured and Seen in</h2>
        <div className='ParallaxImages-fe'>
          <ParallaxText baseVelocity={-4}>
            <img src='/companies.png' alt="comapanies" />
            {/* <h1>parallax text</h1> */}
          </ParallaxText>
        </div>
      </div>
    </section>
  );
};

export default Featured;
