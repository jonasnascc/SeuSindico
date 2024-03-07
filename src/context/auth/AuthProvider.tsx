import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/user";
import { useAuth } from "../../shared/hooks/useAuth";

export const AuthProvider = ({children} : {children:JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null);

    const auth = useAuth();

    const signin = async (login:string, password:string) => {
        return auth.signin;
    }
    const logout = async () => {
        return auth.logout;
    }
    const signup = async (name: string, cpf: string, email:string, password:string) => {
        return auth.signup;
    }

    
    return (
        <AuthContext.Provider value={{user, signin, logout, signup}}>
            {children}
        </AuthContext.Provider>
    )
}