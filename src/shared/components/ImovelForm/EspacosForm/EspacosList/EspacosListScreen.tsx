import React, { useState } from "react";
import { Comodo, Espaco } from "../../../../../types/imovel";
import { Grid } from "@mui/material";
import { EspacosListTable, EspacosListTableContainer, TableColumn, TableHeaderColumn, TableRow} from "./styles";
import { AddComodoForm } from "../ComodoForm/AddComodoForm";
import { EspacosTable } from "./EspacosTable";

type EspacosListProps = {
    espacos:Espaco[],
    visible?:boolean
}

export const EspacosListScreen = ({espacos, visible=true} : EspacosListProps) => {
    const [showAddComodo, setShowAddComodo] = useState(false);

    const handleSelectEspaco = (espaco: Espaco) => {
        setShowAddComodo(state => !state);
    }
    
    if(!visible) return null;
    return (<Grid container height={"100%"}>
        <Grid item xs={showAddComodo ? 6: 12} p={"10px"}>
            <EspacosTable 
                espacos={espacos}
                onSelect={handleSelectEspaco}
                selected={showAddComodo}
            />
        </Grid>
        {
            showAddComodo && (
                <Grid item xs={6} p="15px">
                    <AddComodoForm onSave={(comodo: Comodo) => null} onCancel={() => null}/>
                </Grid>
            )
        }
    </Grid>)
}