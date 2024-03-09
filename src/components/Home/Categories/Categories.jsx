// import { useState } from 'react';
// import ProductCard from '../AdminDashboard/Product/ProductCard';
// import { Link } from 'react-router-dom';
// import { useProduct } from '../../context/ProductContext';
// import { useCategory } from '../../context/CategoryContext';

// const Hero = () => {



//     const { productData } = useProduct()
//     const { categoryData } = useCategory()
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const [isSelected, setSelected] = useState(false)
//     console.log(productData)
//     const handleCategoryClick = (categoryId) => {

//         if (categoryId === 'all') {
//             // Show only the first 9 products when 'All Products' is clicked
//             setFilteredProducts(productData.slice(0, 6));
//             setSelected(false)
//         } else {
//             // Filter products by category
//             setSelected(true)
//             const filtered = productData.filter(product => product.category === categoryId);
//             setFilteredProducts(filtered);
//         }
//     };


//     return (
//         <div className='p-10'>
//             <h1 className=" mb-10 text-center text-4xl font-roboto tracking-tight text-gray-900 ">
//                 <span className="block  xl:inline capitalize">popular categories</span>
//             </h1>
//             <section className=''>
//                 <ul className='flex justify-center flex-wrap bg-gray-200 py-2'>
//                     <li className='hover:shadow-md border-[1px] hover:border-indigo-700 font-roboto cursor-pointer h-16 flex items-center justify-center w-40 ' onClick={() => handleCategoryClick('all')}>All Products</li>
//                     {categoryData?.map(category => (
//                         <li className='font-roboto hover:shadow-md border-[1px] hover:border-indigo-700 bg-white  cursor-pointer  h-16 flex items-center justify-center w-40  ' key={category.id} onClick={() => handleCategoryClick(category._id)}>{category.name}</li>
//                     ))}

//                 </ul>
//             </section>

//             {
//                 isSelected ?
//                     <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-5 mt-10 mb-5">
//                         {filteredProducts.map(product => (
//                             <ProductCard product={product} key={product._id} />
//                         ))}
//                     </section> :
//                     <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

//                         {productData?.slice(0, 6).map(product => (
//                             <ProductCard product={product} key={product._id} />
//                         ))}

//                     </section>
//             }
//             <div className='flex justify-center w-full pt-5'>
//                 <button className='w-1/3 font-roboto py-3 bg-violet-700 text-white'>
//                     <Link to='/shop'>See More</Link></button>
//             </div>

//         </div>
//     );
// };

// export default Hero;

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay } from 'swiper/modules';


const carCategories = [
    { category: "Abarth", imageUrl: "https://www.abarth.com/content/dam/abarth/home/revamp/new/models/595-450x270.png" },
    { category: "Alfa Romeo", imageUrl: "https://www.alfaromeo.co.uk/content/dam/alfa/cross/homepage/trim/Trim-Tonale_Speciale.png" },
    { category: "Alpine", imageUrl: "https://www.pngitem.com/pimgs/m/669-6695336_2020-jeep-grand-cherokee-srt-jeep-grand-cherokee.png" },
    { category: "Aston Martin", imageUrl: "https://i.pinimg.com/originals/f5/60/60/f560606df1586d97fb568d3052ef0715.png" },
    { category: "Bentley", imageUrl: "https://imgcdn.oto.com/large/gallery/color/2/395/bentley-continental-color-393231.jpg" },
    { category: "BMW", imageUrl: "https://imgd.aeplcdn.com/664x374/n/cw/ec/132513/7-series-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80" },
    { category: "Citroen", imageUrl: "https://www.rogalandbilutleie.no/wp-content/uploads/2020/12/c4.jpg" },
    { category: "Ferrari", imageUrl: "https://www.novitecgroup.com/assets/images/news/ferrari/296-GTB-x2/296gtbb__FocusFillWzU1OCwyOTksZmFsc2UsMF0.jpg" },
    { category: "Fiat", imageUrl: "https://lb.assets.fiat.com/vl-picker-service/rest/getImage?source=stocklocator&consumer=responsive&market=1000&brand=00&model=3120H&mmvs=003120DG0000&body=268&seat=243&angle=3&view=EXT&width=1024&height=576&background=FFFFFF" },
    { category: "Ford", imageUrl: "https://www.ford.ca/cmslibs/content/dam/brand_ford/en_ca/brand/suvs-crossovers/landing_page/3-2/2022/Explorer.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg" },
    { category: "Honda", imageUrl: "https://i.pinimg.com/600x315/79/23/e4/7923e475d965b041ddf80ff6126d4e9b.jpg" },
    { category: "Hyundai", imageUrl: "https://s7d1.scene7.com/is/image/hyundai/2024-kona-limited-fwd-soultronic-orange-pearl-centered-browse-hero:Browse?fmt=webp-alpha" },
    { category: "Jaguar", imageUrl: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Jaguar-F-Pace-100520231603.jpg" },
];

const Categories = () => {

    const backgroundImageUrl = "https://hedonistshedonist.com/wp-content/uploads/2021/12/road-trip.jpg";


    return (
        <div className="relative flex h-screen mb-10 bg-cover bg-center shadow-md" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <div className="absolute inset-0 bg-blue-500 opacity-25"></div>
            <div className="z-10 w-1/4 bg-blue-800 p-4 bg-opacity-50">
                <h2 className="text-xl font-bold mb-4">Our Most Popular Categories</h2>
                <p className="mb-4">Description goes here...</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    View More
                </button>
            </div>
            <div className="w-3/4 flex justify-center items-center px-5">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    autoplay={{ delay: 2000 }}
                    modules={[Autoplay]}
                    className="mySwiper h-[70vh]"

                >

                    {carCategories.map((category, index) => (
                        <SwiperSlide key={index} className='cursor-pointer'>
                            <div className=" h-full bg-white" >
                                <img src={category.imageUrl} alt={category.category} className="scale-75 h-[70%]" />
                                <h2 className=" h-full text-center font-bold text-xl">{category.category}</h2>
                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </div>
    );
};

export default Categories;
