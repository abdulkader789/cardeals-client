import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const SearchCar = () => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click target is outside of the search component
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleInnerClick = (event) => {
    // Prevent closing when clicking inside the expanded area
    event.stopPropagation();
  };

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer justify-center bg-transparent   p-4"
        onClick={handleExpand}
      >
        <FontAwesomeIcon
          className="text-white absolute right-2"
          icon={faSearch}
        />
      </div>
      {expanded && (
        <div
          className={`fixed top-0 left-0 w-full bg-gray-100 shadow-lg z-20 py-4 overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? "h-screen" : "h-0"
          }`}
          ref={ref}
          onClick={handleInnerClick}
        >
          <div className="absolute top-1 lg:top-5 right-10 p-2 ">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={handleExpand}
              className="cursor-pointer text-2xl lg:tex-4xl text-black"
            />
          </div>

          <div className="relative flex justify-evenly px-4 shadow-lg rounded-full  top-8 py-5 w-full lg:w-[80%] mx-auto montserrat-regular text-sm">
            <div className="relative flex justify-center items-center">
              <label htmlFor="brand" className="block lg:mr-5 text-gray-700">
                Brand
              </label>
              <select
                id="brand"
                className=" bg-transparent outline-none border-gray-300 rounded w-32 "
                defaultValue="all"
              >
                <option value="all">All Brands</option>
                {/* Brands */}
                <option value="volvo">Volvo - $30,000 - High</option>
                <option value="saab">Saab - $25,000 - Medium</option>
                <option value="mercedes">Mercedes - $40,000 - High</option>
                <option value="audi">Audi - $35,000 - Medium</option>
              </select>
            </div>
            <div className="relative flex justify-center items-center ">
              <label htmlFor="model" className="block lg:mr-5  text-gray-700 ">
                Model
              </label>
              <select
                id="model"
                className=" bg-transparent outline-none border-gray-300 rounded w-32 "
                defaultValue="all"
              >
                <option value="all">All Models</option>
                {/* Models */}
                <option value="model1">Model 1</option>
                <option value="model2">Model 2 - $28,000 - Medium</option>
                <option value="model3">Model 3 -</option>
                <option value="model4">Model 4 - </option>
              </select>
            </div>
            <div className="relative flex justify-center items-center ">
              <label htmlFor="price" className="block lg:mr-5 text-gray-700 ">
                Price
              </label>
              <select
                id="price"
                className=" bg-transparent outline-none border-gray-300 rounded w-32"
                defaultValue="0"
              >
                <option value="0">0 to All</option>
                {/* Other select field or car search */}
                <option value="option1">$35,000 - High</option>
                <option value="option2">$38,000 - Medium</option>
                <option value="option3">$42,000 - Medium</option>
              </select>
            </div>
            <div className="relative flex justify-center items-center ">
              <button className="flex items-center justify-center bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 lg:py-4 lg:px-8 rounded-full">
                Find Car
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchCar;
