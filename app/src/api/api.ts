import axios from "axios";

const url = "https://api.giphy.com/v1/";
const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

const gifApi = axios.create({
  baseURL: `${url}`,
  params: {
    api_key: apiKey,
  },
  headers: {
    Accept: "application/json",
  },
});

export default gifApi;
