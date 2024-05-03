import React from "react";
import { Espaco } from "../../../types/imovel";
import { ButtonTile, ButtonsDiv } from "./styles";

import KeyIcon from '@mui/icons-material/Key';
import KeyOffIcon from '@mui/icons-material/KeyOff';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const EspacosTableButtons = ({espacoId, imovelId, contratoId, onEdit} : {espacoId:number, imovelId:number, contratoId:number|null, onEdit:() => void}) => {
    const navigate = useNavigate()

    const handleAlugar = () => {
        navigate("alugar", {state:{espacoId, imovelId}})
    }

    const handleChecarAluguel = () => {
    }

    const handleCancelarAluguel = () => {
    }
    
    const handleRemoverEspaco = () => {
    }

    return (
        <ButtonsDiv>
            <Tooltip title="Editar" placement="top-start">
                <ButtonTile onClick={onEdit}>
                    <EditIcon/>
                </ButtonTile>
            </Tooltip>
            {contratoId ? (
                <>
                <Tooltip title="Checar Aluguel" placement="top-start">
                    <ButtonTile onClick={handleChecarAluguel}>
                        <ContentPasteIcon/>
                    </ButtonTile>
                </Tooltip>
                <Tooltip title="Cancelar Aluguel" placement="top-start">
                    <ButtonTile onClick={handleCancelarAluguel} $hoverColor="#FF3D00">
                        <KeyOffIcon/>
                    </ButtonTile>
                </Tooltip>
                </>
            ) : (
                <Tooltip title="Alugar" placement="top-start">
                    <ButtonTile onClick={handleAlugar}>
                        <KeyIcon/>
                    </ButtonTile>
                </Tooltip>
            )}
            <Tooltip title="Excluir" placement="top-start">
                <ButtonTile onClick={handleRemoverEspaco} $hoverColor="#FF3D00">
                    <DeleteIcon/>
                </ButtonTile>
            </Tooltip>
        </ButtonsDiv>
    )
}