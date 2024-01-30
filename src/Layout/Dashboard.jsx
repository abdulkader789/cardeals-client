


import Sidebar from '../components/AdminDashboard/Nav/Sidebar';
import TopNav from '../components/AdminDashboard/Nav/TopNav';
import { useAuth } from '../context/AuthContext';

import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {

    const { authData } = useAuth();




    if (authData?.user.role == 0) {
        return (
            <>
                <Navigate to='/dashboard/useroverview' />
                <UserDashboard />
            </>
        )
    }
    if (authData?.user.role == 1) {
        return (
            <>
                <Navigate to='/dashboard/overview' />
                <AdminDashboard />
            </>
        )
    }
};

export default Dashboard;
