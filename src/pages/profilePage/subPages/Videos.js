import React, { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { t } from "i18next";

import VideoLabel from "./components/VideoLabel";
import LoadingDots from "../../../components/LoadingDots/LoadingDots";
import SmallSearchBar from "../../../components/SmallSearchBar/SmallSearchBar";
import urls from "./../../../api/auth-ep";
const Videos = () => {
  const [textSearch, setTextSearch] = useState("");
  const [filterString, setFilterString] = useState("");
  const axiosInstance = axios.create();
  const { data } = useSWR(urls.myVideos, (url) => {
    if (localStorage.getItem("token") !== null) {
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      return axiosInstance.get(url).then((res) => {
        return res.data;
      });
    }
  });
  return (
    <div className="pt-16 w-full">
      <div className="flex flex-col w-max lg:w-3/4">
        <div className="pt-6">
          <SmallSearchBar
            inputPlaceholder={t("search")}
            onFilterChange={(f) => setFilterString(f)}
            onInputChange={(text) => setTextSearch(text)}
          ></SmallSearchBar>
        </div>
        <div className="flex flex-col gap-2 mt-2 pl-2 pt-2 w-full sm:pl-0">
          {typeof data === "undefined" ? <LoadingDots></LoadingDots> : ""}
          {data
            ? data
                .filter((f) => {
                  return f.name.toLowerCase().includes(textSearch.toLowerCase());
                })
                .sort((a, b) => {
                  if (filterString === t("mostPopular")) {
                    return b.views - a.views;
                  } else if (filterString === t("newest")) {
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                  } else if (filterString === t("oldest")) {
                    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                  } else {
                    return 0;
                  }
                })
                .map((v) => <VideoLabel data={v} key={v.id}></VideoLabel>)
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Videos;
