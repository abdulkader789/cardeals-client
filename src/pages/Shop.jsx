

const Shop = () => {

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar with categories */}
            <div className="w-1/4 h-full bg-gray-200 px-4 py-8 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4">Categories</h2>
                <ul>

                </ul>
            </div>
            {/* Main content area */}
            <div className="w-3/4 h-full bg-gray-100 px-8 py-8 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4">Products</h2>
                <div className="grid grid-cols-3 gap-4">


                </div>
            </div>
        </div>
    );
};

export default Shop;
