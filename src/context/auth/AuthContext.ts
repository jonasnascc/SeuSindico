import { createContext } from "react";
import { User } from "../../types/user";

export type AuthContextType = {
    user : User | null;
    signin : (login:string, password:string) => any,
    logout : () => any,
    signup : (name: string, cpf: string, email:string, password:string) => any
}

export const AuthContext = createContext<AuthContextType>(null!);