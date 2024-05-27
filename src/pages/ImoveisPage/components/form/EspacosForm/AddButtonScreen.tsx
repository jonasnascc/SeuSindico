import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { ClickableArea, AddEspacoContainer, AddEspacoText } from "../styles";

type AddButtonScreenProps = {
    onButtonClick : () => void,
    visible ?: boolean
}

export const AddButtonScreen = ({onButtonClick, visible=true} : AddButtonScreenProps) => {
    if(!visible) return null;
    return (
        <ClickableArea onClick={onButtonClick}>
            <AddEspacoContainer>
                <AddIcon sx={{width:"70px", height:"70px"}}/>
                <AddEspacoText>Clique para adicionar um novo espaço</AddEspacoText>
            </AddEspacoContainer>
        </ClickableArea>
    )
}