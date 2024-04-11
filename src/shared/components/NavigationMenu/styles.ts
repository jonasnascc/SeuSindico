import styled from "styled-components";

export const Menu = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
`

export const MenuItem = styled.li<{$selected?:boolean}>`
    color: #02947C;
    font-weight: 500;
    margin: 0;
    cursor: pointer;

    &:hover {
        color: #4B31A1;
        font-weight: 600;
    }

    ${props => props.$selected && "color: #4B31A1; font-weight: 600;" }
    
`