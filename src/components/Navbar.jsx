import '../styles/Navbar.css'
// Navbar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
const NavLinks = ({ visibility }) => {
    return (
        <div className='ml-10'>
            <ul className={`${visibility} lg:flex items-center space-x-10`}>
                <li><Link to='/home' className="uppercase nav-text pl-10">home</Link></li>
                <li><Link to='/shop' className="uppercase nav-text">shop</Link></li>
                <li><Link to='/about' className="uppercase nav-text">about</Link></li>
                <li><Link to='/contact' className="uppercase nav-text">contact</Link></li>
                <li><Link to='/login' className="uppercase nav-text">login</Link></li>
            </ul>
        </div>
    )

}

const NavIcons = ({ visibility }) => {
    return (
        <div className={`${visibility} md:flex items-center space-x-10 `} >
            <Link to='' className='icon-link'>
                <FontAwesomeIcon icon={faSearch} className=" cursor-pointer nav-icon" />
            </Link >
            <Link to='/dashboard' className='icon-link'>
                <FontAwesomeIcon icon={faUser} className=" cursor-pointer nav-icon" />
            </Link>
            <Link to='/checkout' className='icon-link '>
                <FontAwesomeIcon icon={faShoppingCart} className="cursor-pointer nav-icon text-red-400" />
            </Link>

        </div>
    )
}


const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className=" px-4 py-2">
            <div className="container mx-auto flex items-center justify-between navbar-container">
                <div className="flex items-center">
                    <span className="nav-logo font-extrabold ml-2 text-blue-600 p-2  uppercase">CarDeals</span>
                </div>
                <div className='flex space-x-8'>
                    <div className='mt-1'>
                        <NavLinks visibility={'hidden'} />
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
