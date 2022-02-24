import { useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import axios from "axios";

import urls from "./../api/auth-ep";

export default function usePlaylists() {
  const { mutate } = useSWRConfig();
  const axiosInstance = axios.create();
  const { data, error } = useSWR(
    localStorage.getItem("token") !== null ? urls.allPlaylists : "",
    (url) => {
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      return axiosInstance.get(url + urls.aplicationTag).then((res) => {
        return res.data;
      });
    }
  );
  const createPlaylist = (name) => {
    if (localStorage.getItem("token") !== null) {
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      axiosInstance.post(urls.createPlaylist, { name: name }).then((err, res) => {
        if (err) {
          return err;
        }
        mutate(urls.allPlaylists);
        return res.data;
      });
    }
  };
  const removePlaylist = (id) => {
    if (localStorage.getItem("token") !== null) {
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      axiosInstance.delete(urls.removePlaylist + id + "/" + urls.aplicationTag).then((err, res) => {
        if (err) {
          return err;
        }
        mutate(urls.allPlaylists);
        return res.data;
      });
    }
  };
  const addToPlaylist = (playlistID, videoID) => {
    if (localStorage.getItem("token") !== null) {
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      axiosInstance
        .post(urls.addToPlaylist, { id: playlistID, videoID: videoID })
        .then((err, res) => {
          if (err) {
            return err;
          }
          mutate(urls.allPlaylists);
          return res.data;
        });
    }
  };
  const removeFromPlaylist = (playlistID, videoID) => {
    if (localStorage.getItem("token") !== null) {
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      axiosInstance
        .delete(urls.removeFromPlaylist, { data: { id: playlistID, videoID: videoID } })
        .then((err, res) => {
          if (err) {
            return err;
          }
          mutate(urls.allPlaylists);
          return res.data;
        });
    }
  };
  const addToHistory = (videoID) => {
    if (localStorage.getItem("token") !== null) {
      axiosInstance.defaults.headers["Authorization"] = `${localStorage.getItem("token")}`;
      axiosInstance
        .post(urls.addToHistory + videoID + "/" + urls.aplicationTag)
        .then((err, res) => {
          if (err) {
            return err;
          }
          mutate(urls.allPlaylists);
          return res.data;
        });
    }
  };
  return { data, createPlaylist, removePlaylist, addToPlaylist, removeFromPlaylist, addToHistory };
}
