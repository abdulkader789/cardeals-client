import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { useAuth } from "../../../context/AuthContext";
import CreateModal from "./CreateModal";


const CategorySection = () => {
    const [categories, setCategories] = useState([]);
    const { authData } = useAuth();
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [filteredCategories, setFilteredCategories] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const toggleCreateModal = () => {
        setCreateModalOpen(!isCreateModalOpen);
    };
    // Function to handle search input change
    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        // Filter categories based on the search term
        const filtered = categories.filter(category =>
            category.name.toLowerCase().includes(searchTerm)
        );

        setFilteredCategories(filtered);
    };


    const getAllCategories = async () => {

        try {
            if (!authData || !authData.token) {
                // Token is not available, handle accordingly
                return;
            }

            const response = await fetch("/api/category/get-all-categories", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                const data = await response.json();
                setCategories(data.categories);

                console.log('categories', categories)
            }



        } catch (error) {
            console.log("Error during categories:", error);
            // Handle errors, e.g., show an error message to the user
        }
    };
    useEffect(() => {
        getAllCategories()
    }, [])

    // React component
    const createCategory = async (name, status) => {
        try {
            const response = await fetch('/api/category/create-category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authData.token}`,
                },
                body: JSON.stringify({ name, status }),
            });

            if (response.ok) {
                console.log('Category created successfully');
                getAllCategories()
            } else {
                console.error('Failed to create category');
            }
        } catch (error) {
            console.error('Error creating category:', error);
        }
    };

    const updateCategory = async (categoryId, name, status) => {
        try {
            const response = await fetch(`/api/category/update-category/${categoryId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authData.token}`,
                },
                body: JSON.stringify({ categoryId, name, status }),
            });

            if (response.ok) {
                const updatedCategory = await response.json();
                console.log('Category updated successfully:', updatedCategory);
                getAllCategories()
            } else {
                console.error('Failed to update category');
            }
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };

    const deleteCategory = async (categoryId) => {
        try {
            const response = await fetch(`/api/category/delete-category/${categoryId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authData.token}`
                },
                body: JSON.stringify({ categoryId }),
            });

            if (response.ok) {
                console.log('Category deleted successfully');
                getAllCategories();
            } else {
                console.error('Failed to delete category');
            }
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };


    return (
        <div className="w-full flex-grow">
            <div className="flex  flex-col items-center space-y-6 md:space-y-0 md:flex-row justify-between p-5">
                <div className="mr-6 px-5">
                    <h1 className="text-4xl font-semibold mb-2">Category</h1>
                </div>
                <div className="flex flex-wrap items-start justify-end -mb-3">
                    <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">

                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>

                        Manage Category

                    </button>



                    <button onClick={toggleCreateModal} className="inline-flex px-5 py-3 text-white bg-red-400 hover:bg-red-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Create Category
                    </button>
                    {
                        isCreateModalOpen ? <CreateModal createCategory={createCategory} setCreateModalOpen={setCreateModalOpen} /> : null
                    }

                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    {/* <div>
                    <h2 className="text-2xl font-semibold leading-tight">Users</h2>
                </div> */}
                    <div className="my-2 flex sm:flex-row flex-col">
                        <div className="flex flex-row mb-1 sm:mb-0">
                            <div className="relative w-20">
                                <select
                                    className="appearance-none h-full  rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>
                                        {
                                            searchTerm.length > 0 ? filteredCategories.length : categories.length
                                        }
                                    </option>
                                    <option>10</option>
                                    <option>20</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative">
                                <select
                                    className="appearance-none  h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                    <option>All</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>


                        {/* Search Category Section */}

                        <div className="block relative w-full">
                            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                    <path
                                        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                    </path>
                                </svg>
                            </span>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                placeholder="Search categories..."

                                className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none " />
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead className='bg-green-300 h-16'>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            category name
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            category products
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            actions
                                        </th>
                                    </tr>
                                </thead>


                                {
                                    searchTerm.length > 0 ?
                                        filteredCategories.map(category => <CategoryItem key={category._id} category={category} updateCategory={updateCategory} deleteCategory={deleteCategory} />)

                                        : categories.map(category => <CategoryItem key={category._id} category={category} updateCategory={updateCategory} deleteCategory={deleteCategory} />)
                                }

                                {/* {
                                    categories.map(category => <CategoryItem key={category._id} category={category} updateCategory={updateCategory} deleteCategory={deleteCategory} />)
                                } */}


                            </table>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CategorySection;