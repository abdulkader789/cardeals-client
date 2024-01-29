import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faInfo } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';

const TableBody = ({ item, detailsRoute, infoRoute, editRoute, deleteRoute, onDelete, updateRoute }) => {
    const { authData } = useAuth()
    const handleDelete = () => {
        fetch(`/api/${deleteRoute}/${item._id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${authData?.token}`, // Include the token in the Authorization header
                'Content-Type': 'application/json' // Set content type if needed
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');

                }
                console.log('Item deleted successfully');
                // Handle success response if needed
                onDelete(item._id);
            })
            .catch(error => {
                console.error('Error deleting item:', error);
                // Handle error if needed
            });
    };

    return (
        <tbody>
            <tr className='hover:bg-gray-200'>
                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{item._id}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{item.name}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <img src={item.url} alt="Item" />
                </td>
                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <button className="text-white flex  justify-center items-center bg-blue-700 rounded-full h-5 w-5">
                        <Link to={`/dashboard/${infoRoute}/${item._id}`}><FontAwesomeIcon icon={faInfo} /></Link>
                    </button>
                </td>
                <td className="px-5 py-5 border-b border-gray-200  text-sm space-x-8">
                    <button className="text-blue-500 hover:text-blue-700">
                        <Link to={`/dashboard/${updateRoute}/${item._id}`}><FontAwesomeIcon icon={faEdit} /></Link>
                    </button>
                    <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

export default TableBody;
