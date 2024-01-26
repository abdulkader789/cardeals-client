import { createContext, useContext, useState } from 'react';

// Create the SearchProductContext
const SearchProductContext = createContext();

// Create a custom hook to use the SearchProductContext
export const useSearchProduct = () => {
    return useContext(SearchProductContext);
};

// Create the SearchProductProvider component
export const SearchProductProvider = ({ children }) => {
    // State to store search query and results
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Function to perform search
    const performSearch = async (query) => {
        try {
            const response = await fetch(`/api/product/search?query=${query}`);
            if (response.ok) {
                const results = await response.json();
                setSearchResults(results);
            } else {
                throw new Error('Failed to fetch search results');
            }
        } catch (error) {
            console.error('Error performing search:', error);
        }
    };

    // Value to be provided by the context
    const value = {
        searchQuery,
        setSearchQuery,
        searchResults,
        performSearch
    };

    return <SearchProductContext.Provider value={value}>{children}</SearchProductContext.Provider>;
};
