import React, { useState } from "react";
import { Imovel } from "../../../types/imovel";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { HeaderItemType } from "./ImoveisTable";
import { TableGridItem, TableItemCard } from "./styles";
import { TableActionButtons } from "../TableActionButtons/TableActionButtons";

type TableItemProps = {
    imovel:Imovel,
    columns:HeaderItemType[]
}

export const TableItem = ({imovel, columns} : TableItemProps) => {
    const [expanded, setExpanded] = useState(false);

    const formattedObjProp = (template:string, obj : any, subProps: string[]) => {
        let temp = template;
        subProps.forEach(prop => {
            temp = temp.replaceAll(`%${prop}%`, `${obj[prop]}`)
        })
        return temp;
    }

    const accessColumn = (column : HeaderItemType) => {
        const {prop, format, subProps} = column
        const obj : any =  imovel[prop as keyof typeof imovel];

        if(subProps) {
            
            if(format)
                return formattedObjProp(format, obj, subProps)
            else {
                let str = "";
                subProps.forEach((sub, index) => str += `${sub}${(index !== subProps.length - 1)?",":"."}`)
                return str;
            }
        }

        return obj;
    }

    const handleExpandItem = () => {
        setExpanded(state => !state);
    }
    

    return (
        <TableItemCard $expanded={expanded}>
            <Grid container height="100%" spacing={2}>
                {
                    columns.map((item, index) => (
                        <Grid item key={index} xs={item.space}>
                            <TableGridItem $justifyCenter={item.justifyCenter}>
                                {
                                    (item.prop !== "action") ? (
                                        <>{accessColumn(item)}</>
                                    ) : (
                                        <>
                                        <TableActionButtons 
                                            onExpand={handleExpandItem} 
                                            expanded={expanded}
                                            imovel={imovel}
                                        />
                                        </>
                                    )
                                }
                            </TableGridItem>
                        </Grid>
                    ))
                }
            </Grid>
        </TableItemCard>
        
    );
}
