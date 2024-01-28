import React, { createContext, useState, useEffect, useContext } from 'react'; // Import useContext

// Create a context object
const UserContext = createContext();

// Create a custom hook to use the UserContext
export const useUsers = () => {
    return useContext(UserContext);
};

// Create a provider component
export const UserProvider = ({ children }) => {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('/api/auth/get-all-users'); // Adjust the URL as per your server configuration
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUsersData(data);
            } catch (error) {
                console.error('Error:', error.message);
            }
        }

        fetchUsers();
    }, []);

    return (
        <UserContext.Provider value={{ usersData, setUsersData }}> {/* Wrap values in an object */}
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
