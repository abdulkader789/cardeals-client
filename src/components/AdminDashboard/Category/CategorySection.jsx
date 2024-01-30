
import SectionHeader from "../utils/SectionHeader";
import SearchBar from "../utils/SearchBar";

import TableContainer from "../utils/TableContainer";
import { useCategory } from "../../../context/CategoryContext";
import { useState } from "react";


const CategorySection = () => {
    const { categoryData, setCategoryData } = useCategory()
    const [filteredCategories, setFilteredCategories] = useState([]);
    const handleDelete = (deletedItemId) => {
        // Update the categoryData state to remove the deleted item
        setCategoryData(prevData => prevData.filter(item => item._id !== deletedItemId));
    };
    console.log('categoryData', categoryData)

    return (
        <div className="w-full flex-grow">
            <SectionHeader name="Category" redirect="/dashboard/createcategory" />
            <SearchBar data={categoryData} setFiltered={setFilteredCategories} />
            {
                filteredCategories.length > 0 ? <TableContainer infoRoute='categorydetails' onDelete={handleDelete} tableData={filteredCategories} updateRoute="updatecategory" deleteRoute='category/delete-category' />
                    : <TableContainer infoRoute='categorydetails' onDelete={handleDelete} tableData={categoryData} updateRoute="updatecategory" deleteRoute='category/delete-category' />
            }

        </div>
    );
};

export default CategorySection;