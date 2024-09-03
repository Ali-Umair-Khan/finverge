'use client';
import Preloader from '../Preloader';
import Footer from '@/components/footer/footer';
import ResponsiveMenu from '@/components/navbar2/resMenu2';
import { ReactLenis } from '@studio-freight/react-lenis';
// import StyledComponentsRegistry from '../../../libs/registry';
// import { GlobalStyles } from './GlobalStyles';
// import { Footer, Header, Preloader } from '..';
import { useState } from 'react';
import './GlobalStyles.css';
// ReactLenis: This is a scroll library, probably used for smooth scrolling effects.
// StyledComponentsRegistry: Likely a custom registry for managing styled-components.
// GlobalStyles: A component that applies global CSS styles to your application.
// Footer, Header, Preloader: Components for the layout.
// useState: A React hook for managing state in functional components.

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [complete, setComplete] = useState(false);
  return (
    <>
      <ReactLenis
        root
        easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
      >
        {/* <GlobalStyles /> */}
        <Preloader setComplete={setComplete} />
        <div className={complete ? 'complete' : 'not_complete'}>
          <ResponsiveMenu />
          {children}
          <Footer />
        </div>
      </ReactLenis>
    </>
  );
};

// StyledComponentsRegistry: Wraps the entire layout to provide a context for styled-components.
// ReactLenis:
// The root prop makes this the root element for Lenis' smooth scrolling.
// The easing prop provides a custom easing function for scroll animations.
// GlobalStyles: Adds global CSS styles to the document.
// Preloader: A preloader component that accepts setComplete as a prop to update the complete state.
// Conditional Class: The div's className changes based on the complete state.
//  If complete is true, the class is complete; otherwise, it is not_complete.
// Header, Footer, children: These components are rendered as part of the layout.
//  children refers to the content nested inside the Layout component.

// Global Styles are applied to the whole application.
// Preloader updates the complete state.
// Depending on the complete state, the div receives different class names, which likely control its visibility or style.
// Header, Footer, and children are part of the main layout structure.
// ReactLenis provides smooth scrolling with custom easing. 

export default Layout;
