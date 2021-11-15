import axiosClient from "../apiClient";

import { QUESTIONS_CALL } from "../../utils/constants/api.constants";
import ApiData from "../../types/ApiData";

export function getQuestions(number: string){
  return axiosClient.get<ApiData>(QUESTIONS_CALL.concat(number));
}

export function postQuestions(data: ApiData){
  return axiosClient.post(QUESTIONS_CALL, JSON.stringify(data));
}