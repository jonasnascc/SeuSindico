import { Box, Step, StepButton, StepIcon, StepLabel, Stepper, ThemeProvider, createTheme } from "@mui/material";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { StepIconContainer, StepText, StepperContainer, StepperPathLine, StepperStep, StepperStepIcon } from "./styles";

type FormStepperProps = {
    steps : string[],
    errorSteps ?: number[],
    completedSteps ?: number[],
    activeStep : number,
    onStepChange ?: (stepIndex : number) => void
}

export const FormStepper = ({steps, activeStep, onStepChange, errorSteps = [1], completedSteps=[0]} : FormStepperProps) => {
    const [actives, setActives] = useState<number[]>([])

    const refs = useRef<HTMLDivElement[]>([])
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if(!actives.includes(activeStep)) setActives([...actives, activeStep])
    }, [activeStep, actives])

    const handleStepClick = (stepIndex : number) => {
        if(!actives.includes(stepIndex)) setActives([...actives, stepIndex])
        if(onStepChange) onStepChange(stepIndex)
    }

    const stepHasErrors = (index : number) => {
        return errorSteps.includes(index)
    }

    const stepIsCompleted = (index:number) => {
        return completedSteps.includes(index)
    }

    const stepIsActive = (index : number) => {
        return actives.includes(index)
    }

    const addStepToRefs = (el: HTMLDivElement | null, index: number) => {
        if (el) {
            refs.current[index] = el;
        }
    };

    const getStepsRefs = () => {
        return refs.current.map(el => el)
    }

    return (
        <StepperContainer ref={containerRef}>
            {
                steps.map((label, index) => (
                    <StepperStep key={index}>  
                        <StepIconContainer ref={(el) => addStepToRefs(el, index)}>
                            <StepperStepIcon/>
                        </StepIconContainer>
                        <StepText>{label}</StepText>
                    </StepperStep>
                    )
                )
            }
            <StepperPath refs={getStepsRefs()} containerRef={containerRef.current}/>
        </StepperContainer>
    )
}

const StepperPath = ({refs, containerRef} : {refs : HTMLDivElement[], containerRef:HTMLDivElement|null}) => {
    const [stepsData, setStepsData] = useState<Record<number, {top:number, left:number, width:number}>>({})
    const divRef = useRef<HTMLDivElement|null>(null)
    const prevRect = useRef<DOMRect | null>(null);

    useLayoutEffect(() => {
        if (containerRef) {
            const rect = containerRef.getBoundingClientRect();
      
            if (!prevRect.current || rect.top !== prevRect.current.top || rect.left !== prevRect.current.left) {
              // Ação a ser executada quando o elemento mudar de lugar
              console.log('O elemento mudou de lugar!');
            }
      
            prevRect.current = rect;
          }
    })

    const getStepLine = (index : number) => {
        if(!containerRef || index === refs.length - 1) return (null)

        const ref = refs[index]
        const nextRef = refs[index + 1]

        const rect = ref.getBoundingClientRect()
        const nextReftRect = nextRef.getBoundingClientRect()
        const contRect = containerRef.getBoundingClientRect()

        const top = rect.top - contRect.top + (rect.height/2 - 1.5);
        const left = rect.left - contRect.left + (rect.width/2)
        
        const width = nextReftRect.left - contRect.left + (nextReftRect.width/2) - left;
        
        // console.log(rect, contRect)

        return <StepperPathLine $top={top} $left={left} $width={width}/>;
    }

    return(
        <div ref={divRef}>
        {
            refs.map((ref, index) => (<>{getStepLine(index)}</>))
        }
        </div>
    )
};