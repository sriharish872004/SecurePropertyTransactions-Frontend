import api from "./axios";
import { apiEndpoints } from "../utils/apiEndpoints";

export const loginUser = async (data) => {
  const response = await api.post(apiEndpoints.LOGIN, data);
  return response.data;
};

export const signupUser = async (data) => {
  const response = await api.post(apiEndpoints.SIGNUP, data);
  return response.data;
};
