import styled from "@emotion/styled";

export const EspacoButtons = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    margin: 10px 0;
    padding: 0 20px;
`

export const EspacoButton = styled.button`
    border: none;
    background-color: transparent;
    color: white;
    height: 30px;
    width: 100%;
    padding: 0 10px;
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    cursor: pointer;

    &:active {
        box-shadow: none;
    }
`

export const SaveButton = styled(EspacoButton)`
    background-color: #4B31A1;
`

export const CancelButton = styled(EspacoButton)`
    background-color: #FC7300;
`