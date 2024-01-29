import { useEffect, useState } from "react";
import { useUsers } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { useOrders } from "../../context/OrderContext";
import { useProduct } from "../../context/ProductContext";

const Overview = () => {
    const background = {
        users: '#2e94b9',
        pending: '#fdb44b',
        process: '#5be7a9',
        income: '#44c662'
    }
    const { ordersData } = useOrders()
    const { usersData } = useUsers()
    const { productData } = useProduct()
    // Empty dependency array to ensure the effect runs only once
    const pendingOrders = ordersData.filter(order => order.status === 'Pending');
    const confirmedOrders = ordersData.filter(order => order.status === 'Confirmed');
    const confirmedOrderIds = confirmedOrders.map(order => order.productId);
    const [confirmedProducts, setConfirmedProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    // Make a request to fetch all confirmed orders based on their IDs
    useEffect(() => {
        async function fetchConfirmedOrders() {
            try {
                const response = await fetch('/api/order/get-all-confirmed-orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ ids: confirmedOrderIds })
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch confirmed orders');
                }
                const data = await response.json();
                // Handle the response data
                setConfirmedProducts(data.products)
                setTotalPrice(data.totalPrice)
                console.log('Confirmed products:', data.products);
                console.log('Confirmed total price:', data.totalPrice);
            } catch (error) {
                console.error('Error:', error.message);
            }
        }

        fetchConfirmedOrders();
    }, []);
    return (
        <main className="p-6 sm:p-10 space-y-6">

            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                <Link to="/dashboard/userlist">
                    <div style={{ backgroundColor: background.users }} className="flex items-center p-8  shadow rounded-sm">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className="cursor-pointer">
                            <span className="block text-2xl text-white font-bold">{usersData && usersData.length}</span>
                            <span className="block text-white">Total <br></br>Users</span>
                        </div>
                    </div>
                </Link>


                <Link to='/dashboard/orders'>
                    <div style={{ backgroundColor: background.pending }} className="flex items-center p-8  shadow rounded-sm">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <div>
                            <span className="block text-2xl text-white font-bold">{ordersData && ordersData.length}</span>
                            <span className="block text-white">Total<br></br>Orders</span>
                        </div>
                    </div>
                </Link>


                {/* <div style={{ backgroundColor: background.process }} className="flex items-center p-8  shadow rounded-sm">
                    <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                        </svg>
                    </div>
                    <div>
                        <span className="inline-block text-2xl text-white font-bold">{confirmedOrders.length}</span>

                        <span className="block text-white">Order Confirmed</span>
                    </div>
                </div> */}


                <div style={{ backgroundColor: background.income }} className="flex items-center p-8  shadow rounded-sm">
                    <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <div>
                        <span className="block text-2xl text-white font-bold">${totalPrice}</span>
                        <span className="block text-white">Total Income</span>
                    </div>
                </div>


            </section>

            {/* {render === 'profile' && <Profile />}
                        {render === 'alldonators' && <AllDonators />} */}

        </main>
    );
};

export default Overview;