import { useEffect, useState } from 'react';
import '../../../styles/CreateProduct.css';
import { useAuth } from '../../../context/AuthContext';

const CreateProduct = () => {
    const { authData } = useAuth();
    const [categories, setCategories] = useState([]);

    const [productData, setProductData] = useState({
        name: '',
        description: '',
        category: '',
        price: 0,
        quantity: 0,
        url: '', // Add this property for image URL
        photo: null, // Add this property for cover image file

    });



    const getAllCategories = async () => {
        try {
            if (!authData || !authData.token) {
                // Token is not available, handle accordingly
                return;
            }

            const response = await fetch("/api/category/get-all-categories", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                const data = await response.json();
                setCategories(data.categories);
                console.log(categories)
            }
        } catch (error) {
            console.log("Error during categories:", error);
            // Handle errors, e.g., show an error message to the user
        }
    };

    useEffect(() => {
        getAllCategories();
    }, []);


    const handleCreateProduct = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', productData.name);
            formData.append('description', productData.description);
            formData.append('category', productData.category);
            formData.append('price', productData.price);
            formData.append('quantity', productData.quantity);
            formData.append('url', productData.url);

            if (productData.photo) {
                formData.append('photo', productData.photo);
                // Log to check if photo is being appended
                console.log('Photo appended:', productData.photo);
            }

            const response = await fetch('/api/product/create-product', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${authData.token}`,
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to create product');
            }

            const result = await response.json();
            console.log('Product created successfully:', result.product);
        } catch (error) {
            console.error('Error creating product:', error.message);
        }
    };






    return (
        <div className="bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto w-full">
            <main className="flex-1 md:p-0 lg:pt-8 lg:px-8  flex flex-col">
                <section className="bg-cream-lighter p-4 shadow">
                    <div className="md:flex">
                        <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">Create New Product</h2>
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


                        {/* Image URL */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">URL</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Image url</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="text"
                                    name="url"
                                    placeholder="Add a Product Image URL"
                                    value={productData.url}
                                    onChange={(e) => setProductData({ ...productData, url: e.target.value })}
                                />
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
                                        onChange={(e) => setProductData({ ...productData, photo: e.target.files[0] })}
                                    />
                                    Add Cover Image
                                </div>
                            </div>


                        </div>

                        <div className="md:flex mb-6">

                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Selected Image</legend>
                            </div>

                            {productData.photo && (
                                <div className="md:flex-1 px-3 text-center">

                                    <img
                                        src={URL.createObjectURL(productData.photo)}
                                        alt="Selected Cover Image"
                                        className="max-w-full h-auto"
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
                                    {categories.map((category) => (
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













                        <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                            <div className="md:flex-1 px-3 text-center md:text-right">
                                <button onClick={handleCreateProduct} className="button text-cream-lighter bg-brick hover:bg-brick-dark" >
                                    Create Product
                                </button>
                            </div>
                        </div>


                    </div>
                </section>
            </main>
        </div>
    );
};

export default CreateProduct;