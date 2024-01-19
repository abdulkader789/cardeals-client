import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import UserDashboard from '../pages/UserDashboard';
import AdminDashboard from '../pages/AdminDashboard';
import UnauthorizedUser from './UnauthorizedUser';

const DashboardRouting = () => {
    const [isAuthorized, setIsAuthorized] = useState(null);
    const { authData } = useAuth();
    const role = authData && authData.user && authData.user.role === 1 ? 'admin' : 'user';

    useEffect(() => {
        const checkAuthorization = async () => {
            try {
                if (!authData || !authData.token) {
                    setIsAuthorized(null);
                    return;
                }

                const response = await fetch(`/api/auth/${role}-auth`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${authData.token}`,
                    },
                });

                const data = await response.json();

                if (response.ok) {
                    console.log('response from if', data);

                    if (data.success) {
                        setIsAuthorized(true);
                    } else {
                        console.error('Authorization check failed');
                        setIsAuthorized(false);
                    }
                } else {
                    // Handle non-OK response here
                    console.error('Non-OK response:', data);
                }
            } catch (error) {
                console.error('Error during authorization check:', error);
            }
        };


        checkAuthorization();
    }, []);

    if (isAuthorized === null) {
        return <UnauthorizedUser />;
    }

    // Render components based on authorization status
    return isAuthorized ? <AdminDashboard /> : <UserDashboard />;
};

export default DashboardRouting;
