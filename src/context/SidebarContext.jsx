import { createContext, useContext, useState, useEffect } from 'react';

// Create the AuthContext
const SidebarContext = createContext();

// Create a custom hook to use the AuthContext
export const useSidebar = () => {
    return useContext(SidebarContext);
};

// Create the AuthProvider component
export const SidebarProvider = ({ children }) => {
    // State to store user information



    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const [isMobileOpen, setMobileOpen] = useState(false);

    const toggleMobilebar = () => {
        setMobileOpen(!isMobileOpen);
    };


    // Value to be provided by the context
    const value = {
        isOpen, toggleSidebar, isMobileOpen, toggleMobilebar
    };

    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};


