import React, { createContext, useContext, useState } from 'react';

// Step 1: Create the CartContext
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

// Step 2: Implement Cart Actions
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.productId !== productId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
