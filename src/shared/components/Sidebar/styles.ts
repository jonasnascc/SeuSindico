import { Grid } from "@mui/material";
import styled from "styled-components";

export const Bar = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    width: 100%;
    height: 100%;
    background-color: #ff8533;
`

export const UsuarioTile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    gap: 15px;
    padding-bottom: 20px;
    border-bottom: solid 1px white;
    margin-bottom: 10px;
`

export const UsuarioLabel = styled.h2`
    margin: 0;
    color: white;
    font-size: 1.6em;
    font-weight: 500;
    color: white;
`

export const MenuList = styled.ul`
    display: flex;

    padding: 0;
    flex-direction: column;
    list-style : none;
    width: 100%;
`

export const MenuItem = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 15px 0px;
    width: 100%;

    &:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }
`