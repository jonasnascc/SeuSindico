import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const PageCard = ({label, path} : {label:string, path: string}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    }

    return (
        <Div $size={"150px"} onClick={handleClick}>
            {label}
        </Div>
    )
}

const Div = styled.a<{$size:string}>`
    display: flex;
    word-break: keep-all;
    padding: 12px;
    font-weight: 600;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #ccef00;
    width: ${props => props.$size};
    height: ${props => props.$size};
    cursor: pointer;

    &:hover {
        background-color: #bcdd01;
    }
`