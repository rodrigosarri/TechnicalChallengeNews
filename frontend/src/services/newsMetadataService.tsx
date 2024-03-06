import axios, { AxiosError } from "axios";

import { postMetadataPayload } from "./interface";

import { api } from "src/services/api";

const baseURL = "/api/news-metadata";

export const incrementMetadataView = async (payload: postMetadataPayload) => {
  try {
    const response = await api.post(`${baseURL}/increment-view`, payload);
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