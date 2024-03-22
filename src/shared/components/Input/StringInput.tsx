import React from "react";
import styled from "styled-components";

export const StringInput = ({name} : {name:string}) => {
    return (
        <Input
            id={name}
            name={name}
        />
    )
}

const Input = styled.input`
    padding: 0 .7vw;
`