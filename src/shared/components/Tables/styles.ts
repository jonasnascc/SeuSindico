import styled from "styled-components";

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
    padding: 10px 1vw;
    height: 65px;
    font-size: 14px;
`

export const TblHeaderCol = styled.th`
    height: 35px;
    font-weight: 600;
    font-size: 14px;
`

export const TblButton = styled.button`
    background-color: transparent;
    border: solid 1px #4B31A1;
    border-radius: 10px;
    color: #4B31A1;
    box-shadow: none;
    cursor: pointer;
    font-size: 12px;
    padding: 5px;
    transition: background-color .5s ease, color .7s ease;

    &:hover {
        background-color: #4B31A1;
        color: white;
    }

    &:active {
        transition: none;
        border: solid 1px #10CCAD;
        background-color: #10CCAD;
        color: white;
    }
`

export const NoResultsDiv = styled.div`
    width: 100%;
    font-size: 14px;
    text-align: center;

`