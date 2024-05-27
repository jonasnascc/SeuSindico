import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

type Step = {
    name : string,
    hash : string,
    visible: boolean
}

export type StepComponentProps = {
    visible : boolean
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
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const stepsKeys : string[] = Object.keys(steps)
        let current = 0;
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
                console.log(location.hash)
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
            steps[stepsSequence[currentStep]].visible = false
            setCurrentStep((current) => {
                const step = steps[stepsSequence[current + 1]]
                navigate(step.hash)
                step.visible = true
                return current + 1
            })

        }
    }

    const handleStepBack = () => {
        if(currentStep > 0) {
            steps[stepsSequence[currentStep]].visible = false
            setCurrentStep((current) => {
                const step = steps[stepsSequence[current - 1]]
                navigate(step.hash)
                step.visible = true
                return current-1
            })
        }
    }

    return {
        steps,
        stepsSequence,
        currentStep,
        handleStepBack,
        handleStepNext
    }
}