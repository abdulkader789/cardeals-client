
const DeleteModal = ({ setDeleteModalOpen, deleteCategory, category }) => {
    const handleDeleteClick = () => {
        deleteCategory(category._id)
        setDeleteModalOpen(prevOpen => !prevOpen)
    }

    return (


        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Delete Category
                        </h3>
                        <div className="mt-2">
                            <p className="text-sm leading-5 text-gray-500">
                                Are you sure you want to delete {category.name} ? All of your data will be permanantly removed. This action cannot be undone.
                            </p>
                        </div>

                    </div>
                    <div className="bg-gray-200 px-4 py-3 text-right">
                        <button onClick={() => setDeleteModalOpen(prevOpen => !prevOpen)} type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" > Cancel</button>
                        <button onClick={handleDeleteClick}
                            type="button" className="py-2 px-4 bg-red-500 text-white rounded font-medium hover:bg-red-700 mr-2 transition duration-500"> Delete</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DeleteModal;