import { Container, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";
import { AuthContext } from "../../context/auth/AuthContext";
import { useQuery } from "react-query";
import { getUserImoveis } from "../../api/services/Imoveis";
import { ImoveisTable } from "../../shared/components/ImoveisTable/ImoveisTable";

import SearchIcon from '@mui/icons-material/Search';
import { AddImovelButton, Search, SearchButton, SearchDiv, SearchInput, SearchText } from "./styles";
import { useNavigate } from "react-router-dom";

export const ImoveisPage = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const imoveisReq = useQuery(["imoveis"], () => getUserImoveis());

    const [pesquisaValue, setPesquisaValue] = useState<string | null>(null);

    const data = imoveisReq?.data ?? []
    console.log(data);

    const handlePesquisaChange = (event : any) => {
        if(event.target.value === "") setPesquisaValue(null);
        else {
            setPesquisaValue(() => event.target.value);
        }
    } 

    const handleAddImovel = () => {
        navigate("adicionar")
    }
    
    if(user === null) return null;
    return (
        <Container>
            <SectionHeader label="Meus imóveis">
                <AddImovelButton onClick={handleAddImovel}>Adicionar</AddImovelButton>
            </SectionHeader>
            <SearchDiv>
                <SearchText>Pesquisar: </SearchText>
                <Search>
                    <SearchInput 
                        onChange={handlePesquisaChange}
                        placeholder="Pesquise por palavras-chave"
                    />
                    {/* <SearchButton>
                        <SearchIcon/>
                    </SearchButton> */}
                </Search>
            </SearchDiv>
            <ImoveisTable imoveis={data} searchValue={pesquisaValue}/>
        </Container>
    )
}