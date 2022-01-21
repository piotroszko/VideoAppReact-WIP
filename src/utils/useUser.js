import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";
import useAuth from "./useAuth";

export default function useUser() {
  const { token } = useAuth();
  const [user, setUser] = useState(null);

  // Get user data
  const { data, error, mutate } = useSWR(
    token
      ? `http://localhost:4000/api/v1/authentication/me?application=api-jwt`
      : null,
    (url) =>
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data),
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    if (data) {
      setUser(data);
    }
    if (error) {
      setUser(null);
    }
  }, [data, error]);

  return { user, mutate };
}
