
const Projects = () => {
    return (
        <li className="text-sm text-gray-500 ">
            <a href="#"
                className="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700">

                <div className="pr-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                </div>
                <div>Projects</div>
                <div className="absolute right-1.5 transition-transform duration-300">


                    <svg className=" h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </a>



            <div className="pl-4 pr-2 overflow-hidden transition-all transform translate duration-300 max-h-0 "
            >


                <ul className="flex flex-col mt-2 pl-2 text-gray-500 border-l border-gray-700 space-y-1 text-xs">
                    {/* <!-- Item --> */}
                    <li className="text-sm text-gray-500 ">
                        <a href="#"
                            className="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700">
                            <div>List </div>
                        </a>
                    </li>
                    {/* <!-- Item --> */}
                    <li className="text-sm text-gray-500 ">
                        <a href="#"
                            className="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700">
                            <div> Create Project </div>
                        </a>
                    </li>
                </ul>
            </div>
        </li>

    );
};

export default Projects;