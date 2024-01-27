import ImageSlideshow from "../ImageSlideshow";
import '../../styles/Home.css'
import { useProduct } from "../../context/ProductContext";
import { useEffect, useState } from "react";
import { useSearch } from "../../context/SearchContext";
import { Link } from "react-router-dom";
export const Header = () => {
    const { searchQuery, setSearchQuery } = useSearch()
    const { productData } = useProduct();





    const handleProductSelect = (event) => {
        const selectedProductId = event.target.value; // Get the selected product ID
        const selectedProduct = productData.find(product => product._id === selectedProductId); // Find the selected product object by ID

        setSearchQuery(prevSearchQuery => ({
            ...prevSearchQuery,
            _id: selectedProduct._id,
            name: selectedProduct.name,
            model: selectedProduct.model
        }));
    };



    useEffect(() => {
        console.log('Selected product name:', searchQuery.name, searchQuery._id);
    }, [searchQuery.name, searchQuery._id]);


    return (
        <section className="text-gray-700  mx-12">
            <main className="header-bg">
                <div className="h-[300px] container mx-auto flex  md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start px-10 md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="capitalize  sm:text-4xl text-white text-4xl mb-4 font-extrabold font-roboto">it's time to
                            <br className="hidden lg:inline-block" />buy your dream ride
                        </h1>
                        <p className="mb-8 text-white leading-relaxed font-roboto">Discover a wide range of vehicles and unbeatable deals. From sleek sedans to powerful SUVs, find your perfect ride at Car Deals. Our curated selection and exclusive offers make car shopping a breeze.
                        </p>
                        <div className="flex justify-center">
                            <button className="inline-flex capitalize font-bold text-black bg-white border-0 py-2 px-6 focus:outline-none hover:text-white hover:bg-indigo-600 rounded text-lg">about cardeals</button>

                        </div>
                    </div>
                    <div className="h-full  md:w-1/2 w-1/2">
                        <img src="https://media.istockphoto.com/id/1167991014/photo/modern-blue-sports-car-in-a-gentle-light-on-black-background.jpg?s=612x612&w=0&k=20&c=szCbC--4de-XfIzSy9Q6vUTknUP9Are6SRRbBo74d0o=" className="h-full" />

                    </div>
                </div>
            </main>

            {/* Search box */}
            <div className="flex justify-center items-center h-28 p-7 rounded-sm shadow-sm bg-gray-200">
                <div className="w-1/2 h-full">
                    <select
                        onChange={handleProductSelect}
                        id="product"
                        className="w-full font-roboto h-full border border-gray-300"
                    >
                        <option value="" disabled selected>Select Product</option>
                        {productData?.map((product) => (
                            <option key={product._id} value={product._id}>
                                {product.name} {product.model}
                            </option>
                        ))}
                    </select>

                </div>
                <div className="w-1/2 h-full">
                    <Link to={`/shop/product/${searchQuery._id}`}>
                        <button className="w-full font-roboto capitalize h-full px-4 py-2 bg-gray-100 hover:text-white hover:bg-violet-600">
                            Search
                        </button>
                    </Link>
                </div>
            </div>



        </section>
    );
};