import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";
import Moment from "react-moment";
import { t } from "i18next";

import urls from "./../../../api/auth-ep";

const EditVideo = () => {
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  const [loading, setLoading] = useState(true);

  const { data } = useSWR(typeof id !== "undefined" ? urls.videoInfo + id : "", (url) =>
    axios.get(url).then((res) => {
      document.title = " Edit - " + res.data.name;
      setTags(res.data.tags);
      setDescription(res.data.description);
      setTitle(res.data.name);
      setLoading(false);
      return res.data;
    })
  );
  return (
    <div className="flex flex-col pl-4 pr-4 pt-2 w-full md:pl-20 lg:pt-20">
      <div className="flex flex-col w-full bg-gray-200 dark:bg-gray-700 rounded-lg sm:mt-4 md:w-full lg:w-2/3">
        <div className="flex flex-col gap-2 p-2 sm:flex-row sm:gap-0">
          {!loading ? (
            <>
              <div className="flex flex-col justify-center order-3 mx-auto w-full h-20 text-lg font-bold cursor-pointer sm:order-1 sm:mx-0 sm:w-1/3">
                {" "}
                <p className="">{data?.name}</p>{" "}
              </div>
              <div className="block order-2 mx-auto w-3/4 border-b-2 border-gray-300 sm:hidden sm:w-0"></div>
              <div className="block order-4 mx-auto w-3/4 border-b-2 border-gray-300 sm:hidden sm:w-0"></div>
              <div className="block order-6 mx-auto w-3/4 border-b-2 border-gray-300 sm:hidden sm:w-0"></div>

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
              <div className="block order-2 mx-auto w-3/4 border-b-2 border-gray-300 sm:hidden sm:w-0"></div>
              <div className="block order-4 mx-auto w-3/4 border-b-2 border-gray-300 sm:hidden sm:w-0"></div>
              <div className="block order-6 mx-auto w-3/4 border-b-2 border-gray-300 sm:hidden sm:w-0"></div>
              <div className="order-5 mx-auto w-full h-auto font-semibold sm:mt-4 sm:mx-0 sm:w-1/3">
                <div className="flex flex-col gap-1 justify-center mx-auto w-3/4 text-left">
                  <div className="mx-auto w-20 h-8 bg-gray-400 animate-pulse"></div>
                  <div className="mx-auto w-20 h-8 bg-gray-400 animate-pulse"></div>
                  <div className="mx-auto w-20 h-8 bg-gray-400 animate-pulse"></div>
                  <div className="mx-auto w-20 h-8 bg-gray-400 animate-pulse"></div>
                </div>
              </div>
              <div className="order-1 mx-auto w-max sm:order-9 sm:mx-0">
                <div className="mx-auto w-20 h-20 bg-gray-400 animate-pulse sm:w-40 sm:h-40"></div>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
};

export default EditVideo;
