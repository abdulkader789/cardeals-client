import React from 'react';
import ProcessCard from './ProcessCard';

const OurProcess = () => {
    const processData = [
        {
            imageUrl: "https://media.istockphoto.com/id/990474852/vector/search-car-sign-vector-magnifying-glass-with-car-search-car-symbol-looking-for-transport.jpg?s=612x612&w=0&k=20&c=gzp8c_GoJBj8l0Xl3mu7fwSJbiWXXF2Jf2aa-iR4W18=",
            heading: "Choose A Car",
            description: "View our range of cars, find your perfect car for the coming days."
        },
        {
            imageUrl: "https://w7.pngwing.com/pngs/105/693/png-transparent-computer-icons-android-contact-blue-text-rectangle-thumbnail.png",
            heading: "Come In Contact",
            description: "Our advisor team is ready to help you with the booking process or any questions."
        },
        {
            imageUrl: "https://static.vecteezy.com/system/resources/previews/003/016/911/original/ride-time-icon-with-a-car-and-clock-vector.jpg",
            heading: "Enjoy Driving",
            description: "Receive the key and enjoy your car. We treat all our cars with respect."
        }
    ];

    return (
        <section>
            <header>
                <h1 className=" mb-10 text-center text-4xl font-roboto tracking-tight text-gray-900 ">
                    <span className="block  xl:inline capitalize">Cardeals Process</span>
                </h1>
            </header>
            <div className='flex flex-col md:flex-row md:space-x-5 px-5 '>

                {processData.map((data, index) => (
                    <ProcessCard key={index} data={data} />
                ))}


            </div>
        </section >
    );
};

export default OurProcess;
