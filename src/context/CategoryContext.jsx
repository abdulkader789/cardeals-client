import { createContext, useContext, useState, useEffect } from 'react';

// Create the AuthContext
const CategoryContext = createContext();

// Create a custom hook to use the AuthContext
export const useCategory = () => {
    return useContext(CategoryContext);
};

// Create the AuthProvider component
export const CategoryProvider = ({ children }) => {
    // State to store user information
    const [categoryData, setCategoryData] = useState(null);


    // Function to set user data and token in localStorage
    const getCategory = (categoryData) => {
        localStorage.setItem('categoryData', JSON.stringify(categoryData));
        setCategoryData(categoryData);

    };


    // Effect to load user data from localStorage on component mount
    useEffect(() => {
        const storedCategoryData = localStorage.getItem('categoryData');

        if (storedCategoryData) {
            setCategoryData(JSON.parse(storedCategoryData));

        }
    }, []); // Run only on component mount

    // Value to be provided by the context
    const value = {
        categoryData,
        setCategoryData,
        getCategory
    };

    return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};
