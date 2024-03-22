import React from "react";
import { StringInput } from "./StringInput";
import { Grid } from "@mui/material";
import styled from "styled-components";

export const EnderecoFormBody = () => {

    return(
        <Grid container spacing={2} width={"100%"}>
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
    )
}

const InputText = styled.span`
    margin: 0;
    padding: 0;
`