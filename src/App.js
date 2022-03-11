import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import ProtectedPage from "./pages/protectedPage/ProtectedPage";
import NonePage from "./pages/nonePage/NonePage";
import CreateVideoTemplate from "./pages/profilePage/subPages/CreateVideoTemplate";
import EditVideo from "./pages/profilePage/subPages/EditVideo";

const App = () => {
  const auth = useProvideAuth();

  return (
    <AuthContext.Provider value={auth}>
      <DarkmodeProvider>
        <div className="App h-full">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<VideoList />} />
              <Route path="top" element={<VideoList />} />
              <Route path="new" element={<VideoList />} />
              <Route path="discover" element={<VideoList />} />

              <Route path="search/:param" element={<VideoList />} />

              <Route path="video/:id" element={<VideoPage />} />
              <Route path="channel/:id" element={<ChannelPage />} />
              <Route
                path="subs"
                element={
                  <RequireAuth redirectTo="/protected">
                    <SubsPage />
                  </RequireAuth>
                }
              />

              <Route path="protected" element={<ProtectedPage />} />
              <Route path="*" element={<NonePage />} />

              {/* lists with optional parameters */}
              <Route
                path="lists/:section/:playlist"
                element={
                  <RequireAuth redirectTo="/protected">
                    <ListsPage />
                  </RequireAuth>
                }
              />
              <Route
                path="lists/:section"
                element={
                  <RequireAuth redirectTo="/protected">
                    <ListsPage />
                  </RequireAuth>
                }
              />
              <Route
                path="lists/"
                element={
                  <RequireAuth redirectTo="/protected">
                    <ListsPage />
                  </RequireAuth>
                }
              />

              {/* profile page routes*/}
              <Route
                path="profile/"
                element={
                  <RequireAuth redirectTo="/protected">
                    <ProfilePage />
                  </RequireAuth>
                }
              >
                <Route index element={<MainProfile />} />
                <Route path="videos" element={<Videos />} />
                <Route path="channel" element={<ChannelPage />} />
                <Route path="comments" element={<Comments />} />
                <Route path="statistics" element={<Statistics />} />
                <Route path="create" element={<CreateVideoTemplate />} />
                <Route path="edit/:id" element={<EditVideo />} />
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
function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = localStorage.getItem("token") !== null;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default App;
