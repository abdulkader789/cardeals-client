import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

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
      autoplay={{ delay: 2000, disableOnInteraction: false }}
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
        1024: {
          slidesPerView: 3,
        },
      }}
      className="mySwiper h-full w-full lg:w-[80%]"
    >
      {categoryData?.map((category, index) => (
        <SwiperSlide key={index} className="cursor-pointer">
          <div className="border relative h-full w-full lg:-auto lg:h-[450px]">
            <div className="h-full w-full ">
              <img
                src={category.image}
                alt={category.name}
                className="h-full object-cover w-full"
              />
            </div>

            <div className="absolute top-5 lg:top-auto lg:bottom-5 flex w-full items-center justify-center ">
              <h2 className="uppercase w-full  text-center font-bold work-sans text-md mr-5 text-white">
                {category.name}{" "}
                <FontAwesomeIcon icon={faCar} className="ml-2 text-white" />
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
    <div
      className="flex flex-col justify-start lg:justify-normal bg-cover h-[50vh] lg:h-screen lg:flex-row items-center "
      style={{
        backgroundImage: `url('https://www.honda.com.tr/assets/img/accord/home-banner.png')`,
      }}
    >
      <div
        className="w-full my-5 flex-col lg:my-0 bg-black lg:w-[40%] h-auto lg:h-full flex justify-center opacity-70  items-center "
        style={{
          clipPath: "polygon(0 0%, 100% 0, 85% 100%, 0% 100%)",
        }}
      >
        <h1 className=" montserrat-regular text-center text-xl lg:text-4xl mb-3 lg:mb-5   text-white">
          Browse By Category
        </h1>
        <button className="roboto-regular uppercase text-sm lg:tex-lg border bg-gray-800 bg-opacity-60 shadow-md border-gray-400 text-white py-2 lg:py-3 px-6 lg:px-20 hover:bg-black hover:bg-opacity-100">
          Book Test Drive
        </button>
      </div>

      <div className="w-full h-[35vh] mb-3 lg:h-auto lg:w-[60%] flex justify-center items-center">
        <CategorySlider />
      </div>
    </div>
  );
};

export default BrowseCategory;
