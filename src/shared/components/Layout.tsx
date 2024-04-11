import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar/Sidebar";
import styled from "styled-components";
import { NavigationBar } from "./NavigationBar/NavigationBar";

export const Layout = () => {
    return (            
        <>
        <NavigationBar/>
        <LayoutContainer>
            <Outlet/>
        </LayoutContainer>
        </>
    )
}

const LayoutContainer = styled.div`
    position: absolute;
    margin-top: 80px;
    display: flex;
    height: 100%;
    width: 100%;
`

