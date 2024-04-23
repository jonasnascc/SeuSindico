import React from "react";
import { FormDescription, FormGridTile, FormNumbersInput, InputLabel } from "./styles";
import { Grid } from "@mui/material";
import { ImovelFormCard } from "../ImovelFormCard/ImovelFormCard";
import { Imovel } from "../../../types/imovel";

type ImovelDataFormProps = {
    imovel : Imovel,
    onChange : (event: any) => void
}

export const ImovelDataForm = ({onChange, imovel} : ImovelDataFormProps) => {
    const {quantidadeAndares, espacosPorAndar} = imovel;
    return(
        <ImovelFormCard
            label = "Vamos começar pelo básico"
            headerGridScreens={{xs:12, sm:4}}
            bodyGridScreens={{xs:12, sm:8}}
        >
        
        <Grid container  height={"100%"}>
            <Grid item xs={6} height={"100%"}>
                <FormGridTile onChange={onChange}>
                    <InputLabel>Quantos andares o seu imóvel possui?</InputLabel>
                    <FormNumbersInput
                        id="quantidadeAndares"
                        name="quantidadeAndares"
                        placeholder="Digite a quantidade de andares"
                        type="number"
                        value={quantidadeAndares??""}
                    />
                    <InputLabel>Quantos espaços por andar?</InputLabel>
                    <FormNumbersInput
                        id="espacosPorAndar"
                        name="espacosPorAndar"
                        placeholder="Digite a quantidade de espaços"
                        type="number"
                        defaultValue={espacosPorAndar??""}
                    />
                </FormGridTile>
            </Grid>
            <Grid item xs={6} height={"100%"}></Grid>
        </Grid>
        
        </ImovelFormCard>
        
    )
}