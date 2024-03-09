import ImageSlideshow from "../ImageSlideshow";
import '../../styles/Home.css'
import { useProduct } from "../../context/ProductContext";
import { useEffect, useState, useRef } from "react";
import { useSearch } from "../../context/SearchContext";
import { Link } from "react-router-dom";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';





import CarouselItem from "../utils/CarouselItem";


export const Header = () => {
    const { searchQuery, setSearchQuery } = useSearch()
    const { productData } = useProduct();

    const items = [
        {
            url: 'https://media.assettype.com/evoindia%2F2023-05%2F6f0d2cc9-0fce-4680-96e3-1683597af208%2FGT63_EPerformance_15__1_.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100',
            model: 'Mercedes-AMG GT 63 S E Performance',
            price: '$XXX,XXX',
            redirect: '/mercedes-gt63s',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            url: 'https://cdn.motor1.com/images/mgl/G33JZA/s3/bentley-mulliner-batur.jpg',
            model: 'Bentley Mulliner Bacalar',
            price: '$XXX,XXX',
            redirect: '/bentley-bacalar',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            url: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds',
            model: 'Rolls-Royce Phantom',
            price: '$XXX,XXX',
            redirect: '/rolls-royce-phantom',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ];




    const handleProductSelect = (event) => {
        const selectedProductId = event.target.value; // Get the selected product ID
        const selectedProduct = productData.find(product => product._id === selectedProductId); // Find the selected product object by ID

        setSearchQuery(prevSearchQuery => ({
            ...prevSearchQuery,
            _id: selectedProduct._id,
            name: selectedProduct.name,
            model: selectedProduct.model
        }));
    };



    useEffect(() => {
        console.log('Selected product name:', searchQuery.name, searchQuery._id);
    }, [searchQuery.name, searchQuery._id]);


    return (
        <section className="w-full relative h-full ">


            {/* <main className="header-bg">
                <div className="h-[300px] container mx-auto flex  md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start px-10 md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="capitalize  sm:text-4xl text-white text-4xl mb-4 font-extrabold font-roboto">it's time to
                            <br className="hidden lg:inline-block" />buy your dream ride
                        </h1>
                        <p className="mb-8 text-white leading-relaxed font-roboto">Discover a wide range of vehicles and unbeatable deals. From sleek sedans to powerful SUVs, find your perfect ride at Car Deals. Our curated selection and exclusive offers make car shopping a breeze.
                        </p>
                        <div className="flex justify-center">
                            <button className="inline-flex capitalize font-bold text-black bg-white border-0 py-2 px-6 focus:outline-none hover:text-white hover:bg-indigo-600 rounded text-lg">about cardeals</button>

                        </div>
                    </div>
                    <div className="h-full  md:w-1/2 w-1/2">
                        <img src="https://media.istockphoto.com/id/1167991014/photo/modern-blue-sports-car-in-a-gentle-light-on-black-background.jpg?s=612x612&w=0&k=20&c=szCbC--4de-XfIzSy9Q6vUTknUP9Are6SRRbBo74d0o=" className="h-full" />

                    </div>
                </div>
            </main>

          
            <div className="flex justify-center items-center h-28 p-7 rounded-sm shadow-sm bg-gray-200">
                <div className="w-1/2 h-full">
                    <select
                        onChange={handleProductSelect}
                        id="product"
                        className="w-full font-roboto h-full border border-gray-300"
                    >
                        <option value="" disabled selected>Select Product</option>
                        {productData?.map((product) => (
                            <option key={product._id} value={product._id}>
                                {product.name} {product.model}
                            </option>
                        ))}
                    </select>

                </div>
                <div className="w-1/2 h-full">
                    <Link to={`/shop/product/${searchQuery._id}`}>
                        <button className="w-full font-roboto capitalize h-full px-4 py-2 bg-gray-100 hover:text-white hover:bg-violet-600">
                            Search
                        </button>
                    </Link>
                </div>
            </div>

 */}
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={false}

                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 2000 }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}


                className="mySwiper "
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-screen">
                            <img src={item.url} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                            <div className="absolute left-20 top-1/2 transform -translate-y-1/2 text-white p-6">
                                <h2 className="text-5xl outfit-bold">{item.model}</h2>
                                <div className="flex items-center">
                                    <p className="text-lg mr-2">{item.price}</p>
                                </div>
                                <p className="text-sm">{item.description}</p>
                                <div className="mt-4 flex">
                                    <a href={item.redirect} className="bg-orange-500 text-white px-12 py-4 rounded-full mr-2 hover:bg-white hover:text-black transition duration-300">View Details</a>
                                    <button className="bg-transparent border border-white text-white px-12 py-4  rounded-full">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


        </section>
    );
};