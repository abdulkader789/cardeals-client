import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import DeleteModal from './DeleteModal';
import { useState } from 'react';
import UpdateModal from './UpdateModal';

const ProductItem = ({ Product, updateProduct, deleteProduct }) => {

    const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

    const toggleUpdateModal = () => {
        setUpdateModalOpen(!isUpdateModalOpen);
    };

    const toggleDeleteModal = () => {
        setDeleteModalOpen(!isDeleteModalOpen);
    };

    return (

        <tbody >

            <tr className='hover:bg-gray-200'>
                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <div className="flex items-center">

                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {Product.name}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">10</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <span
                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                        <span className="relative">
                            {Product.status ? 'Active' : 'Inactive'}
                        </span>
                    </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200  text-sm space-x-8">
                    <button onClick={toggleUpdateModal} className="text-blue-500 hover:text-blue-700">
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    {isUpdateModalOpen ? <UpdateModal setUpdateModalOpen={setUpdateModalOpen} Product={Product} updateProduct={updateProduct} /> : null}

                    <button onClick={toggleDeleteModal} className="text-red-500 hover:text-red-700">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>

                    {isDeleteModalOpen ? <DeleteModal setDeleteModalOpen={setDeleteModalOpen} deleteProduct={deleteProduct} Product={Product} /> : null}
                </td>
            </tr>


        </tbody>


    );
};

export default ProductItem;




