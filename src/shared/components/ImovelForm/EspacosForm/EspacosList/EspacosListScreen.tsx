import React, { useState } from "react";
import { Comodo, Espaco } from "../../../../../types/imovel";
import { Grid } from "@mui/material";
import { EspacosListTable, EspacosListTableContainer, TableColumn, TableHeaderColumn, TableRow} from "./styles";
import { AddComodoForm } from "../ComodoForm/AddComodoForm";
import { EspacosTable } from "./EspacosTable";
import { EspacoDetails } from "../ComodosList/EspacoDetails";

type EspacosListProps = {
    espacos:Espaco[],
    visible?:boolean,
    onAddComodo : (espaco: Espaco, comodo: Comodo) => void
}

export const EspacosListScreen = ({espacos, onAddComodo, visible=true} : EspacosListProps) => {
    const [showAddComodo, setShowAddComodo] = useState(false);
    const [comodos , setComodos] = useState<Comodo[]>([])

    const [selectedEspaco, setSelectedEspaco] = useState<Espaco|null>(null);

    const handleSelectEspaco = (espaco: Espaco) => {
        setSelectedEspaco(
            espaco === selectedEspaco ? (null) : espaco
        );
    }

    const handleSaveComodo = (comodo : Comodo) => {
        if(selectedEspaco) {
            onAddComodo(selectedEspaco, comodo);
            setShowAddComodo(false);
        }
    }

    const handleCancelAddComodo = () => {
        setShowAddComodo(false);
    }

    const handleAddComodoButton = () => {
        setShowAddComodo(true);
    }

    if(!visible) return null;
    return (<Grid container height={"100%"}>
        <Grid item xs={selectedEspaco || showAddComodo ? 6: 12} p={"10px"}>
            <EspacosTable 
                espacos={espacos}
                onSelect={handleSelectEspaco}
                selected={showAddComodo}
            />
        </Grid>
        {
            selectedEspaco && !showAddComodo && (
                <Grid item xs={6} p="15px">
                    <EspacoDetails
                        espaco={selectedEspaco}
                        onAddComodo={handleAddComodoButton}
                    />
                </Grid>
            )
        }
        {
        showAddComodo && selectedEspaco && (
            <Grid item xs={6} p="15px">
                <AddComodoForm onSave={handleSaveComodo} onCancel={handleCancelAddComodo}/>
            </Grid>
        )
        }
    </Grid>)
}