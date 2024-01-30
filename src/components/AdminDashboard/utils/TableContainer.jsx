import TableBody from "./TableBody";


const TableContainer = ({ tableHead, photoRoute, tableData, updateRoute, deleteRoute, infoRoute, onDelete }) => {
    return (
        <div className=" px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead className='bg-green-300 h-16'>
                        <tr>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                id
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                name
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                photo
                            </th>

                            <th
                                className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Full Details
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                actions
                            </th>
                        </tr>
                    </thead>

                    {
                        tableData?.map((item) => <TableBody photoRoute={photoRoute} updateRoute={updateRoute} infoRoute={infoRoute} onDelete={onDelete} deleteRoute={deleteRoute} key={item._id} item={item} />)
                    }



                </table>

            </div>
        </div>
    )
}

export default TableContainer;