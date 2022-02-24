import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import SubsPage from "./pages/subscribersPage/SubsPage";
import ListsPage from "./pages/listsPage/ListsPage";

const App = () => {
  const auth = useProvideAuth();

  return (
    <AuthContext.Provider value={auth}>
      <DarkmodeProvider>
        <div className="App h-full">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<VideoList />} />
              <Route path="video/:id" element={<VideoPage />} />
              <Route path="channel/:id" element={<ChannelPage />} />
              <Route path="subs" element={<SubsPage />} />

              {/* lists with optional parameters */}
              <Route path="lists/:section/:playlist" element={<ListsPage />} />
              <Route path="lists/:section" element={<ListsPage />} />
              <Route path="lists/" element={<ListsPage />} />

              {/* profile page routes*/}
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
        <ToastContainer
          position="bottom-left"
          autoClose={4000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </DarkmodeProvider>
    </AuthContext.Provider>
  );
};

export default App;
