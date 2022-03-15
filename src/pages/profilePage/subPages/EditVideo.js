import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";
import axios from "axios";
import Moment from "react-moment";
import { t } from "i18next";
import { toast } from "react-toastify";

import urls from "./../../../api/auth-ep";
import "./SubPages.css";
import TagInput from "./../../../components/TagInput/TagInput";

const EditVideo = () => {
  let { id } = useParams();
  const { mutate } = useSWRConfig();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [progress, setProgress] = useState(0);

  const [videoFile, setVideoFile] = useState();

  const [loading, setLoading] = useState(true);

  const { data } = useSWR(typeof id !== "undefined" ? urls.videoInfo + id : "", (url) =>
    axios.get(url).then((res) => {
      document.title = " Edit - " + res.data.name;
      if (!data) {
        setTags(res.data.tags);
        setDescription(res.data.description);
        setTitle(res.data.name);
      }
      setLoading(false);
      return res.data;
    })
  );
  useEffect(() => {
    if (data) {
      setTags(data.tags);
      setDescription(data.description);
      setTitle(data.name);
    }
  }, []);
  const handleFileUpload = (e) => {
    setVideoFile(e.target.files[0]);
  };
  const uploadVideo = async () => {
    if (videoFile) {
      var formdata = new FormData();
      const axiosInstance = axios.create();
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      formdata.append("file", videoFile);
      formdata.append("videoId", id);
      await axiosInstance
        .post(urls.uploadVideo, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const progress = (progressEvent.loaded / progressEvent.total) * 100;
            setProgress(progress);
          },
        })
        .then((res) => {
          mutate(urls.videoInfo + id);
        });
    } else {
      toast.error(t("fileNotSelected"));
    }
  };
  return (
    <div className="flex flex-col pl-4 pr-4 pt-2 w-full md:pl-20 lg:pt-20">
      <div className="dark:placeholder-gray-800 flex flex-col mb-10 w-full dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-lg sm:mt-4 md:w-full lg:w-2/3">
        <div className="flex flex-col gap-2 p-2 sm:flex-row sm:gap-0">
          {!loading ? (
            <>
              <div className="h-max flex flex-col justify-center order-3 mx-auto w-full text-lg font-bold cursor-pointer sm:order-1 sm:mx-0 sm:w-1/3">
                {" "}
                <p className="">{data?.name}</p>
                <p className="mt-2 text-base italic font-normal">{data?.description}</p>{" "}
              </div>
              <div className="separatorBar order-2"></div>
              <div className="separatorBar order-4"></div>
              <div className="separatorBar order-6"></div>

              <div className="order-5 mx-auto w-full h-auto font-semibold sm:mt-4 sm:mx-0 sm:w-1/3">
                <div className="flex flex-col justify-center mx-auto w-3/4 text-left">
                  <Moment format="HH:mm DD-MM-YYYY">{data?.createdAt}</Moment>
                  <p className="text-gray-700">{data?.views.toString() + " " + t("views")}</p>
                  <p className="text-green-700">{data?.likes.toString() + " " + t("likes")}</p>
                  <p className="text-red-700">{data?.dislikes.toString() + " " + t("dislikes")}</p>
                </div>
              </div>
              <div className="order-1 mx-auto w-max sm:order-9 sm:mx-0">
                {data?.mediaAvaiable ? (
                  <img
                    className={`block my-2 w-20 h-20  sm:w-40 sm:h-40 rounded-2xl`}
                    src={urls.thumbnails + data.id + ".png"}
                    alt=""
                  />
                ) : (
                  <div className="flex flex-col justify-center mt-2 my-2 w-20 h-20 text-6xl bg-gray-400 rounded-2xl sm:w-40 sm:h-40">
                    <div className="text-gray-300"> X </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center order-3 mx-auto w-full h-20 text-lg font-bold cursor-pointer sm:order-1 sm:mx-0 sm:w-1/3">
                <div className="mx-auto w-20 h-10 bg-gray-400 animate-pulse"></div>
              </div>
              <div className="separatorBar order-2"></div>
              <div className="separatorBar order-4"></div>
              <div className="separatorBar order-6"></div>
              <div className="order-5 mx-auto w-full h-auto font-semibold sm:mt-4 sm:mx-0 sm:w-1/3">
                <div className="flex flex-col gap-1 justify-center mx-auto w-3/4 text-left">
                  <div className="pulseSmallBar"></div>
                  <div className="pulseSmallBar"></div>
                  <div className="pulseSmallBar"></div>
                  <div className="pulseSmallBar"></div>
                </div>
              </div>
              <div className="order-1 mx-auto w-max sm:order-9 sm:mx-0">
                <div className="mx-auto w-20 h-20 bg-gray-400 animate-pulse sm:w-40 sm:h-40"></div>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <p className="p-2 w-full text-lg font-semibold">{t("editForm")}</p>

          <p forHtml="file" className="mt-4">
            {t("videoFile")}
          </p>
          <input
            id="file"
            type="file"
            accept="video/*"
            onChange={(e) => handleFileUpload(e)}
            className="mx-auto px-2 py-1 w-3/4 font-semibold bg-gray-400 dark:bg-gray-600 rounded-md"
          ></input>
          <div
            className={`${
              progress !== 0 ? "opacity-100" : "opacity-0"
            } flex flex-row justify-center`}
          >
            <p>{progress + "%"}</p>
          </div>
          <div
            class={`${
              progress !== 0 ? "opacity-100" : "opacity-0"
            } mx-auto w-3/4 h-2.5 dark:bg-gray-100 bg-gray-100 rounded-full`}
          >
            <div
              class="h-2.5 bg-gray-600 rounded-full"
              style={{ width: progress.toString() + "%" }}
            ></div>
          </div>
          <button
            onClick={() => {
              uploadVideo();
            }}
            className="mb-8 mx-auto px-4 py-2 w-max text-gray-800 bg-gray-400 rounded-xl"
          >
            {t("send")}
          </button>

          <p forHtml="name">{t("videoName")}</p>
          <input
            id="name"
            type="text"
            className="mx-auto px-2 py-1 w-3/4 font-semibold dark:bg-gray-600 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>

          <p forHtml="description" className="mt-2">
            {t("videoDescription")}
          </p>
          <textarea
            id="description"
            type="text"
            className="mx-auto px-2 py-1 w-3/4 font-semibold dark:bg-gray-600 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <TagInput
            className="mt-2"
            outputTags={(o) => {
              setTags(o);
            }}
            initialTags={tags}
          ></TagInput>
          <button className="mb-8 mx-auto px-4 py-2 w-max text-gray-900 font-bold bg-gray-400 rounded-md">
            {" "}
            {t("saveVideo")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditVideo;
