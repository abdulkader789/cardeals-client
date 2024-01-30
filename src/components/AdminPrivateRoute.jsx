import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const AdminPrivateRoute = ({ children }) => {
    const { authData, } = useAuth();



    // If authData and token exist, render the children
    if (authData.user.role == 1) {
        return children;
    }



    // Redirect to login if authData or token doesn't exist
    return <Navigate to="/login" replace={true} />;
};

export default AdminPrivateRoute;
