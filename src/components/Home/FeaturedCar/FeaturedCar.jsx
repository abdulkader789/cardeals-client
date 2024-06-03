import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"; // Import the right arrow icon
import CarCard from "./CarCard";
import { useCar } from "../../../context/CarContext";

const FeaturedCar = () => {
  const { carData } = useCar();

  return (
    <div className="">
      <header>
        <h1 className="my-10 montserrat-bold text-center text-2xl lg:text-4xl font-roboto tracking-tight text-gray-900">
          Featured Cars
        </h1>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:w-[90%] 2xl:mx-auto place-items-center place-content-center">
        {carData.slice(0, 8).map((car, index) => (
          <CarCard key={index} data={car} />
        ))}
      </section>
      <div className="flex items-center justify-center">
        <button className="flex items-center justify-center mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Show More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedCar;
