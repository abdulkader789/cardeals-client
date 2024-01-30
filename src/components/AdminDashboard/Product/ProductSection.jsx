
import SectionHeader from "../utils/SectionHeader";
import SearchBar from "../utils/SearchBar";

import TableContainer from "../utils/TableContainer";
import { useProduct } from "../../../context/ProductContext";
import { useState } from "react";


const ProductSection = () => {
    const { productData, setProductData } = useProduct()
    const [filteredProducts, setFilteredProducts] = useState([]);
    const handleDelete = (deletedItemId) => {
        // Update the ProductData state to remove the deleted item
        setProductData(prevData => prevData.filter(item => item._id !== deletedItemId));
    };
    console.log('ProductData', productData)

    return (
        <div className="w-full flex-grow">
            <SectionHeader name="Product" redirect="/dashboard/createProduct" />
            <SearchBar data={productData} setFiltered={setFilteredProducts} />
            {
                filteredProducts.length > 0 ? <TableContainer photoRoute={'product/get-product-photo'} infoRoute='productdetails' onDelete={handleDelete} tableData={filteredProducts} updateRoute="updateProduct" deleteRoute='product/delete-product' />
                    : <TableContainer photoRoute={'product/get-product-photo'} infoRoute='productdetails' onDelete={handleDelete} tableData={productData} updateRoute="updateproduct" deleteRoute='product/delete-product' />
            }

        </div>
    );
};

export default ProductSection;