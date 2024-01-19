import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { authData, } = useAuth();


    // If authData and token exist, render the children
    if (authData && authData.token) {
        return children;
    }

    // Redirect to login if authData or token doesn't exist
    return <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
