import { Outlet } from 'react-router-dom';


import UserDashboard from '../pages/UserDashboard';
import Sidebar from '../components/Dashboard/Nav/Sidebar';
import TopNav from '../components/Dashboard/Nav/TopNav';
import { useAuth } from '../context/AuthContext';
import useLoading from '../components/Loader/UseLoading';
import LoadingBar from '../components/Loader/LoadingBar';
import { useSidebar } from '../context/SidebarContext';

const Dashboard = () => {
    const isLoading = useLoading()
    const { authData } = useAuth();
    const role = authData && authData.user && authData.user.role === 1 ? 'admin' : 'user';

    const { isSidebarOpen } = useSidebar();


    if (role == 'user') {
        return isLoading ? '' : <UserDashboard />
    }
    if (role == 'admin') {
        return (
            isLoading ? <LoadingBar /> :

                <div className={`${isSidebarOpen ? 'flex-col-1' : 'md:flex'}`}>
                    <div className='w-64'>
                        <Sidebar />
                    </div>

                    <div className='flex-1 flex-col flex '>
                        <TopNav />
                        <Outlet />
                    </div>

                </div>

        );
    }
};

export default Dashboard;
