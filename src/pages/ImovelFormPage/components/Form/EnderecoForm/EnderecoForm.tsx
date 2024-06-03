import { Grid, InputLabel, TextField } from "@mui/material";
import { StepComponentProps } from "../../../../../shared/hooks/useImovelFormSteps";
import { FormGridTileVerticalDirection} from "../../../../../shared/components/Forms/styles";
import { ImovelFormStep } from "../ImovelForm/ImovelFormStep";
import { Field, useFormikContext } from "formik";
import { Imovel } from "../../../../../types/imovel";
import { CustomInputLabel } from "../../../../../shared/components/Inputs/CustomLabel";
import { CustomTextField } from "../../../../../shared/components/Inputs/CustomTextField";
import { InputContainer } from "../styles";
import { useEffect, useState } from "react";
import { EnderecoSchema } from "../../../../../api/model/schemas"

export const EnderecoForm = ({visible, getErrorsFn} : StepComponentProps) => {
    const {values, setValues, errors, touched} = useFormikContext<Imovel>()
    
    const [touchedEndereco, setTouchedEndereco] = useState<any>()
    const [errorsEndereco, setErrorsEndereco] = useState<any>()

    const [formErrors, setFormErrors] = useState({
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
        complemento: ""
    })

    useEffect(() => {
        if(getErrorsFn && formErrors && errorsEndereco && touchedEndereco) {
            const errors = getErrorsFn(formErrors, errorsEndereco, touchedEndereco)
            setFormErrors(errors)
        }
    }, [errorsEndereco, touchedEndereco])

    useEffect(() => {
        if(touched.endereco) {
            setTouchedEndereco(touched.endereco as unknown as typeof EnderecoSchema)
        }
        if(errors.endereco) {
            setErrorsEndereco(errors.endereco as unknown as typeof EnderecoSchema)
        }
    }, [touched, errors])

    const handleChange = (event : any) => {
        if(values.endereco) {
            setValues({
                ...values,
                endereco: {
                    ...values.endereco,
                    [event.target.name] : event.target.value
                }
            })
        }
    }

    return (
        <ImovelFormStep visible={visible}>
            <Grid container spacing={"1vw"}>
                <Grid item xs={12} sm={12} md={6}>
                    <InputContainer>
                        <CustomInputLabel>Rua: </CustomInputLabel>
                        <Field
                            as={CustomTextField}
                            id="rua"
                            name="rua"
                            type="text"
                            placeholder="Digite a rua"
                            value={values.endereco?.rua??""}
                            onChange={handleChange}
                            error={formErrors?.rua !== ""}
                            helperText={formErrors?.rua}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <InputContainer>
                        <CustomInputLabel>Bairro: </CustomInputLabel>
                        <Field
                            as={CustomTextField}
                            id="bairro"
                            name="bairro"
                            type="text"
                            placeholder="Digite o bairro"
                            value={values.endereco?.bairro??""}
                            onChange={handleChange}
                            error={formErrors?.bairro!==""}
                            helperText={formErrors?.bairro}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>

                <Grid item xs={12} sm={5} md={4}>
                    <InputContainer>
                        <CustomInputLabel>Número: </CustomInputLabel>
                        <Field
                            as={CustomTextField}
                            id="numero"
                            name="numero"
                            type="text"
                            placeholder="ex.: 121 B"
                            value={values.endereco?.numero??""}
                            onChange={handleChange}
                            error={formErrors?.numero!==""}
                            helperText={formErrors?.numero}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>
                
                <Grid item xs={12} sm={7}  md={4}>
                    <InputContainer>
                        <CustomInputLabel>Cidade: </CustomInputLabel>
                        <Field
                            as={CustomTextField}
                            id="cidade"
                            name="cidade"
                            type="text"
                            placeholder="Digite a cidade"
                            value={values.endereco?.cidade??""}
                            onChange={handleChange}
                            error={formErrors?.cidade!==""}
                            helperText={formErrors?.cidade}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>

                <Grid item xs={12} sm={7}  md={4}>
                    <InputContainer>
                        <CustomInputLabel>Estado: </CustomInputLabel>
                        <Field
                            as={CustomTextField}
                            id="estado"
                            name="estado"
                            type="text"
                            placeholder="Digite o estado"
                            value={values.endereco?.estado??""}
                            onChange={handleChange}
                            error={formErrors?.estado!==""}
                            helperText={formErrors?.estado}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>

                <Grid item xs={12} sm={5}  md={4}>
                    <InputContainer>
                        <CustomInputLabel>CEP: </CustomInputLabel>
                        <Field
                            as={CustomTextField}
                            id="cep"
                            name="cep"
                            type="text"
                            placeholder="Digite o CEP"
                            value={values.endereco?.cep??""}
                            onChange={handleChange}
                            error={formErrors?.cep!==""}
                            helperText={formErrors?.cep}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <InputContainer>
                        <CustomInputLabel>Complemento: </CustomInputLabel>
                        <Field
                            as={CustomTextField}
                            id="complemento"
                            name="complemento"
                            type="text"
                            placeholder="Digite o complemento"
                            value={values.endereco?.complemento??""}
                            onChange={handleChange}
                            error={formErrors?.complemento!==""}
                            helperText={formErrors?.complemento}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>
            </Grid>
        </ImovelFormStep>
        
    )
}