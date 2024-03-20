import { createContext } from "react";
import { User } from "../../types/user";

export type AuthContextType = {
    user : User | null;
    signin : (login:string, password:string) => Promise<boolean>,
    logout : () => any,
    signup : (name: string, cpf: string, email:string, senha:string, role:string) => Promise<boolean>,
    validateToken : (token:string) => Promise<Boolean>,
    authenticated : boolean
}

export const AuthContext = createContext<AuthContextType>(null!);