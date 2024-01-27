import { useState } from "react";
import Content from "../components/UserDashboard/Content/Content";
import Sidebar from "../components/UserDashboard/Nav/Sidebar";
import TopNav from "../components/UserDashboard/Nav/TopNav";
import { useSidebar } from "../context/SidebarContext";


const UserDashboard = () => {
    const { isSidebarOpen } = useSidebar();



    return (
        <div className={`${isSidebarOpen ? 'flex-col-1' : 'md:flex'}`}>
            <div className='w-64'>
                <Sidebar />
            </div>

            <div className='flex-1 flex-col flex '>
                <TopNav />
                <Content />
            </div>

        </div>

        // <div className="flex relative">
        //     {/* Sidebar */}
        //     <div className={`w-[300px] bg-gray-800  h-screen transition-all duration-300 ${isSidebarOpen ? 'md:-translate-x-full -translate-x-0 ' : '-translate-x-full md:-translate-x-0'}`}>
        //         {/* Sidebar content */}

        //         <nav className="">
        //             <header className=" h-[64px] relative py-2 shadow-lg px-4 md:sticky top-0 bg-gray-800 z-40">
        //                 <Link to='/home' className="text-white flex items-center space-x-2 group hover:text-white">
        //                     <div>
        //                         <svg className="h-8 w-8 transition-transform duration-300 group-hover:-rotate-45 " fill="none"
        //                             viewBox="0 0 24 24" stroke="currentColor">

        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        //                                 d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        //                         </svg>

        //                     </div>

        //                     <div>
        //                         <span className="text-2xl nav-logo font-extrabold uppercase">
        //                             cardeals
        //                         </span>
        //                         <span className="text-xs block">Dashboard Management</span>
        //                     </div>
        //                 </Link>
        //             </header>
        //             <ul>

        //                 <li className="text-white flex items-center p-4 hover:bg-gray-700 cursor-pointer">
        //                     <FontAwesomeIcon icon={faChartBar} className="text-xl mr-2" />
        //                     Dashboard
        //                 </li>
        //                 <li className="text-white flex items-center p-4 hover:bg-gray-700 cursor-pointer">
        //                     <FontAwesomeIcon icon={faUser} className="text-xl mr-2" />
        //                     Profile
        //                 </li>
        //                 <li className="text-white flex items-center p-4 hover:bg-gray-700 cursor-pointer">
        //                     <FontAwesomeIcon icon={faCog} className="text-xl mr-2" />
        //                     Settings
        //                 </li>
        //                 {/* Add more sidebar items as needed */}
        //             </ul>
        //         </nav>
        //     </div>

        //     {/* Main content */}
        //     <div className={` bg-gray-100 min-h-screen w-full`}>
        //         {/* TopNav */}
        //         <div className="bg-slate-950 py-5 px-5">
        //             <button className="text-white focus:outline-none" onClick={toggleSidebar}>
        //                 <FontAwesomeIcon icon={faBars} className="text-2xl" />
        //             </button>
        //         </div>
        //         {/* Main content area */}
        //         <div >
        //             {/* Content goes here */}

        //             <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        //             <p>Welcome to your dashboard!</p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default UserDashboard;
