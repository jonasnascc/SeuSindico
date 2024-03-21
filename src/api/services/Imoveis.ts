import axios from "../axios"

export const getUserImoveis = async () => {
    const data = await axios.get("/proprietario/imoveis", {sendToken: true})
        .then((resp) => resp.data)
        .catch((error) => console.log(error));

    return data;
}