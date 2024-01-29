import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useOrders } from '../../../context/OrderContext';

const OrderDetails = () => {
    const { ordersData } = useOrders();
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [product, setProduct] = useState(null);
    const [user, setUser] = useState(null);
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false // Use 24-hour format
        };
        return date.toLocaleString('en-US', options);
    }
    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                // Fetch order details
                const response = await fetch(`/api/order/get-single-order/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch order');
                }
                const data = await response.json();
                setOrder(data.order);

                // Extract productId and userId from the order
                const { productId, userId } = data.order;

                // Fetch product details
                const productResponse = await fetch(`/api/product/get-single-product/${productId}`);
                if (!productResponse.ok) {
                    throw new Error('Failed to fetch product');
                }
                const productData = await productResponse.json();
                setProduct(productData.product);

                // Fetch user details
                const userResponse = await fetch(`/api/auth/get-single-user/${userId}`);
                if (!userResponse.ok) {
                    throw new Error('Failed to fetch user');
                }
                const userData = await userResponse.json();
                setUser(userData.user);
            } catch (error) {
                console.error('Error fetching order details:', error);
            }
        };

        fetchOrderDetails();
    }, [id]); // Run this effect whenever the ID changes

    console.log(order, product, user)


    return (
        product && user ?
            <div>

                <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">

                    <div className="flex justify-start item-start space-y-2 flex-col">
                        <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order {id}</h1>
                        <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">{order && formatDate(order.createdAt)}</p>
                    </div>
                    <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                            <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>



                                <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                                    <div className="w-full md:w-40">
                                        {product && (
                                            <img className="w-full hidden md:block" src={`/api/product/get-product-photo/${product._id}`} alt="dress" />
                                        )}

                                    </div>
                                    <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{product.name}</h3>
                                            <div className="flex justify-start items-start flex-col space-y-2">
                                                <p className="text-sm dark:text-white leading-none text-gray-800">
                                                    <span className="dark:text-gray-400 text-gray-900 font-bold mr-2">Acceleration:</span>{' '}
                                                    {product.acceleration}
                                                </p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800">
                                                    <span className="dark:text-gray-400 text-gray-900 font-bold mr-2">Availability:</span>{' '}
                                                    {product.availability}
                                                </p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800">
                                                    <span className="dark:text-gray-400 text-gray-900 font-bold mr-2">Category:</span>{' '}
                                                    {product.category}
                                                </p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800">
                                                    <span className="dark:text-gray-400 text-gray-900 font-bold mr-2">Color:</span>{' '}
                                                    {product.color}
                                                </p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800">
                                                    <span className="dark:text-gray-400 text-gray-900 font-bold mr-2">Engine:</span>{' '}
                                                    {product.engine}
                                                </p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800">
                                                    <span className="dark:text-gray-400 text-gray-900 font-bold mr-2">Model:</span>{' '}
                                                    {product.model}
                                                </p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800">
                                                    <span className="dark:text-gray-400 text-gray-900 font-bold mr-2">Fuel Efficiency:</span>{' '}
                                                    {product.fuelEfficiency}
                                                </p>
                                                <p className="text-sm dark:text-white leading-none text-gray-800">
                                                    <span className="dark:text-gray-400 text-gray-900 font-bold mr-2">Price:</span>{' '}
                                                    {product.price}
                                                </p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
                            <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                                <div className="flex flex-col justify-start items-start flex-shrink-0">
                                    <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                        {/* <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" /> */}
                                        <div className="flex justify-start items-start flex-col space-y-2">
                                            <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">{user.name}</p>

                                        </div>
                                    </div>

                                    <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 7L12 13L21 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p className="cursor-pointer text-sm leading-5 ">{user.email}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                    <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                        <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                            <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">AppointmentDateTime</p>
                                            <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{formatDate(order.appointmentDateTime)}</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> : null
    );
};

export default OrderDetails;
