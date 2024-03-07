import React, { createContext, useContext, useState } from 'react';

// Create a context object
const MobileNavContext = createContext();

// Create a custom hook to use the MobileNavContext
export const useMobileNav = () => useContext(MobileNavContext);

// Create a provider component
export const MobileNavProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <MobileNavContext.Provider value={{ isActive, handleClick }}>
            {children}
        </MobileNavContext.Provider>
    );
};

export default MobileNavContext;
