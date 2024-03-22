import React from "react";
import styled from "styled-components";

export const ActionButton = ({label, bgcolor, color, onClick} : {label:string, bgcolor?:string, color?:string, onClick?: () => void}) => {
    return (
        <ButtonTag $bgcolor={bgcolor} $color={color} onClick={onClick}>
            {label}
        </ButtonTag>
    )
}

const ButtonTag = styled.button<{$bgcolor?:string, $color?:string}>`
    background-color: ${props => props.$bgcolor ?  props.$bgcolor : "#ff8533"};
    border-radius: 20px;
    color: ${props => props.$color ?  props.$color : "white"};
    padding: 10px 15px;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`