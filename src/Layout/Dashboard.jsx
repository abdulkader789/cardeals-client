import { Outlet } from 'react-router-dom';


import UserDashboard from '../pages/UserDashboard';
import Sidebar from '../components/Dashboard/Sidebar';
import TopNav from '../components/Dashboard/TopNav';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { authData } = useAuth();
    const role = authData && authData.user && authData.user.role === 1 ? 'admin' : 'user';



    if (role == 'user') {
        return <UserDashboard />
    }
    if (role == 'admin') {

        return (

            <div className='flex'>
                <div className='w-64'>
                    <Sidebar />
                </div>

                <div className='w-full'>
                    <TopNav />
                    <Outlet />
                </div>

            </div>

        );
    }
};

export default Dashboard;
