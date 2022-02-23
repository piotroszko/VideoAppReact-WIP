import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";

import urls from "./../api/auth-ep";

export default function usePlaylists() {
  const axiosInstance = axios.create();
  const { data, error } = useSWR(
    localStorage.getItem("token") !== null ? "http://localhost:4000/api/v1/lists/all/" : "",
    (url) => {
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      return axiosInstance.get(url + urls.aplicationTag).then((res) => {
        return res.data;
      });
    }
  );

  return { data };
}
