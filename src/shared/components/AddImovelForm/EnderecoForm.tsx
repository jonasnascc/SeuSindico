import { Grid } from "@mui/material";
import React, { useState } from "react";
import { FormularioTitulo, InputText } from "./styles";
import { StringInput } from "../Input/StringInput";
import { Endereco } from "../../../types/imovel";

export const EnderecoForm = ({onFormChange} : {onFormChange : (endereco : Endereco) => void}) => {
    const [endereco, setEndereco] = useState<Endereco>({
        rua: "",
        numero: null,
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
        complemento: ""
    });

    const handleFormChange = (event : any) => {
        const newObject = {
            ...endereco,
            [event.target.name] : event.target.value
        };

        setEndereco(newObject);
        onFormChange(newObject)
    }

    return (
        <form name="endereco" onChange={handleFormChange}>
            <FormularioTitulo>Endereço</FormularioTitulo>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <InputText>Rua</InputText>
                    <StringInput name="rua" />
                </Grid>
                <Grid item xs={6}>
                    <InputText>Bairro</InputText>
                    <StringInput name="bairro" />
                </Grid>
                <Grid item xs={2}>
                    <InputText>Numero</InputText>
                    <StringInput name="numero" />
                </Grid>
                <Grid item xs={5}>
                    <InputText>Cidade</InputText>
                    <StringInput name="cidade" />
                </Grid>
                <Grid item xs={5}>
                    <InputText>Estado</InputText>
                    <StringInput name="estado" />
                </Grid>
                <Grid item xs={4}>
                    <InputText>CEP</InputText>
                    <StringInput name="cep" />
                </Grid>
                <Grid item xs={8}>
                    <InputText>Complemento</InputText>
                    <StringInput name="complemento" />
                </Grid>
            </Grid>
        </form>
    )
}