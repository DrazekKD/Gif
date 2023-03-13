import axios, { AxiosRequestConfig } from "axios";

const url = "https://api.giphy.com/v1/";
const apiKey = "z3TCxWMXI3poet0DNQBeC8RfYrprX7U1";

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
