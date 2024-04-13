import { Grid } from "@mui/material";
import React from "react";
import { CancelButton, EspacoButtons, SaveButton } from "./styles";

type EspacoFormButtonsProps = {
    visible ?: boolean,
    onSave : (event:any) => void,
    onCancel : () => void 
}

export const EspacoFormButtons = ({onSave, onCancel, visible = true} : EspacoFormButtonsProps) => {

    if(!visible) return (null);
    return (
        <EspacoButtons>
            <Grid container spacing={"1vw"} justifyContent={"center"}>
                    <Grid item xs={12} sm={6} md={3}>
                        <CancelButton onClick={onCancel}>Cancelar</CancelButton>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <SaveButton onClick={onSave}>Adicionar</SaveButton>
                    </Grid>
            </Grid>
        </EspacoButtons>
    )
}