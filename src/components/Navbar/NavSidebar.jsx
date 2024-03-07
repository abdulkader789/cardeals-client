import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import CONSTANTS from '../../constants/constants';


const NavSidebar = ({ isOpen, toggleSidebar }) => {
    const [dropdownStates, setDropdownStates] = useState({});

    const handleOptionClick = (index) => {
        if (isOpen) {
            toggleSidebar(); // Close the sidebar if it's open
        }
        setDropdownStates(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className={`h-full  bg-blue-700 ${isOpen ? 'sidebar open' : 'sidebar'} flex flex-col work-sans  top-0 left-0 fixed w-[85%]`}>
            <ul className='h-full flex flex-col '>
                <div className='absolute top-5  z-10 right-10'>
                    {/* <FontAwesomeIcon icon={faTimes} className='text-white font-light text-5xl' /> */}


                </div>
                {CONSTANTS.NAV_LINKS.map((navLink, index) => (
                    <li key={index} className='flex justify-between text-white px-5 w-full text-4xl items-center py-3  '>
                        {navLink.dropdown ? (
                            <div className="dropdown w-full">
                                <div className='flex justify-between w-full'>
                                    <NavLink onClick={() => handleOptionClick(index)}>{navLink.name}</NavLink>
                                    <FontAwesomeIcon className='pr-10' icon={dropdownStates[index] ? faMinus : faPlus} onClick={() => handleOptionClick(index)} />
                                </div>
                                <div className={`pl-5 overflow-hidden flex flex-col justify-start transition-height max-h-0 ${dropdownStates[index] ? 'max-h-40' : ''}`} style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDuration: '0.4s' }}>
                                    {navLink.dropdown.map((dropdownItem, subIndex) => (
                                        <NavLink className='text-2xl' key={subIndex} to={dropdownItem.url}>{dropdownItem.name}</NavLink>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <NavLink to={navLink.url}>{navLink.name}</NavLink>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavSidebar;
