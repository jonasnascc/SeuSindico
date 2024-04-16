import React from "react";
import LogoURL from "../../../logo.svg"
import { Bar, Logo, LogoContainer, LogoText } from "./styles";
import { Grid } from "@mui/material";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import { UserCollapsableButton } from "../UserCollapsableButton/UserCollapsableButton";

type NavigationBarProps = {
    hide ?: boolean
}

export const NavigationBar = ({hide=false} : NavigationBarProps) => {
    if(hide) return null;
    return(
        <Bar>
            <Grid container height={"100%"}>
                <Grid item xs={3}>
                    <LogoContainer>
                        <Logo src={LogoURL}/>
                        <LogoText>SeuSindico</LogoText>
                    </LogoContainer>
                </Grid>
                <Grid item xs={6}>
                    <NavigationMenu/>
                </Grid>
                <Grid item xs={3}>
                    <UserCollapsableButton/>
                </Grid>
            </Grid>
        </Bar>
    )
}