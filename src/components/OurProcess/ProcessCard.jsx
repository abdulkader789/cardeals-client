import React from 'react';
import './OurProcess.css'
const ProcessCard = ({ data }) => {
    return (
        <div className="md:w-1/3 flex flex-col  justify-center items-center rounded-sm create">
            <div className="h-56 w-full flex justify-center items-center overflow-hidden  p-5">
                <img
                    src={data.imageUrl}
                    className="max-w-full max-h-full relative left-0 cursor-pointer transition-transform duration-300  transform hover:scale-110"
                    alt={data.heading}
                />
            </div>
            <div className="h-20 border-b border-gray-light bg-[#fff5f5]">
                <div className="font-medium text-base text-gray-darker text-center">{data.heading}</div>
                <p className="font-normal text-gray-dark px-5 text-sm mb-2">{data.description}</p>
            </div>
        </div>




    );
};

export default ProcessCard;
