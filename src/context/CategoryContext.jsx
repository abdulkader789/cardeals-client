import { createContext, useContext, useState, useEffect } from "react";

// Create the AuthContext
const CategoryContext = createContext();

// Create a custom hook to use the AuthContext
export const useCategory = () => {
  return useContext(CategoryContext);
};

// Create the AuthProvider component
export const CategoryProvider = ({ children }) => {
  // State to store category information
  const [categoryData, setCategoryData] = useState([]);

  // Function to fetch categories and set them in the state
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/category/get-all-categories`
      );
      if (response.ok) {
        const data = await response.json();
        setCategoryData(data.data);
      } else {
        throw new Error("Failed to fetch categories");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  console.log("test cateory data fetch: ", categoryData);

  // Effect to fetch categories from API on component mount
  useEffect(() => {
    fetchCategories();
  }, []); // Run only on component mount

  // Value to be provided by the context
  const value = {
    categoryData,
    setCategoryData,
    fetchCategories,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
