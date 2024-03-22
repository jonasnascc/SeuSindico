import { Container } from "@mui/material";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";
import { AuthContext } from "../../context/auth/AuthContext";
import { useQuery } from "react-query";
import { getUserImoveis } from "../../api/services/Imoveis";
import { ImoveisTable } from "../../shared/components/ImoveisTable/ImoveisTable";

import SearchIcon from '@mui/icons-material/Search';

export const ImoveisPage = () => {
    const {user} = useContext(AuthContext);
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
    
    if(user === null) return null;
    return (
        <ImoveisDiv>
            <SectionHeader label="Meus imóveis"/>
            <SearchDiv>
                Pesquise por uma palavra chave:
                <Pesquisa>
                    <CaixaPesquisa onChange={handlePesquisaChange}/>
                    <SearchButton><SearchIcon/></SearchButton>
                </Pesquisa>
            </SearchDiv>
            <ImoveisTable imoveis={data} searchValue={pesquisaValue}/>
        </ImoveisDiv>
    )
}

const ImoveisDiv = styled.div`

`

const SearchDiv = styled.div`
    margin: 10px 0;
`

const Pesquisa = styled.div`
    display: flex;
    align-items: center;
`

const CaixaPesquisa = styled.input`
    border: none;
    padding: 10px;
`

const SearchButton = styled.button`

`