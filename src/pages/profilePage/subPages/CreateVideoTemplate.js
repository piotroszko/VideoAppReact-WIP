import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { toast } from "react-toastify";

import urls from "../../../api/auth-ep";

const CreateVideoTemplate = () => {
  let navigate = useNavigate();
  const aviableCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const [inputTag, setInputTag] = useState("");
  const [tags, setTags] = useState([]);

  const [data, setData] = useState({ name: "", description: "", application: "api-jwt" });
  const [errorLength, setErrorLength] = useState(false);
  const AddTag = () => {
    if (!tags.includes(inputTag)) {
      setTags((old) => [...old, inputTag]);
      setInputTag("");
    }
  };
  const deleteTag = (value) => {
    setTags(tags.filter((t) => t !== value));
  };
  const handleTagChange = (e) => {
    if (e.target.value.slice(-1) === "," || e.target.value.slice(-1) === "+") {
      AddTag();
    } else if (aviableCharacters.includes(e.target.value.slice(-1))) {
      setInputTag(e.target.value);
    }
  };
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
      <div className="mt-14 w-full bg-gray-500 rounded-lg md:w-full lg:w-1/2">
        <div className="flex flex-col gap-0 pb-4">
          <p className="mt-4 text-gray-200 text-xl font-bold"> {t("videoTemplateCreation")}</p>

          <label htmlFor="name" className="mt-6 text-gray-200 text-lg font-semibold" required>
            {t("videoName")}
          </label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => setData((old) => ({ ...old, name: e.target.value }))}
            className="mx-auto px-2 py-1 w-3/4 font-semibold rounded-md"
            placeholder=""
          ></input>
          <label htmlFor="desc" className="mt-6 text-gray-200 text-lg font-semibold">
            {t("videoDescription")}
          </label>
          <textarea
            value={data.description}
            onChange={(e) => setData((old) => ({ ...old, description: e.target.value }))}
            id="desc"
            className="mx-auto px-2 py-1 w-3/4 font-semibold rounded-md"
            placeholder=""
          ></textarea>
          <label htmlFor="tags" className="mt-6 text-gray-200 text-lg font-semibold">
            {t("tags")}
          </label>
          <div className="mt-1 mx-auto" id="tags">
            <div className="relative">
              <input
                value={inputTag}
                onChange={(e) => {
                  handleTagChange(e);
                }}
                className="block px-4 py-2 w-full text-gray-700 leading-tight bg-white border focus:border-blue-500 border-gray-200 rounded focus:outline-none appearance-none focus:ring-1 focus:ring-blue-500"
                placeholder={t("enterTags")}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    AddTag();
                  }
                }}
              />
              <div
                className={`${inputTag !== "" && inputTag.length > 2 ? "" : "hidden"}`}
                onClick={() => {
                  AddTag();
                }}
              >
                <div className="absolute z-40 left-0 mt-2 w-full">
                  <div className="py-1 text-sm bg-white border border-gray-300 rounded shadow-lg">
                    <a className="block px-5 py-1 hover:text-white hover:bg-indigo-600 cursor-pointer">
                      {t("addTag")}
                      <span className="font-bold">{inputTag}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-3/4">
            {tags.length > 0
              ? tags.map((t) => (
                  <div
                    key={t}
                    className="inline-flex items-center mr-1 mt-2 w-max text-sm bg-blue-100 rounded overflow-hidden"
                  >
                    <span className="ml-2 mr-1 px-1 max-w-xs leading-relaxed truncate" x-text="tag">
                      {t}
                    </span>
                    <button
                      className="inline-block align-middle w-6 h-8 text-gray-500 bg-blue-200 focus:outline-none"
                      onClick={() => deleteTag(t)}
                    >
                      <svg
                        className="mx-auto w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
                        />
                      </svg>
                    </button>
                  </div>
                ))
              : ""}
          </div>
          <button
            onClick={() => AddVideo()}
            className="mt-14 mx-auto px-4 py-2 w-max text-gray-800 text-lg font-semibold bg-gray-300 rounded-md"
          >
            {t("addVideo")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateVideoTemplate;
