import React from 'react';

const RestModelCard = ({ data }) => {
    return (
        <div className="md:w-1/4 flex flex-row mb-10 justify-center items-center rounded-sm border overflow-hidden hover-effect">

            <div className="h-20 w-2/3 flex justify-center items-center overflow-hidden  p-5">
                <img
                    src={data.imageUrl}
                    className="max-w-full max-h-full cursor-pointer transition-transform duration-300  transform hover:scale-110"
                    alt={data.model}
                />
            </div>
            <div className="h-10 w-1/3 border-b border-gray-light bg-[#fff5f5]">
                <p className="font-medium text-base text-gray-darker text-center uppercase text-red-600">{data.model}</p>

            </div>
        </div>
    );
};

export default RestModelCard;