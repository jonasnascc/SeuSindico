import { Container, ThemeProvider } from "@mui/material"
import { useEffect } from "react"
import useImovelForm from "../../../../../shared/hooks/useImovelForm"
import { ButtonsDiv } from "../../../../ImoveisPage/styles"
import { useImovelFormSteps } from "../../../../../shared/hooks/useImovelFormSteps"
import { FormStepper } from "../../../../../shared/components/Forms/FormStepper/FormStepper"
import { EnderecoForm } from "../EnderecoForm/EnderecoForm"
import { EspacosForm } from "../EspacosForm/EspacosForm"
import { NameForm } from "./NameForm"
import { ImovelDetailsForm } from "./ImovelDetailsForm"
import { FormButton, StepperTile } from "../styles"
import { Form, Formik } from "formik"
import { EmptyImovel } from "../../../../../types/imovel"

export const ImovelForm = () => {
    const {
        imovel,
        handleSaveImovel,
        handleFormChange,
        handleSaveEspaco,
        handleAddComodo
    } = useImovelForm()

    const {
        steps,
        stepsSequence,
        currentStep,
        handleStepBack,
        handleStepNext,
        handleChangeStep
    } = useImovelFormSteps();

    useEffect(() => {
        console.log(imovel)
    }, [imovel])
    
    return (
        <Container>
                <StepperTile>
                    <FormStepper
                        steps = {stepsSequence}
                        activeStep={currentStep}
                        onStepChange={handleChangeStep}
                    />
                </StepperTile>
                <Formik 
                    initialValues={{...EmptyImovel}} 
                    onSubmit={async (values) => console.log(values)}
                >
                    <Form>
                        <ImovelDetailsForm visible={steps.details.visible}/>
                        
                        <NameForm visible={steps.name.visible}/>

                        <EnderecoForm visible={steps.address.visible}/>

                        <EspacosForm 
                            onSaveEspaco={handleSaveEspaco} 
                            espacos={imovel.espacos}
                            onAddComodo={handleAddComodo}
                            visible={steps.spaces.visible}
                        />                
                        <ButtonsDiv>
                            <FormButton type="button" onClick={handleStepBack}>Back</FormButton>
                            <FormButton type="button" onClick={handleStepNext}>Next</FormButton>
                            <FormButton type="submit">Salvar Imóvel</FormButton>
                        </ButtonsDiv>
                    </Form>
                </Formik>
        </Container>
    )
}