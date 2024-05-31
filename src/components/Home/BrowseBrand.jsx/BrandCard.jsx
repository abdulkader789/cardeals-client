import React from "react";
import "./BrandCard.css";
const BrandCard = ({ data }) => {
  return (
    <div className="h-[200px] lg:w-[350px] flex flex-col m-2 lg:mb-10 justify-center items-center rounded-sm border hover-effect ">
      <div className="h-40 w-full flex justify-center items-center overflow-hidden  p-5">
        <img
          src={data.imageUrl}
          className="max-w-full max-h-full cursor-pointer transition-transform duration-300  transform hover:scale-110"
          alt={data.model}
        />
      </div>
      <div className="h-10 flex items-center w-1/2 justify-center ">
        <h2 className="font-medium work-sans text-base text-gray-darker text-center uppercase">
          {data.model}
        </h2>
      </div>
    </div>
  );
};

export default BrandCard;
