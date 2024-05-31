import styled from "styled-components";
import { StyledBtn } from "../../../../shared/components/Buttons/styles";

export const FormDescription = styled.h3`
    font-weight: 500;
    font-size: 18px;
    color: #02947C;
    width: 100%;
`

export const CenteredAlignedFormDescription = styled(FormDescription)`
    text-align: center;
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
    flex: 1;
    width: 100%;
`

export const AddEspacoText = styled.h4`
    margin: auto;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    margin: 0;
`

export const ClickableArea = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    cursor: pointer;

        
    color: #4B31A1;

    &:hover {
        color: #FC7300;
    }
`

export const FadeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`

export const StepperTile = styled.div`
    padding: 30px 0;
`

export const FormButton = styled(StyledBtn)`

`
