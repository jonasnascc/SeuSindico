import styled from "styled-components";

export const EspacosListTableContainer = styled.div`
   flex: 1;
    width: 100%;
    overflow: auto;
    padding: 10px;
`

export const EspacosListTable = styled.table`
    border-collapse: collapse;
    width: 100%;
    border: none;
`

export const TableHeaderColumn = styled.th<{$column : "tipo" | "numero"}>`
    ${props => props.$column === "numero" ? "min-width: 25%;" : "flex:1;"};
    padding: 10px;
    font-weight: 600;
    text-align: center;
`

export const TableRow = styled.tr<{$header?:boolean, $selected?:boolean}>`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    gap: 2%;
    background-color: ${props => props.$header ? "transparent" : "white"};
    height:${props => props.$header ? "30px;" : "40px;"};
    
    ${props => !props.$header && "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"}

    &:hover{
        ${props => !props.$header && "cursor:pointer; border: solid 1px #3B9982;"}
    }

    ${props => props.$selected ? "border: solid 1px #3B9982;" : "border: none;"}
`

export const TableColumn = styled.td<{$column : "tipo" | "numero"}>`
    ${props => props.$column === "numero" ? "min-width: 25%;" : "flex:1;"};
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
