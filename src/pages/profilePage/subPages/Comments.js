import axios from "axios";
import React from "react";
import useSWR from "swr";

import CommentLabel from "./components/CommentLabel";
import LoadingDots from "../../../components/LoadingDots/LoadingDots";
import SmallSearchBar from "../../../components/SmallSearchBar/SmallSearchBar";
import urls from "./../../../api/auth-ep";
const Comments = () => {
  const axiosInstance = axios.create();
  const { data } = useSWR(urls.myComments, (url) => {
    if (localStorage.getItem("token") !== null) {
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      return axiosInstance.get(url).then((res) => {
        return res.data;
      });
    }
  });
  return (
    <div className="pt-16 w-full">
      <div className="flex flex-col ml-8 w-3/4">
        <div className="flex flex-row justify-start mt-10 pr-16 w-full">
          <SmallSearchBar
            inputPlaceholder={"Wyszukaj"}
            onFilterChange={(f) => null}
            onInputChange={() => null}
          ></SmallSearchBar>
        </div>
        <div className="flex flex-col gap-2 mt-2 pt-2 w-full">
          {typeof data === "undefined" ? <LoadingDots></LoadingDots> : ""}
          {data ? data.map((l) => <CommentLabel data={l} key={l.id}></CommentLabel>) : ""}
        </div>
      </div>
    </div>
  );
};

export default Comments;
