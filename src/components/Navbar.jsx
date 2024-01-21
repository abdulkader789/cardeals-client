import '../styles/Navbar.css'
// Navbar.js
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
const NavLinks = ({ visibility, homeNav }) => {

    return (
        <div className='ml-10'>
            <ul className={`${visibility} text-center  lg:flex items-center justify-center lg:space-y-0 lg:space-x-10 space-y-10`}>
                <li><Link to='/home' className={`${homeNav} uppercase nav-text pl-10`}>home</Link></li>
                <li><Link to='/shop' className="uppercase nav-text">shop</Link></li>
                <li><Link to='/about' className="uppercase nav-text">about</Link></li>
                <li><Link to='/contact' className="uppercase nav-text">contact</Link></li>
                <li><Link to='/login' className="uppercase nav-text">login</Link></li>
            </ul>
        </div>
    )

}

const NavIcons = ({ visibility }) => {
    const { authData } = useAuth()
    const isLoggedIn = authData && authData.user;

    // Determine the role if the user is logged in, otherwise set it to 'user'
    const role = isLoggedIn ? (authData.user.role === 1 ? 'admin' : 'user') : 'user';

    return (
        <div className={`${visibility} md:flex items-center space-x-10 `} >
            <Link to='' className='icon-link'>
                <FontAwesomeIcon icon={faSearch} className=" cursor-pointer nav-icon" />
            </Link >
            <Link to='/dashboard' className='icon-link'>
                <FontAwesomeIcon icon={faUser} className=" cursor-pointer nav-icon" />
            </Link>
            <Link to='/checkout' className='icon-link relative'>
                <FontAwesomeIcon icon={faShoppingCart} className="cursor-pointer nav-icon" />
                <span className='cart-nav bg-red-500 absolute -top-1 left-6 text-white'>5</span>
            </Link>

        </div>
    )
}


const Navbar = () => {
    const { authData } = useAuth();
    const isTokenExists = authData && authData.token;

    // If the token doesn't exist, redirect to the login page


    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const location = useLocation();


    // If the token doesn't exist or the path is "/dashboard", do not render the Navbar
    if (isTokenExists || location.pathname.startsWith('/dashboard')) {
        return null;
    }
    return (
        <nav className=" px-4 py-2 ">
            <div className="container mx-auto flex items-center justify-between navbar-container">
                <div className="flex items-center">

                    <span className="text-2xl nav-logo font-extrabold uppercase ml-2 p-2 text-blue-600">
                        <Link to='/home'>cardeals</Link>
                    </span>
                </div>
                <div className='flex space-x-8'>
                    <div className='mt-1'>
                        <NavLinks visibility={'hidden'} homeNav={'home-nav'} />
                    </div>
                    <NavIcons visibility={'hidden'} />
                </div>


                {/* Responsive Navigation Toggle for Smaller Screens */}

                <div className="lg:hidden flex items-center">
                    <FontAwesomeIcon
                        icon={isNavOpen ? faTimes : faBars}
                        className={` cursor-pointer navbar-toggle-icon `}
                        onClick={toggleNav}
                    />
                </div>
                <div
                    className={`lg:hidden bg-slate-200 absolute top-16 left-0 right-0  navbar-links transition-max-height duration-500 ${isNavOpen ? 'open py-5' : ''
                        }`}
                >
                    <NavLinks visibility={'block'} />

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
