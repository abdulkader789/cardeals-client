import CategoryBar from '../Category/CategoryBar';
import Projects from './Projects';
import Tasks from './Tasks';
import Header from './Header';
import '../../../styles/Dashboard.css'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        < div className="sidebar fixed max-h-screen  h-screen bg-gray-800 text-blue-100 w- inset-y-0 left-0 transform transition duration-200 ease-in-out z-50" >
            <Header />
            <nav className="px-4 pt-4  scroller overflow-y-scroll max-h-[calc(100vh-64px)]" >
                <ul className="flex flex-col space-y-2">
                    <li className="text-sm text-gray-500 ">
                        <Link to='/dashboard'
                            className="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700 ">
                            <div className="pr-2">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>Dashboard </div>
                        </Link>
                    </li>
                    <div className="section border-b pt-4 mb-4 text-xs text-gray-600 border-gray-700 pb-1 pl-3">
                        Work
                    </div>
                    <li className="text-sm text-gray-500 ">
                        <a href="#"
                            className="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700 ">
                            <div className="pr-2">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                            <div>Tasks </div>
                        </a>
                    </li>
                    <li className="text-sm text-gray-500 ">
                        <a href="#"
                            className="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700 ">
                            <div className="pr-2">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>Errors & Bugs </div>
                        </a>
                    </li>

                    {/* Section Devider  */}
                    <div className="section border-b pt-4 mb-4 text-xs text-gray-600 border-gray-700 pb-1 pl-3">
                        Managment
                    </div>

                    <CategoryBar />
                    <Projects />
                    <Tasks />

                </ul>
            </nav>

        </div>





    )
};

export default Sidebar;