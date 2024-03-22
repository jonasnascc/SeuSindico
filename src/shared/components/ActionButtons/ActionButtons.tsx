import React from "react";
import styled from "styled-components";
import { ActionButton } from "./ActionButton";
import { useNavigate } from "react-router-dom";

export const ActionButtons = () => {
    const navigate = useNavigate();

    const handleAdd = () => {
        navigate("adicionar");
    }
    
    return(
        <ActionButtonsDiv>
            <ActionButton label="adicionar" bgcolor="#ccef00" color="black" onClick={handleAdd}/>
            <ActionButton label="remover"/>
        </ActionButtonsDiv>
    )
}

const ActionButtonsDiv = styled.div`
    display: flex;
    gap: 10px;
    margin: 15px 0;

`