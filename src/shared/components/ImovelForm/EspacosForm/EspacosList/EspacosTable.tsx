import React from "react";
import { EspacosListTableContainer, EspacosListTable, TableHeaderColumn, TableColumn , TableRow} from "./styles";
import { Espaco } from "../../../../../types/imovel";

type EspacosTableProps = {
    espacos : Espaco[],
    onSelect : (espaco:Espaco) => void,
    selected : boolean
}

export const EspacosTable = ({espacos, selected, onSelect}:EspacosTableProps) => {
    return (
        <EspacosListTableContainer>
            <EspacosListTable>
                <caption>Selecione um espaço abaixo:</caption>
                <TableRow $header>
                    <TableHeaderColumn $column="numero">
                        Número
                    </TableHeaderColumn>
                    <TableHeaderColumn $column="tipo">
                        Tipo
                    </TableHeaderColumn>
                </TableRow>
                {
                    espacos.map((espaco, index) => (
                        <TableRow 
                            key={index} 
                            onClick={() => onSelect(espaco)} 
                            $selected={selected}
                        >
                            <TableColumn $column="numero">{espaco.numero}</TableColumn>
                            <TableColumn $column="tipo">{espaco.tipo}</TableColumn>
                        </TableRow>
                    ))
                }
            </EspacosListTable>
        </EspacosListTableContainer>
    )
}