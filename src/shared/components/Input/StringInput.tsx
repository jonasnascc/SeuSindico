import React, { useEffect, useState } from "react";
import styled from "styled-components";

type StringInputProps = {
    name:string, 
    defaultValue?:string,
    placeholder?:string, 
    larguraMinima?:boolean
}

export const StringInput = ({name, placeholder="", larguraMinima=false, defaultValue=""} : StringInputProps) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue])

    const handleValueChange = (event:any) => {
        setValue(event.target.value);
    }

    return (
        <Input
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleValueChange}
            $larguraMinima={larguraMinima}
        />
    )
}

const Input = styled.input<{$larguraMinima?:boolean}>`
    padding: 0 .7vw;
    margin: 10px 5px;
    ${props => props.$larguraMinima && "max-width: 100px;"}
`