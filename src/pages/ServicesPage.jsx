import React from "react";
import Footer from "../components/Footer/Footer";

const ServicesPage = () => {
  // Array of objects representing CarDeals-related services
  const carDealsServices = [
    {
      title: "Car Listings",
      description:
        "Browse through our extensive collection of car listings from various brands and models.",
    },
    {
      title: "Test Drives",
      description:
        "Schedule a test drive for any car you're interested in and experience it firsthand.",
    },
    {
      title: "Financing Options",
      description:
        "Explore flexible financing options tailored to your needs and budget.",
    },
    {
      title: "Vehicle Inspections",
      description:
        "Ensure peace of mind with thorough vehicle inspections before making a purchase.",
    },
  ];

  return (
    <div>
      <section className="min-h-screen bg-gray-900 text-center py-20 px-8 xl:px-0 flex flex-col ">
        <span className="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">
          what we're offering{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-indigo-600 ml-3 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
        <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
          Services We Offer
        </h1>
        <div className=" text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {/* Mapping over the carDealsServices array to display service cards */}
          {carDealsServices.map((service, index) => (
            <div key={index} className=" bg-gray-800 p-10 relative">
              <div className="relative ">
                <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
                  {service.title}
                </h2>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
