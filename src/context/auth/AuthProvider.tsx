import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/user";
import { useAuth } from "../../shared/hooks/useAuth";

export const AuthProvider = ({children} : {children:JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null);
    const [authenticated, setAuthenticated] = useState(false);
    const api = useAuth();

    useEffect(() => {
        const validate = async () => {
            const token = localStorage.getItem("token");
            if(token){
                if(await validateToken(token)) {
                    setAuthenticated(true);
                }
            }
        }
        validate();

    }, [])

    const signin = async (login:string, password:string) => {
        const data = await api.signin(login, password);
        if(data===null) return false;
        if(data.token) {
            if(await validateToken(data.token)) {
                localStorage.setItem("token", data.token);
                setAuthenticated(true);
                return true;
            }
            return false;
        }
        setAuthenticated(false);
        return false;
    }
    const logout = async () => {
        await api.logout();
        setUser(null);
        setAuthenticated(false)
        return true;
    }

    const signup = async (name: string, cpf: string, email:string, senha:string, role:string) => {
        if(await api.signup(name,cpf,email,senha, role))
            return await signin(email, senha);
        else return false;
    }

    const validateToken = async (token : string) => {
        const userReq = await api.validateToken(token);
        if(userReq) {
            setUser(userReq);
            return true;
        }
        return false;
    }

    
    return (
        <AuthContext.Provider value={{user, signin, logout, signup, validateToken, authenticated}}>
            {children}
        </AuthContext.Provider>
    )
}