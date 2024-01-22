
import { useState } from "react";

const CreateModal = ({ setCreateModalOpen, createProduct }) => {
    const [productData, setProductData] = useState({
        name: '',
        description: {
            overview: '',
            features: [],
            specifications: {
                engine: '',
                transmission: '',
                fuelType: '',
                mileage: '',
                seatingCapacity: 0,
                colorOptions: [],
            },
            safetyFeatures: [],
            interior: '',
            exterior: '',
            multimedia: '',
            additionalInfo: '',
        },
        category: '',
        price: 0,
        quantity: 0,
    });

    const handleCreateClick = () => {
        // createProduct(productData);
        setCreateModalOpen(prevOpen => !prevOpen);
    };

    const handleCancelClick = () => {
        setCreateModalOpen(prevOpen => !prevOpen);
    };

    return (
        <div className="fixed  overflow-y-auto top-0 w-full left-0 z-50 " id="modal">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="h-[550px] inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="h-[80%] bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 overflow-y-scroll ">
                        <label className="font-medium text-gray-800">Name</label>
                        <input
                            value={productData.name}
                            onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                            type="text"
                            className="w-full border-[1px] border-gray-400 outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
                        />


                        {/* Description Section */}
                        <div className="mt-4">
                            <label className="font-medium text-gray-800">Overview</label>
                            <textarea
                                value={productData.description.overview}
                                onChange={(e) => setProductData({ ...productData, description: { ...productData.description, overview: e.target.value } })}
                                className="w-full border-[1px] border-gray-400 outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
                            />
                        </div>


                        {/* Add input fields for other properties in the ProductSchema */}
                        {/* Price */}
                        <label className="font-medium text-gray-800">Price</label>
                        <input
                            value={productData.price}
                            onChange={(e) => setProductData({ ...productData, price: parseFloat(e.target.value) })}
                            type="number"
                            className="w-full border-[1px] border-gray-400 outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
                        />

                        {/* Quantity */}
                        <label className="font-medium text-gray-800">Quantity</label>
                        <input
                            value={productData.quantity}
                            onChange={(e) => setProductData({ ...productData, quantity: parseInt(e.target.value) })}
                            type="number"
                            className="w-full border-[1px] border-gray-400 outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
                        />

                        {/* Category */}
                        <label className="font-medium text-gray-800">Category</label>
                        <input
                            value={productData.category}
                            onChange={(e) => setProductData({ ...productData, category: e.target.value })}
                            type="text"
                            className="w-full border-[1px] border-gray-400 outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
                        />

                        {/* ... Add input fields for other properties ... */}

                    </div>
                    <div className="bg-gray-200 px-4 py-3 text-right">
                        <button onClick={handleCancelClick} type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2">Cancel</button>
                        <button onClick={handleCreateClick} type="button" className="py-2 px-4 bg-blue-500 text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500">Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateModal;
