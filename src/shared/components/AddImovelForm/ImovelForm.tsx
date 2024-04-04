import React, { useState } from "react";
import { FormularioTitulo, InputText } from "./styles";
import { NumberInput } from "../Input/NumberInput";
import { SimpleImovel } from "../../../types/imovel";
import { StringInput } from "../Input/StringInput";
import { Grid } from "@mui/material";

export const ImovelForm = ({onImovelChange} : {onImovelChange : (imovel : SimpleImovel) => void}) => {
    const [imovel, setImovel] = useState<SimpleImovel>({
        nome: "",
        descricao: "",
        quantidadeAndares: null,
        espacosPorAndar: null,
        tipo: ""
    })

    const handleImovelChange = (event : any) => {
        const novoImovel = {
            ...imovel, 
            [event.target.name] : event.target.value
        };
        setImovel(novoImovel);
        onImovelChange(novoImovel);
    }

    return (
        <form onChange={handleImovelChange}>
            <FormularioTitulo>Tipo do imóvel</FormularioTitulo>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <select name="tipo" defaultValue="CASA" >
                        <option value="CASA">Casa</option>
                        <option value="EDIFICIO">Edificio</option>
                    </select>
                </Grid>
                <Grid item xs={6}>
                    <InputText>Quantidade de andares: </InputText>
                    <NumberInput 
                        name="quantidadeAndares" 
                        placeholder="ex: 2"
                        larguraMinima
                    /> andares
                </Grid>
                <Grid item xs={6}>
                    <InputText>Quantidade de espaços por andar: </InputText>
                    <NumberInput 
                        name="espacosPorAndar" 
                        placeholder="ex: 1"
                        larguraMinima
                    /> espaços
                </Grid>
                <Grid item xs={12}>
                    <InputText>Nome:</InputText>
                    <StringInput 
                        name="nome"
                        placeholder="Dê um nome ao seu imóvel"
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputText>Descrição:</InputText>
                    <StringInput 
                        name="descricao"
                        placeholder="Adicione uma descrição"
                    /> 
                </Grid>

            </Grid>
        </form>
    )
}