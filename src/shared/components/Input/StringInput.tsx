import React from "react";
import styled from "styled-components";

export const StringInput = ({name, placeholder="", larguraMinima=false} : {name:string, placeholder?:string, larguraMinima?:boolean}) => {
    return (
        <Input
            id={name}
            name={name}
            placeholder={placeholder}
            $larguraMinima={larguraMinima}
        />
    )
}

const Input = styled.input<{$larguraMinima?:boolean}>`
    padding: 0 .7vw;
    margin: 10px 5px;
    ${props => props.$larguraMinima && "max-width: 100px;"}
`