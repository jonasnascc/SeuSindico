import React from "react";
import { StepComponentProps } from "../../../../../shared/hooks/useImovelFormSteps";

export type ImovelFormStepProps = {
    children : React.ReactNode
}&StepComponentProps

export const ImovelFormStep = ({visible, children} : ImovelFormStepProps) => {
    if(!visible) return(null)
    return (<>{children}</>)
}