import { Imovel } from "../../types/imovel";
import axios from "../axios"

export const getUserImoveis = async () => {
    const data = await axios.get("/proprietario/imoveis", {sendToken: true})
        .then((resp) => resp.data)
        .catch((error) => console.log(error));

    return data;
}

export const postImovel = async (imovel:Imovel) => {
    await axios.post("/proprietario/imoveis", imovel, {
        sendToken: true,
    })
        .then((resp) => resp.data)
        .catch((error) => console.log(error));
}

export const deleteImovel = async (id : number) => {
    await axios.delete(`/proprietario/imoveis/${id}`, {
        sendToken: true
    })
        .then((resp) => resp.data)
        .catch((error) => console.log(error));
}