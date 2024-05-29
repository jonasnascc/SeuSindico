import { Comodo, Endereco, Espaco, Imovel } from "../../types/imovel";
import axios from "../axios"

export const getUserImoveis = async () => {
    const data = await axios.get("/proprietario/imoveis", {sendToken: true})
        .then((resp) => resp.data)
        .catch((error) => console.log(error));

    return data.map((data: any) => {
        return {
            ...data, 
            endereco:formatEndereco(data.endereco),
            espacos: formatEspacos(data.espacos)
        }
    });
}

export const postImovel = async (imovel:Imovel) => {
    await axios.post("/proprietario/imoveis", imovel, {
        sendToken: true,
    })
        .then((resp) => resp.data)
        .catch((error) => console.log(error));
}

export const updateImovel = async (imovel:Imovel) => {
    await axios.put("/proprietario/imoveis", imovel, {
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

const formatEndereco = (endereco : any) => {
    if(!endereco.line) {
        endereco.line = `Rua ${endereco.rua}, ${endereco.bairro}. ${endereco.cidade}-${endereco.estado}.`
    }
    return endereco
}

const formatEspacos = (espacos : any[]) => {
    return espacos.map(esp => formatEspacoComodos(esp))
}

const formatEspacoComodos = (espaco : any) => {
    if(!espaco.comodos || espaco.comodoLine) return espaco;

    const comodos = espaco.comodos
    
    let line = ""
    comodos.forEach((com : any) => {
        if(com.nome)
            line += ", " + com.nome
    })


    return {
        ...espaco,
        comodosLine : line==="" ? "Não há" : line
    }
}