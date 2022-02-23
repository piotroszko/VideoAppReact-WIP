import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";

import urls from "./../api/auth-ep";

export default function useAvatar(id) {
  const { data } = useSWR(urls.avatar + id, (url) => {
    return axios.get(url).then((res) => {
      return urls.basicUrl + res.data;
    });
  });

  return { data };
}
