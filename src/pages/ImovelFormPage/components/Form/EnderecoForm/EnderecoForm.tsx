import { Grid, InputLabel, TextField } from "@mui/material";
import { StepComponentProps } from "../../../../../shared/hooks/useImovelFormSteps";
import { FormGridTileVerticalDirection} from "../../../../../shared/components/Forms/styles";
import { ImovelFormStep } from "../ImovelForm/ImovelFormStep";
import { useFormikContext } from "formik";
import { Imovel } from "../../../../../types/imovel";

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
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <FormGridTileVerticalDirection>
                        <InputLabel>Rua: </InputLabel>
                        <TextField
                            id="rua"
                            name="rua"
                            type="text"
                            placeholder="Digite a rua"
                            value={values.endereco?.rua??""}
                            onChange={handleChange}
                        />
                    </FormGridTileVerticalDirection>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <FormGridTileVerticalDirection>
                        <InputLabel>Bairro: </InputLabel>
                        <TextField
                            id="bairro"
                            name="bairro"
                            type="text"
                            placeholder="Digite o bairro"
                            value={values.endereco?.bairro??""}
                            onChange={handleChange}
                        />
                    </FormGridTileVerticalDirection>
                </Grid>

                <Grid item xs={12} sm={5} md={4}>
                    <FormGridTileVerticalDirection>
                        <InputLabel>Número: </InputLabel>
                        <TextField
                            id="numero"
                            name="numero"
                            type="text"
                            placeholder="ex.: 121 B"
                            value={values.endereco?.numero??""}
                            onChange={handleChange}
                        />
                    </FormGridTileVerticalDirection>
                </Grid>
                
                <Grid item xs={12} sm={7}  md={4}>
                    <FormGridTileVerticalDirection>
                        <InputLabel>Cidade: </InputLabel>
                        <TextField
                            id="cidade"
                            name="cidade"
                            type="text"
                            placeholder="Digite a cidade"
                            value={values.endereco?.cidade??""}
                            onChange={handleChange}
                        />
                    </FormGridTileVerticalDirection>
                </Grid>

                <Grid item xs={12} sm={7}  md={4}>
                    <FormGridTileVerticalDirection>
                        <InputLabel>Estado: </InputLabel>
                        <TextField
                            id="estado"
                            name="estado"
                            type="text"
                            placeholder="Digite o estado"
                            value={values.endereco?.estado??""}
                            onChange={handleChange}
                        />
                    </FormGridTileVerticalDirection>
                </Grid>

                <Grid item xs={12} sm={5}  md={4}>
                    <FormGridTileVerticalDirection>
                        <InputLabel>CEP: </InputLabel>
                        <TextField
                            id="cep"
                            name="cep"
                            type="text"
                            placeholder="Digite o CEP"
                            value={values.endereco?.cep??""}
                            onChange={handleChange}
                        />
                    </FormGridTileVerticalDirection>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <FormGridTileVerticalDirection>
                        <InputLabel>Complemento: </InputLabel>
                        <TextField
                            id="complemento"
                            name="complemento"
                            type="text"
                            placeholder="Digite o complemento"
                            value={values.endereco?.complemento??""}
                            onChange={handleChange}
                        />
                    </FormGridTileVerticalDirection>
                </Grid>
            </Grid>
        </ImovelFormStep>
        
    )
}