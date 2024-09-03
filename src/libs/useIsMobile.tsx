'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const isClient = typeof window === 'object';

export const useIsMobile = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(isClient && window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);
    };

    if (isClient) {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [pathname]);

  return isMobile;
};

// This code is a custom React hook called useIsMobile that determines whether the user is on a 
// mobile device (based on the window's width) and updates the state accordingly when the window is resized. 
//   Here's a breakdown of how it works and why it might not be working in your project:

// Explanation
// 'use client'; Directive:

// This directive tells Next.js that this component or hook should be executed on the client side.
//  Since it interacts with the window object, it cannot be run on the server side.
// isClient Constant:

// The isClient variable checks if the code is running in a browser environment (where window is defined) by checking if typeof window is 'object'.
// This prevents errors that would occur if the code tried to access window on the server side.
// usePathname Hook:

// usePathname is a Next.js hook that provides the current URL path. 
// It is used here to trigger the useEffect when the pathname changes. 
// This ensures that the mobile state is recalculated when the user navigates to a different page.
// useState Hook:

// The isMobile state is initialized based on whether the window.innerWidth is less than or equal to 768 pixels, 
// which is a common breakpoint for mobile devices.
// If isClient is false (meaning the code is running on the server), isMobile is initialized to false (or potentially a fallback value).
// useEffect Hook:

// This effect sets up a resize event listener that updates the isMobile state whenever the window is resized.
// The event listener is added only if isClient is true, ensuring that the code runs only in the browser.
// The cleanup function removes the event listener when the component unmounts or when the dependency (pathname) changes.
// Return Value:

// The hook returns the current value of isMobile, which can be used in your components to conditionally render content based on the device's screen size.
// Why It Might Not Be Working in Your Project
// Client-Side Rendering Issues:

// Ensure that the hook is used within a component that is also marked as 'use client'; at the top. 
// If not, the hook might be executed on the server side, where window is undefined.
// Import Path for usePathname:

// Verify that usePathname is correctly imported from next/navigation. 
// If there's an issue with the import, the hook may not function properly.
// Environment Compatibility:

// Check that your project is configured to support client-side hooks. 
// In some setups, SSR (Server-Side Rendering) might cause issues if the hook is executed prematurely.
// Dependencies and Versioning:

// Ensure that your Next.js version supports usePathname and other dependencies. 
// If your Next.js version is outdated, some features might not work as expected.
// Event Listener Removal:

// Double-check that the cleanup function for the resize event listener is being called correctly. 
// If it's not, it could lead to memory leaks or inconsistent state updates.
// Debugging Steps
// Console Logs: Add console.log statements within the useEffect to verify that the event listener is being set up and triggered correctly.
// Version Check: Verify that your project is using compatible versions of Next.js and React.
// Environment Check: Ensure that your environment (browser, development server) correctly supports client-side features.
// By following these steps and understanding how the hook works, you should be able to pinpoint the issue and get it working in your project.