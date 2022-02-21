import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";
import urls from "./../api/auth-ep";

export default function useProvideAuth() {
  const [token, setToken] = useState(null);
  const [isLogin, setIsLogin] = useState(!!JSON.parse(localStorage.getItem("isLogin")));
  const [isLoading, setIsLoading] = useState(true);

  const login = (token) => {
    localStorage.setItem("isLogin", true);
    localStorage.setItem("token", "Bearer " + token);
    setToken(token);
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("token");
    setToken(null);
    setIsLogin(false);
  };

  // Refresh token for persisting session
  const { data, error, isValidating } = useSWR(
    isLogin ? urls.refreshToken : null,
    (url) =>
      axios
        .get(url, { headers: { Authorization: `${localStorage.getItem("token")}` } })
        .then((res) => res),
    {
      // Silently refresh token every expiry time
      refreshInterval: 1000 * 60 * 15,
      revalidateOnFocus: false,
    }
  );

  useEffect(() => {
    if (data) {
      login(data.data.token);
    }
    if (error) {
      logout();
    }
    setIsLoading(isValidating);
  }, [data, error, isValidating]);

  useEffect(() => {
    // Sync all tabs on login or logout
    window.addEventListener("storage", (e) => {
      if (e.key === "isLogin") {
        setIsLogin(e.newValue);
      }
    });
  });

  return { token, login, logout, isLogin, isLoading };
}
