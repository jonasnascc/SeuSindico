import React from "react";
import { Imovel } from "../../../types/imovel";
import { Grid } from "@mui/material";
import { ActionIconsContainer, ExpandButton, IconTile } from "./styles";

import EditIcon from '@mui/icons-material/Edit';
import HouseIcon from '@mui/icons-material/House';
import DeleteIcon from '@mui/icons-material/Delete';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useNavigate } from "react-router-dom";

type TableActionButtonsProps = {
    imovel : Imovel,
    onExpand : () => void,
    expanded?:boolean
}

export const TableActionButtons = ({onExpand, expanded=false, imovel} : TableActionButtonsProps) => {
    const handleEdit = () => {
        
    }

    const handleManageResidencias = () => {

    }

    const handleDelete = () => {

    }

    return (
        <Grid container>
            <Grid item xs={6}>
                <ActionIconsContainer>
                    <IconTile onClick={handleEdit}><EditIcon/></IconTile>
                    <IconTile onClick={handleManageResidencias}><HouseIcon/></IconTile>
                    <IconTile onClick={handleDelete}><DeleteIcon/></IconTile>
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