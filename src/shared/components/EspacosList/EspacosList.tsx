import React from "react";
import { Espaco } from "../../../types/imovel";

type EspacosListProps = {
    espacos:Espaco[],
    visible?:boolean
}

export const EspacosList = ({espacos, visible=true} : EspacosListProps) => {
    if(!visible) return null;
    return (<>{JSON.stringify(espacos)}</>)
}