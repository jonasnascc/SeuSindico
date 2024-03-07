export const useAuth = () => ({
    signin : async (login:string, password:string) => {
        return true;
    },
    logout : async () => {
        return true;
    },
    signup : async (name: string, cpf: string, email:string, password:string) => {
        return true;
    }
})