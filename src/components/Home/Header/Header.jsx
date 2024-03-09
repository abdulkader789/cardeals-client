







// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';








export const Header = () => {


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




    return (
        <section>
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


        </section >
    );
};