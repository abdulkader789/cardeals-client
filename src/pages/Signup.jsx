import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        // Clear previous error when user starts typing
        setErrors({
            ...errors,
            [e.target.name]: "",
        });
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrors({
                ...errors,
                email: "Invalid email address",
            });
            return false;
        }
        return true;
    };

    const validatePassword = () => {
        if (formData.password.length < 5) {
            setErrors({
                ...errors,
                password: "Password must be at least 5 characters long",
            });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail() || !validatePassword()) {
            return
        }

        try {
            const response = await fetch("api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Signup successful:", data);

            navigate('/login');
        } catch (error) {
            console.error("Error during signup:", error.message);
        }
    };

    return (
        <div className="px-14 py-5">
            <div className="flex justify-center bg-gray-300 p-10">
                <div className="w-1/2 h-[550px] hidden lg:block">
                    <img src="https://img.freepik.com/free-photo/sign-up-form-button-graphic-concept_53876-101286.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705276800&semt=ais" alt="Placeholder Image" className="w-full h-full" />
                </div>
                <div className="h-[550px] lg:p-20 md:p-52 sm:20 p-8 w-full lg:w-1/2 bg-gray-100">
                    <h1 className="text-2xl font-semibold mb-4">Sign up</h1>
                    <form >
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}

                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
                                autoComplete="off"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                        >
                            Sign up
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        Already Have an Account?{" "}
                        <Link to="/login" className="hover:underline text-blue-500">
                            Login Here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
