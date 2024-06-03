import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Imovel } from "../../types/imovel"
import { FormikErrors, FormikTouched, FormikValues } from "formik"

type Step = {
    name : string,
    hash : string,
    visible: boolean,
}

export type StepComponentProps = {
    visible : boolean,
    getErrorsFn ?: (
        obj:any,
        errors?: FormikErrors<Imovel>, 
        touched?: FormikTouched<Imovel>
    ) => any
}

const steps : Record<string, Step> = {
    "details" : {
        name : "Details",
        hash : "#details",
        visible: true
    },
    "name" : {
        name : "Name",
        hash : "#name",
        visible: false
    },
    "address" : {
        name : "Address",
        hash : "#address",
        visible: false
    },
    "spaces" : {
        name : "Spaces",
        hash : "#spaces",
        visible: false
    },
}

const stepsSequence = ["details", "name", "address", "spaces"]

export const useImovelFormSteps = () => {
    const [currentStep, setCurrentStep] = useState(-1);
    const [errorSteps, setErrorSteps] = useState<number[]>([])
    const [completedSteps, setCompletedSteps] = useState<number[]>([])
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const stepsKeys : string[] = Object.keys(steps)
        let current = -1;
        stepsKeys.forEach(key => {
            if(steps[key].visible) {
                if(location.hash) {
                    steps[key].visible = false
                }
                else {
                    const index = stepsSequence.indexOf(key)
                    if(index !== -1){
                        current = index
                    }
                }
            }
            if(location.hash) {
                if(steps[key].hash === location.hash){
                    steps[key].visible = true
                    const index = stepsSequence.indexOf(key)
                    if(index !== -1){
                        current = index
                    }
                }
            }
        })
        setCurrentStep(current)
    }, [location.hash])

    const handleStepNext = () => {
        if(currentStep < stepsSequence.length - 1){
            const last = currentStep;
            handleChangeStep(currentStep + 1)
        }
    }

    const handleStepBack = () => {
        if(currentStep > 0) {
            handleChangeStep(currentStep - 1)
        }
    }

    const handleChangeStep = (index : number) => {
        steps[stepsSequence[currentStep]].visible = false
        setCurrentStep(() => {
            const step = steps[stepsSequence[index]]
            navigate(step.hash)
            step.visible = true
            return index
        })
    }

    const handleGetErrorsFn = (
        obj : any, 
        errors: FormikErrors<Imovel>, 
        touched: FormikTouched<Imovel>, 
        stepName : string,
        subProp ?: string
    ) => {
        let errorsObj = obj;

        let hasErrors = false;
        let hasNotTouched = false;
        Object.keys(obj).forEach((key:any) => {
            const err = errors[key as keyof typeof errors]
            const touch = touched[key as keyof typeof touched]

            errorsObj[key] = ""

            if(touch && Boolean(err)){
                errorsObj[key] = err
                hasErrors = true;
            } 
            if(!touch) {
                hasNotTouched = true;
            }
        })
        if(hasErrors) {
            setErrorSteps((prev) => [...prev, stepsSequence.indexOf(stepName)])
            setCompletedSteps((prev) => prev.filter(stp => stp!==stepsSequence.indexOf(stepName)))
        }else{
            if(!hasNotTouched) setCompletedSteps((prev) => [...prev, stepsSequence.indexOf(stepName)])
            setErrorSteps((prev) => prev.filter(stp => stp!==stepsSequence.indexOf(stepName)))
        }
        return errorsObj
    } 

    const handleFormSubmit = () => {
        stepsSequence.forEach((stp, index) => {
            if(!completedSteps.includes(index)) {
                setErrorSteps((prev) => [...prev, index])
            }
        })
    }


    return {
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
    }
}