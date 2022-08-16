import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MenuTemplate } from "../atomic/template/MenuTemplate";
import { useNotification } from "../hooks/useNotification";
import { ListDogsService } from "../services/list-dogs.service";
import { useDogs } from "../stores/dogs.store";

const Home = () => {
  const router = useRouter();
  const { handleNotification } = useNotification();
  const { dogs, setDogs, dogType } = useDogs();
  const [firstFetch, setFirstFetch] = useState(false);
  const [token, setToken] = useState("");

  const getDogsList = (token: string) => {
    try {
      (async () => {
        const { list } = await ListDogsService(token, dogType);
        setDogs(list);
        setFirstFetch(true);
      })();
    } catch (error) {
      handleNotification({
        title: "List Dogs Error",
        message: "handleNotification",
        type: "alert",
      });
      setFirstFetch(true);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@dogbreed:login");

    if (!token) {
      router.push("/register");
      return;
    }

    getDogsList(token);

    setToken(token);
  }, []);

  useEffect(() => {
    if (!token) {
      return;
    }

    getDogsList(token);
  }, [dogType]);

  return token && firstFetch && <MenuTemplate dogs={dogs}></MenuTemplate>;
};

export default Home;
