import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'; // Import arrow icons
import CONSTANTS from '../../constants/constants';
import { useMobileNav } from '../../context/MobileNavContext';
import NavIcons from './NavIcons';

const NavLinks = () => {
    const { handleClick } = useMobileNav()

    const [isOpen, setIsOpen] = useState(null);
    const [activeFaIcon, setActiveFaIcon] = useState(-1); // Initialize to -1

    const toggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
        setActiveFaIcon(idx);
    };

    const [dropdownStates, setDropdownStates] = useState({});

    const handleOptionClick = (index) => {
        setDropdownStates(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    // Function to handle click on link
    const handleLinkClick = () => {
        handleClick(); // Hide the sidebar
    };

    return (
        <div className={`outfit-light text-sm w-full`}>
            <ul className='flex  flex-col lg:flex-row w-full'>
                {CONSTANTS.NAV_LINKS.map((navLink, index) => (
                    <li key={index} className='pr-5 px-5 lg:px-0 py-2  lg:py-0 text-xl hover:bg-black hover:bg-opacity-50'>
                        {navLink.dropdown ? (
                            <div className="relative">
                                <div className='relative'>
                                    <NavLink className='' onClick={() => { handleOptionClick(index); handleLinkClick(); }}>{navLink.name}</NavLink>
                                    <FontAwesomeIcon
                                        onClick={() => toggle(index)}
                                        className='pl-3 lg:pl-0'
                                        icon={activeFaIcon === index ? (isOpen ? faAngleUp : faAngleDown) : faAngleDown} // Change icon based on activeFaIcon
                                    />
                                </div>

                                {/* drop down nav links */}
                                <ul className={`grid md:absolute lg:top-8 
                                 w-full  lg:w-60 overflow-hidden  transition-all duration-300 ease-in-out ${isOpen === index ? 'grid-rows-[1fr]  ' : 'grid-rows-[0fr] '} `}>
                                    <div className="overflow-hidden flex flex-col">
                                        {navLink.dropdown.map((dropdownItem, subIndex) => (
                                            <li key={subIndex}>
                                                <NavLink className='' key={subIndex} to={dropdownItem.url} onClick={handleLinkClick}>{dropdownItem.name}</NavLink>
                                            </li>
                                        ))}
                                    </div>
                                </ul>

                            </div>
                        ) : (
                            <NavLink to={navLink.url} onClick={handleLinkClick}>{navLink.name}</NavLink>
                        )}
                    </li>
                ))}


            </ul>


        </div>
    );
};

export default NavLinks;
