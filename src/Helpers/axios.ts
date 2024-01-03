import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL;
const token = localStorage.getItem("soBlogToken");

export const getToken = () => (token ? token : null);

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: getAuthorizationHeader(),
    Accept: "application/json",
  },
});
export default axiosInstance;
