import { Container } from "@mui/material"
import React, { useEffect } from "react"
import useImovelForm from "../../../../../shared/hooks/useImovelForm"
import { SaveDiv, SaveButton } from "../../../styles"
import { EnderecoForm } from "../EnderecoForm/EnderecoForm"
import { EspacosForm } from "../EspacosForm/EspacosForm"
import { ImovelDataForm } from "./ImovelDataForm"
import { NameForm } from "./NameForm"
import { useImovelFormSteps } from "../../../../../shared/hooks/useImovelFormSteps"
import { FormStepper } from "../../../../../shared/components/FromStepper/FormStepper"

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
            <ImovelDataForm 
                imovel={imovel}
                onChange={handleFormChange}
                visible={steps.details.visible}
            />
            <NameForm 
                imovel={imovel}
                onChange={handleFormChange}
                visible={steps.name.visible}
            />
            <EnderecoForm 
                imovel={imovel}
                onChange={(event:any) => handleFormChange(event, "endereco")}
                visible={steps.address.visible}
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