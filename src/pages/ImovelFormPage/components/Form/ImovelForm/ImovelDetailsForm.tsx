import { Field, useFormikContext } from "formik";
import { StepComponentProps } from "../../../../../shared/hooks/useImovelFormSteps";
import { ImovelFormStep } from "./ImovelFormStep";
import { Grid } from "@mui/material";
import { Imovel } from "../../../../../types/imovel";
import { InputContainer } from "../styles";
import { CustomTextField } from "../../../../../shared/components/Inputs/CustomTextField";
import { CustomInputLabel } from "../../../../../shared/components/Inputs/CustomLabel";
import { useEffect, useState } from "react";

export const ImovelDetailsForm = ({visible, getErrorsFn} : StepComponentProps) => {
    const {values, handleChange, errors, touched} = useFormikContext<Imovel>()
    const [formErrors, setFormErrors] = useState({
        quantidadeAndares: "",
        espacosPorAndar : ""
    })

    useEffect(() => {
        if(getErrorsFn) {
            const errors = getErrorsFn(formErrors)
            setFormErrors(errors)
        }
    }, [errors, touched])

    return(
        <ImovelFormStep visible={visible}>
            <Grid container spacing={"3vw"}>
                <Grid item xs={6}>
                    <InputContainer>
                        <CustomInputLabel>Quantos andares o seu imóvel possui?</CustomInputLabel>
                        <Field
                            as={CustomTextField}
                            id="quantidadeAndares"
                            name="quantidadeAndares"
                            placeholder="Digite a quantidade de andares"
                            type="number"
                            value={values?.quantidadeAndares??""}
                            onChange={handleChange}
                            error={formErrors?.quantidadeAndares!==""}
                            helperText={formErrors?.quantidadeAndares}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>
                <Grid item xs={6}>
                    <InputContainer>
                        <CustomInputLabel>Quantos espaços por andar?</CustomInputLabel>
                        <Field
                            as={CustomTextField}
                            id="espacosPorAndar"
                            name="espacosPorAndar"
                            placeholder="Digite a quantidade de espaços"
                            type="number"
                            value={values?.espacosPorAndar??""}
                            onChange={handleChange}
                            error={formErrors?.espacosPorAndar!==""}
                            helperText={formErrors?.espacosPorAndar}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>
                {/* <Grid item xs={12}>
                    <DinamicImovel qntAndares={values?.quantidadeAndares??1} espPorAndar={values?.espacosPorAndar??1}/>
                </Grid> */}
            </Grid>
        </ImovelFormStep>
    )
}