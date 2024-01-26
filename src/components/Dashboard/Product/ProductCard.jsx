import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (


        <div className="w-72 h-fit group mx-10">
            <Link to={`shop/product/${product._id}`}>
                <div className="relative overflow-hidden">

                    <img className="h-80 w-full object-cover" src={product.url} alt="" />
                    <div className="absolute h-full w-full bg-black/20 flex items-end justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="bg-black text-white py-2 px-5 w-full">Shop Now</button>
                    </div>
                </div>
            </Link>
            <div className="flex">
                <h2 className="mt-3 text-xl capitalize  mr-3">{product.name}</h2>
                <h2 className="text-red-700 mt-3 text-xl capitalize">{product.model}</h2>

            </div>
            <p className="text-xl mt-2 ml-1 inline-block">Price ${product.price}</p>
        </div >

    );
};

export default ProductCard;