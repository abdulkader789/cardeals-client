import React from "react";
import Marquee from "react-fast-marquee";
import { useBrand } from "../../../context/BrandContext";

const BrowseBrand = () => {
  const { brandData } = useBrand();

  return (
    <div className="p-5">
      <h1 className="my-10 montserrat-regular text-center text-2xl lg:text-4xl font-roboto tracking-tight text-gray-900">
        Available Brands
      </h1>
      <Marquee pauseOnHover={true} speed={100}>
        {brandData.map((brand, index) => (
          <div
            key={index}
            className="cursor-pointer hover:border w-32 lg:w-72 lg:h-60 mx-2 lg:mx-5"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrowseBrand;
