import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingBar from '../components/Loader/LoadingBar';
import { useCart } from '../context/CartContext';


const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/product/get-single-product/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product data');
                }
                const data = await response.json();
                setProduct(data.product);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleBuy = () => {
        if (product) {
            addToCart(product);
            navigate(`/order/${id}`);
        }
    };

    if (!product) {
        return <LoadingBar />;
    }

    return (
        <div >
            <div className="container px-5 py-24 mx-auto" >
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.url} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" >
                        <h2 className="text-sm title-font text-gray-500 tracking-widest" >ON SALE</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1" >{product.name} {product.model}</h1>

                        <p className="leading-relaxed">{product.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">


                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                            <button onClick={handleBuy} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
