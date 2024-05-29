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
import { TableOption } from "../../shared/components/Tables/ContentTableOptions";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    const tableOptions : TableOption[] = [
        {
            label: "Editar",
            onClick : handleEdit,
            icon : <EditIcon/>
        },
        {
            label: "Deletar",
            onClick : () => handleDelete,
            icon : <DeleteIcon/>
        },
    ]

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
            <ContentTable 
                columns={getColumnsWithButton()} 
                data={data} 
                search={search}
                options={tableOptions}
            />
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