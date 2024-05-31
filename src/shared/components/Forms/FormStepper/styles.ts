import styled from "styled-components";
import CircleIcon from '@mui/icons-material/Circle';
import { createTheme } from "@mui/material";


export const theme = createTheme({
    components: {
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    fontSize: '2rem',
                    width: '30px',
                    height: '30px',

                    'circle': {
                        cx: 12,
                        cy: 12,
                        r: 8,
                        fill: 'none',
                        stroke: "#825cff",
                        strokeWidth: 1
                    },
                    'text': {
                        fill: "#825cff",
                        fontWeight: '600',
                        fontSize: 10
                    },
                    'path': {
                        transform: 'scale(0.7) translate(22%, 24%)',
                        left: '20px',
                    },
                    '&.Mui-completed': {
                        fill: '#10CCAD',
                        r: 10 // Cor do step concluído
                    },
                    '&.Mui-error': {
                        color: '#FF3D00', // Cor do step com erro
                    },
                    '&.Mui-active > circle': {
                        fill: "#4B31A1",
                        stroke: 'none',
                        r: 10
                    },
                    '&.Mui-active > text': {
                        fill: "white",
                    },
                },
            },
        },
    },
});


export const StepperContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const StepperStep = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border: none;
`

export const StepText = styled.div`

`

export const StepperStepIcon = styled(CircleIcon)`

`

export const StepIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StepperPathLine = styled.div<{$top:number, $left:number, $width:number}>`
    position: absolute;
    height: 3px;
    background-color: red;

    top: ${props => props.$top}px;
    left: ${props => props.$left}px;
    width: ${props => props.$width}px;

    z-index: 20;
`