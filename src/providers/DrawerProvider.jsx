// create a context

import React, { createContext, useState } from 'react';

export const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(true);
    
    return (
        <DrawerContext.Provider value={{ drawerOpen, setDrawerOpen }}>
        {children}
        </DrawerContext.Provider>
    );
}
