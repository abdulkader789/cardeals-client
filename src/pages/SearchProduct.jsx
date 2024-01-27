import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import { useProduct } from "../context/ProductContext";
import ProductCard from "../components/AdminDashboard/Product/ProductCard";

const SearchProduct = () => {
    const { searchQuery, setSearchQuery } = useSearch();
    const { productData } = useProduct();
    const [selectedProductId, setSelectedProductId] = useState("");
    const [searchProduct, setSearchProduct] = useState(null)
    const fetchProductData = async () => {
        try {
            const response = await fetch(`/api/product/get-single-product/${selectedProductId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product data');
            }
            const data = await response.json();
            // Handle the fetched product data as needed
            console.log('Product data:', data);
            setSearchProduct(data.product)
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    const handleProductSelect = (event) => {
        setSelectedProductId(event.target.value);
    };

    const handleSearchClick = () => {
        fetchProductData();
    };

    return (
        <div>
            {/* Search Box */}
            <div className="flex justify-center items-center h-28 p-7 rounded-sm shadow-sm bg-gray-200">
                <div className="w-1/2 h-full">
                    <select
                        onChange={handleProductSelect}
                        value={selectedProductId}
                        className="w-full font-roboto h-full border border-gray-300"
                    >
                        <option value="" disabled>Select Product</option>
                        {productData?.map((product) => (
                            <option key={product._id} value={product._id}>
                                {product.name} {product.model}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="w-1/2 h-full">
                    <button
                        onClick={handleSearchClick}
                        className="w-full font-roboto capitalize h-full px-4 py-2 bg-gray-100 hover:text-white hover:bg-violet-600">
                        Search
                    </button>
                </div>
            </div>
            {/* Main Content */}
            <section>
                {searchProduct && <ProductCard product={searchProduct} />}
            </section>
        </div>
    );
};

export default SearchProduct;
