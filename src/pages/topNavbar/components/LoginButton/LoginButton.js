import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import LoginPage from "../../../loginPage/LoginPage";

const LoginButton = () => {
    return (
    <div className="relative py-3 flex justify-end items-center w-full space-x-6">
        <Link to="/login" component={<LoginPage />}>           
            <button className="p-3 focus:outline-none rounded text-xs font-medium leading-3
            hover:text-blue-700 hover:bg-blue-50 focus:bg-blue-700 focus:text-white text-gray-600 " >
                Zaloguj
            </button>
        </Link>
    </div>
    );
}

export default LoginButton;