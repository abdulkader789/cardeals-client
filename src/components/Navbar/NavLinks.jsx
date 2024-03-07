import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'; // Import arrow icons
import CONSTANTS from '../../constants/constants';
import { useMobileNav } from '../../context/MobileNavContext';

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
        <div className={`outfit-light text-sm`}>
            <ul className='flex flex-col md:flex-row '>
                {CONSTANTS.NAV_LINKS.map((navLink, index) => (
                    <li key={index} className='pr-5'>
                        {navLink.dropdown ? (
                            <div className="">
                                <div className=''>
                                    <NavLink onClick={() => { handleOptionClick(index); handleLinkClick(); }}>{navLink.name}</NavLink>
                                    <FontAwesomeIcon
                                        onClick={() => toggle(index)}
                                        className='pl-3'
                                        icon={activeFaIcon === index ? (isOpen ? faAngleUp : faAngleDown) : faAngleDown} // Change icon based on activeFaIcon
                                    />
                                </div>

                                {/* drop down nav links */}
                                <ul className={`grid md:absolute md:top-14 bg-black bg-opacity-50 md:left-0 right-0 mx-auto md:w-1/2 overflow-hidden  transition-all duration-300 ease-in-out ${isOpen === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} `}>
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
