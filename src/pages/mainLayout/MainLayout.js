import { Routes, Route, Outlet, Link } from "react-router-dom";
import TopNavbar from "./../topNavbar/TopNavbar";
import BottomNavbar from "./../bottomNavbar/BottomNavbar";

function MainLayout() {
    return (
    <div>
        <TopNavbar></TopNavbar>
            <Outlet />
        <BottomNavbar></BottomNavbar>
    </div>
    );
  }
export default MainLayout;