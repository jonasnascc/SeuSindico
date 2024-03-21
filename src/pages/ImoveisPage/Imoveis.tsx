import { Container } from "@mui/material";
import React, { useContext } from "react";
import styled from "styled-components";
import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";
import { AuthContext } from "../../context/auth/AuthContext";
import { useQuery } from "react-query";
import { getUserImoveis } from "../../api/services/Imoveis";

export const ImoveisPage = () => {
    const {user} = useContext(AuthContext);
    const imoveisReq = useQuery(["imoveis"], () => getUserImoveis());

    const data = imoveisReq?.data ?? []
    console.log(data);
    
    if(user === null) return null;
    return (
        <ImoveisDiv>
            <SectionHeader label="Meus imóveis"/>

        </ImoveisDiv>
    )
}

const ImoveisDiv = styled.div`

`