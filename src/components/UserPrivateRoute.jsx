import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const UserPrivateRoute = ({ children }) => {
    const { authData, } = useAuth();



    // If authData and token exist, render the children
    if (authData.user.role == 0) {
        return children;
    }

};

export default UserPrivateRoute;
