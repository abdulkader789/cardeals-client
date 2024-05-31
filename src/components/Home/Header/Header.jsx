import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

export const Header = () => {
  const items = [
    {
      url: "https://cdn.motor1.com/images/mgl/G33JZA/s3/bentley-mulliner-batur.jpg",
      model: "Bentley Mulliner Bacalar",
      price: "$XXX,XXX",
      redirect: "/bentley-bacalar",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      url: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds",
      model: "Rolls-Royce Phantom",
      price: "$XXX,XXX",
      redirect: "/rolls-royce-phantom",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="relative w-full">
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
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[50vh] lg:h-screen">
              <img
                src={item.url}
                alt={` ${index + 1}`}
                className="w-full h-full lg:object-cover "
              />
              <div className="absolute lg:left-20 top-1/2 transform -translate-y-1/2 text-white p-6 ">
                <h2 className="text-3xl lg:text-5xl font-bold">{item.model}</h2>
                <div className="flex items-center">
                  <p className="text-base lg:text-lg mr-2">{item.price}</p>
                </div>
                <p className="text-sm lg:text-base">{item.description}</p>
                <div className="mt-4 flex  lg:flex-row lg:gap-4">
                  <button
                    href={item.redirect}
                    className="bg-orange-500 text-sm text-white py-2 px-6 lg:py-4 lg:px-12 rounded-full mr-2 hover:bg-white hover:text-black transition duration-300"
                  >
                    View Details
                  </button>
                  <button className="bg-transparent text-sm border border-white text-white py-2 px-6 lg:py-4 lg:px-12 rounded-full">
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
