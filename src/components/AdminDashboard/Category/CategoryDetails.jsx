import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CategoryDetails = () => {
    const { slug } = useParams(); // Extract slug from URL params
    const [category, setCategory] = useState(null);
    const [categoryProducts, setCategoryProducts] = useState([]);
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
        async function fetchCategory() {
            try {
                const response = await fetch(`/api/category/get-single-category/${slug}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch category');
                }
                const data = await response.json();
                setCategory(data.category);

                // Fetch products of this category
                const productsResponse = await fetch(`/api/product/get-all-category-products/${data.category._id}`);
                console.log(data.category._id)
                if (!productsResponse.ok) {
                    throw new Error('Failed to fetch category products');
                }
                const productsData = await productsResponse.json();
                setCategoryProducts(productsData.products);
                console.log(`all category products: ${categoryProducts}`)

            } catch (error) {
                console.error('Error:', error.message);
            }
        }

        fetchCategory();
    }, [slug]);

    return (
        <div className="  bg-gray-200 min-h-screen">
            <div className="bg-white rounded-lg shadow-2xl md:flex">
                <img src="https://i0.wp.com/www.insertcart.com/wp-content/uploads/2016/09/category.png" alt="Boat" className="rounded-t-lg md:w-1/3 md:rounded-l-lg md:rounded-t-none" />
                <div className="p-6">
                    <h2 className="mb-2 font-bold text:xl md:text-2xl text-orange-700">{category && category.name}</h2>
                    <div className="text-gray-600">

                        <p><span className="font-bold">Status:</span> {category && (category.status ? 'Active' : 'Inactive')}</p>
                        <p><span className="font-bold">Created At:</span> {category && formatDate(category.createdAt)}</p>
                        <p><span className="font-bold">Updated At:</span> {category && formatDate(category.updatedAt)}</p>
                    </div>
                </div>
            </div>



            <div className=" w-full bg-gray-50">

                <h2 className="text-2xl text-center font-bold mb-6">Total Products Under {category && category.name}: {categoryProducts?.length}</h2>

                <div className='flex w-full justify-evenly flex-wrap gap-5'>
                    {categoryProducts?.map((product) => (
                        <div key={product._id} className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-xl">
                            <a href="#">
                                <img src={product.url} alt="Product image" className="h-80 w-72 object-cover rounded-t-xl" />
                            </a>
                            <div className="px-4 py-3 w-72">
                                <span className="text-gray-400 mr-3 uppercase text-xs">Model {product.model}</span>
                                <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black cursor-auto my-3">$ {product.price}</p>

                                    {/* <div className="ml-auto">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                            </svg>
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>


        </div>
    );
};

export default CategoryDetails;
