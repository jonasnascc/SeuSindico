import { TextField } from "@mui/material"
import styled from "styled-components"

export const FormGridTile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    height: 100%;
    min-height: 100%;
`

export const FormGridTileVerticalDirection = styled(FormGridTile)`
    flex-direction: row;
    min-height: auto;
    height: auto;
    padding: auto 0;
`

export const FormGridTileStackable = styled(FormGridTile)`
    padding: 0;
    min-height: auto;
    height: 100%;
    justify-content: space-between;
`

export const FormNumbersInput = styled.input`
    width: 50%;
    margin: 0 20%;
    text-align: center;
`

export const TipoSelect = styled.select`
    width: 33.3%;
`

export const InputLabel = styled.span`
    font-weight: 400;
    margin: 10px;
`