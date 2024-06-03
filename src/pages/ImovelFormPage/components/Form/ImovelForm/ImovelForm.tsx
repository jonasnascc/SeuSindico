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
import { EmptyImovel, Imovel } from "../../../../../types/imovel"
import { ImovelSchema } from "../../../../../api/model/schemas"

export const ImovelForm = () => {
    const {
        imovel,
        handleSaveImovel,
        handleFormChange,
        handleSaveEspaco,
        handleAddComodo,
        handleSubmit
    } = useImovelForm()

    const {
        steps,
        stepsSequence,
        currentStep,
        errorSteps,
        completedSteps,
        handleStepBack,
        handleStepNext,
        handleChangeStep,
        handleGetErrorsFn,
        handleFormSubmit
    } = useImovelFormSteps();
    
    const handleKeyEnterPress = (event:any) => {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
    };

    return (
        <Container>
                <StepperTile>
                    <FormStepper
                        steps = {stepsSequence}
                        activeStep={currentStep}
                        onStepChange={handleChangeStep}
                        errorSteps={errorSteps}
                        completedSteps={completedSteps}
                    />
                </StepperTile>
                <Formik 
                    initialValues={{...EmptyImovel}} 
                    onSubmit={handleSubmit}
                    validationSchema={ImovelSchema}
                >
                    {({values, touched, errors}) => (
                        <Form onKeyDown={handleKeyEnterPress}>
                            <ImovelDetailsForm 
                                visible={steps.details.visible}
                                getErrorsFn={(obj: any) => handleGetErrorsFn(obj, errors, touched, "details")}
                            />
                            
                            <NameForm 
                                visible={steps.name.visible}
                                getErrorsFn={(obj: any) => handleGetErrorsFn(obj, errors, touched, "name")}
                            />

                            <EnderecoForm 
                                visible={steps.address.visible}
                                getErrorsFn={(obj: any, err: any, tch: any) => handleGetErrorsFn(obj, err, tch, "address", "endereco")}
                            />

                            <EspacosForm 
                                onSaveEspaco={handleSaveEspaco} 
                                espacos={imovel.espacos}
                                onAddComodo={handleAddComodo}
                                visible={steps.spaces.visible}
                            />                
                            <ButtonsDiv>
                                <FormButton type="button" onClick={handleStepBack}>Back</FormButton>
                                <FormButton type="button" onClick={() => handleStepNext()}>Next</FormButton>
                                <FormButton type="submit" onClick={handleFormSubmit}>Salvar Imóvel</FormButton>
                            </ButtonsDiv>
                        </Form>
                    )}
                </Formik>
        </Container>
    )
}