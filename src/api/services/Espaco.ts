import { Espaco } from "../../types/imovel"
import axios from "../axios"

export const updateEspaco = async (imovelId : number, espaco: Espaco) => {
    axios.put(`proprietario/imoveis/${imovelId}/espacos/${espaco.id}`, espaco, {
        sendToken : true
    }).then((resp) => resp.data).catch((error) => console.log(error))
}