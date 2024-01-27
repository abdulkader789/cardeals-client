import { useState } from 'react';
import ProductCard from '../AdminDashboard/Product/ProductCard';
import { Link } from 'react-router-dom';
import { useProduct } from '../../context/ProductContext';
import { useCategory } from '../../context/CategoryContext';

const Hero = () => {

    const { productData } = useProduct()
    const { categoryData } = useCategory()
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isSelected, setSelected] = useState(false)
    console.log(productData)
    const handleCategoryClick = (categoryId) => {

        if (categoryId === 'all') {
            // Show only the first 9 products when 'All Products' is clicked
            setFilteredProducts(productData.slice(0, 6));
            setSelected(false)
        } else {
            // Filter products by category
            setSelected(true)
            const filtered = productData.filter(product => product.category === categoryId);
            setFilteredProducts(filtered);
        }
    };


    return (
        <div className='p-10'>
            <h1 className=" mb-10 text-center text-4xl font-roboto tracking-tight text-gray-900 ">
                <span className="block  xl:inline capitalize">popular categories</span>
            </h1>
            <section className=''>
                <ul className='flex justify-center flex-wrap bg-gray-200 py-2'>
                    <li className='hover:shadow-md border-[1px] hover:border-indigo-700 font-roboto cursor-pointer h-16 flex items-center justify-center w-40 ' onClick={() => handleCategoryClick('all')}>All Products</li>
                    {categoryData?.map(category => (
                        <li className='font-roboto hover:shadow-md border-[1px] hover:border-indigo-700 bg-white  cursor-pointer  h-16 flex items-center justify-center w-40  ' key={category.id} onClick={() => handleCategoryClick(category._id)}>{category.name}</li>
                    ))}

                </ul>
            </section>

            {
                isSelected ?
                    <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-5 mt-10 mb-5">
                        {filteredProducts.map(product => (
                            <ProductCard product={product} key={product._id} />
                        ))}
                    </section> :
                    <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                        {productData?.slice(0, 6).map(product => (
                            <ProductCard product={product} key={product._id} />
                        ))}

                    </section>
            }
            <div className='flex justify-center w-full pt-5'>
                <button className='w-1/3 font-roboto py-3 bg-violet-700 text-white'>
                    <Link to='/shop'>See More</Link></button>
            </div>

        </div>
    );
};

export default Hero;
