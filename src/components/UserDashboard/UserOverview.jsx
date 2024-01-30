import React from 'react';

import { useOrders } from '../../context/OrderContext';
import { useAuth } from '../../context/AuthContext';

const UserOverview = () => {
    const { ordersData } = useOrders();
    const { authData } = useAuth();

    // Filter ordersData to include only orders of the authenticated user
    const userOrders = ordersData.filter(order => order.userId === authData.user._id);

    return (
        <main className="p-6 sm:p-10 space-y-6">
            <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">

                <div className="flex items-center p-8 bg-teal-500 shadow rounded-sm">
                    <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <div className="cursor-pointer">
                        <span className="block text-white">Your<br />Total Orders</span>
                        <span className="block text-2xl text-white font-bold">{userOrders.length}</span>
                    </div>
                </div>

            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
                <div className="">
                    {userOrders.map(order => (
                        <div key={order._id} className="p-4 border rounded-md shadow-md w-1/2">
                            <img src={`/api/product/get-product-photo/${order.product._id}`} />
                            <h3 className="text-lg font-semibold mb-2">{order.product.name}</h3>
                            <p className="text-gray-600">{order.product.description}</p>
                            <p className="text-gray-700 mt-2">Price: ${order.product.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default UserOverview;
