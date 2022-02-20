import React, { useState, useContext } from "react";
import useSWR from "swr";
import axios from "axios";

import VideoLabel from "./components/VideoLabel";
import { DarkmodeContext } from "../../../utils/DarkmodeProvider";
import LoadingDots from "../../../components/LoadingDots/LoadingDots";
import SmallSearchBar from "../../../components/SmallSearchBar/SmallSearchBar";
const Videos = () => {
  const axiosInstance = axios.create();
  const { data, error } = useSWR(
    "http://localhost:4000/api/v1/video/my/?application=api-jwt",
    (url) => {
      if (localStorage.getItem("token") !== null) {
        axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
        return axiosInstance.get(url).then((res) => {
          return res.data;
        });
      }
    }
  );
  return (
    <div className="pt-16 w-full">
      <div className="flex flex-col w-3/4">
        <div className="pt-6">
          <SmallSearchBar
            inputPlaceholder={"Wyszukaj"}
            onFilterChange={(f) => null}
            onInputChange={() => null}
          ></SmallSearchBar>
        </div>
        <div className="flex flex-col gap-2 mt-2 pt-2 w-full">
          {typeof data === "undefined" ? <LoadingDots></LoadingDots> : ""}
          {data ? data.map((v) => <VideoLabel data={v} key={v.id}></VideoLabel>) : ""}
        </div>
      </div>
    </div>
  );
};

export default Videos;
