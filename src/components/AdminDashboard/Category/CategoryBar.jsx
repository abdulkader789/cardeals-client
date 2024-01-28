import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
const CategoryBar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    };

    return (



        <li className="text-sm text-gray-500 ">

            <button onClick={handleClick}
                className="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700">

                <div className="pr-2">
                    <FontAwesomeIcon icon={faTags} />

                </div>
                <div>Category</div>
                <div className="absolute right-1.5 transition-transform duration-300">


                    <svg className=" h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>




            <div className={`${click ? 'max-h-24' : 'overflow-hidden max-h-0'}  pl-4 pr-2  transition-all transform translate duration-300 `}>

                <ul className="flex flex-col mt-2 pl-2 text-gray-500 border-l border-gray-700 space-y-1 text-xs">
                    {/* <!-- Item --> */}
                    <li className="text-sm text-gray-500 ">
                        <Link to='/dashboard/category'>
                            <button
                                className="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700">
                                <div>Manage Category </div>
                            </button>
                        </Link>
                    </li>

                    {/* <!-- Item --> */}
                    <li className="text-sm text-gray-500 ">
                        <Link to='/dashboard/createcategory'>
                            <button
                                className="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700">
                                <div> Create Category </div>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </li>


    );
};

export default CategoryBar;