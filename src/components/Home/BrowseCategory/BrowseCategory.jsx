import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import { useCategory } from "../../../context/CategoryContext";

const CategorySlider = () => {
  const { categoryData, setCategoryData } = useCategory();
  console.log("categories from browse category: ", categoryData);
  return (
    <Swiper
      // slidesPerView={4}
      spaceBetween={10}
      autoplay={{ delay: 2000 }}
      modules={[Autoplay]}
      breakpoints={{
        // when window width is >= 320px (1 slide)
        320: {
          slidesPerView: 2,
        },
        // when window width is >= 640px (2 slides)
        640: {
          slidesPerView: 2,
        },
        // when window width is >= 768px (3 slides)
        768: {
          slidesPerView: 3,
        },
        // when window width is >= 1024px (4 slides)
        // 1024: {
        //   slidesPerView: 4,
        // },
      }}
      className="mySwiper w-full"
    >
      {categoryData?.map((category, index) => (
        <SwiperSlide key={index} className="cursor-pointer border">
          <div className=" h-[250px] lg:h-[300px] ">
            <img
              src={category.image}
              alt={category.name}
              className=" h-[80%]"
            />
            <div className="h-[20%] flex items-center pl-5">
              <h2 className="uppercase text-center font-bold text-xl">
                {category.name}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const BrowseCategory = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center h-auto">
      <div className="w-full lg:w-1/4 bg-gray-100  h-[300px] flex justify-center items-center">
        <h1 className="  text-center text-4xl   text-gray-900 ">
          Browse By Category
        </h1>
      </div>
      <div className="w-full lg:w-3/4 px-0">
        <CategorySlider />
      </div>
    </div>
  );
};

export default BrowseCategory;
