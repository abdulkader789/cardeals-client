import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

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
        className="flex items-center cursor-pointer justify-center bg-transparent   p-4"
        onClick={handleExpand}
      >
        <FontAwesomeIcon
          className="text-white absolute right-2"
          icon={faSearch}
        />
      </div>
      {expanded && (
        <div
          className="fixed top-0 left-0 w-full bg-blue-500 shadow-lg z-20 py-4"
          ref={ref}
          onClick={handleInnerClick}
        >
          <div className="absolute top-0 right-0 p-2 ">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={handleExpand}
              className="cursor-pointer text-black"
            />
          </div>
          <input
            type="text"
            placeholder="Search"
            autoFocus
            className="block mx-auto border border-gray-300 rounded px-4 py-2 mb-4"
          />
          {/* Select options */}
          <div className="flex justify-between px-4">
            <select className="border border-gray-300 rounded px-4 py-2 mr-2">
              {/* Brands */}
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <select className="border border-gray-300 rounded px-4 py-2 mr-2">
              {/* Models */}
              <option value="model1">Model 1</option>
              <option value="model2">Model 2</option>
              <option value="model3">Model 3</option>
              <option value="model4">Model 4</option>
            </select>
            {/* Other select field or car search */}
            <select className="border border-gray-300 rounded px-4 py-2">
              {/* Other select field or car search */}
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchCar;
