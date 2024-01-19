import React from 'react';
import { Link } from 'react-router-dom';

const UnauthorizedUser = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[600px]">
            <img
                src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg" // Replace with the actual path to your logo or image
                alt="Logo"
                className="mb-4 h-1/2" // Adjust the size based on your design
            />
            <div className='h-1/2 flex flex-col items-center justify-start'>
                <h2 className="text-2xl font-bold mb-2">Unauthorized User Dashboard</h2>
                <p className="text-gray-600">
                    You are not authorized to view this dashboard. Please log in with the
                    appropriate credentials.
                </p>
                <Link
                    to="/login"
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Log in
                </Link>
            </div>
        </div>
    );
};

export default UnauthorizedUser;
