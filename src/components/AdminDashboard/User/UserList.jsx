import React from 'react';
import ItemCard from '../utils/ItemCard';
import { useUsers } from '../../../context/UserContext';

const UserList = () => {
    const { usersData } = useUsers()
    return (
        <div>
            {/* Search User Section */}

            <section className="block relative w-full">
                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                        <path
                            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                        </path>
                    </svg>
                </span>
                <input
                    type="text"
                    value=""
                    placeholder="Search categories..."

                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none " />
            </section>

            <section>
                <div className="flex items-center px-5 py-2">
                    <span className="w-1/4">
                        <span className="text-xs uppercase text-gray-600 font-bold">User Id</span>
                    </span>
                    <span className="w-1/4">
                        <span className="text-xs uppercase text-gray-600 font-bold">Contact Info</span>
                    </span>


                    <span className="w-1/4">
                        <span className="text-xs uppercase text-gray-600 font-bold">Created At</span>
                    </span>
                    <span className="w-1/4">
                        <span className="text-xs uppercase text-gray-600 font-bold">More Details</span>
                    </span>
                </div>

                {usersData?.map(item => <ItemCard key={item._id} item={item} />)}

            </section>
        </div>
    );
};

export default UserList;