import { Container } from "@mui/material";
import { useContext, useState } from "react";
import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";
import { AuthContext } from "../../context/auth/AuthContext";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteImovel, getUserImoveis } from "../../api/services/Imoveis";
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
    const [search, setSearch] = useState<string | null>(null)

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const queryClient = useQueryClient()

    const imoveisReq = useQuery(["imoveis"], () => getUserImoveis());

    const deleteMutation = useMutation("delete-imovel", (id: number) => deleteImovel(id), {
        onSuccess: () => queryClient.invalidateQueries(["imoveis"])
    })

    const data = imoveisReq?.data ?? []

    const handleSubmit = (searchVal : any) => {
        setSearch(searchVal)
    }

    const handleEdit = (imovel : Imovel) => {
        navigate("/imoveis/edit", {state:{imovelData:imovel, from:"/imoveis"}})
    }

    const handleDelete = (imovel : Imovel) => {
        if(imovel.codigo) deleteMutation.mutate(imovel.codigo) 
    }

    const tableOptions : TableOption[] = [
        {
            label: "Editar",
            onClick : handleEdit,
            icon : <EditIcon/>,
            objIsFnArg:true
        },
        {
            label: "Deletar",
            onClick : handleDelete,
            icon : <DeleteIcon/>,
            objIsFnArg:true
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