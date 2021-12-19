
import './App.css';
import React, {useState, useEffect} from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import MainLayout from './pages/mainLayout/MainLayout';
import VideoList from './pages/videoList/VideoList';
import VideoPage from './pages/videoPage/VideoPage';

const  App = () => {
  return (
    <div className="App">
      {/* <TopNavbar></TopNavbar>
      <VideoGrid></VideoGrid>
      <BottomNavbar></BottomNavbar> */}
      <Routes>
          <Route path="/" element={ <MainLayout /> }>
            <Route index element={ <VideoList /> } />
            <Route path="video/:id" element={< VideoPage/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
