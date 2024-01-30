import { createContext, useContext, useState, useEffect } from 'react';

// Create the ProductContext
const ProductContext = createContext();

// Create a custom hook to use the ProductContext
export const useProduct = () => {
    return useContext(ProductContext);
};

// Create the ProductProvider component
export const ProductProvider = ({ children }) => {
    // State to store product information
    const [productData, setProductData] = useState(null);

    // Function to fetch products and set them in the state
    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/product/get-all-products');

            if (response.ok) {
                const data = await response.json();
                setProductData(data.products);
                console.log('Product data: ', productData)

            } else {
                throw new Error('Failed to fetch products');
            }

        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // Effect to fetch products from API on component mount
    useEffect(() => {
        fetchProducts();
    }, []); // Run only on component mount

    // Value to be provided by the context
    const value = {
        productData,
        setProductData,
        fetchProducts
    };

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
