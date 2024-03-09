import React from 'react';

const CategoryCard = ({ data }) => {
    return (
        <div className="flex flex-col justify-center items-center rounded-sm border hover-effect overflow-hidden">

            <div className="h-[60vh] w-full flex justify-center items-center overflow-hidden  p-5">
                <img
                    src={data.imageUrl}
                    className="max-w-full max-h-full cursor-pointer transition-transform duration-300  transform hover:scale-110"
                    alt={data.category}
                />
            </div>
            <div className="h-10 border-b border-gray-light bg-[#fff5f5]">
                <p className="font-medium text-base text-gray-darker text-center uppercase">{data.category}</p>

            </div>
        </div>
    );
};

export default CategoryCard;