
// AdminDashboard.jsx


import { Outlet } from "react-router-dom";
import Sidebar from "../components/AdminDashboard/Nav/Sidebar";
import TopNav from "../components/AdminDashboard/Nav/TopNav";

import { useSidebar } from "../context/SidebarContext";

const AdminDashboard = () => {


    const { isSidebarOpen } = useSidebar()
    return (


        <div className={`${isSidebarOpen ? 'flex-col-1' : 'md:flex'}`}>
            <div className='w-64'>
                <Sidebar />
            </div>

            <div className='flex-1 flex-col flex w-full'>
                <TopNav />
                <Outlet />
            </div>

        </div>
    );
};

export default AdminDashboard;
