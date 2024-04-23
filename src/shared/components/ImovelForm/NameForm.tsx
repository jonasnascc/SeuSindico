import React from "react";
import { DescricaoTextArea, FormDescription, FormGridTile, InputLabel, NameInput } from "./styles";
import { Grid } from "@mui/material";
import { ImovelFormCard } from "../ImovelFormCard/ImovelFormCard";
import { Imovel } from "../../../types/imovel";

type NameFormProps = {
    imovel:Imovel,
    onChange : (event:any) => void
}

export const NameForm = ({onChange, imovel} : NameFormProps) => { 
    const {nome, descricao} = imovel;
    return (
        <ImovelFormCard
            label = "Dê um nome ao seu imóvel e adicione uma descrição"
            headerGridScreens={{xs:12, sm:4}}
            bodyGridScreens={{xs:12, sm:8}}
        >
            <Grid container spacing={".3vw"} height={"100%"}>
                <Grid item xs={12} sm={12} md={6}>
                    <FormGridTile onChange={onChange}>
                        <InputLabel>Nome</InputLabel>
                        <NameInput
                            id="nome"
                            name="nome"
                            type="text"
                            placeholder="Digite um nome único"
                            value={nome}
                        />
                    </FormGridTile>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <FormGridTile>
                        <InputLabel>Descrição</InputLabel>
                        <DescricaoTextArea
                            id="descricao"
                            name="descricao"
                            placeholder="Digite uma descrição"
                            onChange={onChange}
                            value={descricao}
                        />
                    </FormGridTile>
                </Grid>
            </Grid>
        </ImovelFormCard>
        
    )
}