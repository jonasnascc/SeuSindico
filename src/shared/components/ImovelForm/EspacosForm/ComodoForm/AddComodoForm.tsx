import React, { useEffect, useState } from "react";
import { Comodo } from "../../../../../types/imovel";
import { FormNumbersInput, InputLabel } from "../../styles";
import { ComodoFormContainer } from "./styles";

const comodoVazio : Comodo = {
    nome: "",
    metrosQuadrados: null,
    detalhes: ""
}

type AddComodoFormProps = {
    onSave : (comodo: Comodo) => void,
    onCancel : () => void
}

export const AddComodoForm = ({onSave, onCancel} : AddComodoFormProps) => {
    const [comodo, setComodo] = useState<Comodo>({...comodoVazio});

    const handleSave = (event : any) => {
        event.preventDefault();
        onSave(comodo);
        setComodo({...comodoVazio});
    }

    const handleCancel = (event : any) => {
        event.preventDefault();
        onCancel();
        setComodo({...comodoVazio})
    }

    const handleChange = (event: any) => {
        setComodo({
            ...comodo,
            [event.target.name] : event.target.value
        })
    }

    return(
        <ComodoFormContainer onChange={handleChange}>
            <InputLabel>Digite um nome para seu cômodo</InputLabel>
            <input
                id="nome"
                name="nome"
                placeholder="Digite um nome"
                type="text"
                value={comodo.nome}
            />
            <InputLabel>Quantos metros quadrados este cômodo possui?</InputLabel>
            <FormNumbersInput
                id="metrosQuadrados"
                name="metrosQuadrados"
                placeholder="Ex.:22.3"
                type="number"
                value={comodo?.metrosQuadrados??""}
            />

            <InputLabel>Caso queira, digite alguns detalhes sobre o imóvel</InputLabel>
            <textarea
                id="detalhes"
                name="detalhes"
                placeholder="Digite aqui os detalhes"
                value={comodo.detalhes}
            />


            <button onClick={handleCancel}>cancelar</button>
            <button onClick={handleSave}>salvar</button>
        </ComodoFormContainer>
    )
}