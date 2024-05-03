import styled from "styled-components"


export const EspacosTableComp = styled.table`
    border-collapse: collapse;
    width: 100%;
    border: none;
`

export const TableBody = styled.tbody`
    gap: 10px;
`

export const TableHeaderColumn = styled.th`
    padding: 10px;
    font-weight: 600;
    text-align: center;
`

export const TableRow = styled.tr`
    margin-bottom: 10px;
    background-color: white;

    &:hover {
        background-color: rgba(0,0,0,.05);
        cursor: pointer;
    }
`

export const HeaderTableRow = styled.tr`
margin-bottom: 10px;
`

export const TableColumn = styled.td`
    padding: 10px;
    font-weight: 400;
    text-align: center;
`

export const AddEspacoTile = styled.div`
    display: flex;
    justify-content: center;
`

export const AddEspacoButton = styled.button`
    background-color: #4B31A1;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 15px;
    cursor: pointer;
    word-break: keep-all;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`

export const ButtonsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const ButtonTile = styled.div<{$hoverColor?:string}>`
    color: #4B31A1;
    &:hover{
        color: ${props => props.$hoverColor ? props.$hoverColor : "#3B9982"};
    }
`
