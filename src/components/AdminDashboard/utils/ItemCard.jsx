

const ItemCard = ({ item }) => {

    return (





        <div className="hover:bg-gray-200 cursor-pointer bg-white shadow flex p-5 items-center mb-5 rounded-lg">

            <div className="w-1/4 mr-5">
                <span className="capitalize text-gray-600 text-sm">{item._id}</span>
            </div>

            <div className="w-1/2">
                <div className="flex items-center">
                    <img src={item.url || 'No Photo Found'} className="rounded-full" />
                    <div className="ml-4">
                        <span className="capitalize block text-gray-800">{item.name}</span>
                        <span className="text-sm block text-gray-600">{item.email}</span>
                        <span className="text-sm block text-gray-600">{item.phone}</span>
                    </div>

                </div>
            </div>

            <div className="w-1/4">
                <span className="capitalize text-gray-600 text-sm"></span>
            </div>
            <div className="w-1/4">
                <span className="text-gray-600 text-sm"></span>
            </div>
            <div className="w-1/4">
                <span className="text-gray-600 text-sm"></span>
            </div>
        </div>

    );
};

export default ItemCard;
