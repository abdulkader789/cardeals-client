import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/login">
      <button className=" text-white poppins-light py-1 px-10 border transition duration-300  bg-gray-800 bg-opacity-60 shadow-md border-gray-400 ">
        Login
      </button>
    </Link>
  );
};

export default LoginButton;
