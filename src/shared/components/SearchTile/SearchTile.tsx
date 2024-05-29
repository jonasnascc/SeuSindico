import React, { useState } from "react";
import { SearchDiv, SearchText, SearchInput, SearchButton, Search, ClearIconDiv } from "./styles";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

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

    const handleClear = () => {
        setSearch("")
        if(onSubmit) onSubmit("")
    }

    return (
        <SearchDiv>
            <SearchText>Pesquisar: </SearchText>
            <Search>
                <SearchInput 
                    name="search"
                    onChange={handleChange}
                    placeholder="Pesquise por palavras-chave"
                    value={search}
                />
                {
                search.length > 0 &&(
                    <ClearIconDiv onClick={handleClear}>
                        <ClearIcon/>
                    </ClearIconDiv>
                )
                }
                {<SearchButton onClick={handleSubmit}>
                    <SearchIcon/>
                </SearchButton>}
            </Search>
        </SearchDiv>
    )
}