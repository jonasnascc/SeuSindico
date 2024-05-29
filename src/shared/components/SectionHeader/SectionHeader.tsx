import { Divider } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { BackIcon, HeaderBody, Label, SideItems } from "./styles";

type SectionHeaderProps = {
    label:string,
    children ?: React.ReactNode,
    onBack ?: () => void
}

export const SectionHeader = ({label, children, onBack} : SectionHeaderProps) => {
    return(
        <HeaderBody>
            <Label>{onBack&&<BackIcon onClick={onBack}/>}{label}</Label>
            <Divider style={{backgroundColor:"#9A9A9A", margin:"2px 0"}}/>
            <SideItems>
                {children}
            </SideItems>
        </HeaderBody>
    )
}
