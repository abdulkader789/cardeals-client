import { useState, useEffect } from 'react';
import ProductCard from '../Dashboard/Product/ProductCard';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [categories, setCategories] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isSelected, setSelected] = useState(false)
    const [displayProducts, setDisplayProducts] = useState([])
    useEffect(() => {
        // Fetch categories
        const fetchCategories = async () => {
            try {
                const response = await fetch("/api/category/get-all-categories");
                if (response.ok) {
                    const data = await response.json();
                    setCategories(data.categories);
                } else {
                    console.error("Failed to fetch categories");
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        const getAllProducts = async () => {
            try {
                const response = await fetch("/api/product/get-all-products", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                if (response.ok) {
                    const data = await response.json();

                    setAllProducts(data.products);
                    setFilteredProducts(data.products);

                    setDisplayProducts(data.products.slice(0, 6))
                }
            } catch (error) {
                console.log("Error during Products:", error);
            }
        };

        fetchCategories();
        getAllProducts();
    }, []);

    const handleCategoryClick = (categoryId) => {

        if (categoryId === 'all') {
            // Show only the first 9 products when 'All Products' is clicked
            setFilteredProducts(displayProducts);
            setSelected(false)
        } else {
            // Filter products by category
            setSelected(true)
            const filtered = allProducts.filter(product => product.category === categoryId);
            setFilteredProducts(filtered);
        }
    };


    return (
        <div className='p-10'>
            <h1 className=" mb-10 text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block text-indigo-600 xl:inline capitalize">popular categories</span>
            </h1>
            <ul className='flex justify-center flex-wrap'>
                <li className='font-roboto cursor-pointer bg-gray-200 h-16 flex items-center justify-center w-40 border-[1px]' onClick={() => handleCategoryClick('all')}>All Products</li>
                {categories.map(category => (
                    <li className='font-roboto cursor-pointer hover:text-white hover:bg-violet-400 h-16 flex items-center justify-center w-40 border-[1px]' key={category.id} onClick={() => handleCategoryClick(category._id)}>{category.name}</li>
                ))}

            </ul>

            {
                isSelected ?
                    <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                        {filteredProducts.map(product => (
                            <ProductCard product={product} key={product._id} />
                        ))}
                    </section> :
                    <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                        {displayProducts.map(product => (
                            <ProductCard product={product} key={product._id} />
                        ))}

                    </section>
            }
            <div className='flex justify-center w-full pt-5'>
                <button className='w-1/3 font-roboto py-3 bg-violet-700 text-white'>
                    <Link to='/shop'>See More</Link></button>
            </div>

        </div>
    );
};

export default Hero;
