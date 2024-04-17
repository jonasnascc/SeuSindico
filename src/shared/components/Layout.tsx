import { Container, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar/Sidebar";
import styled from "styled-components";
import { NavigationBar } from "./NavigationBar/NavigationBar";
import { AuthContext } from "../../context/auth/AuthContext";

export const hideNavBarPathList = [
    "/login",
    "/signup"
]

export const Layout = () => {
    const {authenticated} = useContext(AuthContext);
    const location = useLocation();
    const hideNavBar = hideNavBarPathList.includes(location.pathname);
    console.log(location.pathname)

    return (            
        <>
        <NavigationBar hide={hideNavBar || !authenticated}/>
        <LayoutContainer $noNavBar={hideNavBar}>
            <Outlet/>
        </LayoutContainer>
        </>
    )
}

const LayoutContainer = styled.div<{$noNavBar?:boolean}>`
    position: absolute;
    display: flex;
    height: 100%;
    width: 100%;
    ${props => !props.$noNavBar && "margin-top: 80px;"}
`

