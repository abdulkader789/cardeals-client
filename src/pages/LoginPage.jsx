import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
    const { login } = useAuth()
    const navigate = useNavigate(); s
    // State to store form data
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // State to manage error messages
    const [error, setError] = useState(null);

    // Regular expression for validating an Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        console.log(formData)
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate email format
        if (!emailRegex.test(formData.email)) {
            setError("Invalid email format");
            return;
        }

        // Validate password length
        if (formData.password.length < 5) {
            setError("Password must be at least 5 characters");
            return;
        }

        try {
            const response = await fetch("api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Clear previous error if any
            setError(null);

            const data = await response.json();
            console.log("Login data: ", data);

            login(data)
            // Handle successful login, e.g., redirect to another page
            // const role = data?.user?.role === 1 ? 'admin' : 'user'
            navigate('/dashboard');
        } catch (error) {
            console.error("Error during login:", error);
            // Handle errors, e.g., show an error message to the user
            navigate('/login')
            setError("Invalid email or password");
        }
    };

    return (
        <div className="px-14 py-5">
            <div className=" flex justify-center bg-blue-600 p-10">
                <div className="w-1/2 h-full hidden lg:block">
                    <img src="https://dotnetworkbd.net/uploaded/setting/1675694989login_63e1138d16d04.jpg" alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>
                <div className="lg:p-20 md:p-52 sm:20 p-8 w-full lg:w-1/2 bg-gray-100">
                    <h1 className="text-2xl font-semibold mb-4">Login</h1>
                    <form>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"

                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                            />
                        </div>

                        <div className="mb-2 text-red-500">
                            {error && <span>{error}</span>}
                        </div>


                        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                    </form>
                    <div className="mt-6  text-center">
                        Don't Have an Account? <Link to='/signup' className="hover:underline text-blue-500">Sign up Here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
