import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const TableHeader = ({items} : {items:string[]}) => {
    return (
        <Header>
            <HeaderRow>
                {
                    items.map((item, index) => (
                        <HeaderColumn key={index} scope="col">{item}</HeaderColumn>
                    ))
                }
            </HeaderRow>
        </Header>
    )
}

const Header = styled.thead`
    background-color: #ff8533;
    color: white;
`

const HeaderRow = styled.tr`

`
const HeaderColumn = styled.th`
    text-align: start;
    padding: 5px 0;
    padding-left: 25px;
    font-weight: 500;
`
