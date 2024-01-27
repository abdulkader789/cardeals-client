import { useEffect, useState } from "react";
import { useCategory } from "../context/CategoryContext";
import { useProduct } from "../context/ProductContext";
import ProductCard from "../components/AdminDashboard/Product/ProductCard";
import LoadingBar from "../components/Loader/LoadingBar";

const Shop = () => {
    const pricesArray = [
        { _id: 1, name: "$0 - $10,000", array: [0, 10000] },
        { _id: 2, name: "$10,001 - $20,000", array: [10001, 20000] },
        { _id: 3, name: "$20,001 - $30,000", array: [20001, 30000] },
        { _id: 4, name: "$30,001 - $40,000", array: [30001, 40000] },
        { _id: 5, name: "$40,001 - $50,000", array: [40001, 50000] },
        { _id: 6, name: "$50,001 - $60,000", array: [50001, 60000] },
        { _id: 7, name: "$60,001 - $70,000", array: [60001, 70000] },
        { _id: 8, name: "$70,001 - $80,000", array: [70001, 80000] },
        { _id: 9, name: "$80,001 - $90,000", array: [80001, 90000] },
        { _id: 10, name: "$90,001 - $100,000", array: [90001, 100000] }
    ];

    const { categoryData } = useCategory();
    const { productData } = useProduct();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleCategoryChange = (categoryId) => {
        setSelectedCategories((prevSelected) => {
            if (prevSelected.includes(categoryId)) {
                return prevSelected.filter((id) => id !== categoryId);
            } else {
                return [...prevSelected, categoryId];
            }
        });
    };

    const handlePriceRangeChange = (priceId) => {
        setSelectedPriceRange(priceId);
    };

    const applyFilters = () => {
        // Send the filter criteria to the backend
        const filters = {
            checked: selectedCategories,
            radio: selectedPriceRange !== null ? pricesArray[selectedPriceRange - 1].array : [],
        };

        fetch('/api/product/filter-products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filters),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server
                console.log(data);
                // Update state with the filtered products
                setFilteredProducts(data.products);
            })
            .catch((error) => {
                console.error('Error applying filters:', error);
                // Handle error
            });
    };

    // Call applyFilters whenever either categories or price range changes
    useEffect(() => {
        applyFilters();
    }, [selectedCategories, selectedPriceRange]);



    return (
        <div className="flex relative ">
            {/* Sidebar with categories */}
            <section className="h-fit  w-1/4 p-10  sticky top-0">
                <div className="border border-gray-400 rounded-lg p-10">
                    <h2 className="text-xl font-semibold mb-4">Categories</h2>
                    <ul className="bg-white mb-5">
                        {categoryData?.map(category => (
                            <li key={category._id}>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-indigo-600"
                                        value={category._id}
                                        checked={selectedCategories.includes(category._id)}
                                        onChange={() => handleCategoryChange(category._id)}
                                    />
                                    <span className="ml-2">{category.name}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-xl font-semibold mb-4">Price Range</h2>
                    <ul>
                        {pricesArray.map(price => (
                            <li key={price._id}>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio h-5 w-5 text-indigo-600"
                                        name="priceRange"
                                        value={price._id}
                                        checked={selectedPriceRange === price._id}
                                        onChange={() => handlePriceRangeChange(price._id)}
                                    />
                                    <span className="ml-2">{price.name}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            {/* Main content area */}
            <section className="w-3/4 h-full px-10 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4">Products</h2>
                <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard product={product} key={product._id} />
                        ))
                    ) : (
                        <p>No products found in the selected category or price range.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Shop;
