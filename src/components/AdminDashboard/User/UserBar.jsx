import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserBar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    };

    return (



        <li className="text-sm text-gray-500 ">

            <button onClick={handleClick}
                className="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700">

                <div className="pr-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <div>Users</div>
                <div className="absolute right-1.5 transition-transform duration-300">


                    <svg className=" h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>




            <div className={`${click ? 'max-h-24' : 'overflow-hidden max-h-0'}  pl-4 pr-2  transition-all transform translate duration-300 `}>

                <ul className="flex flex-col mt-2 pl-2 text-gray-500 border-l border-gray-700 space-y-1 text-xs">
                    {/* <!-- Item --> */}
                    <li className="text-sm text-gray-500 ">
                        <Link to='/dashboard/user'>
                            <button
                                className="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700">
                                <div>Manage Users </div>
                            </button>
                        </Link>
                    </li>

                    {/* <!-- Item --> */}
                    <li className="text-sm text-gray-500 ">
                        <Link to='/dashboard/createuser'>
                            <button
                                className="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700">
                                <div> Create User </div>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </li>
    )
};

export default UserBar;