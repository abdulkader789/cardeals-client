import { createContext, useContext, useState, useEffect } from "react";

// Create the BrandContext
const BrandContext = createContext();

// Create a custom hook to use the BrandContext
export const useBrand = () => {
  return useContext(BrandContext);
};

// Create the BrandProvider component
export const BrandProvider = ({ children }) => {
  // State to store brand information
  const [brandData, setBrandData] = useState([]);

  // Function to fetch brands and set them in the state
  const fetchBrands = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/brand/get-all-brands`
      );
      if (response.ok) {
        const data = await response.json();
        setBrandData(data.data);
      } else {
        throw new Error("Failed to fetch brands");
      }
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  // Effect to fetch brands from API on component mount
  useEffect(() => {
    fetchBrands();
  }, []); // Run only on component mount

  // Value to be provided by the context
  const value = {
    brandData,
    setBrandData,
    fetchBrands,
  };

  return (
    <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
  );
};
