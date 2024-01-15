import '../styles/Navbar.css'
// Navbar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className=" p-4">
            <div className="container mx-auto flex items-center justify-between navbar-container">
                {/* Left Side - Logo */}
                <div className="flex items-center">

                    <span className=" ml-2 text-lg font-bold">CarDeals</span>
                </div>

                {/* Right Side - Navigation Links for Larger Screens */}
                <div className="hidden md:flex items-center space-x-10">
                    <a href="#" className="uppercase nav-text">
                        Home
                    </a>
                    <a href="#" className="uppercase nav-text">
                        Shop
                    </a>
                    <a href="#" className="uppercase nav-text">
                        Register
                    </a>
                    <a href="#" className="uppercase nav-text">
                        Login
                    </a>

                    {/* Font Awesome Icons */}
                    <FontAwesomeIcon icon={faSearch} className=" cursor-pointer nav-icon" />
                    <FontAwesomeIcon icon={faUser} className=" cursor-pointer nav-icon" />
                    <FontAwesomeIcon icon={faShoppingCart} className="cursor-pointer nav-icon" />
                </div>


                {/* Font Awesome Icons */}
                <FontAwesomeIcon icon={faSearch} className="md:hidden cursor-pointer nav-icon" />
                <FontAwesomeIcon icon={faUser} className="md:hidden cursor-pointer nav-icon" />
                <FontAwesomeIcon icon={faShoppingCart} className="md:hidden cursor-pointer nav-icon" />
                {/* Responsive Navigation Toggle for Smaller Screens */}
                <div className="md:hidden flex items-center">
                    <FontAwesomeIcon
                        icon={isNavOpen ? faTimes : faBars}
                        className={` cursor-pointer navbar-toggle-icon `}
                        onClick={toggleNav}
                    />
                </div>
                {/* Responsive Navigation Links */}
                <div
                    className={`md:hidden bg-slate-200 absolute top-16 left-0 right-0  navbar-links transition-max-height duration-500 ${isNavOpen ? 'open py-5' : ''
                        }`}
                >
                    <div className="flex flex-col space-y-2 pl-12">
                        <a href="#" className="uppercase nav-text">
                            Home
                        </a>
                        <a href="#" className="uppercase nav-text">
                            Shop
                        </a>
                        <a href="#" className="uppercase nav-text">
                            Register
                        </a>
                        <a href="#" className="uppercase nav-text">
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
