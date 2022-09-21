import axios from "axios";
import { BASE_URL } from "./UrlContants";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const request = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

const SearchOptions = {
  params: {
    q: "",
    type: "more",
    part: "snippet, id",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const SearchRequest = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, SearchOptions);
  return data;
};
