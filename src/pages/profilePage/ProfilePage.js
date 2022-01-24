import React from "react";
import { Outlet, Link } from "react-router-dom";
import ChannelPage from "../channelPage/ChannelPage";
import Comments from "./subPages/Comments";
import Videos from "./subPages/Videos";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="flex flex-row mt-16 sm:mt-16 md:mt-16 pt-2 lg:mt-0 lg:pt-0 h-full w-full">
      <div className="w-1/6 bg-gray-300 dark:bg-gray-800 dark:text-gray-200 h-full flex flex-col border-r-2 top-16 border-gray-700 flex-auto fixed min-w-min">
        <img
          alt=""
          className="block mx-auto rounded-2xl w-2/3 mt-8"
          src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
        />
        <p className="mt-2 font-bold">Twoje konto</p>
        <p className="mt-2">Nazwa kanału</p>
        <Link to="/profile/" component={<ProfilePage />}>
          <p className="btn-profile-nav border-t-2 mt-2"> Konto </p>
        </Link>
        <Link to="/profile/channel" component={<ChannelPage />}>
          <p className="btn-profile-nav"> Kanał </p>
        </Link>
        <Link to="/profile/videos" component={<Videos />}>
          <p className="btn-profile-nav"> Wideo </p>
        </Link>
        <Link to="/profile/comments" component={<Comments />}>
          <p className="btn-profile-nav"> Moje komentarze </p>
        </Link>
        <Link to="/profile/statistics" component={<Comments />}>
          <p className="btn-profile-nav"> Statystyki </p>
        </Link>
        <div className="h-full flex flex-col justify-end pb-16 w-auto"></div>
      </div>
      <div className="ml-auto w-5/6 bg-white dark:bg-gray-800 h-full overflow-visible ">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
