import React from "react";
import { FormDescription, FormGridTile, FormNumbersInput, ImovelFormCard, InputLabel } from "./styles";
import { Grid } from "@mui/material";

type ImovelDataFormProps = {
    onChange : (event: any) => void
}

export const ImovelDataForm = ({onChange} : ImovelDataFormProps) => {
    return(
        <ImovelFormCard onChange={onChange}>
            <Grid container height="100%">
                <Grid item xs={4}>
                    <FormGridTile>
                        <FormDescription>Vamos começar pelo básico</FormDescription>
                    </FormGridTile>
                </Grid>
                <Grid item xs={4}>
                    <FormGridTile>
                        <InputLabel>Quantos andares o seu imóvel possui?</InputLabel>
                        <FormNumbersInput
                            id="quantidadeAndares"
                            name="quantidadeAndares"
                            placeholder="Digite a quantidade de andares"
                            type="number"
                        />
                        <InputLabel>Quantos espaços por andar?</InputLabel>
                        <FormNumbersInput
                            id="espacosPorAndar"
                            name="espacosPorAndar"
                            placeholder="Digite a quantidade de espaços"
                            type="number"
                        />
                    </FormGridTile>
                </Grid>
                <Grid item xs={4}>
                    
                </Grid>
            </Grid>
        </ImovelFormCard>
    )
}