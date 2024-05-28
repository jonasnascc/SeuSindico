import { Container } from "@mui/material";
import { useContext, useState } from "react";
import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";
import { AuthContext } from "../../context/auth/AuthContext";
import { useQuery } from "react-query";
import { getUserImoveis } from "../../api/services/Imoveis";
import { useNavigate } from "react-router-dom";
import { ContentTable, ContentTableColumn } from "../../shared/components/Tables/ContentTable";
import { Search, SearchDiv, SearchText, SearchInput, SearchButton } from "./styles";
import SearchIcon from '@mui/icons-material/Search';

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

    const [searchInputValue, setSearchInputValue] = useState<string | null>(null);
    const [search, setSearch] = useState<string | null>(null)

    const data = imoveisReq?.data ?? []

    const handlePesquisaChange = (event : any) => {
        if(event.target.value === "") setSearchInputValue(null);
        else {
            setSearchInputValue(() => event.target.value);
        }
    } 

    const handleSubmit = (event:any) => {
        event.preventDefault()
        setSearch(searchInputValue)
    }

    const getColumnsWithButton = () => {
        return [...tableColumns, 
            {
                label:"Espaços",
                propName: "",
                button : {
                    label : "Gerenciar espaços",
                    onClick : () => null
                }
            },
        ]
    }
    
    if(user === null) return null;
    return (
        <>
            <SectionHeader label="Imóveis"></SectionHeader>
            <SearchDiv>
                <SearchText>Pesquisar: </SearchText>
                <Search>
                    <SearchInput 
                        name="search"
                        onChange={handlePesquisaChange}
                        placeholder="Pesquise por palavras-chave"
                    />
                    { <SearchButton onClick={handleSubmit}>
                        <SearchIcon/>
                    </SearchButton>}
                </Search>
            </SearchDiv>
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