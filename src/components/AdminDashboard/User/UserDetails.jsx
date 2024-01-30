import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const [userPhoto, setUserPhoto] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userResponse = await fetch(`/api/auth/get-single-user/${id}`);
                const data = await userResponse.json();
                setUserData(data.user);

                // If the user has a photo available, fetch it
                if (userData.user && userData.user.id) {
                    const photoResponse = await fetch(`/api/auth/get-user-photo/${id}`);
                    const photoData = await photoResponse.json();
                    setUserPhoto(photoData);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            {userData && (

                < section className="container mx-auto p-10 md:p-20 antialiased " >
                    <article
                        className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
                        <img className="w-full max-h-[400px] object-cover md:w-52" src={`/api/auth/get-user-photo/${id}`} alt="" />
                        <div className="">
                            <div className="p-5 pb-10">
                                <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                                    Name: {userData.name}
                                </h1>
                                <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                                    Email: {userData.email}
                                </p>
                                <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                                    Phone: {userData.phone}
                                </p>
                            </div>

                        </div>
                    </article>
                </section >
            )
            }
        </div>
    );
};

export default UserDetails;
