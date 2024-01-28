import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const UserRow = ({ user }) => {
    return (
        <tbody >

            <tr className='hover:bg-gray-200'>
                <td className=" py-5 border-b border-gray-200  text-sm">
                    <div className="flex items-center">

                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">{user._id}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <div className="flex items-center">

                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">{user.email}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{user.createdAt}</p>
                </td>

                <td className="px-5 py-5 border-b border-gray-200  text-sm">

                    <Link to={`/dashboard/userdetails/${user._id}`}>
                        <button className="text-blue-500 hover:text-blue-700">
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </button>
                    </Link>
                </td>

                <td className="px-5 py-5 border-b border-gray-200  text-sm space-x-8">
                    <button className="text-blue-500 hover:text-blue-700">
                        <FontAwesomeIcon icon={faEdit} />
                    </button>


                    <button className="text-red-500 hover:text-red-700">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>


                </td>
            </tr>
        </tbody>
    );
};

export default UserRow;