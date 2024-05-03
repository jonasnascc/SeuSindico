import axios from "../axios"

export const sendContrato = async (imovelId:number, espacoId:number, contrato:any)  => {
    await axios.post(`proprietario/imoveis/${imovelId}/espacos/${espacoId}/contratos`, contrato, {
        sendToken: true
    })
    .then((resp) => resp.data)
    .catch((err) => console.log(err))
}