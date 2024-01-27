import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faCog, faChartBar } from '@fortawesome/free-solid-svg-icons';

const UserDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex relative">
            {/* Sidebar */}
            <div className={`w-1/4 bg-gray-800  h-screen transition-all duration-300 ${isSidebarOpen ? 'md:-translate-x-full -translate-x-0 ' : '-translate-x-full md:-translate-x-0'}`}>
                {/* Sidebar content */}
                <nav className="mt-10">
                    <ul>
                        <li className="text-white flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                            <FontAwesomeIcon icon={faChartBar} className="text-xl mr-2" />
                            Dashboard
                        </li>
                        <li className="text-white flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                            <FontAwesomeIcon icon={faUser} className="text-xl mr-2" />
                            Profile
                        </li>
                        <li className="text-white flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                            <FontAwesomeIcon icon={faCog} className="text-xl mr-2" />
                            Settings
                        </li>
                        {/* Add more sidebar items as needed */}
                    </ul>
                </nav>
            </div>

            {/* Main content */}
            <div className={` bg-gray-100 min-h-screen `}>
                {/* Main content area */}
                <div className="p-10">
                    {/* Content goes here */}
                    <button className="text-gray-600 focus:outline-none" onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={faBars} className="text-2xl" />
                    </button>
                    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                    <p>Welcome to your dashboard!</p>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
