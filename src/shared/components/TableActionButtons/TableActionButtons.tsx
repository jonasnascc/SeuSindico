import React from "react";
import { Imovel } from "../../../types/imovel";
import { Grid } from "@mui/material";
import { ActionIconsContainer, DeleteIconTile, ExpandButton, IconTile } from "./styles";

import EditIcon from '@mui/icons-material/Edit';
import HouseIcon from '@mui/icons-material/House';
import DeleteIcon from '@mui/icons-material/Delete';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { deleteImovel } from "../../../api/services/Imoveis";

type TableActionButtonsProps = {
    imovel : Imovel,
    onExpand : () => void,
    expanded?:boolean
}

export const TableActionButtons = ({onExpand, expanded=false, imovel} : TableActionButtonsProps) => {
    const queryClient = useQueryClient();
    const deleteMutation = useMutation(["imovel-delete"], (imovelId : number) => deleteImovel(imovelId), {
        onSuccess: () => {
            queryClient.invalidateQueries(["imoveis"])
        }
    });
    
    const handleEdit = () => {
        
    }

    const handleManageResidencias = () => {

    }

    const handleDelete = () => {
        deleteMutation.mutate(imovel?.codigo??-1);
    }

    return (
        <Grid container>
            <Grid item xs={6}>
                <ActionIconsContainer>
                    <IconTile onClick={handleEdit}><EditIcon/></IconTile>
                    <IconTile onClick={handleManageResidencias}><HouseIcon/></IconTile>
                    <DeleteIconTile onClick={handleDelete}><DeleteIcon/></DeleteIconTile>
                </ActionIconsContainer>
            </Grid>
            <Grid item xs={6}>
                <ExpandButton onClick={onExpand}>
                    <IconTile>
                        {expanded ? (
                            <ExpandLessIcon/>
                        ) : (
                            <ExpandMoreIcon/>
                        )}
                    </IconTile>
                </ExpandButton>
            </Grid>
        </Grid>
    )
}