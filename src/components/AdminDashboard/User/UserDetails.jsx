import React from 'react';

const UserDetails = () => {
    return (


        <div className="p-20 bg-orange-200">

            <div className="bg-white rounded-lg shadow-2xl md:flex">
                <img src="https://images.unsplash.com/photo-1550757749-a80d6841ba97" alt="Boat" className="rounded-t-lg 
     md:w-1/3 md:rounded-l-lg md:rounded-t-none"/>

                <div className="p-6">
                    <h2 className="mb-2 font-bold text:xl md:text-2xl text-orange-700">Horizontal Card</h2>
                    <p className="text-orange-700">Look me go sideways</p>
                </div>
            </div>
        </div>

    );
};

export default UserDetails;