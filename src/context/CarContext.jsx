// src/context/CarContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

// Create the CarContext
const CarContext = createContext();

// Create a custom hook to use the CarContext
export const useCar = () => {
  return useContext(CarContext);
};

// Create the CarProvider component
export const CarProvider = ({ children }) => {
  // State to store car information
  const [carData, setCarData] = useState([]);

  // Function to fetch cars and set them in the state
  const fetchCars = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/car/get-all-cars`
      );
      if (response.ok) {
        const data = await response.json();
        setCarData(data.data);
      } else {
        throw new Error("Failed to fetch cars");
      }
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  // Effect to fetch cars from API on component mount
  useEffect(() => {
    fetchCars();
  }, []); // Run only on component mount

  // Value to be provided by the context
  const value = {
    carData,
    setCarData,
    fetchCars,
  };

  return <CarContext.Provider value={value}>{children}</CarContext.Provider>;
};
