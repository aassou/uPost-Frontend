import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.UPOST_API_URI
});

export default axiosInstance;
