import React from 'react';
import './CarModels.css'
const InitialModelCard = ({ data }) => {
    return (
        <div className="md:w-1/5 flex flex-col mb-10 justify-center items-center rounded-sm border hover-effect overflow-hidden">

            <div className="h-40 w-full flex justify-center items-center overflow-hidden  p-5">
                <img
                    src={data.imageUrl}
                    className="max-w-full max-h-full cursor-pointer transition-transform duration-300  transform hover:scale-110"
                    alt={data.model}
                />
            </div>
            <div className="h-10 border-b border-gray-light bg-[#fff5f5]">
                <p className="font-medium text-base text-gray-darker text-center uppercase">{data.model}</p>

            </div>
        </div>
    );
};

export default InitialModelCard;