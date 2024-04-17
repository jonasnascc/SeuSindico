import React from "react";
import { Endereco, Imovel } from "../../../types/imovel";
import { TableItem } from "./TableItem";
import styled from "styled-components";
import { TableHeader } from "./TableHeader";
import { Grid} from "@mui/material";
import { TableBodyDiv, TableContainer, TableHeaderDiv, TableHeaderElement } from "./styles";

export type HeaderItemType = {
    label:string,
    prop:string,
    space:number
    subProps?:string[],
    format ?: string,
    justifyCenter?:boolean
}

export const ImoveisTableHeaderItems : HeaderItemType[] = [
    {
        label: "Nome do imóvel",
        prop: "nome",
        space: 2,
        justifyCenter: true
    },
    {
        label: "Descrição",
        prop: "descricao",
        space: 4,
    },
    {
        label: "Endereço",
        prop: "endereco",
        subProps : ["rua", "bairro", "numero", "cidade", "estado", "cep"],
        format : "Rua %rua%, %numero%, %bairro%. %cidade%-%estado%, %cep%.",
        space: 5,
    },
    {
        label: "Ações",
        prop: "action",
        space: 1,
    }
]

export const ImoveisTable = ({imoveis, searchValue}:{imoveis : Imovel[], searchValue: string | null}) => {
    const  formatSearchvalue = (value : string) : string => {
        return value.toLocaleLowerCase().trim();
    }

    const validarPesquisa = (imovel : Imovel) : boolean => {
        if(searchValue!==null) {
            const search = formatSearchvalue(searchValue);

            let enderecoMatch = false;

            if(imovel.endereco!==null){
                const endereco : Endereco = imovel.endereco;
                Object.keys(imovel.endereco).forEach(key => {
                    if(!enderecoMatch) {
                        enderecoMatch = formatSearchvalue(endereco[key as keyof typeof endereco] as unknown as string??"").includes(search)
                    }
                })
            }

            return  formatSearchvalue(imovel.nome).includes(search) ||
                    formatSearchvalue(imovel.descricao).includes(search) ||
                    enderecoMatch
        }
        else return true;
    }

    return(
        <TableContainer>
            <TableHeaderDiv>
                <Grid container spacing={2}>
                    {
                        ImoveisTableHeaderItems.map(({label, space}, index) => (
                            <Grid item key={index} xs={space}>
                                <TableHeaderElement>{label}</TableHeaderElement>
                            </Grid>
                        ))
                    }
                </Grid>
            </TableHeaderDiv>
            <TableBodyDiv>
                {
                    imoveis.filter(imovel => validarPesquisa(imovel)).map((imovel, index) => (
                        <TableItem key={index} imovel={imovel} columns={ImoveisTableHeaderItems}/>
                    ))
                }
            </TableBodyDiv>

        </TableContainer>
    )
}