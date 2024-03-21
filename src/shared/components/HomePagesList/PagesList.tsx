import React, { useContext } from "react";
import styled from "styled-components";
import { PageCard } from "./PageCard";
import { Container } from "@mui/material";

import logo from "./../../../logo.svg";
import { menuItems } from "../Sidebar/Menu";
import { AuthContext } from "../../../context/auth/AuthContext";

export const PagesList = () => {
    const {user} = useContext(AuthContext);
    return (
        <Container sx={{height:"100%"}}>
            <CentralizedDiv>
                <Logo src={logo}/>
                <WelcomeMsg>Olá, {user?.nome??""}. Bem vindo ao SeuSindico, escolha uma opção abaixo:</WelcomeMsg>
                <Cards>
                    {menuItems.filter(item => item.path!=="/").map((item, index) => (
                        <PageCard key={index} label={item.label} path={item.path}/>
                    ))}
                </Cards>
            </CentralizedDiv>
        </Container>
    )
}

const Logo = styled.img`
    height: 100px;
`

const WelcomeMsg = styled.h1`
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

const CentralizedDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
`

const Cards = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    flex-direction: row;
`