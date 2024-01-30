import { Link } from 'react-router-dom'
import '../../../styles/Product.css'
const ProductCard = ({ product }) => {
    console.log(product)
    return (


        <div className="w-72 h-80 group mx-10 product-container">
            <Link to={`/shop/product/${product._id}`} className='h-full'>
                <div className="h-[75%]">

                    {/* <img className="h-80 w-full object-cover" src={`/api/product/get-product-photo/${product._id}`} alt="" /> */}
                    <img className="h-full w-full " src={product.url} alt="" />

                </div>

                <div className='h-full p-5 font-roboto'>
                    <div className="flex">
                        <h2 className="text-xl capitalize ">{product.name} </h2>
                        <h2 className="text-red-700  text-xl capitalize">{product.model}</h2>
                    </div>
                    <div>
                        <p className="text-md  inline-block">Price ${product.price}</p>
                    </div>

                </div>

            </Link>
        </div >

    );
};

export default ProductCard;