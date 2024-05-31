import { useFormikContext } from "formik";
import { StepComponentProps } from "../../../../../shared/hooks/useImovelFormSteps";
import { ImovelFormStep } from "./ImovelFormStep";
import { Grid, InputLabel, TextField } from "@mui/material";
import { Imovel } from "../../../../../types/imovel";
import { InputContainer } from "../styles";
import { DinamicImovel } from "../../../../../shared/components/DinamicImovel/DinamicImovel";
import { CustomTextField } from "../../../../../shared/components/Inputs/CustomTextField";
import { CustomInputLabel } from "../../../../../shared/components/Inputs/CustomLabel";


export const ImovelDetailsForm = ({visible} : StepComponentProps) => {
    const {values, handleChange} = useFormikContext<Imovel>()

    return(
        <ImovelFormStep visible={visible}>
            <Grid container spacing={"3vw"}>
                <Grid item xs={6}>
                    <InputContainer>
                        <CustomInputLabel>Quantos andares o seu imóvel possui?</CustomInputLabel>
                        <CustomTextField
                            id="quantidadeAndares"
                            name="quantidadeAndares"
                            placeholder="Digite a quantidade de andares"
                            type="number"
                            value={values?.quantidadeAndares??""}
                            onChange={handleChange}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>
                <Grid item xs={6}>
                    <InputContainer>
                        <CustomInputLabel>Quantos espaços por andar?</CustomInputLabel>
                        <CustomTextField
                            id="espacosPorAndar"
                            name="espacosPorAndar"
                            placeholder="Digite a quantidade de espaços"
                            type="number"
                            value={values?.espacosPorAndar??""}
                            onChange={handleChange}
                            defaultValue={1}
                            fullWidth
                        />
                    </InputContainer>
                </Grid>
                <Grid item xs={12}>
                    <DinamicImovel qntAndares={values?.quantidadeAndares??1} espPorAndar={values?.espacosPorAndar??1}/>
                </Grid>
            </Grid>
        </ImovelFormStep>
    )
}