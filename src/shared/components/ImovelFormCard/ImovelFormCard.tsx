import React from "react";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./styles";
import { Grid } from "@mui/material";

export type ScreensType = {xs?:any, sm?:any, md?:any, lg?:any, xl?:any}

type ImovelFormCardProps = {
    label : string,
    children : React.ReactNode,
    footer ?: React.ReactNode,

    headerGridScreens ?: ScreensType,
    bodyGridScreens ?: ScreensType,
    footerGridScreens ?: ScreensType
}

export const ImovelFormCard = (
    {children, footer, label, headerGridScreens, bodyGridScreens, footerGridScreens} 
    : ImovelFormCardProps) => 
{
    return (
        <CardContainer>
            <Grid container>
                <Grid item  {...headerGridScreens}>
                    <CardHeader>
                        {label}
                    </CardHeader>
                </Grid>
                <Grid item {...bodyGridScreens}>
                    <CardBody>
                        {children}
                    </CardBody>
                </Grid>
                {
                    footer && <Grid item {...footerGridScreens}>
                        <CardFooter>
                            {footer}
                        </CardFooter>
                    </Grid>
                }
            </Grid>

        </CardContainer>
    )
}
