import React from "react";
import { Imovel } from "../../../types/imovel";
import { TableItem } from "./TableItem";
import styled from "styled-components";
import { TableHeader } from "./TableHeader";

export const ImoveisTableHeaderItems = [
    "nome", "descricao", "tipo"
]

export const ImoveisTable = ({imoveis, searchValue}:{imoveis : Imovel[], searchValue: string | null}) => {

    const  formatSearchvalue = (value : string) : string => {
        return value.toLocaleLowerCase().trim();
    }

    const validarPesquisa = (imovel : Imovel) : boolean => {
        if(searchValue!==null) {
            const search = formatSearchvalue(searchValue);

            return  formatSearchvalue(imovel.nome).includes(search) ||
                    formatSearchvalue(imovel.descricao).includes(search) ||
                    formatSearchvalue(imovel.tipo).includes(search) 
        }
        else return true;
    }

    return(
        <Table>
            <TableHeader items={ImoveisTableHeaderItems}/>
            <Body>
            {
                imoveis.filter(imovel => validarPesquisa(imovel)).map((imovel, index) => (
                    <TableItem key={index} imovel={imovel}/>
                ))
            }
            </Body>
        </Table>
    )
}

const Table = styled.table`
    border-collapse: separate;
    letter-spacing: 1px;
    width: 100%;
    border-spacing: 0 10px;
`

const Body = styled.tbody`

`