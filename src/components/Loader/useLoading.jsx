import { useEffect, useState } from "react";

const useLoading = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate a 2-second delay using setTimeout
        const delay = 1000; // in milliseconds

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, delay);

        // Clear the timer when the component is unmounted or when the delay is complete
        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures that the effect runs only once
    return isLoading
};

export default useLoading;