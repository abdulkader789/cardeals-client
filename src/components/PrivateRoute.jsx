import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "./Loader";

const PrivateRoute = ({ children }) => {
    const { authData, loader } = useAuth();
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        // Show loader for 1 second
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    // If loader is true or showLoader is true, render the Loader component
    if (loader && showLoader) {
        return <Loader />;
    }

    // If authData and token exist, render the children
    if (authData && authData.token) {
        return children;
    }

    // Redirect to login if authData or token doesn't exist
    return <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
