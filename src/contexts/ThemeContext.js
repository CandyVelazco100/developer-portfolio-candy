import React, { createContext, useState } from 'react'

import { themeData } from '../data/themeData'

export const ThemeContext = createContext()

/**
 * ThemeContextProvider
 *
 * The context provider for theme and drawer state.
 *
 * Properties:
 *
 * - `children`: The child elements to be rendered within the context provider.
 *
 * Context value properties:
 *
 * - `theme`: The object containing the color palette for the current theme.
 * - `drawerOpen`: A boolean indicating if the drawer is open.
 * - `setHandleDrawer`: A function to toggle the drawer open state.
 */

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(themeData.theme)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const value = { theme, drawerOpen, setHandleDrawer }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider