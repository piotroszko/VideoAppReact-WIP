import axios from "axios";
import React from "react";
import useSWR from "swr";

import Comment from "./Comment";
import CommentForm from "./CommentForm";
import LoadingDots from "./../../../../components/LoadingDots/LoadingDots";
import urls from "./../../../../api/auth-ep";

const CommentsSection = (props) => {
  const { data } = useSWR(
    props.videoID ? urls.allComVideo + props.videoID + urls.aplicationTag : "",
    (url) => {
      if (localStorage.getItem("token") === null)
        return axios.get(url).then((res) => {
          return res.data;
        });
      else
        return axios
          .get(url, {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            return res.data;
          });
    }
  );
  return (
    <>
      <CommentForm videoID={props.videoID}></CommentForm>
      <div className="flex flex-col gap-4 mb-10 pt-2 w-full dark:text-gray-200 dark:bg-gray-800 bg-white">
        {typeof data === "undefined" ? <LoadingDots></LoadingDots> : ""}
        {data != null
          ? data.map((com) => {
              return <Comment data={com} key={com.id}></Comment>;
            })
          : ""}
      </div>
    </>
  );
};

export default CommentsSection;
