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


import { Outlet } from 'react-router-dom';
import { useMobileNav } from '../context/MobileNavContext';
import Navbar from '../pages/Navbar';


const Main = () => {


    return (
        <div className="main-container">
            <Navbar />

            <Outlet />
        </div>
    );
};

export default Main;
