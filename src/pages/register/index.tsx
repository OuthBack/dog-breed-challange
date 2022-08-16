import React, { useEffect, useState } from "react";
import { RegisterCardTemplate } from "../../atomic/template/RegisterCard";
import { LoginService } from "../../services/login.service";
import { useNotification } from "../../hooks/useNotification";
import { useRegister } from "../../stores/register.store";
import { useRouter } from "next/router";

const Register = () => {
  const { handleNotification } = useNotification();
  const { email } = useRegister();
  const router = useRouter();

  const [redirect, setRedirect] = useState(false);

  const onSubmitLogin = async () => {
    try {
      const response = await LoginService(email);

      if (!response)
        return handleNotification({
          title: "Login Error",
          message: "Invalid response",
          type: "alert",
        });

      localStorage.setItem("@dogbreed:login", response.user.token);

      setRedirect(true);

      return handleNotification({
        title: "Login Success",
        message: "Logged with success",
        type: "success",
      });
    } catch (error) {
      handleNotification({
        title: "Login Error",
        message: "Please try again later",
        type: "alert",
      });
    }
  };

  useEffect(() => {
    if (!redirect) {
      return;
    }

    router.push(".");
  }, [redirect]);

  return <RegisterCardTemplate onClick={onSubmitLogin}></RegisterCardTemplate>;
};

export default Register;
