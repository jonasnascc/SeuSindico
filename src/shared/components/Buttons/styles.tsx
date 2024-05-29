import styled from "styled-components";

export const StyledBtn = styled.button`
    background-color: transparent;
    border: solid 1px #4B31A1;
    border-radius: 5px;
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