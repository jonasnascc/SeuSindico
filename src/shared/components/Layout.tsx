import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar/Sidebar";
import styled from "styled-components";

export const hideSidebarPages = [
    "/", "/login", "/signup"
]


export const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname)
    }, []);



    return (
        <LayoutContainer>
            {(hideSidebarPages.includes(location.pathname)) ? (
                <Container sx={{mt:"50px"}}>
                    <Outlet/>
                </Container>
            ) : (
                <Grid container>
                    <Grid item xs={3} lg={2}>
                        <Sidebar/>
                    </Grid>
                    <Grid item xs={9} lg={10}>
                        <Container sx={{mt:"50px"}}>
                            <Outlet/>
                        </Container>
                    </Grid>
                </Grid>
            )}
        </LayoutContainer>
    )
}

const LayoutContainer = styled.div`
    position: absolute;
    display: flex;
    height: 100%;
    width: 100%;
`

