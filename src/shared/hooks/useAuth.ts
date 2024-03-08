import { AxiosRequestConfig } from "axios";
import axios from "../../api/axios";

export const useAuth = () => {
    const authRequest = async (url:string, body?:any, config ?: AxiosRequestConfig) => {
        let response : any = null;
        await axios.post(url, body, config)
            .then((resp) => response = resp)
            .catch((error) =>{return {error: error.code}});
        if(response !== null) {
            return response.data;
        }
        return null;
    }

    return ({
        signin : async (login:string, password:string) => {
            return authRequest("auth/login", {login, password});
        },
        logout : async () => {
            return authRequest("auth/logout");
        },
        signup : async (name: string, cpf: string, email:string, password:string) => {
            return authRequest("auth/signup", {name, cpf, email,password});
        },
        validateToken : async () => {
            return authRequest("auth/token/validate", undefined, {
                sendToken: true
            });
        }
    })
}