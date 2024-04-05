import React, { useEffect, useState } from "react";
import styled from "styled-components";

type NumberInputProps = {
    name:string, 
    defaultValue ?: number,
    placeholder?:string, 
    larguraMinima?:boolean
}

export const NumberInput = ({name, larguraMinima=false, placeholder="", defaultValue = 0} : NumberInputProps) => {
    const [value, setValue] = useState<number>(defaultValue);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue])

    const handleValueChange = (event : any) => {
        setValue(event.target.value)
    }

    return (
        <Input
            id={name}
            type="number"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleValueChange}
            $larguraMinima={larguraMinima}
        />
    )
}

const Input = styled.input<{$larguraMinima:boolean}>`
    padding: 0 .7vw;
    margin: 10px 5px;
    ${props => props.$larguraMinima && "max-width: 100px;"}
`