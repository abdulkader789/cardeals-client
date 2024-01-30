import React from 'react';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import UpdateProfile from './UpdateProfile';
import DeleteAccount from './DeleteAccount';


const Content = () => {
    const { page } = useParams(); // Get the "page" parameter from the URL

    // Render the component based on the "page" parameter
    const renderComponent = () => {
        switch (page) {
            case 'profile':
                return <Profile />;
            case '/dashobard/updateprofile':
                return <UpdateProfile />;
            case 'deleteaccount':
                return <DeleteAccount />;

            default:
                return <div>404: Page Not Found</div>; // Render a default component for unknown paths
        }
    };

    return (
        <div className='p-20'>
            {renderComponent()}
        </div>
    );
};

export default Content;
