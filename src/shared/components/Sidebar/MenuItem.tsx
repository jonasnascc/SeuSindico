import React from "react";
import { MenuItem } from "./styles";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const SidebarMenuItem = ({label, path} : {label:string, path:string}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    }

    return (
        <ListItem>
            <MenuItem onClick={handleClick}>{label}</MenuItem>
        </ListItem>
    )
}

const ListItem = styled.ul`
    display: flex;
    padding: 0;
    width: 100%;
    color: white;
    font-size: 1.2em;
    font-weight: 400;
    cursor: pointer;
`