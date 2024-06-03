import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Imovel } from "../../../../../types/imovel";
import { ImovelFormStep } from "./ImovelFormStep";
import { StepComponentProps } from "../../../../../shared/hooks/useImovelFormSteps";
import { InputContainer } from "../styles";
import { Field, useFormikContext } from "formik";
import { CustomInputLabel } from "../../../../../shared/components/Inputs/CustomLabel";
import { CustomTextField } from "../../../../../shared/components/Inputs/CustomTextField";

export const NameForm = ({visible, getErrorsFn} : StepComponentProps) => { 
    const {values, handleChange, errors, touched} = useFormikContext<Imovel>()
    const [formErrors, setFormErrors] = useState({
        nome: "",
        descricao : ""
    })

    useEffect(() => {
        if(getErrorsFn) {
            const errors = getErrorsFn(formErrors)
            setFormErrors(errors)
        }
    }, [errors, touched])
    
    return (
        <ImovelFormStep visible={visible}>
            <Grid container>
                <Grid item xs={12}>
                    <InputContainer>
                        <CustomInputLabel>Nome</CustomInputLabel>
                        <Field
                            as={CustomTextField}
                            id="nome"
                            name="nome"
                            type="text"
                            placeholder="Digite um nome único"
                            value={values.nome}
                            onChange={handleChange}
                            error={formErrors?.nome!==""}
                            helperText={formErrors?.nome}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>
                <Grid item xs={12}>
                    <InputContainer>
                        <CustomInputLabel>Descrição</CustomInputLabel>
                        <Field
                            as={CustomTextField}
                            textArea
                            multiline
                            id="descricao"
                            name="descricao"
                            placeholder="Digite uma descrição"
                            value={values.descricao}
                            onChange={handleChange}
                            rows={5}
                            error={formErrors?.descricao!==""}
                            helperText={formErrors?.descricao}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>
            </Grid>
        </ImovelFormStep>
        
        
    )
}