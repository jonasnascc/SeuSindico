import React from "react";
import { Imovel } from "../../../types/imovel";
import styled from "styled-components";
import { Grid } from "@mui/material";

export const TableItem = ({imovel} : {imovel:Imovel}) => {
    return (
        <Row>
            <Column>
                {imovel.nome}
            </Column>
            <Column>
                {imovel.descricao}
            </Column>
            <Column>
                {imovel.tipo.toLocaleLowerCase()}
            </Column>
        </Row>
    );
}

const Row = styled.tr`
    height: 150px;
    background-color: white;
`

const Column = styled.td`
    padding: 25px;
`


