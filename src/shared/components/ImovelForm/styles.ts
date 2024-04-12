import styled from "styled-components";

export const ImovelFormCard = styled.form`
    position: relative;
    padding: 1vw;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    margin: 20px;
`

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
    min-height: 250px;
    padding: 1vw;
`

export const FormGridTileVerticalDirection = styled(FormGridTile)`
    flex-direction: row;
    min-height: auto;
    height: auto;
    padding: auto 0;
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

export const DescricaoTextArea = styled.textarea`
    resize: none;
    width: 100%;
    flex: 1;
`

