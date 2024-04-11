import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar/Sidebar";
import styled from "styled-components";

export const Layout = () => {
    return (
        <LayoutContainer>
            <Outlet/>
        </LayoutContainer>
    )
}

const LayoutContainer = styled.div`
    position: absolute;
    display: flex;
    height: 100%;
    width: 100%;
`

