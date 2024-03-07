// import { Outlet } from 'react-router-dom';
// import Navbar from '../components/Navbar'
// const Main = () => {
//     return (
//         <div>
//             <Navbar />
//             <Outlet />
//         </div>
//     );
// };

// export default Main;


import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useMobileNav } from '../context/MobileNavContext';


const Main = () => {

    const { isActive } = useMobileNav()
    return (
        <div className="main-container">
            <Navbar />

            <Outlet />
        </div>
    );
};

export default Main;
