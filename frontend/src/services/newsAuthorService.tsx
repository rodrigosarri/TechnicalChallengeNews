import axios, { AxiosError } from "axios";

import { QueryStringProps } from "./interface";

import { api } from "src/services/api";
import { toQueryString } from "src/utils";

const baseURL = "/api/news-author";

export const getNewsAuthor = async (params: QueryStringProps) => {
  try {
    const queryString = toQueryString(params);

    const response = await api.get(`${baseURL}${queryString}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axios.isAxiosError(error)) {
      console.error("Falha ao recuperar dados", axiosError.message);
      if (axiosError.code === "ERR_NETWORK") {
        console.error("Erro conexão com a internet");
      } else if (axiosError.response) {
        console.error(`Servidor respondeu com o erro ${axiosError.response.status}`);
      } else {
        console.error("Erro na solicitação", axiosError.message);
      }
    } else {
      console.error("Erro inesperado", error);
    }
  }
};
