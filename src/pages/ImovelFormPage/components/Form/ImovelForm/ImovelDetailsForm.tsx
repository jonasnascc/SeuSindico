import { useFormikContext } from "formik";
import { StepComponentProps } from "../../../../../shared/hooks/useImovelFormSteps";
import { ImovelFormStep } from "./ImovelFormStep";
import { InputLabel, TextField } from "@mui/material";
import { Imovel } from "../../../../../types/imovel";


export const ImovelDetailsForm = ({visible} : StepComponentProps) => {
    const {values, handleChange} = useFormikContext<Imovel>()

    return(
        <ImovelFormStep visible={visible}>
            <InputLabel>Quantos andares o seu imóvel possui?</InputLabel>
            <TextField
                id="quantidadeAndares"
                name="quantidadeAndares"
                placeholder="Digite a quantidade de andares"
                type="number"
                size="small"
                value={values?.quantidadeAndares??""}
                onChange={handleChange}
            />

            <InputLabel>Quantos espaços por andar?</InputLabel>
            <TextField
                id="espacosPorAndar"
                name="espacosPorAndar"
                placeholder="Digite a quantidade de espaços"
                type="number"
                size="small"
                value={values?.espacosPorAndar??""}
                onChange={handleChange}
            />
        </ImovelFormStep>
    )
}