// import { useState, useEffect } from 'react';

// const ThemeSwitcher = () => {
//     const [darkMode, setDarkMode] = useState(false);

//     useEffect(() => {
//         const isDarkMode = localStorage.getItem('darkMode') === 'true';
//         setDarkMode(isDarkMode);
//     }, []);

//     useEffect(() => {
//         document.documentElement.classList.toggle('dark', darkMode);
//         localStorage.setItem('darkMode', darkMode);
//     }, [darkMode]);

//     const toggleDarkMode = () => {
//         setDarkMode((prevMode) => !prevMode);
//     };

//     return (
//         <div>

//             <button
//                 onClick={toggleDarkMode}
//                 className={`px-4 py-2 rounded-full ${darkMode ? 'bg-yellow-400' : 'bg-gray-800'
//                     } ${darkMode ? 'text-gray-900' : 'text-white'
//                     } transition-colors duration-200`}
//             >
//                 {darkMode ? 'Light Mode' : 'Dark Mode'}
//             </button>
//         </div>
//     );
// };

// export default ThemeSwitcher;

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    console.log("Is Dark Mode:", isDarkMode);

    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="">
      <button
        onClick={toggleDarkMode}
        className={`px-2 py-1 rounded-full text-white transition-colors duration-200 flex items-center`}
      >
        {darkMode ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
