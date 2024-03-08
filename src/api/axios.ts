import axios from "axios";

declare module "axios" {
    export interface AxiosRequestConfig {
        sendToken?:boolean;
    }
}

const axiosInstance = axios.create({
    baseURL : process.env.REACT_APP_API
});

export default axiosInstance;