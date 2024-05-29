import styled from "styled-components"

export const SearchText = styled.span`
    padding: 0;
    font-size: 14px;
`

export const Search = styled.form`
    position: relative;
    display: flex;
    flex: 1;
`

export const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    margin: 25px 0;
    width: 100%;
    gap: 5px;
`

export const SearchInput = styled.input`
    border: none;
    border-radius: 8px 0 0 8px;
    height: 30px;
    border: solid 1px #9A9A9A;
    font-size: 14px;
    padding-right: 30px;
`

export const SearchButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0 8px 8px 0;
    color: white;
    background-color: #4B31A1;
    cursor: pointer;
    transition: background-color .5s ease;
    width: 60px;

    &:hover {
        background-color: #10CCAD;
    }

    &:active {
        transition: none;
        background-color: #FF3D00;
    }

`

export const ClearIconDiv = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width : 20px;
    right: 60px;
    color: #8e6dfb;
    cursor : pointer;
    transition: color .5s ease;
    &:hover {
        color: #10CCAD;
    }
`