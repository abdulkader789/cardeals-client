// import VideoPlayer from "../components/utils/VideoPlayer";

// import CarModels from "../components/CarModels/CarModels";
// import Categories from "../components/Home/Categories";
import BrowseCategory from "../components/Home/BrowseCategory/BrowseCategory";
import Categories from "../components/Home/Categories/Categories";
import { BannerCarousel } from "../components/Home/BannerCarousel/BannerCarousel";
import TestForm from "../components/TestForm";
import TestHero from "../components/TestHero";
import BrowseBrand from "../components/Home/BrowseBrand/BrowseBrand";
import FeaturedCar from "../components/Home/FeaturedCar/FeaturedCar";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <BannerCarousel />
      <BrowseCategory />
      <BrowseBrand />
      <FeaturedCar />

      {/* <TrustReasons />

            <BuyReasons /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
