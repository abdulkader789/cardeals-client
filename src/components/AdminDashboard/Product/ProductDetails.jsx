import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/product/get-single-product/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product data');
                }
                const data = await response.json();
                setProductData(data.product);
                console.log(productData)
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <div>
            {productData && (

                < section className="container mx-auto p-10 md:p-20 antialiased " >
                    <article
                        className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
                        <img className="w-full max-h-[400px] object-fit md:w-52" src={`/api/product/get-product-photo/${id}`} alt="" />
                        <div className="p-10 ">
                            <div className="p-5 pb-10">
                                <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                                    Name: {productData.name}
                                </h1>

                            </div>
                            <div className="p-5">
                                <p className="text-gray-600 mb-5">Description: {productData.description}</p>
                                <p className="text-gray-600 mb-5">Price: ${productData.price}</p>

                                <Link to={`/order/${id}`}>
                                    <button className='bg-blue-500 px-5 py-2 text-white'>Buy This Car</button>
                                </Link>
                            </div>

                        </div>
                    </article>
                </section >
            )
            }
        </div>
    );
};

export default UserDetails;
