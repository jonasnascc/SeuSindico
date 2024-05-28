import { Container } from "@mui/material"
import React, { useEffect } from "react"
import useImovelForm from "../../../../../shared/hooks/useImovelForm"
import { SaveDiv, SaveButton } from "../../../../ImoveisPage/styles"
import { useImovelFormSteps } from "../../../../../shared/hooks/useImovelFormSteps"
import { FormStepper } from "../../../../../shared/components/Forms/FormStepper/FormStepper"
import { EnderecoForm } from "../EnderecoForm/EnderecoForm"
import { EspacosForm } from "../EspacosForm/EspacosForm"
import { NameForm } from "./NameForm"
import { ImovelDetailsForm } from "./ImovelDetailsForm"

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
        handleStepNext
    } = useImovelFormSteps();

    useEffect(() => {
        console.log(imovel)
    }, [imovel])
    
    return (
        <Container>
            <FormStepper
                steps = {stepsSequence}
                activeStep={currentStep}
            />
            <ImovelDetailsForm
                imovel={imovel}
                visible={steps.details.visible}
                onChange={handleFormChange}
                onSubmit={handleStepNext}
            />
            <NameForm 
                imovel={imovel}
                visible={steps.name.visible}
                onChange={handleFormChange}
            />
            <EnderecoForm 
                imovel={imovel}
                visible={steps.address.visible}
                onChange={(event:any) => handleFormChange(event, "endereco")}
            />
            <EspacosForm 
                onSaveEspaco={handleSaveEspaco} 
                espacos={imovel.espacos}
                onAddComodo={handleAddComodo}
                visible={steps.spaces.visible}
            />
            <button type="button" onClick={handleStepBack}>Back</button>
            <button type="button" onClick={handleStepNext}>Next</button>
            <SaveDiv>
                <SaveButton onClick={handleSaveImovel}>Salvar Imóvel</SaveButton>
            </SaveDiv>
        </Container>
    )
}