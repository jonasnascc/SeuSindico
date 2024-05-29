import React, { useState } from "react";
import { SearchDiv, SearchText, SearchInput, SearchButton, Search } from "./styles";
import SearchIcon from '@mui/icons-material/Search';

type SearchTileProps = {
    onChange ?: (event?:any) => void,
    onSubmit ?: (search:string) => void
}

export const SearchTile = ({onChange, onSubmit} : SearchTileProps) => {
    const [search, setSearch] = useState("")

    const handleChange = (event:any) => {
        setSearch(event.target.value)
        if(onChange) onChange(event.target.value)
    }

    const handleSubmit = (event:any) => {
        event.preventDefault()
        if(onSubmit) onSubmit(search)
    }

    return (
        <SearchDiv>
            <SearchText>Pesquisar: </SearchText>
            <Search>
                <SearchInput 
                    name="search"
                    onChange={handleChange}
                    placeholder="Pesquise por palavras-chave"
                />
                { <SearchButton onClick={handleSubmit}>
                    <SearchIcon/>
                </SearchButton>}
            </Search>
        </SearchDiv>
    )
}