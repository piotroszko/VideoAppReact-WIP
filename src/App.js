
import './App.css';
import React, {useState, useEffect} from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import { AuthContext } from './contexts';
import { useProvideAuth} from './utils';

import MainLayout from './pages/mainLayout/MainLayout';
import VideoList from './pages/videoList/VideoList';
import VideoPage from './pages/videoPage/VideoPage';
import LoginPage from './pages/loginPage/LoginPage';
import ChannelPage from './pages/channelPage/ChannelPage';

const  App = () => {
  const auth = useProvideAuth();
  
  return (
    <AuthContext.Provider value={auth}>
      <div className="App">
        {/* <TopNavbar></TopNavbar>
        <VideoGrid></VideoGrid>
        <BottomNavbar></BottomNavbar> */}
        <Routes>
            <Route path="/" element={ <MainLayout /> }>
              <Route index element={ <VideoList /> } />
              <Route path="video/:id" element={< VideoPage/>} />
              <Route path="channel/:id" element={< ChannelPage/>} />
            </Route>
            <Route path="/login" element={<LoginPage/>}>

            </Route>
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
