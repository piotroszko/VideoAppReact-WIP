import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import VideoGrid from "../../components/VideoGrid/VideoGrid";
import urls from "./../../api/auth-ep";
import { useUser, useAvatar } from "../../utils";

const ChannelPage = () => {
  let { id } = useParams();
  const { user } = useUser();
  const [dataVideos, setDataVideos] = useState([]);
  const [channel, setChannel] = useState({});

  useEffect(() => {
    updateVideos();
  }, []);

  const { data } = useAvatar(id);
  const updateVideos = async () => {
    axios
      .post(urls.videos, {
        filter: "channel",
        id: id,
        page: 0,
      })
      .then((res) => {
        setDataVideos(res.data.videos);
      });
    axios.get(`http://localhost:4000/api/v1/users/${id}`).then((res) => {
      if (channel !== res.data) {
        setChannel(res.data);
      }
    });
  };
  return (
    <div className="pt-16">
      <div className="flex flex-col gap-4 items-center justify-center h-full sm:flex-row">
        <div className="w-content md:mt-18 flex gap-5 items-center justify-center mt-20 h-32 dark:text-gray-200 bg-gray-100 dark:bg-gray-500 rounded-xl shadow-lg lg:mt-4">
          <p className="ml-10 max-w-md text-xl font-bold">{channel ? channel.name : ""}</p>
          {/* Set maximum characters*/}
          <img src={data} className="mr-10 w-20 h-20 rounded-md" alt=""></img>
        </div>
        {id !== user?.id ? (
          <div className="w-content flex items-center justify-center h-16 sm:h-32">
            <button className="shadow-red-200 mx-4 p-3 text-xl font-bold bg-red-400 rounded-lg shadow-md">
              Zasubskrybuj
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-row gap-6 items-center justify-center mt-2">
        <div className="sm:visable hidden items-center justify-center mt-2 h-20 dark:text-gray-200 bg-gray-100 dark:bg-gray-500 rounded-xl shadow-lg sm:flex sm:w-1/5">
          <div>
            <p className="font-bold sm:text-xl">Łącznie wyświetleń:</p>
            <p className="font-bold sm:text-xl"> 0 </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-2 w-2/3 h-20 dark:text-gray-200 dark:bg-gray-500 bg-red-100 rounded-xl shadow-lg sm:w-1/5">
          <div>
            <p className="text-xl font-bold">Subskrypcji:</p>
            <p className="text-xl font-bold"> 0 </p>
          </div>
        </div>
        <div className="hidden items-center justify-center mt-2 h-20 dark:text-gray-200 bg-gray-100 dark:bg-gray-500 rounded-xl shadow-lg sm:flex sm:w-1/5">
          <div>
            <p className="font-bold sm:text-xl">Łacznie polubień:</p>
            <p className="font-bold sm:text-xl"> 0 </p>
          </div>
        </div>
      </div>
      <div className="mt-3 border-t-4">
        <VideoGrid videos={dataVideos} sortBar={true}></VideoGrid>
      </div>
    </div>
  );
};

export default ChannelPage;
