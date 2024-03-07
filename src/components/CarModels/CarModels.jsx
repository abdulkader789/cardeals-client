import React, { useState } from 'react';
import InitialModelCard from './InitialModelCard';
import RestModelCard from './RestModelCard';

const CarModels = () => {
    const initialVisibleModels = 4;
    const [visibleModels, setVisibleModels] = useState(initialVisibleModels);
    const [showMore, setShowMore] = useState(false);

    const carModels = [
        { model: "Abarth", imageUrl: "https://www.abarth.com/content/dam/abarth/home/revamp/new/models/595-450x270.png" },
        { model: "Alfa Romeo", imageUrl: "https://www.alfaromeo.co.uk/content/dam/alfa/cross/homepage/trim/Trim-Tonale_Speciale.png" },
        { model: "Alpine", imageUrl: "https://www.pngitem.com/pimgs/m/669-6695336_2020-jeep-grand-cherokee-srt-jeep-grand-cherokee.png" },
        { model: "Aston Martin", imageUrl: "https://i.pinimg.com/originals/f5/60/60/f560606df1586d97fb568d3052ef0715.png" },
        { model: "Bentley", imageUrl: "URL_TO_Bentley_IMAGE" },
        { model: "BMW", imageUrl: "URL_TO_BMW_IMAGE" },
        { model: "Citroen", imageUrl: "URL_TO_Citroen_IMAGE" },
        { model: "Ferrari", imageUrl: "URL_TO_Ferrari_IMAGE" },
        { model: "Fiat", imageUrl: "URL_TO_Fiat_IMAGE" },
        { model: "Ford", imageUrl: "URL_TO_Ford_IMAGE" },
        { model: "Honda", imageUrl: "URL_TO_Honda_IMAGE" },
        { model: "Hyundai", imageUrl: "URL_TO_Hyundai_IMAGE" },
        { model: "Jaguar", imageUrl: "URL_TO_Jaguar_IMAGE" },
        { model: "Jeep", imageUrl: "URL_TO_Jeep_IMAGE" },
        { model: "Kia", imageUrl: "URL_TO_Kia_IMAGE" }
    ];

    const toggleShowMore = () => {
        setShowMore(!showMore);
        setVisibleModels(showMore ? initialVisibleModels : carModels.length);
    };

    return (
        <div>
            <header>
                <h1 className="mb-10 text-center text-4xl font-roboto tracking-tight text-gray-900">
                    <span className="block xl:inline capitalize">Browse By Models</span>
                </h1>
            </header>
            <section className="flex flex-wrap justify-center space-x-4">
                {carModels.slice(0, initialVisibleModels).map((car, index) => (
                    <InitialModelCard key={index} data={car} />
                ))}
            </section>
            {carModels.length > initialVisibleModels && (
                <div className="show-more my-4 text-center ">
                    <button
                        className="px-10 py-3 rounded-full bg-blue-500 text-white  hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        onClick={toggleShowMore}
                    >
                        {showMore ? "Show less" : "Show more"}
                    </button>
                </div>
            )}

            {showMore && (
                <section className="flex flex-wrap justify-center space-x-4">
                    {carModels.slice(initialVisibleModels).map((car, index) => (
                        <RestModelCard key={index} data={car} />
                    ))}
                </section>
            )}
        </div>
    );
};

export default CarModels;
