import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import UnauthorizedUser from "./UnauthorizedUser";

const PrivateRoute = ({ children }) => {
    const { authData, } = useAuth();

    if (authData == null) {
        return <UnauthorizedUser />;
    }


    // If authData and token exist, render the children
    if (authData && authData.token) {
        return children;
    }


};

export default PrivateRoute;
