import { Divider } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const SectionHeader = ({label} : {label:string}) => {
    return(
        <>
            <Label>{label}</Label>
            <Divider/>
        </>
    )
}

const Label = styled.h1`
    margin: 0;
    font-size: 22px;
    font-weight: 600;
`