import { Grid } from "@mui/material";
import styled from "styled-components";

export const FormDescription = styled.h3`
    font-weight: 500;
    font-size: 18px;
    color: #02947C;
    width: 100%;
`

export const CenteredAlignedFormDescription = styled(FormDescription)`
    text-align: center;
`

export const InputLabel = styled.span`
    font-weight: 400;
    margin: 10px;
`

export const FormGridTile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    height: 100%;
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
export const NameInput = styled.input`
    width: 90%;
    margin: 0 20%;
    text-align: center;
`

export const FormNumbersInput = styled.input`
    width: 50%;
    margin: 0 20%;
    text-align: center;
`

export const TipoSelect = styled.select`
    width: 33.3%;
`

export const DescricaoTextArea = styled.textarea`
    resize: none;
    width: 90%;
    margin: 0 20%;
    height: 100%;
    min-height: 140px;
`

export const AddEspacoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

`

export const AddEspacoText = styled.h4`
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    margin: auto;
    margin-bottom: 18px;
`

export const ClickableArea = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;

        
    color: #4B31A1;

    &:hover {
        color: #FC7300;
    }
    /* &:active {
        background-color: rgba(0,0,0,.1);
    } */
`

export const FadeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const RegistroEspacoContainer = styled.div`
    border: solid 1px rgba(0,0,0, .3);
    margin: 1vw;
    padding: 1vw;
`