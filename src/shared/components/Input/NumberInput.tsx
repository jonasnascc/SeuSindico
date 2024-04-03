import React from "react";
import styled from "styled-components";

export const NumberInput = ({name, larguraMinima=false} : {name:string, larguraMinima?:boolean}) => {
    return (
        <Input
            id={name}
            type="number"
            name={name}
            $larguraMinima={larguraMinima}
        />
    )
}

const Input = styled.input<{$larguraMinima:boolean}>`
    padding: 0 .7vw;
    margin: 10px 5px;
    ${props => props.$larguraMinima && "max-width: 100px;"}
`