import React from "react";
import "./FeaturedCar.css";

const CarCard = ({ data }) => {
  console.log("data ", data);
  return (
    <div className="h-auto w-full sm:w-[350px] flex flex-col m-2 lg:mb-10 justify-center items-center rounded-sm border ">
      <div className="h-60 w-full flex justify-center items-center overflow-hidden p-5 border-b-[1px]">
        <img
          src={data.image}
          className="max-w-full max-h-full cursor-pointer transition-transform duration-300 transform hover:scale-110"
          alt={data.name}
        />
      </div>
      <div className="p-4 w-full flex flex-col items-center justify-self-center">
        <div className="w-full mb-2">
          <h2 className=" montserrat-bold text-lg px-2 flex flex-col sm:flex-row justify-between">
            <span>
              {data.name} {data.model}
            </span>
            <span className=" text-red-700">${data.price}</span>
          </h2>
        </div>

        <div className="flex flex-wrap">
          {[
            "engine",
            "transmission",
            "fuelEfficiency",
            "range",
            "acceleration",
            "seatingCapacity",
          ].map((key) => (
            <div
              key={key}
              className="flex flex-col text-[12px] w-1/2 mb-2 px-2"
            >
              <span className=" mb-1 hidden sm:inline  uppercase montserrat-bold ">
                {key}:
              </span>
              <span className="roboto-regular">{data[key]}</span>
            </div>
          ))}
        </div>
        <button className="w-full bg-slate-800  text-white poppins-regular p-2 text-sm">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CarCard;
