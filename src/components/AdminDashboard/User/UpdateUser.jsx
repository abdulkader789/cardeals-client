import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


import { useUsers } from '../../../context/UserContext';
import { useAuth } from '../../../context/AuthContext';





const CreateUser = () => {

    const { id } = useParams();

    const { authData } = useAuth();
    const { usersData } = useUsers();
    const navigate = useNavigate();





    const [UserData, setUserData] = useState({ name: '', email: '', password: '', photo: null, address: '', role: 0 });




    const getSingleUser = async () => {
        try {
            if (!authData || !authData.token) {
                // Token is not available, handle accordingly
                return;
            }

            const response = await fetch(`/api/auth/get-single-user/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUserData(data.user);

            }
        } catch (error) {
            console.error("Error during User:", error);
            // Handle errors, e.g., show an error message to the user
        }
    };

    useEffect(() => {
        getSingleUser();
    }, [id]);

    const handleUpdateUser = async (e) => {
        e.preventDefault();

        try {



            const formData = new FormData();
            Object.entries(UserData).forEach(([key, value]) => {
                if (key === 'photo') {
                    formData.append('photo', value);
                } else if (typeof value === 'boolean') {
                    // Convert boolean to string before appending
                    formData.append(key, value.toString());
                } else {
                    formData.append(key, value);
                }
            });


            const response = await fetch(`/api/auth/update-user/${id}`, {
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
            console.log('User created successfully:', result.User);

        } catch (error) {
            console.error(error.message);
        }
    };



    return (
        <div className="bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto w-full">





            <main className="flex-1 md:p-0 lg:pt-8 lg:px-8  flex flex-col">
                <section className="bg-cream-lighter p-4 shadow">
                    <div className="md:flex">
                        <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">Update User</h2>
                    </div>
                    <div>




                        {/* Name */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">User</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Name</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="text"
                                    name="name"
                                    placeholder="User Name"
                                    value={UserData.name}
                                    onChange={(e) => setUserData({ ...UserData, name: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Email</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">email</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    value={UserData.email}
                                    onChange={(e) => setUserData({ ...UserData, model: e.target.value })}
                                />
                            </div>
                        </div>
                        {/* Email */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Password</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">password</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="password"
                                    name="password"
                                    placeholder="email"
                                    value={UserData.password}
                                    onChange={(e) => setUserData({ ...UserData, password: e.target.value })}
                                />
                            </div>
                        </div>
                        {/* phone */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Phone</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Phone</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="text"
                                    name="phone"
                                    placeholder="phone"
                                    value={UserData.email}
                                    onChange={(e) => setUserData({ ...UserData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Address</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Address</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="text"
                                    name="address"
                                    placeholder="address"
                                    value={UserData.email}
                                    onChange={(e) => setUserData({ ...UserData, address: e.target.value })}
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

                                        onChange={(e) => setUserData({ ...UserData, photo: e.target.files[0] })}
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

                            {UserData.photo ? (
                                <div className="md:flex-1 px-3 text-center">
                                    <img

                                        src={UserData.photo instanceof File ? URL.createObjectURL(UserData.photo) : UserData.photo}


                                        alt="Selected Cover Image"
                                        className="max-w-full h-auto"
                                    />
                                </div>
                            ) : (
                                <div className="md:flex-1 px-3 text-center border-dashed border-2 border-gray-300 py-10">
                                    <p className="text-gray-500">No image selected</p>
                                    {/* Placeholder image */}
                                    <img
                                        src="https://t4.ftcdn.net/jpg/03/16/15/47/360_F_316154790_pnHGQkERUumMbzAjkgQuRvDgzjAHkFaQ.jpg"
                                        alt="No Image"
                                        className="max-w-full h-24 mx-auto mt-4"
                                    />
                                </div>
                            )}
                        </div>




                        <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                            <div className="md:flex-1 px-3 text-center md:text-right">
                                <button onClick={handleUpdateUser} className="button text-cream-lighter bg-brick hover:bg-brick-dark" >
                                    Update User
                                </button>
                            </div>
                        </div>


                    </div>
                </section>
            </main>
        </div>
    );
};

export default CreateUser;