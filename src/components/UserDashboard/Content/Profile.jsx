import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';


const Profile = () => {
    const { authData } = useAuth();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`/api/auth/get-single-user/${authData.user._id}`, {
                    headers: {
                        Authorization: `Bearer ${authData.token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data.user);
                } else {
                    // Handle error response
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [authData]);

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-semibold mb-5">User Profile</h1>
            {userData ? (
                <div className="bg-white shadow-md rounded-md p-8">
                    <img src={`/api/auth/get-user-photo/${userData._id}`} />
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name:</label>
                        <p className="mt-1 text-lg font-semibold text-gray-900">{userData.name}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                        <p className="mt-1 text-lg font-semibold text-gray-900">{userData.email}</p>
                    </div>
                    {/* Add more user details here */}
                </div>
            ) : (
                <p>Loading user profile...</p>
            )}
        </div>
    );
};

export default Profile;
