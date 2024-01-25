import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


const ProductItem = ({ product }) => {



    return (

        <tbody >

            <tr className='hover:bg-gray-200'>
                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <div className="flex items-center">

                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {product.name}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">10</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <img className='h-16' src={product.url} />
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

export default ProductItem;




