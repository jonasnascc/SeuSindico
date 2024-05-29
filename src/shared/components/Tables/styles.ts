import styled from "styled-components";
import { StyledBtn } from "../Buttons/styles";

export const TableContainer = styled.div`
    border: solid 1px #9A9A9A;
    border-radius: 5px;
    padding: 0 .3vw;
    padding-bottom: 35px;
`

export const CntTable = styled.table`
    border-bottom: solid 1px #9A9A9A;
    width: 100%;
    border-collapse: collapse;
`

export const TblRow = styled.tr`
    &:nth-child(odd) {
        background-color: #F5F5F5;
    }
`

export const TblHeaderRow = styled.tr`
    border-bottom: solid 1px #9A9A9A;
` 

export const TblCol = styled.td`
    position: relative;
    padding: 10px 1vw;
    height: 65px;
    font-size: 14px;
`

export const TblHeaderCol = styled.th`
    height: 35px;
    font-weight: 600;
    font-size: 14px;
`

export const TblButton = styled(StyledBtn)`

`

export const NoResultsDiv = styled.div`
    width: 100%;
    font-size: 14px;
    text-align: center;
`

export const OptionsButtonTile = styled.div`
    height: 100%;
`

export const OptionsTile = styled.ul`
    padding: 0;
`

export const TblOptionAnchor = styled.li`
    padding: 0 20px;
    list-style: none;
    line-height: 30px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: .3vw;

    &:hover {
        background-color: rgba(0,0,0,.1);
    }
`

export const OptionsIconButton = styled.button`
    height: 100%;
    padding: 2px 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
`