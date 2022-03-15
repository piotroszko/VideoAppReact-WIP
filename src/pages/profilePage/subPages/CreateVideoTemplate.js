import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { toast } from "react-toastify";

import urls from "../../../api/auth-ep";
import TagInput from "../../../components/TagInput/TagInput";

const CreateVideoTemplate = () => {
  let navigate = useNavigate();
  const [tags, setTags] = useState([]);

  const [data, setData] = useState({ name: "", description: "", application: "api-jwt" });
  const [errorLength, setErrorLength] = useState(false);

  const AddVideo = () => {
    if (data.name.length > 3) {
      const axiosInstance = axios.create();
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      axiosInstance.post(urls.createTemplateVideo, { ...data, tags: tags }).then((res) => {
        toast.success(t("videoTemplateCreated"));
        setTimeout(() => navigate("/profile/edit/" + res.data.video.id, { replace: true }), 400);
      });
    } else {
      setErrorLength(true);
    }
  };
  return (
    <div className="flex flex-col pl-4 pr-4 pt-20 w-full md:pl-20">
      <div className="mt-14 w-full bg-gray-200 dark:bg-gray-700 rounded-lg md:w-full lg:w-1/2">
        <div className="flex flex-col gap-0 pb-4">
          <p className="mt-4 dark:text-gray-200 text-gray-800 text-xl font-bold">
            {" "}
            {t("videoTemplateCreation")}
          </p>

          <label
            htmlFor="name"
            className="mt-6 dark:text-gray-200 text-gray-800 text-lg font-semibold"
            required
          >
            {t("videoName")}
          </label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) =>
              setData((old) => {
                if (errorLength) setErrorLength(false);
                return { ...old, name: e.target.value };
              })
            }
            className="mx-auto px-2 py-1 w-3/4 font-semibold rounded-md"
            placeholder=""
          ></input>
          <p
            className={`${
              errorLength ? "opacity-100" : "opacity-0"
            } bg-red-700 dark:text-gray-200 text-gray-800 font-bold text-base mt-1 w-max mx-auto p-1 rounded-md`}
          >
            {t("videoErrorLength")}
          </p>
          <label
            htmlFor="desc"
            className="mt-6 dark:text-gray-200 text-gray-800 text-lg font-semibold"
          >
            {t("videoDescription")}
          </label>
          <textarea
            value={data.description}
            onChange={(e) => setData((old) => ({ ...old, description: e.target.value }))}
            id="desc"
            className="mx-auto px-2 py-1 w-3/4 font-semibold rounded-md"
            placeholder=""
          ></textarea>
          <TagInput
            outputTags={(o) => {
              setTags(o);
            }}
          ></TagInput>
          <button
            onClick={() => AddVideo()}
            className="mt-14 mx-auto px-4 py-2 w-max text-gray-600 text-lg font-semibold hover:bg-gray-300 bg-gray-400 rounded-md"
          >
            {t("addVideo")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateVideoTemplate;
