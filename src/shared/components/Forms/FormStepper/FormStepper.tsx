import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

type FormStepperProps = {
    steps : string[],
    activeStep : number
}

export const FormStepper = ({steps, activeStep} : FormStepperProps) => {
    return (
        <Stepper activeStep={activeStep}>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}