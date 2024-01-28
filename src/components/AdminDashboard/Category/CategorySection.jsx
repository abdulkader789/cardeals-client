import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { useAuth } from "../../../context/AuthContext";
import CreateModal from "./CreateModal";
import { Link } from "react-router-dom";
import SectionHeader from "../utils/SectionHeader";
import SearchBar from "../utils/SearchBar";

import TableContainer from "../utils/TableContainer";
import { useCategory } from "../../../context/CategoryContext";


const CategorySection = () => {
    const { categoryData } = useCategory()
    const [filteredCategories, setFilteredCategories] = useState([]);
    console.log('categoryData', categoryData)

    return (
        <div className="w-full flex-grow">
            <SectionHeader name="Category" redirect="/dashboard/createcategory" />
            <SearchBar data={categoryData} setFiltered={setFilteredCategories} />
            {
                filteredCategories.length > 0 ? <TableContainer tableData={filteredCategories} />
                    : <TableContainer tableData={categoryData} />
            }

        </div>
    );
};

export default CategorySection;