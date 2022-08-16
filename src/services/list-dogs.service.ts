import { axiosInstance } from "../config/axios.config";

interface ListDataDTO {
  data: {
    breed: string;
    list: string[];
  };
}

interface ListDogs {
  list: string[];
}

export const ListDogsService = async (
  token: string,
  dogType: "chihuahua" | "husky" | "pug" | "labrador"
): Promise<ListDogs> => {
  const response: ListDataDTO = await axiosInstance.get<unknown, ListDataDTO>(
    "/list",
    {
      params: {
        breed: dogType,
      },
      headers: {
        Authorization: token,
      },
    }
  );

  return {
    list: response.data.list,
  };
};
