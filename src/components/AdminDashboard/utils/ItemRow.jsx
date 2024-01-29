import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




const ItemRow = ({ item, redirect }) => {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false // Use 24-hour format
        };
        return date.toLocaleString('en-US', options);
    }

    return (

        <div className="hover:bg-green-200 cursor-pointer bg-white shadow flex h-24 p-5 items-center mb-3 rounded-lg">

            <div className="w-1/4 ">
                <span className="capitalize text-gray-600 text-sm">{item._id}</span>
            </div>

            <div className="w-1/4">
                <span className="text-gray-600 text-sm">{item.name}</span>
            </div>


            <div className="w-1/4">
                <span className="text-gray-600 text-sm">{formatDate(item.createdAt)}</span>
            </div>
            <div className="w-1/4">
                <button className="text-white flex  justify-center items-center bg-blue-700 rounded-full h-5 w-5">
                    <Link to={`/dashboard/${redirect}/${item._id}`}><FontAwesomeIcon icon={faInfo} /></Link>

                </button>
            </div>
        </div>

    );
};

export default ItemRow;
