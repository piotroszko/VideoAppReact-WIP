import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginPage from "../../../loginPage/LoginPage";
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useNavigate } from "react-router-dom";

import useUser from "../../../../data/use-user";
import {logout} from "../../../../utils/auth";

const LoginButton = () => {
    const { user, loading, loggedOut, mutate } = useUser();

    const ref = useDetectClickOutside({ onTriggered: () => setIsDropdownOpen(false) });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
    <div className="relative py-3 flex justify-end items-center w-full space-x-6">
        <div className={`${user ? "hidden" : ""} `}>
            <Link to="/login" component={<LoginPage />}>           
                <button className="p-3 focus:outline-none rounded text-xs font-medium leading-3
                hover:text-blue-700 hover:bg-blue-50 focus:bg-blue-700 focus:text-white text-gray-600 " >
                    Zaloguj
                </button>
            </Link>
        </div>
        <div className={`${user ? "" : "hidden"} border-2 border-gray-100 shadow-md rounded-md relative`} ref={ref}>
            <div className="flex flex-row gap-4 p-2 cursor-pointer" onClick={isDropdownOpen ? () => setIsDropdownOpen(false) : () => setIsDropdownOpen(true)}>
                <p className="my-auto text-md italic"> Login uzytkownika</p>
                <img alt='' className='w-auto h-2/5 sm:h-1/2 lg:w-8 lg:h-8 block mx-auto rounded-xl' src='https://source.unsplash.com/WLUHO9A_xik/1600x900'/>
            </div>
            <div className={`${isDropdownOpen ? "" : "hidden"} absolute top-full mt-2 left-0 z-20 bg-gray-100 rounded-md w-full pt-2 pb-4 flex flex-col gap-1 select-none`}> 
                <p className="mx-2 bg-gray-200 border-gray-100 border-2 rounded-md hover:bg-gray-400 hover:text-white cursor-pointer ">
                    Konto
                </p>
                <p onClick={() => {logout(); mutate(null);}} className="mx-2 bg-red-200 border-gray-100 border-2 rounded-md hover:bg-red-400 hover:text-white cursor-pointer">
                    Wyloguj
                </p>
            </div>
        </div>
        
    </div>
    );
}

export default LoginButton;