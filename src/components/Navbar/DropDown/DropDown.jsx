import React, { useState } from 'react';

const categories = [
    {
        name: 'Sedan',
        models: ['Corolla', 'Civic', 'Accord', 'Camry', 'Altima']
    },
    {
        name: 'SUV',
        models: ['CR-V', 'Rogue', 'Escape', 'RAV4', 'Tucson']
    },
    {
        name: 'Hatchback',
        models: ['Golf', 'Fiesta', 'Civic Hatchback', 'Impreza', 'Yaris']
    },
    {
        name: 'Convertible',
        models: ['Mustang Convertible', 'Camaro Convertible', 'MX-5 Miata', 'F-Type Convertible', 'BMW Z4']
    },
    {
        name: 'Coupe',
        models: ['Civic Coupe', 'Mustang Coupe', '370Z', 'Challenger', 'Camaro Coupe']
    },
    {
        name: 'Minivan',
        models: ['Sienna', 'Odyssey', 'Pacifica', 'Grand Caravan', 'Sedona']
    },
    {
        name: 'Truck',
        models: ['F-150', 'Silverado', 'Ram 1500', 'Tundra', 'Titan']
    },
    {
        name: 'Electric',
        models: ['Model S', 'Bolt EV', 'Leaf', 'Kona Electric', 'Ioniq Electric']
    },

];


const DropDown = () => {
    const numCategories = categories.length;
    const containerWidth = numCategories >= 4 ? '80vw' : `${20 * numCategories}vw`;
    const numColums = numCategories >= 4 ? 4 : numCategories;
    const [isOpen, setIsOpen] = useState(Array(numCategories).fill(false)); // Initialize isOpen state for each category

    const toggleDropdown = (index) => {
        const newIsOpen = isOpen.map((value, i) => i === index ? !value : false); // Toggle the clicked dropdown and close others
        setIsOpen(newIsOpen);
    };

    return (
        <div className="flex justify-center">
            <div className={`grid min-h-screen md:h-[90vh] grid-cols-1 w-full md:w-[${containerWidth}] md:grid-cols-${numColums} border border-black`}>
                {categories.map((category, index) => (
                    <div key={index} className="flex border border-blue-600 flex-col items-center">
                        <h2
                            className="text-xl font-bold mb-2 cursor-pointer"
                            onClick={() => toggleDropdown(index)}
                        >
                            {category.name}
                        </h2>
                        <ul
                            className={`overflow-hidden grid transition-all duration-300 ease-in-out ${isOpen[index] ? 'grid-rows-[1fr]  ' : 'grid-rows-[0fr] '
                                }`}
                        >
                            <div className="overflow-hidden flex flex-col">
                                {category.models.map((model, modelIndex) => (
                                    <li key={modelIndex}>{model}</li>
                                ))}
                            </div>
                        </ul>
                    </div>
                ))
                }
            </div >
        </div >
    );
};

export default DropDown;
