import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import { AuthContext } from "./contexts";
import { useProvideAuth } from "./utils";

import MainLayout from "./pages/mainLayout/MainLayout";
import VideoList from "./pages/videoList/VideoList";
import VideoPage from "./pages/videoPage/VideoPage";
import LoginPage from "./pages/loginPage/LoginPage";
import ChannelPage from "./pages/channelPage/ChannelPage";
import DarkmodeProvider from "./utils/DarkmodeProvider";
import ProfilePage from "./pages/profilePage/ProfilePage";
import MainProfile from "./pages/profilePage/subPages/MainProfile";
import Videos from "./pages/profilePage/subPages/Videos";
import Comments from "./pages/profilePage/subPages/Comments";
import Statistics from "./pages/profilePage/subPages/Statistics";

const App = () => {
  const auth = useProvideAuth();

  return (
    <AuthContext.Provider value={auth}>
      <DarkmodeProvider>
        <div className="App h-full">
          {/* <TopNavbar></TopNavbar>
          <VideoGrid></VideoGrid>
          <BottomNavbar></BottomNavbar> */}
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<VideoList />} />
              <Route path="video/:id" element={<VideoPage />} />
              <Route path="channel/:id" element={<ChannelPage />} />
              <Route path="profile/" element={<ProfilePage />}>
                <Route index element={<MainProfile />} />
                <Route path="videos" element={<Videos />} />
                <Route path="channel" element={<ChannelPage />} />
                <Route path="comments" element={<Comments />} />
                <Route path="statistics" element={<Statistics />} />
              </Route>
            </Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Routes>
        </div>
      </DarkmodeProvider>
    </AuthContext.Provider>
  );
};

export default App;
