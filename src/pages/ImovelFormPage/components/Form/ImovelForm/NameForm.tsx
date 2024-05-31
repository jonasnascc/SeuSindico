import React from "react";
import { Grid, InputLabel, TextField } from "@mui/material";
import { Imovel } from "../../../../../types/imovel";
import { ImovelFormStep } from "./ImovelFormStep";
import { StepComponentProps } from "../../../../../shared/hooks/useImovelFormSteps";
import { FormGridTile, NameInput } from "../../../../../shared/components/Forms/styles";
import { DescricaoTextArea } from "../styles";
import { useFormikContext } from "formik";

export const NameForm = ({visible} : StepComponentProps) => { 
    const {values, handleChange} = useFormikContext<Imovel>()

    return (
        <ImovelFormStep visible={visible}>
            <Grid container spacing={".3vw"} height={"100%"}>
                <Grid item xs={12} sm={12} md={6}>
                    <FormGridTile>
                        <InputLabel>Nome</InputLabel>
                        <TextField
                            id="nome"
                            name="nome"
                            type="text"
                            placeholder="Digite um nome único"
                            value={values.nome}
                            onChange={handleChange}
                        />
                    </FormGridTile>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <FormGridTile>
                        <InputLabel>Descrição</InputLabel>
                        <TextField
                            id="descricao"
                            name="descricao"
                            placeholder="Digite uma descrição"
                            value={values.descricao}
                            onChange={handleChange}
                        />
                    </FormGridTile>
                </Grid>
            </Grid>
        </ImovelFormStep>
        
        
    )
}