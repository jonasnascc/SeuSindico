import { Container } from "@mui/material";
import { useContext, useState } from "react";
import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";
import { AuthContext } from "../../context/auth/AuthContext";
import { useQuery } from "react-query";
import { getUserImoveis } from "../../api/services/Imoveis";
import { useNavigate } from "react-router-dom";
import { ContentTable, ContentTableColumn } from "../../shared/components/Tables/ContentTable";
import { Imovel } from "../../types/imovel";
import { SearchTile } from "../../shared/components/SearchTile/SearchTile";

const tableColumns : ContentTableColumn[] = [
    {
        label:"Nome",
        propName: "nome",
        isIndex : true
    },
    {
        label: "Endereco",
        propName: "endereco",
        compositeProp: "line",
        isIndex : true
    },
    {
        label:"Descricao",
        propName: "descricao",
        isIndex : true
    },
]

export const ImoveisPage = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const imoveisReq = useQuery(["imoveis"], () => getUserImoveis());

    const [search, setSearch] = useState<string | null>(null)

    const data = imoveisReq?.data ?? []

    const handleSubmit = (searchVal : any) => {
        setSearch(searchVal)
    }

    const getColumnsWithButton = () => {
        return [...tableColumns, 
            {
                label:"Espaços",
                propName: "*",
                button : {
                    label : "Gerenciar espaços",
                    onClick : (imovel : Imovel) => navigate(`/imoveis/espacos`, {state:{imovelData : imovel, from: "/imoveis"}})
                }
            },
        ]
    }
    
    if(user === null) return null;
    return (
        <>
            <SectionHeader label="Imóveis"></SectionHeader>
            <SearchTile onSubmit={handleSubmit}/>
            <ContentTable columns={getColumnsWithButton()} data={data} search={search}/>
        </>
    )
}
/*            
<SearchDiv>
<SearchText>Pesquisar: </SearchText>
<Search>
<SearchInput 
    onChange={handlePesquisaChange}
    placeholder="Pesquise por palavras-chave"
/>
{ <SearchButton>
    <SearchIcon/>
</SearchButton>}
</Search>
</SearchDiv>
<ImoveisTable imoveis={data} searchValue={pesquisaValue}/>
*/