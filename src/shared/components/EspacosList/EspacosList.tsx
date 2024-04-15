import React, { useState } from "react";
import { Comodo, Espaco } from "../../../types/imovel";
import { Grid } from "@mui/material";
import { EspacosListTable, EspacosListTableContainer, TableColumn, TableHeaderColumn, TableRow} from "./styles";
import { AddComodoForm } from "../ImovelForm/EspacosForm/AddComodoForm";

type EspacosListProps = {
    espacos:Espaco[],
    visible?:boolean
}

export const EspacosList = ({espacos, visible=true} : EspacosListProps) => {
    const [showAddComodo, setShowAddComodo] = useState(false);

    const handleSelectEspaco = (espaco: Espaco) => {
        setShowAddComodo(state => !state);
    }
    
    if(!visible) return null;
    return (<Grid container height={"100%"}>
        <Grid item xs={showAddComodo ? 6: 12} p={"10px"}>
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
                                onClick={() => handleSelectEspaco(espaco)} 
                                $selected={showAddComodo}
                            >
                                <TableColumn $column="numero">{espaco.numero}</TableColumn>
                                <TableColumn $column="tipo">{espaco.tipo}</TableColumn>
                            </TableRow>
                        ))
                    }
                </EspacosListTable>
            </EspacosListTableContainer>
        </Grid>
        {
            showAddComodo && (<Grid item xs={6} p="15px">
                <AddComodoForm onSave={(comodo: Comodo) => null} onCancel={() => null}/>
            </Grid>)
        }
    </Grid>)
}