// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
// import { useMobileNav } from "../../context/MobileNavContext";

// const NAV_LINKS = [
//   {
//     name: "Home",
//     url: "/",
//   },
//   {
//     name: "About",
//     url: "/about",
//   },
//   {
//     name: "Services",
//     url: "/services",
//   },
//   {
//     name: "Cars",
//     url: "/cars",
//     dropdown: [
//       {
//         name: "SUVs",
//         url: "/cars/suvs",
//         dropdown: [
//           {
//             name: "Models",
//             models: ["CR-V", "Rogue", "Escape", "RAV4", "Tucson"],
//           },
//         ],
//       },
//       {
//         name: "Sedans",
//         url: "/cars/sedans",
//         dropdown: [
//           {
//             name: "Models",
//             models: ["Corolla", "Civic", "Accord", "Camry", "Altima"],
//           },
//         ],
//       },
//       {
//         name: "Trucks",
//         url: "/cars/trucks",
//         dropdown: [
//           {
//             name: "Models",
//             models: ["F-150", "Silverado", "Ram 1500", "Tundra", "Titan"],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Pages",
//     url: "/pages",
//     dropdown: [
//       {
//         name: "Page 1",
//         url: "/pages/page1",
//       },
//       {
//         name: "Page 2",
//         url: "/pages/page2",
//       },
//     ],
//   },
//   {
//     name: "Blog",
//     url: "/blog",
//   },
//   {
//     name: "Contact",
//     url: "/contact",
//   },
// ];

// const NavLinks = () => {
//   const { handleClick } = useMobileNav();
//   const [isOpen, setIsOpen] = useState({});
//   const [openTopLevelDropdown, setOpenTopLevelDropdown] = useState(null);

//   const toggle = (idx) => {
//     setIsOpen((prevState) => ({
//       ...prevState,
//       [idx]: !prevState[idx],
//     }));
//   };

//   const toggleTopLevel = (name) => {
//     setOpenTopLevelDropdown((prevState) => (prevState === name ? null : name));
//   };

//   const handleLinkClick = () => {
//     handleClick();
//   };

//   const renderDropdown = (dropdown, level = 0) => {
//     return (
//       <ul className={`pl-${level * 4} mt-2`}>
//         {dropdown.map((item, index) => (
//           <li key={index} className="my-2">
//             <div
//               className="flex items-center justify-between py-2 px-4 hover:bg-gray-200 hover:text-black cursor-pointer"
//               onClick={() => toggle(item.name)}
//             >
//               <span>{item.name}</span>
//               {item.dropdown && (
//                 <FontAwesomeIcon
//                   icon={isOpen[item.name] ? faAngleUp : faAngleDown}
//                   className="ml-2 cursor-pointer"
//                 />
//               )}
//             </div>
//             {isOpen[item.name] && item.dropdown && (
//               <div className="pl-4">
//                 {renderDropdown(item.dropdown, level + 1)}
//               </div>
//             )}
//             {item.models && (
//               <ul className="pl-4">
//                 {item.models.map((model, modelIndex) => (
//                   <li
//                     key={modelIndex}
//                     className="py-1 px-4 hover:bg-gray-100 hover:text-black"
//                   >
//                     {model}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <div className="outfit-light text-sm w-full  p-4 lg:p-10">
//       <ul className="flex flex-col lg:flex-row w-full">
//         {NAV_LINKS.map((navLink, index) => (
//           <li key={index} className="my-2 lg:my-0 lg:mx-4">
//             {navLink.dropdown ? (
//               <div className="">
//                 <div
//                   className="flex items-center justify-between py-2 px-4 cursor-pointer"
//                   onClick={() => toggleTopLevel(navLink.name)}
//                 >
//                   <span className="mr-2">{navLink.name}</span>
//                   <FontAwesomeIcon
//                     icon={
//                       openTopLevelDropdown === navLink.name
//                         ? faAngleUp
//                         : faAngleDown
//                     }
//                     className="ml-2"
//                   />
//                 </div>
//                 {openTopLevelDropdown === navLink.name && (
//                   <div className="lg:absolute lg:left-0 lg:p-10 lg:w-[100vw] lg:bg-black lg:top-14 lg:border lg:border-gray-200 z-10">
//                     {renderDropdown(navLink.dropdown)}
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <NavLink
//                 to={navLink.url}
//                 onClick={handleLinkClick}
//                 className="block py-2 px-4 hover:bg-gray-100 hover:text-black"
//               >
//                 {navLink.name}
//               </NavLink>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NavLinks;

import React from "react";
import { NavLink } from "react-router-dom";
import { useMobileNav } from "../../context/MobileNavContext";

const NAV_LINKS = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Cars",
    url: "/cars",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const NavLinks = () => {
  const { handleClick } = useMobileNav();

  const handleLinkClick = () => {
    handleClick();
  };

  return (
    <div className="poppins-light uppercase text-[16px] w-full p-4 lg:p-10">
      <ul className="flex flex-col lg:flex-row w-full">
        {NAV_LINKS.map((navLink, index) => (
          <li key={index} className="my-2 lg:my-0 lg:mx-4">
            <NavLink
              to={navLink.url}
              className="py-2 px-4 "
              onClick={handleLinkClick}
            >
              {navLink.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
