import styled from "@emotion/styled";

export const AddImovelBody = styled.div`
    padding: 0 4vw;
    margin-bottom: 100px;
`

export const AddImovelButton = styled.button`
    border: none;
    padding: 5px 10px;
    border-radius: 15px;
    background-color: #4B31A1;
    color: white;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

export const SearchText = styled.span`
    padding: 0;
    font-size: 14px;
`

export const Search = styled.form`
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

`

export const SaveDiv = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 25px;
`

export const SaveButton = styled.button`
    background-color: #4B31A1;
    border : none;
    border-radius: 20px;
    padding: 10px 15px;
    color: white;
    cursor: pointer;

`
