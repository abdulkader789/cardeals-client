import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from React Router

const UserDetails = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams(); // Get the user ID from URL params

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`/api/auth/get-single-user/${id}`); // Use the user ID in the URL
                const data = await response.json();

                if (response.ok) {
                    setUser(data.user);
                } else {
                    console.error(data.message);
                }
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchUserDetails();
    }, [id]); // Re-run effect whenever ID changes

    return (
        <div className="p-10 bg-gray-200 min-h-screen">
            {user ? (
                <div className="bg-white rounded-lg shadow-2xl md:flex">
                    <img src="" alt="User Avatar" className="rounded-t-lg md:w-1/3 md:rounded-l-lg md:rounded-t-none" />
                    <div className="p-6">
                        <h2 className="mb-2 font-bold text-xl md:text-2xl ">{user.name}</h2>
                        <p className="">Email: {user.email}</p>
                        <p className="">Phone: {user.phone}</p>
                        <p>Address: {user.address}</p>

                    </div>
                </div>
            ) : (
                <p>Loading user details...</p>
            )}
        </div>
    );
};

export default UserDetails;
