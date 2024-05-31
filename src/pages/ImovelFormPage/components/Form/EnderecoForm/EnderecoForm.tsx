import { Grid, InputLabel, TextField } from "@mui/material";
import { StepComponentProps } from "../../../../../shared/hooks/useImovelFormSteps";
import { FormGridTileVerticalDirection} from "../../../../../shared/components/Forms/styles";
import { ImovelFormStep } from "../ImovelForm/ImovelFormStep";
import { useFormikContext } from "formik";
import { Imovel } from "../../../../../types/imovel";
import { CustomInputLabel } from "../../../../../shared/components/Inputs/CustomLabel";
import { CustomTextField } from "../../../../../shared/components/Inputs/CustomTextField";
import { InputContainer } from "../styles";

export const EnderecoForm = ({visible} : StepComponentProps) => {
    const {values, setValues} = useFormikContext<Imovel>()

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
                        <CustomTextField
                            id="rua"
                            name="rua"
                            type="text"
                            placeholder="Digite a rua"
                            value={values.endereco?.rua??""}
                            onChange={handleChange}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <InputContainer>
                        <CustomInputLabel>Bairro: </CustomInputLabel>
                        <CustomTextField
                            id="bairro"
                            name="bairro"
                            type="text"
                            placeholder="Digite o bairro"
                            value={values.endereco?.bairro??""}
                            onChange={handleChange}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>

                <Grid item xs={12} sm={5} md={4}>
                    <InputContainer>
                        <CustomInputLabel>Número: </CustomInputLabel>
                        <CustomTextField
                            id="numero"
                            name="numero"
                            type="text"
                            placeholder="ex.: 121 B"
                            value={values.endereco?.numero??""}
                            onChange={handleChange}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>
                
                <Grid item xs={12} sm={7}  md={4}>
                    <InputContainer>
                        <CustomInputLabel>Cidade: </CustomInputLabel>
                        <CustomTextField
                            id="cidade"
                            name="cidade"
                            type="text"
                            placeholder="Digite a cidade"
                            value={values.endereco?.cidade??""}
                            onChange={handleChange}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>

                <Grid item xs={12} sm={7}  md={4}>
                    <InputContainer>
                        <CustomInputLabel>Estado: </CustomInputLabel>
                        <CustomTextField
                            id="estado"
                            name="estado"
                            type="text"
                            placeholder="Digite o estado"
                            value={values.endereco?.estado??""}
                            onChange={handleChange}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>

                <Grid item xs={12} sm={5}  md={4}>
                    <InputContainer>
                        <CustomInputLabel>CEP: </CustomInputLabel>
                        <CustomTextField
                            id="cep"
                            name="cep"
                            type="text"
                            placeholder="Digite o CEP"
                            value={values.endereco?.cep??""}
                            onChange={handleChange}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <InputContainer>
                        <CustomInputLabel>Complemento: </CustomInputLabel>
                        <CustomTextField
                            id="complemento"
                            name="complemento"
                            type="text"
                            placeholder="Digite o complemento"
                            value={values.endereco?.complemento??""}
                            onChange={handleChange}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>
            </Grid>
        </ImovelFormStep>
        
    )
}