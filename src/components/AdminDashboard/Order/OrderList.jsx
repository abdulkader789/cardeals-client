import React from 'react';
import ItemRow from '../utils/ItemRow';
import { useOrders } from '../../../context/OrderContext';

const OrderList = () => {
    const { ordersData } = useOrders();



    // Modify ordersData to set productId as name
    const modifiedOrdersData = ordersData.map(order => {
        return {
            ...order,
            name: order.productId // Set productId as the name property
        };
    });

    return (
        <div className='bg-gray-200 p-10'>
            {/* Search User Section */}

            <h2 className='font-extrabold text-4xl mb-5'>All Orders {ordersData.length}</h2>

            <section>
                <div className="flex items-center px-5 py-2">
                    <span className="w-1/4">
                        <span className="text-xs uppercase text-gray-600 font-bold">Order Id</span>
                    </span>
                    <span className="w-1/4">
                        <span className="text-xs uppercase text-gray-600 font-bold">Product Id</span>
                    </span>

                    <span className="w-1/4">
                        <span className="text-xs uppercase text-gray-600 font-bold">Created At</span>
                    </span>
                    <span className="w-1/4">
                        <span className="text-xs uppercase text-gray-600 font-bold">More Details</span>
                    </span>
                </div>

                {modifiedOrdersData?.map(item => <ItemRow key={item._id} redirect={'orderdetails'} item={item} />)}

            </section>
        </div>
    );
};

export default OrderList;
