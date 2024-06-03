import { useEffect, useState } from "react";
import { useCategory } from "../context/CategoryContext";
import ProductCard from "../components/AdminDashboard/Product/ProductCard";
import LoadingBar from "../components/Loader/LoadingBar";
import { useCar } from "../context/CarContext";
import CarCard from "../components/Home/FeaturedCar/CarCard";

const CarPage = () => {
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
    { _id: 10, name: "$90,001 - $100,000", array: [90001, 100000] },
  ];

  const { categoryData } = useCategory();
  const { carData } = useCar();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  // const handleCategoryChange = (categoryId) => {
  //   setSelectedCategories((prevSelected) => {
  //     if (prevSelected.includes(categoryId)) {
  //       return prevSelected.filter((id) => id !== categoryId);
  //     } else {
  //       return [...prevSelected, categoryId];
  //     }
  //   });
  // };

  // const handlePriceRangeChange = (priceId) => {
  //   setSelectedPriceRange(priceId);
  // };

  // const applyFilters = () => {
  //   // Send the filter criteria to the backend
  //   const filters = {
  //     checked: selectedCategories,
  //     radio:
  //       selectedPriceRange !== null
  //         ? pricesArray[selectedPriceRange - 1].array
  //         : [],
  //   };

  //   fetch("/api/product/filter-products", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(filters),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle the response from the server
  //       console.log(data);
  //       // Update state with the filtered products
  //       setFilteredProducts(data.products);
  //     })
  //     .catch((error) => {
  //       console.error("Error applying filters:", error);
  //       // Handle error
  //     });
  // };

  // Call applyFilters whenever either categories or price range changes
  // useEffect(() => {
  //   applyFilters();
  // }, [selectedCategories, selectedPriceRange]);

  return (
    <div className="flex flex-col md:flex-row relative p-5">
      {/* Sidebar with categories */}
      <section className="h-full  md:w-1/4  md:sticky md:top-0">
        <div className="border border-gray-400 rounded-lg p-10">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="bg-white mb-5">
            {categoryData?.map((category) => (
              <li key={category._id}>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                    value={category._id}
                    checked={selectedCategories.includes(category._id)}
                    // onChange={() => handleCategoryChange(category._id)}
                  />
                  <span className="ml-2">{category.name}</span>
                </label>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-4">Price Range</h2>
          <ul>
            {pricesArray.map((price) => (
              <li key={price._id}>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-600"
                    name="priceRange"
                    value={price._id}
                    checked={selectedPriceRange === price._id}
                    // onChange={() => handlePriceRangeChange(price._id)}
                  />
                  <span className="ml-2">{price.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Main content area */}
      <section className=" lg:w-auto h-full px-10 ">
        <h2 className="text-xl lg:text-4xl poppins-bold text-center font-semibold py-10">
          View All Cars
        </h2>
        <div className="flex flex-wrap justify-center   mb-5">
          {carData.map((car, index) => (
            <CarCard key={index} data={car} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CarPage;
