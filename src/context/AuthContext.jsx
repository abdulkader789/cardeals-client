import { createContext, useContext, useState, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    // State to store user information
    const [authData, setAuthData] = useState(null);
    const [loader, setLoader] = useState(true);

    // Function to set user data and token in localStorage
    const login = (userData) => {
        localStorage.setItem('authData', JSON.stringify(userData));
        setAuthData(userData);
        setLoader(false);
    };

    // Function to clear user data and token from localStorage
    const logout = () => {
        localStorage.removeItem('authData');
        setAuthData(null);
        setLoader(true);
    };

    // Effect to load user data from localStorage on component mount
    useEffect(() => {
        const storedAuthData = localStorage.getItem('authData');

        if (storedAuthData) {
            setAuthData(JSON.parse(storedAuthData));

        }
    }, []); // Run only on component mount

    // Value to be provided by the context
    const value = {
        loader,
        setLoader,
        authData,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
