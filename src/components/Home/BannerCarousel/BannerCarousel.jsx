import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

export const BannerCarousel = () => {
  const sliderData = [
    {
      imageUrl:
        "https://cdn.motor1.com/images/mgl/G33JZA/s3/bentley-mulliner-batur.jpg",
      heading: "Discover the Sports Car",
      subheading: "Ultimate Comfort and  Performance",
      subtitle:
        "Experience the ultimate driving pleasure with top-notch performance and cutting-edge.",
    },
    {
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds",
      heading: "Luxury Meets Performance",
      subheading: "Luxury Sedan of the Year",
      subtitle:
        "Indulge in the perfect blend of luxury and performance with our latest sedan.",
    },
    {
      imageUrl:
        "https://cdn.motor1.com/images/mgl/G33JZA/s3/bentley-mulliner-batur.jpg",
      heading: "Adventure Our SUV Range",
      subheading: "Rugged and Versatile SUVs",
      subtitle:
        "Conquer any terrain with our rugged and versatile SUVs, designed for the adventurer in you.",
    },
    {
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds",
      heading: "Eco-Friendly and Efficient",
      subheading: "Join the Green Revolution",
      subtitle:
        "Join the green revolution with our eco-friendly electric vehicles, offering zero emissions.",
    },
    {
      imageUrl:
        "https://cdn.motor1.com/images/mgl/G33JZA/s3/bentley-mulliner-batur.jpg",
      heading: "Compact and Convenient",
      subheading: "Designed for Urban Living",
      subtitle:
        "Navigate the city with ease in our compact cars, designed for urban living.",
    },
    {
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds",
      heading: "Unleash Power",
      subheading: "Performance Sports Models",
      subtitle:
        "Feel the raw power and acceleration with our high-performance sports models.",
    },
  ];

  return (
    <section className="relative w-full ">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper h-full w-full"
        simulateTouch={false}
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[50vh] lg:h-screen">
              <img
                src={item.imageUrl}
                alt={` ${index + 1}`}
                className="w-full h-full lg:object-cover "
              />
              <div className="absolute  left-1/2 transform flex flex-col justify-center -translate-x-1/2 bottom-0  bg-gray-600 w-full h-full text-white bg-opacity-50 px-20 ">
                <h2
                  className="text-3xl lg:text-5xl text-center font-bold mb-2 playfair-regular"
                  style={{ lineHeight: "1.2" }}
                >
                  {item.heading} <br />
                  {item.subheading}
                </h2>

                <p className="text-sm lg:text-xl work-sans text-center">
                  {item.subtitle}
                </p>
                <div className="mt-5 flex justify-center  lg:flex-row lg:gap-4">
                  {/* <button
                    href={item.redirect}
                    className="bg-orange-500 text-sm text-white py-2 px-6 lg:py-4 lg:px-12 rounded-full mr-2 hover:bg-white hover:text-black transition duration-300"
                  >
                    View Details
                  </button> */}
                  <button className="playfair-regular text-[18px] border bg-gray-800 bg-opacity-60 shadow-md border-gray-400 text-white py-2 px-6 lg:py-4 lg:px-20">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
