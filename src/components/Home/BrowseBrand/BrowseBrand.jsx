import React from "react";
import Marquee from "react-fast-marquee";
import { useBrand } from "../../../context/BrandContext";

const BrowseBrand = () => {
  const { brandData } = useBrand();

  return (
    <div className="py-5 bg-gray-100">
      <h1 className="mt-10 montserrat-bold text-center text-2xl lg:text-4xl font-roboto tracking-tight text-gray-900">
        Explore Available Premium Brands
      </h1>
      <div className="py-20">
        <Marquee pauseOnHover={true} speed={100}>
          {brandData.map((brand, index) => (
            <div
              key={index}
              className="cursor-pointer w-32 lg:w-72 lg:h-60 mx-2 lg:mx-5 "
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BrowseBrand;
