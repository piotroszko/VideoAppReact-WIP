import React, { useState } from "react";
import DesktopBtnWheel from './components/DesktopBtnWheel/DesktopBtnWheel';
import LoginButton from "./components/LoginButton/LoginButton";
import LoginButtonMobile from "./components/LoginButtonMobile/LoginButtonMobile";
import {Link } from "react-router-dom";
import MainLayout from "./../mainLayout/MainLayout";


const TopNavbar = () => {
    const [result, setResult] = useState(false);
    const [result2, setResult2] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [search, setSearch] = useState(false);

    const handleInput = (e) => {
        const value = e.target.value;
        if (value.length >= 1) {
            setResult(true);
        } else if (value.length === 0) {
            setResult(false);
        }
    };

    const handleInput2 = (e) => {
        const value = e.target.value;
        if (value.length >= 1) {
            setResult2(true);
        } else if (value.length === 0) {
            setResult2(false);
        }
    };

    return (
        <div className="bg-white">
            <div className="hidden lg:block relative border-b px-8 border-gray-100">
                <div className="2xl:container 2xl:mx-auto flex justify-between items-center w-full">
                    <div className="relative w-full py-3 flex justify-start items-center space-x-4">
                        <Link to="/" component={<MainLayout />}>
                            <svg className="cursor-pointer" width={50} height={32} viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 17.0551C0.0324314 25.2688 6.59422 32 14.6551 32C22.7359 32 29.3097 25.2959 29.3097
                                    17.0551V14.9453C29.3097 11.5521 32.017 8.79118 35.3444 8.79118C38.6722 8.79118 41.3791
                                    11.5521 41.3791 14.9453C41.3791 15.9163 42.1511 16.7037 43.1032 16.7037H48.2758C49.2284
                                    16.7037 50 15.9163 50 14.9453C50 6.70457 43.4261 0 35.3449 0C27.2641 0 20.6898 6.70457
                                    20.6898 14.9453V17.0551C20.6898 20.4489 17.9825 23.2088 14.6556 23.2088C11.3282 23.2088 8.62094
                                    20.4489 8.62094 17.0551C8.62094 16.0842 7.84888 15.2968 6.89675 15.2968H1.72419C0.772061 15.2973 0 16.0842 0 17.0551Z"
                                    fill="#1F2937"
                                />
                            </svg>
                        </Link>
                        <div className="relative w-64 flex justify-start items-center">
                            <input onInput={(e) => handleInput(e)} className="w-full py-3 bg-gray-100 rounded pl-10
                            focus:outline-none text-sm leading-none text-gray-600 placeholder-gray-600" type="text" placeholder="Search" />
                            <svg className="absolute left-3" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3
                                    10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#4B5563"
                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 21L15 15" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {/* pop up on input */}
                        <div id="popup" className={`${result ? "" : "hidden"} ease-in-out transition duration-500 bg-white
                        z-20 top-20 left-12 absolute  w-64 shadow border rounded border-gray-200 py-3  flex justify-center items-start flex-col`}>
                            <button className="w-full mt-2 flex p-3 justify-start items-center space-x-2 hover:bg-blue-50 rounded">
                                <div className="flex justify-start items-start flex-col space-y-1">
                                    <p className="text-xl font-bold text-left leading-3 text-gray-800">coinbase</p>
                                </div>
                            </button>
                        </div>
                        {/* pop up on input */}
                    </div>
                    <DesktopBtnWheel/>
                    <LoginButton/>
                </div>
            </div>
            {/* Desktop Screen Size End */}
            {/* Mobile and Ipad Screen size start */}
            <div className="lg:hidden h-full">
                <div className={`py-4 px-4 z-50 h-auto fixed top-0 md:px-6 w-full flex justify-between items-center bg-white border-b border-gray-100`}>
                    <div id="searchItems" className={`${search ? "hidden" : ""} w-full flex justify-between items-center `}>
                        <Link to="/" component={<MainLayout />}>
                            <button className>
                                <svg width={50} height={32} viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 17.0551C0.0324314 25.2688 6.59422 32 14.6551 32C22.7359 32 29.3097 25.2959 29.3097
                                        17.0551V14.9453C29.3097 11.5521 32.017 8.79118 35.3444 8.79118C38.6722 8.79118 41.3791
                                        11.5521 41.3791 14.9453C41.3791 15.9163 42.1511 16.7037 43.1032 16.7037H48.2758C49.2284
                                        16.7037 50 15.9163 50 14.9453C50 6.70457 43.4261 0 35.3449 0C27.2641 0 20.6898 6.70457
                                        20.6898 14.9453V17.0551C20.6898 20.4489 17.9825 23.2088 14.6556 23.2088C11.3282
                                        23.2088 8.62094 20.4489 8.62094 17.0551C8.62094 16.0842 7.84888 15.2968 6.89675
                                        15.2968H1.72419C0.772061 15.2973 0 16.0842 0 17.0551Z"
                                        fill="#1F2937"
                                    />
                                </svg>
                            </button>
                        </Link>
                        <div className="flex jusitfy-end items-center space-x-10">
                            <div id="navSearchandAvatar" className={`${showNav ? "hidden" : ""} flex jusitfy-end items-center space-x-10`}>
                                <button onClick={() => setSearch(true)} className="focus:outline-none" aria-label="search">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3
                                         10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#4B5563"
                                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21 21L15 15" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                
                            </div>
                            <button onClick={() => setShowNav(!showNav)} className="focus:outline-none" aria-label="toggler">
                                <svg id="navClose" className={`${showNav ? "hidden " : ""}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.75 7.5H20.25" stroke="#4B5563" strokeMiterlimit={10} strokeLinecap="round" />
                                    <path d="M3.75 12H20.25" stroke="#4B5563" strokeMiterlimit={10} strokeLinecap="round" />
                                    <path d="M3.75 16.5H20.25" stroke="#4B5563" strokeMiterlimit={10} strokeLinecap="round" />
                                </svg>
                                <svg id="navOpen" className={`${showNav ? "" : "hidden"}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 6L18 18" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="searchItemsSecond" className={`${search ? "" : "hidden"} w-full flex z-10 justify-between items-center`}>
                        <div className=" relative w-full flex justify-start items-center mr-4 md:mr-16">
                            <input onInput={(e) => handleInput2(e)} className="w-full py-3 bg-gray-100 rounded pl-10
                            focus:outline-none text-sm leading-none text-gray-600 placeholder-gray-600" type="text" placeholder="Search" />
                            <svg className="absolute left-2  " width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401
                                 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 21L15 15" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {/* pop up on input */}
                            <div id="popup2" className={`${result2 ? "" : "hidden"} ease-in-out transition duration-500
                            bg-white top-20  absolute w-full shadow border rounded border-gray-200 py-3 flex justify-center items-start flex-col`}>
                                <button className="w-full mt-2 p-3 flex justify-start items-center space-x-2 hover:bg-blue-50 rounded">
                                    <div className="flex justify-start items-start flex-col space-y-1">
                                        <p className="text-xl font-bold text-left leading-3 text-gray-800">coinbase</p>
                                    </div>
                                </button>
                            </div>
                            {/* pop up on input */}
                        </div>
                        <button onClick={() => setSearch(false)} className="focus:outline-none" aria-label="toggler">
                            <svg id="navOpen" className width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="nav" className={`${showNav ? "left-1/4" : "-translate-x-full left-0"} transform ease-in-out fixed top-16 z-50
                transition duration-500 w-1/2 h-1/2 `}>
                    <div className="sm:w-full flex-col bg-white h-full rounded-b-lg flex  justify-between items-start px-2 md:px-4 pb-4 mr-auto ml-auto">
                        <div className="flex flex-col jusitfy-start items-start  mr-auto  ml-auto w-full">
                            <button className="btn-navbar-full">
                                <p className="text-btn-navbar2">Home</p>
                            </button>
                            <button className="btn-navbar-full">
                                <p className="text-btn-navbar2">Engage</p>
                            </button>
                            <button className="btn-navbar-full">
                                <p className="text-btn-navbar2">Opportunitues</p>
                            </button>
                            <button className="btn-navbar-full">
                                <p className="text-btn-navbar2">Settings</p>
                            </button>
                        </div>
                        <LoginButtonMobile/>
                    </div>
                </div>
            </div>
            {/* Mobile and Ipad Screen size end */}
        </div>
    );
}

export default TopNavbar;