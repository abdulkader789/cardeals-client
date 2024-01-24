import { useState } from "react";

const UpdateModal = ({ setUpdateModalOpen, category, updateCategory }) => {
    const [categoryName, setCategoryName] = useState(category.name);
    const [isActive, setIsActive] = useState(true); // Default to 'Active'

    const handleUpdateClick = () => {
        updateCategory(category._id, categoryName, isActive);
        setUpdateModalOpen(prevOpen => !prevOpen);

    };
    const handleCancelClick = () => {
        setUpdateModalOpen(prevOpen => !prevOpen);

    }
    return (


        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 " id="modal">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <label className="font-medium text-gray-800">Name</label>
                        <input value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            type="text" className="w-full border-[1px] border-gray-400 outline-none rounded bg-gray-100 p-2 mt-2 mb-3" />

                        <label className="font-medium text-gray-800">Status</label>
                        <div className="flex items-center mt-2">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value={true}
                                    checked={isActive}
                                    onChange={() => setIsActive(true)}
                                    className="form-radio h-4 w-4 text-blue-500"
                                />
                                <span className="ml-2">Active</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input
                                    type="radio"
                                    value={false}
                                    checked={!isActive}
                                    onChange={() => setIsActive(false)}
                                    className="form-radio h-4 w-4 text-red-500"
                                />
                                <span className="ml-2">Inactive</span>
                            </label>
                        </div>


                    </div>
                    <div className="bg-gray-200 px-4 py-3 text-right">
                        <button onClick={handleCancelClick} type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"> Cancel</button>
                        <button onClick={handleUpdateClick} type="button" className="py-2 px-4 bg-blue-500 text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500">Update</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default UpdateModal;