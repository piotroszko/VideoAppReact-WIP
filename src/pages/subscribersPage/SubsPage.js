import React, { useState, useEffect } from "react";
import { t } from "i18next";
import axios from "axios";

import VideoGrid from "../../components/VideoGrid/VideoGrid";
import ChannelLabel from "./components/ChannelLabel";
import "./SubsPage.css";
import urls from "../../api/auth-ep";

const SubsPage = () => {
  document.title = t("subsTitle");
  const [current, setCurrent] = useState("");
  const [subs, setSubs] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const axiosInstance = axios.create();
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      axiosInstance.get(urls.getUserDetails).then(async (res) => {
        const subsData = await Promise.all(
          res.data.subscribedToUsers.map((c) => {
            return axios.get(urls.getSubs + c).then((res) => res.data);
          })
        );
        if (subsData.length > 0) setCurrent(subsData[0].id);
        setSubs(subsData);
      });
    }
  }, []);
  useEffect(() => {
    axios
      .post(urls.videos, {
        filter: "channel",
        id: current,
        page: 0,
      })
      .then((res) => {
        setData(res.data.videos);
      });
  }, [current]);
  return (
    <div className="flex flex-row">
      <div className="fixed top-16 flex flex-auto flex-col w-1/6 min-w-min h-full dark:text-gray-200 bg-gray-300 dark:bg-gray-800">
        <div className="flex flex-col gap-1 mt-1 w-full h-auto">
          <p className="hidden mt-2 text-lg font-bold sm:block">{t("subsSubscribed")}</p>
        </div>
        <div className="scrollbarSubs scroll-smooth flex flex-col mt-6 border-t-2 border-gray-200 overflow-x-hidden overflow-y-auto">
          {subs &&
            subs.map((channel) => (
              <ChannelLabel
                name={channel.channelName}
                subs={channel.subsCount}
                src={urls.basicUrl + channel.avatar}
                key={channel.id}
                onClick={() => {
                  setCurrent(channel.id);
                }}
                current={current === channel.id ? true : false}
              ></ChannelLabel>
            ))}
        </div>
      </div>
      <div className="ml-auto mt-16 w-5/6 h-full dark:bg-gray-800 bg-white overflow-visible">
        <VideoGrid className="mx-auto" videos={data}></VideoGrid>
      </div>
    </div>
  );
};

export default SubsPage;
