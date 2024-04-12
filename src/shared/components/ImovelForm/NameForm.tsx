import React from "react";
import { DescricaoTextArea, FormDescription, FormGridTile, ImovelFormCard, InputLabel, NameInput } from "./styles";
import { Grid } from "@mui/material";

type NameFormProps = {
    onChange : (event:any) => void
}

export const NameForm = ({onChange} : NameFormProps) => { 
    return (
        <ImovelFormCard>
            <Grid container height="100%" spacing={".3vw"}>
                <Grid item xs={4}>
                    <FormGridTile>
                        <FormDescription>Dê um nome ao seu imóvel e adicione uma descrição</FormDescription>
                    </FormGridTile>
                </Grid>
                <Grid item xs={4}>
                    <FormGridTile onChange={onChange}>
                        <InputLabel>Nome</InputLabel>
                        <NameInput
                            id="nome"
                            name="nome"
                            type="text"
                            placeholder="Digite um nome único"
                        />
                    </FormGridTile>
                </Grid>
                <Grid item xs={4}>
                    <FormGridTile>
                        <InputLabel>Descrição</InputLabel>
                        <DescricaoTextArea
                            id="descricao"
                            name="descricao"
                            placeholder="Digite uma descrição"
                            onChange={onChange}
                        />
                    </FormGridTile>
                </Grid>
            </Grid>
        </ImovelFormCard>
    )
}