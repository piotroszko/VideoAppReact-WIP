import axios from "axios";
import React, { useState } from "react";
import useSWR from "swr";
import { t } from "i18next";

import CommentLabel from "./components/CommentLabel";
import LoadingDots from "../../../components/LoadingDots/LoadingDots";
import SmallSearchBar from "../../../components/SmallSearchBar/SmallSearchBar";
import urls from "./../../../api/auth-ep";
const Comments = () => {
  const [textSearch, setTextSearch] = useState("");
  const [filterString, setFilterString] = useState("");

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
      <div className="flex flex-col ml-8 w-full min-w-max sm:w-1/2 sm:min-w-min">
        <div className="flex flex-row justify-start mt-10 pr-16 w-full">
          <SmallSearchBar
            inputPlaceholder={"Wyszukaj"}
            onFilterChange={(f) => setFilterString(f)}
            onInputChange={(text) => setTextSearch(text)}
          ></SmallSearchBar>
        </div>
        <div className="flex flex-col gap-2 mt-2 pt-2 w-full">
          {typeof data === "undefined" ? <LoadingDots></LoadingDots> : ""}
          {data
            ? data
                .filter((f) => {
                  return (
                    f.name.includes(textSearch) ||
                    f.channelName.includes(textSearch) ||
                    f.comments.some(
                      (comment) =>
                        comment.content === textSearch || comment.content.title === textSearch
                    )
                  );
                })
                .sort((a, b) => {
                  if (filterString === t("newest")) {
                    const time =
                      new Date(
                        b.comments.sort(
                          (a, b) =>
                            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                        )[0].createdAt
                      ).getTime() -
                      new Date(
                        a.comments.sort(
                          (a, b) =>
                            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                        )[0].createdAt
                      ).getTime();
                    return time;
                  } else if (filterString === t("oldest")) {
                    const time =
                      new Date(
                        a.comments.sort(
                          (a, b) =>
                            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
                        )[0].createdAt
                      ).getTime() -
                      new Date(
                        b.comments.sort(
                          (a, b) =>
                            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
                        )[0].createdAt
                      ).getTime();
                    return time;
                  } else if (filterString === t("mostPopular")) {
                    return (
                      b.comments.sort((a, b) => b.likes - a.likes)[0].likes -
                      a.comments.sort((a, b) => b.likes - a.likes)[0].likes
                    );
                  } else {
                    return 0;
                  }
                })
                .map((l) => <CommentLabel data={l} key={l.id}></CommentLabel>)
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Comments;
