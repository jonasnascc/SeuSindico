import React, { useState } from "react";
import { NumberInput } from "../Input/NumberInput";
import { StringInput } from "../Input/StringInput";
import { Subtitle, InputText } from "./styles";
import { Comodo } from "../../../types/imovel";

export const ComodoForm = ({onSaveComodo} : {onSaveComodo : (comodo : Comodo) => void}) => {

    const [comodo, setComodo] = useState<Comodo>({
        nome: "",
        metrosQuadrados: null,
        detalhes: ""
    });

    const handleComodoChange = (event: any) => {
        setComodo({
            ...comodo,
            [event.target.name] : event.target.value
        })
    }

    const handleSaveComodo = (event: any) => {
        event.preventDefault();
        onSaveComodo(comodo);
    }

    return (
        <form onChange={handleComodoChange}>
            <InputText>Nome</InputText>
            <StringInput name="nome"/>

            <InputText>Metros quadrados</InputText>
            <NumberInput name="metrosQuadrados"/>

            <InputText>detalhes</InputText>
            <StringInput name="detalhes"/>

            <button onClick={handleSaveComodo}>Salvar cômodo</button>
        </form>
    )
}