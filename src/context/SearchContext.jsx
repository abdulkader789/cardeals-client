import React, { createContext, useContext, useState } from "react";

// Create a new context
const SearchContext = createContext();

// Custom hook to use the search context
export const useSearch = () => useContext(SearchContext);

// Search Provider component
export const SearchProvider = ({ children }) => {
  // State for search query (name, model, and _id)
  const [searchQuery, setSearchQuery] = useState({ _id: "", name: "", model: "" });
  const value = {
    searchQuery, setSearchQuery
  };
  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};
