import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../../styles/Dashboard/CreateCategory.css";
import { useAuth } from '../../../context/AuthContext';
import { useCategory } from '../../../context/CategoryContext';

const CreateCategory = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        status: true
    });
    const { authData } = useAuth()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const { fetchCategories } = useCategory()

    const handleSubmit = async () => {
        try {
            const response = await fetch(`/api/category/create-category`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authData?.token}`  // Replace with your actual token
                },
                body: JSON.stringify(formData),

            });
            if (!response.ok) {
                throw new Error('Failed to create category');
            }
            const data = await response.json();
            if (data.success) {
                fetchCategories()
                navigate('/dashboard/category');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className="bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto w-full">
            <main className="flex-1 md:p-0 lg:pt-8 lg:px-8 flex flex-col">
                <section className="bg-cream-lighter p-4 shadow">
                    <div className="md:flex">
                        <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">Create New Category</h2>
                    </div>
                    <form>
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Category</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Name</label>
                                <input
                                    className="w-full shadow-inner p-4 border-0"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Category Name"
                                />
                            </div>
                        </div>
                        {/* New Arrivals Status */}
                        <div className="md:flex mb-6">
                            <div className="md:w-1/3">
                                <legend className="uppercase tracking-wide text-sm">Status</legend>
                            </div>
                            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                <label className="block uppercase tracking-wide text-xs font-bold">Category Status</label>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="newArrivalsActive"
                                        name="status"
                                        value="true"
                                        checked={formData.status}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor="newArrivalsActive">Active</label>
                                    <input
                                        type="radio"
                                        id="newArrivalsInactive"
                                        name="status"
                                        value="false"
                                        checked={!formData.status}
                                        onChange={handleChange}
                                        className="ml-4"
                                    />
                                    <label htmlFor="newArrivalsInactive">Inactive</label>
                                </div>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                            <div className="md:flex-1 px-3 text-center md:text-right">
                                <button
                                    className="button text-cream-lighter bg-brick hover:bg-brick-dark"
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    Create Category
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default CreateCategory;
