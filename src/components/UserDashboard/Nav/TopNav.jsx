import { Link } from "react-router-dom";
import { useSidebar } from "../../../context/SidebarContext";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";

const TopNav = () => {

    const { authData, logout } = useAuth()
    const { toggleSidebar, isMobileOpen, toggleMobilebar } = useSidebar()
    const [isProfileClicked, setProfileClicked] = useState(false)
    const toggleProfile = () => {
        setProfileClicked(!isProfileClicked)
    }
    return (


        <nav className="bg-gray-800 shadow-xl sticky w-full top-0 text-black z-50" >


            <div className="mx-auto ">
                <div className="flex items-stretch justify-between h-16">

                    <div className="flex items-center md:hidden">
                        <div className="-mr-2 flex" >
                            {/*  Mobile menu button  */}

                            <button type="button" onClick={toggleSidebar}
                                className=" bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu" aria-expanded="false">

                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center pl-6">
                        <div className="flex-shrink-0 md:hidden">

                            <Link to='/home' className="text-white flex items-center space-x-2 group hover:text-white">
                                <div>
                                    <svg className="h-8 w-8 transition-transform duration-300 group-hover:-rotate-45 " fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">

                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>

                                </div>

                                <div>
                                    <span className="text-2xl nav-logo font-extrabold uppercase">
                                        cardeals
                                    </span>
                                    <span className="text-xs block">Dashboard Management</span>
                                </div>
                            </Link>
                        </div>

                        {/* <!-- toggel sidebar --> */}

                        <div onClick={toggleSidebar} className="text-white cursor-pointer hidden md:block" >

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>


                        <div className="hidden md:block">
                            {/* <!-- Search --> */}
                            <form action="" className="app-search" method="GET">
                                <div className="relative group ">
                                    <input type="text"
                                        className="form-input rounded-md bg-gray-700 text-sm text-gray-300 pl-10 py-1.5 ml-5 border-transparent border-none outline-none focus:ring-0 focus:text-white transition-all duration-300 ease-in-out focus:w-60 w-48"
                                        placeholder="Search..." autoComplete="off" />
                                    <span
                                        className="absolute left-44 bottom-2 text-gray-400 transition-all duration-300 ease-in-out group-focus-within:left-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="hidden md:flex items-stretch">
                        {/* <!-- Profile Menu DT --> */}
                        <div className="ml-4 flex md:ml-6 ">
                            <div className="relative flex justify-center items-center mr-4">
                                <div className="bg-gray-700 block hover:text-white p-1 rounded-full text-gray-400">
                                    <span className="sr-only">View notifications</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </div>
                            </div>


                            {/* <!-- Profile dropdown --> */}
                            <div className="relative bg-gray-700 px-4 text-gray-400 hover:text-white text-sm cursor-pointer">

                                {/* x-data="{open: false}" */}

                                <div onClick={toggleProfile} className="flex items-center min-h-full">


                                    <div className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                        id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full bg-white"
                                            src={`/api/auth/get-user-photo/${authData?.user._id}`}
                                            alt="" />
                                    </div>

                                    <div className="flex flex-col ml-4">

                                        <span>{authData?.user.email}</span>
                                    </div>
                                </div>

                                <div
                                    className={`origin-top-right absolute right-0 mt-0 min-w-full rounded-b-md shadow py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${isProfileClicked ? 'block' : 'hidden'}`}
                                    role="menu"
                                    aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">

                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem" tabIndex="-1" id="user-menu-item-0">My Profile</a>



                                    <button onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem" tabIndex="-1" id="user-menu-item-1">Log out</button>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="-ml-2 flex items-center md:hidden">
                        {/* <!-- Mobile menu button --> */}

                        <button type="button" onClick={toggleMobilebar}
                            className="bg-gray-800  inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu" aria-expanded="false">

                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}

            <div className={`md:hidden absolute bg-gray-800 ${isMobileOpen ? 'w-full' : 'hidden'}`} id="mobile-menu"

            >

                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        aria-current="page">Dashboard</a>


                </div>

                <div className="pt-4 pb-3 border-t border-gray-700">
                    {/* <!-- profile menue for mobile --> */}
                    <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                            <img className="h-10 w-10 rounded-full"
                                src={`/api/auth/get-user-photo/${authData?.user._id}`}
                                alt="" />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium leading-none text-white">User</div>
                            <div className="text-sm font-medium leading-none text-gray-400">{authData?.user.email}</div>
                        </div>
                        <button type="button"
                            className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>

                    </div>
                    <div className="mt-3 px-2 space-y-1 ">
                        <Link to='/dashboard/userprofile' className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"> Your Profile
                        </Link>

                        <button onClick={logout}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                            Log out</button>
                    </div>
                </div>
            </div>
        </nav>



    );
};

export default TopNav;