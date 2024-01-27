

// const CategoryList = () => {
//     return (
//         <div>
//             <section className="mx-auto w-fit p-12">

//                 <div className="w-72 h-fit group">
//                     <div className="relative overflow-hidden">
//                         <img className="h-96 w-full object-cover" src="https://images.unsplash.com/photo-1659576294143-1da218a2d82e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
//                         <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                             <button className="bg-black text-white py-2 px-5">Add to cart</button>
//                         </div>
//                     </div>
//                     <h2 className="mt-3 text-xl capitalize">Straw Hat</h2>
//                     <del className="text-red-700 text-lg">$49</del>
//                     <p className="text-xl mt-2 ml-1 inline-block">$35</p>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default CategoryList;



const CategoryList = () => {
    return (

        <div>
            <div className="flex items-center bg-indigo-100 " >
                <div className="container ml-auto mr-auto flex flex-wrap items-start">

                    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                        <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                            <figure className="mb-2">
                                <img src="https://srv-cdn.onedio.com/store/bf2cbc886120f284ef46fd92a48f5fb58c62e6a50fbdf8fa796d057dd0ddc242.png" alt="" className="h-64 ml-auto mr-auto" />
                            </figure>
                            <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                                <div>
                                    <h5 className="text-white text-2xl font-bold leading-none">
                                        iPhone 11 Pro Max
                                    </h5>
                                    <span className="text-xs text-gray-400 leading-none">And then there was Pro.</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-lg text-white font-light">
                                        $1099,00
                                    </div>
                                    <button href="javascript:;" className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current m-auto">
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;