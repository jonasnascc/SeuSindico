import { ImovelFormCard } from "../../../../../shared/components/ImovelFormCard/ImovelFormCard";
import { Imovel } from "../../../../../types/imovel";
import { StepComponentProps } from "../../../../../shared/hooks/useImovelFormSteps";
import { ImovelFormStep } from "./ImovelFormStep";
import { Form, Formik } from "formik";
import { InputLabel, TextField } from "@mui/material";

type ImovelDataFormProps = {
    imovel : Imovel,
    onChange : (event: any) => void,
    onSubmit ?: () => void
}&StepComponentProps

export const ImovelDetailsForm = ({imovel, visible, onChange, onSubmit = () => null} : ImovelDataFormProps) => {
    const {quantidadeAndares, espacosPorAndar} = imovel;

    return(
        <ImovelFormStep visible={visible}>
        <ImovelFormCard
            label = "Vamos começar pelo básico"
            headerGridScreens={{xs:12, sm:4}}
            bodyGridScreens={{xs:12, sm:8}}
        >
            <Formik
                initialValues={{ 
                    quantidadeAndares: quantidadeAndares??"", 
                    espacosPorAndar: espacosPorAndar??""
                }}
                onSubmit={(values) => onSubmit()}
            >
                <Form onChange={onChange}>
                    <InputLabel>Quantos andares o seu imóvel possui?</InputLabel>
                    <TextField
                        id="quantidadeAndares"
                        name="quantidadeAndares"
                        placeholder="Digite a quantidade de andares"
                        type="number"
                        size="small"
                    />

                    <InputLabel>Quantos espaços por andar?</InputLabel>
                    <TextField
                        id="espacosPorAndar"
                        name="espacosPorAndar"
                        placeholder="Digite a quantidade de espaços"
                        type="number"
                        size="small"
                    />
                </Form>
            </Formik>
        </ImovelFormCard>
        </ImovelFormStep>
        // <ImovelFormStep visible={visible}>
        //     <ImovelFormCard
        //         label = "Vamos começar pelo básico"
        //         headerGridScreens={{xs:12, sm:4}}
        //         bodyGridScreens={{xs:12, sm:8}}
        //     >
        //         <Grid container  height={"100%"}>
        //             <Grid item xs={6} height={"100%"}>
        //                 <FormGridTile>
        //                     <InputLabel>Quantos andares o seu imóvel possui?</InputLabel>
        //                     <FormNumbersInput
        //                         id="quantidadeAndares"
        //                         name="quantidadeAndares"
        //                         placeholder="Digite a quantidade de andares"
        //                         type="number"
        //                         value={quantidadeAndares??""}
        //                         onChange={onChange}
        //                     />
        //                     <InputLabel>Quantos espaços por andar?</InputLabel>
        //                     <FormNumbersInput
        //                         id="espacosPorAndar"
        //                         name="espacosPorAndar"
        //                         placeholder="Digite a quantidade de espaços"
        //                         type="number"
        //                         defaultValue={espacosPorAndar??""}
        //                         onChange={onChange}
        //                     />
        //                 </FormGridTile>
        //             </Grid>
        //             <Grid item xs={6} height={"100%"}></Grid>
        //         </Grid>
        //     </ImovelFormCard>
        // </ImovelFormStep>
    )
}