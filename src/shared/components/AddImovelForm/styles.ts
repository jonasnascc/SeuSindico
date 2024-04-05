import { Grid } from "@mui/material"
import styled from "styled-components"

export const FormularioTitulo = styled.h3`
    font-weight: 500;
`

export const Subtitle = styled.h4`
    font-weight: 500;
`

export const InputText = styled.span`
    margin: 0;
    padding: 0;
`

export const CenterGrid = styled(Grid)`
    display: flex;
    flex-direction: column !important;
    align-items: center;
`

export const SelectDiv = styled.div`
    margin: 0 8vw;
`

export const FormButton = styled.button`
    background-color: green;
    color: white;
`

export const CancelFormButton = styled(FormButton)`
    background-color: red;
`


export const FullWidthButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
`

export const EspacoTag = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 10px;
    background-color: black;
    color: white;
    border-radius: 20px;
    cursor: pointer;
`

export const EspacosTagsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .5vw;
`
