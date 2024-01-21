import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import CategoryItem from "./CategoryItem";

const CategorySection = () => {
    const [categories, setCategories] = useState([]);
    const { authData } = useAuth();

    useEffect(() => {
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
        getAllCategories()
    }, [])

    return (
        <div className="w-full flex-grow">
            <div className="flex  flex-col items-center space-y-6 md:space-y-0 md:flex-row justify-between p-5">
                <div className="mr-6">
                    <h1 className="text-4xl font-semibold mb-2">Category</h1>
                    <h2 className="text-gray-600 ml-0.5">Mobile UX/UI Design</h2>
                </div>
                <div className="flex flex-wrap items-start justify-end -mb-3">
                    <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">

                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>

                        Manage Category

                    </button>



                    <button className="inline-flex px-5 py-3 text-white bg-red-400 hover:bg-red-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Create Category
                    </button>
                </div>
            </div>

            <CategoryItem categories={categories} />
        </div>
    );
};

export default CategorySection;