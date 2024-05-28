import { Divider } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { HeaderBody, Label, SideItems } from "./styles";

type SectionHeaderProps = {
    label:string,
    children ?: React.ReactNode
}

export const SectionHeader = ({label, children} : SectionHeaderProps) => {
    return(
        <HeaderBody>
            <Label>{label}</Label>
            <Divider style={{backgroundColor:"#9A9A9A", margin:"2px 0"}}/>
            <SideItems>
                {children}
            </SideItems>
        </HeaderBody>
    )
}
