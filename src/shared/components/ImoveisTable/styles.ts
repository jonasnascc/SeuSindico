import styled from "@emotion/styled";

export const TableContainer = styled.div`

`

export const TableHeaderDiv = styled.div`
    min-height: 30px;
    color: #02947C;
    font-weight: 500;
    margin : 10px 0;
`

export const TableHeaderElement = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`

export const TableBodyDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const TableItemCard = styled.div<{$expanded?:boolean}>`
    position: relative;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 15px;
    min-height: ${props => props.$expanded ? "400px" : "120px"};
    width: 100%;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: min-height .3s linear;
`

export const TableGridItem = styled.div<{$justifyCenter?:boolean}>`
    display: flex;
    height: 100%;
    align-items: center;
    ${props => props.$justifyCenter && "justify-content: center;"}
`

