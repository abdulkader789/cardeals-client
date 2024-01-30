import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useOrders } from "../context/OrderContext";


const CartPage = () => {
    const { ordersData } = useOrders();
    const { authData } = useAuth();


    // Filter ordersData to include only orders of the authenticated user
    const userOrders = ordersData?.filter(order => order.userId === authData.user._id);

    return (

        authData ? (
            <div className="bg-gray-100" >
                < div className="container mx-auto mt-10" >
                    <div className="flex shadow-md my-10">
                        <div className="w-3/4 bg-white px-10 py-10">
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                                <h2 className="font-semibold text-2xl">{userOrders.length} Items</h2>
                            </div>
                            {userOrders.map(order => (
                                <div key={order._id} className="p-4 border rounded-md shadow-md">
                                    <img src={`/api/product/get-product-photo/${order.product._id}`} />
                                    <h3 className="text-lg font-semibold mb-2">{order.product.name}</h3>
                                    <p className="text-gray-600">{order.product.description}</p>
                                    <p className="text-gray-700 mt-2">Price: ${order.product.price}</p>
                                </div>
                            ))}



                        </div>


                    </div>
                </div >
            </div >)
            :
            (
                <div className="bg-red-500 p-4 rounded-md text-white text-center">
                    <p className="font-semibold">Login to see your orders</p>
                    <Link to="/login" className="text-white underline">Login</Link>
                </div>
            )


    );
};

export default CartPage;