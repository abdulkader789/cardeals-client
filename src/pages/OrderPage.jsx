import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderPage = () => {
    const { id } = useParams()
    const { authData } = useAuth();

    const [formData, setFormData] = useState({
        product: null, // Initialize productDetails as null
        name: '',
        email: '',
        phone: '',
        message: '',
        appointmentDateTime: ''
    });

    useEffect(() => {
        // Fetch product details based on the product ID
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/product/get-single-product/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const productData = await response.json();
                // Set the fetched product data in the formData state
                setFormData(prevFormData => ({
                    ...prevFormData,
                    product: productData.product,// Set productDetails to the fetched product data
                    userId: authData?.user._id
                }));
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'appointmentDateTime') {
            // Parse the datetime-local value and format it to match the required format
            const dateTimeParts = value.split('T');
            const datePart = dateTimeParts[0];
            const timePart = dateTimeParts[1];
            const formattedDateTime = `${datePart}T${timePart}:00`;
            setFormData({ ...formData, [name]: formattedDateTime });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/order/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authData.token}`
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to create order');
            }

            // Handle success response if needed
            alert('Order created successfully');
            console.log('Order created successfully');
        } catch (error) {
            console.error('Error creating order:', error);
            // Handle error response if needed
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Create Order</h2>
            <form>

                <div className="mb-4">
                    <label className="block mb-1">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Appointment Date Time:</label>
                    <input
                        type="datetime-local"
                        name="appointmentDateTime"
                        value={formData.appointmentDateTime}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Create Order</button>
            </form>

        </div>
    );
};

export default OrderPage;
