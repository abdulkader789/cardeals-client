import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faInfo } from '@fortawesome/free-solid-svg-icons';



const TableBody = ({ item }) => {

    return (
        <tbody >

            <tr className='hover:bg-gray-200'>

                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{item._id}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{item.name}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <img src={item.url} />
                </td>
                <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <button className="text-white flex  justify-center items-center bg-blue-700 rounded-full h-5 w-5">
                        <FontAwesomeIcon icon={faInfo} />
                    </button>
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

export default TableBody;