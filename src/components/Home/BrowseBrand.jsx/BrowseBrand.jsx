import React, { useState } from "react";
import BrandCard from "./BrandCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const BrowseBrand = () => {
  const initialVisibleModels = 9;
  const [visibleModels, setVisibleModels] = useState(initialVisibleModels);
  const [showMore, setShowMore] = useState(false);

  const carModels = [
    {
      model: "Abarth",
      imageUrl:
        "https://www.abarth.com/content/dam/abarth/home/revamp/new/models/595-450x270.png",
    },
    {
      model: "Alfa Romeo",
      imageUrl:
        "https://www.alfaromeo.co.uk/content/dam/alfa/cross/homepage/trim/Trim-Tonale_Speciale.png",
    },
    {
      model: "Alpine",
      imageUrl:
        "https://www.pngitem.com/pimgs/m/669-6695336_2020-jeep-grand-cherokee-srt-jeep-grand-cherokee.png",
    },
    {
      model: "Aston Martin",
      imageUrl:
        "https://i.pinimg.com/originals/f5/60/60/f560606df1586d97fb568d3052ef0715.png",
    },
    {
      model: "Bentley",
      imageUrl:
        "https://imgcdn.oto.com/large/gallery/color/2/395/bentley-continental-color-393231.jpg",
    },
    {
      model: "BMW",
      imageUrl:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/132513/7-series-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
    {
      model: "Citroen",
      imageUrl:
        "https://www.rogalandbilutleie.no/wp-content/uploads/2020/12/c4.jpg",
    },
    {
      model: "Ferrari",
      imageUrl:
        "https://www.novitecgroup.com/assets/images/news/ferrari/296-GTB-x2/296gtbb__FocusFillWzU1OCwyOTksZmFsc2UsMF0.jpg",
    },
    {
      model: "Fiat",
      imageUrl:
        "https://lb.assets.fiat.com/vl-picker-service/rest/getImage?source=stocklocator&consumer=responsive&market=1000&brand=00&model=3120H&mmvs=003120DG0000&body=268&seat=243&angle=3&view=EXT&width=1024&height=576&background=FFFFFF",
    },
    {
      model: "Ford",
      imageUrl:
        "https://www.ford.ca/cmslibs/content/dam/brand_ford/en_ca/brand/suvs-crossovers/landing_page/3-2/2022/Explorer.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
    },
    {
      model: "Honda",
      imageUrl:
        "https://i.pinimg.com/600x315/79/23/e4/7923e475d965b041ddf80ff6126d4e9b.jpg",
    },
    {
      model: "Hyundai",
      imageUrl:
        "https://s7d1.scene7.com/is/image/hyundai/2024-kona-limited-fwd-soultronic-orange-pearl-centered-browse-hero:Browse?fmt=webp-alpha",
    },
    {
      model: "Jaguar",
      imageUrl:
        "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Jaguar-F-Pace-100520231603.jpg",
    },
  ];

  const toggleShowMore = () => {
    setShowMore(!showMore);
    setVisibleModels(showMore ? initialVisibleModels : carModels.length);
  };

  return (
    <div className="min-h-[90vh]">
      <header>
        <h1 className="my-10 montserrat-regular text-center text-4xl font-roboto tracking-tight text-gray-900">
          <span className="block xl:inline capitalize">Browse By Brands</span>
        </h1>
      </header>
      <section className="grid grid-cols-2 lg:grid-cols-3 w-full lg:w-[70vw] mx-auto">
        {carModels.slice(0, visibleModels).map((car, index) => (
          <BrandCard key={index} data={car} />
        ))}
      </section>
      {carModels.length > initialVisibleModels && (
        <div className="show-more my-4 text-center flex justify-center">
          <button
            className="text-xl roboto-medium flex items-center justify-center space-x-2"
            onClick={toggleShowMore}
          >
            {showMore ? (
              <FontAwesomeIcon className="mr-3" icon={faMinus} />
            ) : (
              <FontAwesomeIcon className="mr-3" icon={faPlus} />
            )}
            {showMore ? "Hide All Brands" : "Show All Brands"}
          </button>
        </div>
      )}
    </div>
  );
};

export default BrowseBrand;
