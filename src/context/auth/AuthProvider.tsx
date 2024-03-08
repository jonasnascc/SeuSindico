import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/user";
import { useAuth } from "../../shared/hooks/useAuth";

export const AuthProvider = ({children} : {children:JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null);

    const api = useAuth();

    const signin = async (login:string, password:string) => {
        const data = await api.signin(login, password);
        if(data===null) return false;
        if(data.token) {
            if(await validateToken()) {
                localStorage.setItem("token", data.token);
                return true;
            }
            return false;
        }
        return false;
    }
    const logout = async () => {
        await api.logout();
        setUser(null);
        return true;
    }

    const signup = async (name: string, cpf: string, email:string, password:string) => {
        await api.signup(name,cpf,email,password);
        return await signin(email, password);
    }

    const validateToken = async () => {
        const userReq = await api.validateToken();
        if(userReq) {
            setUser(userReq);
            return true;
        }
        return false;
    }

    
    return (
        <AuthContext.Provider value={{user, signin, logout, signup}}>
            {children}
        </AuthContext.Provider>
    )
}