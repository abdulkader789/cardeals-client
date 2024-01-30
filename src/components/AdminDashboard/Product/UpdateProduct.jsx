import { useEffect, useState } from 'react';
import '../../../styles/CreateProduct.css';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useCategory } from '../../../context/CategoryContext';
import { useProduct } from '../../../context/ProductContext';

const UpdateProduct = () => {
    const { id } = useParams()
    const { authData } = useAuth();
    const { categoryData } = useCategory()
    const { fetchProducts } = useProduct()
    const navigate = useNavigate()
    const [productData, setProductData] = useState({
        name: '',
        model: '',
        brand: '',
        description: '',
        category: '',
        price: 0,
        quantity: 0,
        url: '',
        photo: null,
        seatingCapacity: 0,
        engine: '',
        transmission: '',
        fuelEfficiency: '',
        color: '',
        range: '',
        acceleration: '',
        chargingTime: '',
        popular: false,
        trending: false,
        availability: 'inStock',

    });



    const getSingleProduct = async () => {
        try {
            if (!authData || !authData.token) {
                // Token is not available, handle accordingly
                return;
            }

            const response = await fetch(`/api/product/get-single-product/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setProductData(data.product);
            }
        } catch (error) {
            console.error("Error during categories:", error);
            // Handle errors, e.g., show an error message to the user
        }
    };

    useEffect(() => {
        getSingleProduct()
    }, []);


    const [localImageSelected, setLocalImageSelected] = useState(false); // New state to track local image selection
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProductData({ ...productData, photo: e.target.files[0] }); // Store the file object
            setLocalImageSelected(true); // Set localImageSelected to true when an image is selected
        }
    };

    const handleUpdateProduct = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            Object.entries(productData).forEach(([key, value]) => {
                if (key === 'photo') {
                    formData.append('photo', value); // Append the file object directly
                } else if (typeof value === 'boolean') {
                    // Convert boolean to string before appending
                    formData.append(key, value.toString());
                } else {
                    formData.append(key, value);
                }
            });

            const response = await fetch(`/api/product/update-product/${id}`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${authData.token}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to create User');
            }

            const result = await response.json();
            console.log('User updated successfully:', result.product);
            fetchProducts();
            navigate('/dashboard/product');

        } catch (error) {
            console.error(error.message);
        }
    };



    return (
        <div className="bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto w-full">


            <main className="flex-1 md:p-0 lg:pt-8 lg:px-8  flex flex-col">
                <section className="bg-cream-lighter p-4 shadow">
                    <div className="md:flex">
                        <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">Update New Product</h2>
                    </div>
                    <div>




                        {/* Name */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">product</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Name</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="text"
                                    name="name"
                                    placeholder="Product Name"
                                    value={productData.name}
                                    onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Model */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Model</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Name</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="text"
                                    name="model"
                                    placeholder="Product Model"
                                    value={productData.model}
                                    onChange={(e) => setProductData({ ...productData, model: e.target.value })}
                                />
                            </div>
                        </div>
                        {/* Brand */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Brand</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Name</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="text"
                                    name="brand"
                                    placeholder="Product Brand"
                                    value={productData.brand}
                                    onChange={(e) => setProductData({ ...productData, brand: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Description</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <textarea
                                    className="w-full shadow-inner p-4 border-0"
                                    placeholder="We build fine acmes."
                                    rows="4"

                                    onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                                ></textarea>
                            </div>
                        </div>



                        {/* Cover Image */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Cover Image</legend>
                            </div>
                            <div className="md:flex-1 px-3 text-center">
                                <div className="button bg-gold hover:bg-gold-dark text-cream mx-auto cursor-pointer relative">
                                    <input
                                        className="opacity-0 absolute pin-x pin-y"
                                        type="file"
                                        name="photo"

                                        onChange={handleImageChange}
                                    />

                                    Add Cover Image
                                </div>
                            </div>

                        </div>
                        {/* Selected Image */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Selected Image</legend>
                            </div>

                            {localImageSelected ? (
                                <img
                                    src={productData.photo ? URL.createObjectURL(productData.photo) : ''}
                                    alt="Selected Cover Image"
                                    className="max-w-full h-auto"
                                />
                            ) : (
                                <div className="md:flex-1 px-3 text-center border-dashed border-2 border-gray-300 py-10">
                                    <p className="text-gray-500">No image selected</p>
                                    <img
                                        src={`/api/product/get-product-photo/${id}`}
                                        alt="No Image"
                                        className="max-w-full h-24 mx-auto mt-4"
                                    />
                                </div>
                            )}

                        </div>




                        {/* Category */}

                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Category</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Add a Category</label>
                                <select
                                    value={productData.category}
                                    onChange={(e) => setProductData({ ...productData, category: e.target.value })}
                                    className="w-full border-[1px] border-gray-400 outline-none rounded bg-gray-100 md:flex-1 mt-2 mb:mt-0 md:px-3 py-3"
                                >

                                    <option value="" disabled>Select a category</option>
                                    {categoryData?.map((category) => (
                                        <option key={category._id} value={category._id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>


                        {/* Price */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">price</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Add a Price</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="number"
                                    name="price"
                                    placeholder="Product Price"
                                    value={productData.price}
                                    onChange={(e) => setProductData({ ...productData, price: e.target.value })}
                                />
                            </div>
                        </div>


                        {/* Quantity */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">quantity</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Product Quantity</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="number"
                                    name="quantity"
                                    placeholder="Available quantity"
                                    value={productData.quantity}
                                    onChange={(e) => setProductData({ ...productData, quantity: e.target.value })}
                                />
                            </div>
                        </div>



                        {/* Seating Capacity */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Seating Capacity</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Add seatingCapacity</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="number"
                                    name="seatingCapacity"
                                    placeholder="seatingCapacity"
                                    value={productData.seatingCapacity}
                                    onChange={(e) => setProductData({ ...productData, seatingCapacity: e.target.value })}
                                />
                            </div>
                        </div>


                        {/* Engine */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Engine</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Engine Type</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="text"
                                    name="engine"
                                    placeholder="Engine Type"
                                    value={productData.engine}
                                    onChange={(e) => setProductData({ ...productData, engine: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Transmission */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Transmission</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Transmission Type</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="text"
                                    name="transmission"
                                    placeholder="Transmission Type"
                                    value={productData.transmission}
                                    onChange={(e) => setProductData({ ...productData, transmission: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Fuel Efficiency */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Fuel Efficiency</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Fuel Efficiency</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="text"
                                    name="fuelEfficiency"
                                    placeholder="Fuel Efficiency"
                                    value={productData.fuelEfficiency}
                                    onChange={(e) => setProductData({ ...productData, fuelEfficiency: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Color */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Color</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Color</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="text"
                                    name="color"
                                    placeholder="Product Color"
                                    value={productData.color}
                                    onChange={(e) => setProductData({ ...productData, color: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Range */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Range</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Range (for electric cars)</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="text"
                                    name="range"
                                    placeholder="Product Range"
                                    value={productData.range}
                                    onChange={(e) => setProductData({ ...productData, range: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Acceleration */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Acceleration</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Acceleration</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="text"
                                    name="acceleration"
                                    placeholder="Product Acceleration"
                                    value={productData.acceleration}
                                    onChange={(e) => setProductData({ ...productData, acceleration: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Charging Time */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Charging Time</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Charging Time (for electric cars)</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="text"
                                    name="chargingTime"
                                    placeholder="Product Charging Time"
                                    value={productData.chargingTime}
                                    onChange={(e) => setProductData({ ...productData, chargingTime: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Popular */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Popular</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">
                                    <input
                                        type="checkbox"
                                        checked={productData.popular}
                                        onChange={(e) => setProductData({ ...productData, popular: e.target.checked })}
                                    />
                                    Popular Product
                                </label>
                            </div>
                        </div>

                        {/* Trending */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Trending</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">
                                    <input
                                        type="checkbox"
                                        checked={productData.trending}
                                        onChange={(e) => setProductData({ ...productData, trending: e.target.checked })}
                                    />
                                    Trending Product
                                </label>
                            </div>
                        </div>



                        {/* Availability */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Availability</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">
                                    <select
                                        value={productData.availability}
                                        onChange={(e) => setProductData({ ...productData, availability: e.target.value })}
                                        className="w-full border-[1px] border-gray-400 outline-none rounded bg-gray-100 md:flex-1 mt-2 mb:mt-0 md:px-3 py-3"
                                    >
                                        <option value="inStock">In Stock</option>
                                        <option value="outOfStock">Out of Stock</option>
                                    </select>
                                </label>
                            </div>
                        </div>










                        <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                            <div className="md:flex-1 px-3 text-center md:text-right">
                                <button onClick={handleUpdateProduct} className="button text-cream-lighter bg-brick hover:bg-brick-dark" >
                                    Update Product
                                </button>
                            </div>
                        </div>


                    </div>
                </section>
            </main>
        </div>
    );
};

export default UpdateProduct;