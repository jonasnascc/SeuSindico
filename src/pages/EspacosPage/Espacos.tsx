import React, { useEffect, useState } from "react";
import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";
import { Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Imovel } from "../../types/imovel";
import { EspacosTable } from "../../shared/components/EspacosTable/EspacosTable";
import { ContentTable, ContentTableColumn } from "../../shared/components/Tables/ContentTable";
import { SearchTile } from "../../shared/components/SearchTile/SearchTile";
import { SearchBox } from "./styles";

const tableColumns : ContentTableColumn[] = [
    {
        label : "Número",
        propName : "numero",
        isIndex: true
    },
    {
        label : "Cômodos",
        propName : "comodosLine",
        isIndex: true
    },
    {
        label : "Tipo",
        propName : "tipo",
        isIndex: true
    },
    {
        label : "Status",
        propName : "contrato",
        compositeProp: "statusContrato",
        nullPlaceholder: "DESOCUPADO",
        isIndex: true
    },
]

export const Espacos = () => {
    const location = useLocation();
    const navigate = useNavigate()

    const [imovel, setImovel] = useState<Imovel | null> (null);

    
    const [search, setSearch] = useState<string | null>(null)

    const handleSubmitSearch = (searchVal : any) => {
        setSearch(searchVal)
    }

    useEffect(() => {
        if(location.state?.imovelData??false) {
            console.log(location.state.imovelData)
            setImovel(location.state.imovelData);
        }
    }, [location.state.imovelData])

    const handleBack = () => {
        const from = location.state?.from??false
        if(from) {
            navigate(from)
        } else navigate(-1)
    }

    return (
        <>
            <SectionHeader label="Espaços" onBack={handleBack}/>
            <SearchBox><SearchTile onSubmit={handleSubmitSearch}/></SearchBox>
            {imovel && <ContentTable data={imovel?.espacos??[]} columns={tableColumns} search={search}/>}
        </>
    );
}