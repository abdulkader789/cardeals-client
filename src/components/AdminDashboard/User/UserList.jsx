import React from 'react';
import ItemRow from '../utils/ItemRow';
import { useUsers } from '../../../context/UserContext';

const UserList = () => {
    const { usersData } = useUsers()
    return (
        <div className='bg-gray-200 p-10'>
            {/* Search User Section */}

            <h2 className='font-extrabold text-4xl mb-5'>All Registerd Users {usersData.length}</h2>

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

                {usersData?.map(item => <ItemRow key={item._id} redirect={'userdetails'} item={item} />)}

            </section>
        </div>
    );
};

export default UserList;