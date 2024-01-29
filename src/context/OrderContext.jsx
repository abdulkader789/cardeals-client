import React, { createContext, useState, useEffect, useContext } from 'react';

const OrderContext = createContext();

export const useOrders = () => {
    return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
    const [ordersData, setOrdersData] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            try {
                const response = await fetch('/api/order/get-all-orders');
                if (!response.ok) {
                    throw new Error('Failed to fetch orders');
                }
                const data = await response.json();
                setOrdersData(data);
                console.log('context orders', data)
            } catch (error) {
                console.error('Error:', error.message);
            }
        }

        fetchOrders();
    }, []);

    return (
        <OrderContext.Provider value={{ ordersData, setOrdersData }}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderContext;
