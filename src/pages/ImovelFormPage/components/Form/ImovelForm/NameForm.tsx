import React from "react";
import { Grid, InputLabel, TextField } from "@mui/material";
import { Imovel } from "../../../../../types/imovel";
import { ImovelFormStep } from "./ImovelFormStep";
import { StepComponentProps } from "../../../../../shared/hooks/useImovelFormSteps";
import { InputContainer } from "../styles";
import { useFormikContext } from "formik";
import { CustomInputLabel } from "../../../../../shared/components/Inputs/CustomLabel";
import { CustomTextField } from "../../../../../shared/components/Inputs/CustomTextField";

export const NameForm = ({visible} : StepComponentProps) => { 
    const {values, handleChange} = useFormikContext<Imovel>()

    return (
        <ImovelFormStep visible={visible}>
            <Grid container>
                <Grid item xs={12}>
                    <InputContainer>
                        <CustomInputLabel>Nome</CustomInputLabel>
                        <CustomTextField
                            id="nome"
                            name="nome"
                            type="text"
                            placeholder="Digite um nome único"
                            value={values.nome}
                            onChange={handleChange}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>
                <Grid item xs={12}>
                    <InputContainer>
                        <CustomInputLabel>Descrição</CustomInputLabel>
                        <CustomTextField
                            textArea
                            multiline
                            id="descricao"
                            name="descricao"
                            placeholder="Digite uma descrição"
                            value={values.descricao}
                            onChange={handleChange}
                            rows={5}
                            maxRows={5}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>
            </Grid>
        </ImovelFormStep>
        
        
    )
}