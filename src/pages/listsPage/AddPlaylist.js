import { t } from "i18next";
import React, { useState, useEffect } from "react";
import { useSWRConfig } from "swr";
import axios from "axios";
import { toast } from "react-toastify";

import urls from "../../api/auth-ep";

const AddPlaylist = () => {
  const { mutate } = useSWRConfig();
  const [inputVisible, setInputVisible] = useState(false);
  const [name, setName] = useState("");

  const addPlaylist = () => {
    if (name.length > 3) {
      setInputVisible(false);
      const axiosInstance = axios.create();
      if (localStorage.getItem("token") !== null) {
        axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
        axiosInstance.post(urls.createPlaylist, { name: name }).then((response) => {
          setName("");
          toast.success(t("playlistAdded"));
          mutate(urls.allPlaylists);
        });
      }
    } else if (name.length === 0) {
    } else {
      toast.error(t("tooShortName"));
    }
  };
  return (
    <div className="py-1 border-b-2 border-transparent">
      {!inputVisible ? (
        <button
          onClick={() => {
            setName("");
            setInputVisible(true);
          }}
          className={` mx-2 p-2 font-bold bg-gray-400 rounded-lg text-white`}
        >
          {t("addNewPlaylist")}
        </button>
      ) : (
        <div className="relative flex flex-row mx-2 pl-2 px-1 py-2 font-bold bg-gray-400 rounded-lg">
          <button
            onClick={() => {
              addPlaylist();
            }}
            className="mr-1 p-1 text-white text-sm bg-gray-700 rounded-lg"
          >
            {t("add")}
          </button>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                addPlaylist();
              }
            }}
            className="relative p-1 text-gray-200 text-xs font-semibold bg-gray-600 rounded-md"
            placeholder={t("nameOfPlaylist")}
          ></input>

          <div
            onClick={() => {
              setName("");
              setInputVisible(false);
            }}
            className="ml-1 px-2 py-1 text-white text-sm bg-gray-700 rounded-lg cursor-pointer"
          >
            X
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPlaylist;
