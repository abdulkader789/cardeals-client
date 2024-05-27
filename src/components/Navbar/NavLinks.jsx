import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import CONSTANTS from "../../../../cardeals-client/src/constants/constants";
import { useMobileNav } from "../../../../cardeals-client/src/context/MobileNavContext";

const NavLinks = () => {
  const { handleClick } = useMobileNav();
  const [isOpen, setIsOpen] = useState({});
  const [openTopLevelDropdown, setOpenTopLevelDropdown] = useState(null);

  const toggle = (idx) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [idx]: !prevState[idx],
    }));
  };

  const toggleTopLevel = (name) => {
    setOpenTopLevelDropdown((prevState) => (prevState === name ? null : name));
  };

  const handleLinkClick = () => {
    handleClick();
  };

  const renderDropdown = (dropdown, level = 0) => {
    return (
      <ul className={`pl-${level * 4} mt-2`}>
        {dropdown.map((item, index) => (
          <li key={index} className="my-2">
            <div
              className="flex items-center justify-between py-2 px-4 hover:bg-gray-200 hover:text-black cursor-pointer"
              onClick={() => toggle(item.name)}
            >
              <span>{item.name}</span>
              {item.dropdown && (
                <FontAwesomeIcon
                  icon={isOpen[item.name] ? faAngleUp : faAngleDown}
                  className="ml-2 cursor-pointer"
                />
              )}
            </div>
            {isOpen[item.name] && item.dropdown && (
              <div className="pl-4">
                {renderDropdown(item.dropdown, level + 1)}
              </div>
            )}
            {item.models && (
              <ul className="pl-4">
                {item.models.map((model, modelIndex) => (
                  <li
                    key={modelIndex}
                    className="py-1 px-4 hover:bg-gray-100 hover:text-black"
                  >
                    {model}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="outfit-light text-sm w-full  p-4 lg:p-10">
      <ul className="flex flex-col lg:flex-row w-full">
        {CONSTANTS.NAV_LINKS.map((navLink, index) => (
          <li key={index} className="my-2 lg:my-0 lg:mx-4">
            {navLink.dropdown ? (
              <div className="">
                <div
                  className="flex items-center justify-between py-2 px-4 cursor-pointer"
                  onClick={() => toggleTopLevel(navLink.name)}
                >
                  <span className="mr-2">{navLink.name}</span>
                  <FontAwesomeIcon
                    icon={
                      openTopLevelDropdown === navLink.name
                        ? faAngleUp
                        : faAngleDown
                    }
                    className="ml-2"
                  />
                </div>
                {openTopLevelDropdown === navLink.name && (
                  <div className="lg:absolute lg:left-0 lg:p-10 lg:w-[100vw] lg:bg-black lg:top-14 lg:border lg:border-gray-200 z-10">
                    {renderDropdown(navLink.dropdown)}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to={navLink.url}
                onClick={handleLinkClick}
                className="block py-2 px-4 hover:bg-gray-100 hover:text-black"
              >
                {navLink.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
