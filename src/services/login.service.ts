import { axiosInstance } from "../config/axios.config";

interface LoginDataDTO {
  data: {
    user: {
      _id: string;
      email: string;
      token: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
  };
}

interface Login {
  user: {
    email: string;
    token: string;
  };
}

export const LoginService = async (
  email: string
): Promise<Login | undefined> => {
  const response: LoginDataDTO = await axiosInstance.post<
    LoginDataDTO,
    LoginDataDTO,
    { email: string }
  >("/register", {
    email,
  });

  return {
    user: {
      email: response.data.user.email,
      token: response.data.user.token,
    },
  };
};
