import React, { useEffect, useState } from "react";
import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";
import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Imovel } from "../../types/imovel";
import { EspacosTable } from "../../shared/components/EspacosTable/EspacosTable";

export const Espacos = () => {
    const location = useLocation();

    const [imovel, setImovel] = useState<Imovel | null> (null);

    useEffect(() => {
        if(location.state?.imovelData??false) {
            setImovel(location.state.imovelData);
        }
    }, [])

    return (
        <Container>
            <SectionHeader label="Espaços"/>
            <EspacosTable espacos={imovel?.espacos??[]} imovelId={imovel?.codigo??-1}/>
        </Container>
    );
}