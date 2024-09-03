// This code defines a StyledComponentsRegistry component that manages the integration of styled-components in a Next.js application.
//  Let's break down its purpose and how it works:

// Purpose
// StyledComponentsRegistry ensures that styled-components work seamlessly with server-side rendering (SSR) in a Next.js application. 
// It handles the generation and injection of styles both on the server side and client side.
'use client'
 
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
 
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  // Purpose: This line creates a new ServerStyleSheet instance but only initializes it when the component is first rendered.
  //  The lazy initialization (() => new ServerStyleSheet()) ensures that the stylesheet is only created once.
  // ServerStyleSheet: This is a utility from styled-components that collects all the styles from the components during server-side rendering.

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

//   Purpose: This Next.js hook inserts the collected styles into the HTML generated on the server before it's sent to the client.
//    It ensures that the correct styles are applied as the page loads.
// How It Works:
// getStyleElement(): Extracts the styles collected by ServerStyleSheet.
// clearTag(): Clears the collected styles after they are inserted, preparing the stylesheet for the next render.
// The styles are returned as a React fragment (<>{styles}</>), which gets injected into the server-rendered HTML.
 
  if (typeof window !== 'undefined') return <>{children}</>

//  Purpose: This check ensures that the styles are not re-applied on the client side. If the code is running in the browser (typeof window !== 'undefined'),
//   it simply renders the children without reapplying the styles, as they were already applied during server-side rendering.

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}

// Purpose: On the server side, StyleSheetManager is used to manage the styles.
//  It wraps the children components and applies the collected styles using the ServerStyleSheet instance.
// Summary
// Server-Side Rendering (SSR):

// The StyledComponentsRegistry collects all the styles from styled-components during SSR.
// It injects these styles into the server-rendered HTML so that styles are correctly applied when the page loads.
// Client-Side Rendering:

// On the client side, it skips reapplying the styles, as they are already included in the server-rendered HTML.
// This setup is essential for making sure that styled-components work correctly with Next.js's SSR, 
// ensuring no flickering or styling issues during the hydration process.