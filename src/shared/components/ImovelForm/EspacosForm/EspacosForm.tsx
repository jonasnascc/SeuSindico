import React, { useEffect, useState } from "react";
import { AddEspacoContainer, AddEspacoText, ClickableArea, FadeContainer, FormGridTile, FormNumbersInput, InputLabel, RegistroEspacoContainer, TipoSelect } from "../styles";
import { Fade, Grid } from "@mui/material";
import { Comodo, Espaco } from "../../../../types/imovel";
import { ImovelFormCard } from "../../ImovelFormCard/ImovelFormCard";
import { EspacoFormButtons } from "../../EspacoFormButtons.tsx/EspacoFormButtons";
import { EspacosListScreen } from "./EspacosList/EspacosListScreen";
import { AddButtonScreen } from "./AddButtonScreen";
import { RegistroEspacoScreen } from "./RegistroEspacoScreen";

type EspacosFormProps = {
    onSaveEspaco : (espaco: Espaco) => void,
    espacos : Espaco[],
    onAddComodo : (espaco: Espaco, comodo:Comodo) => void
}

const EspacoVazio : Espaco = {
    tipo: "CASA",
    espacoId: null,
    andar: null,
    numero: "",
    quantidadeComodos: null,
    metrosQuadrados: null,
    comodos: []
}

export const EspacosForm = ({onSaveEspaco, espacos, onAddComodo} : EspacosFormProps) => {
    const [displayPlusPage, setDisplayPlusPage] = useState(espacos.length===0);
    const [registrandoEspaco, setRegistrandoEspaco] = useState(false);

    const [espaco, setEspaco] = useState<Espaco>({...EspacoVazio})

    const handleAddButton = () => {
        setDisplayPlusPage(false);
        setRegistrandoEspaco(true)
    }

    const handleChange = (event:any) => {
        setEspaco({
            ...espaco,
            [event.target.name] : event.target.value
        })
    }

    const handleSave = () => {
        onSaveEspaco(espaco);
        setEspaco(() => {return {...EspacoVazio}});
        setRegistrandoEspaco(false);
    }

    const handleCancel = () => {
        setRegistrandoEspaco(false);
        
        setDisplayPlusPage(espacos.length===0);
    }

    return (
        <ImovelFormCard
            label = "Adicione um espaço ao seu imóvel"
            headerGridScreens={{xs:12}}
            bodyGridScreens={{xs:12}}
        >
            <AddButtonScreen 
                onButtonClick={handleAddButton}
                visible={displayPlusPage}
            />

            <RegistroEspacoScreen
                onSaveEspaco={handleSave}
                onCancel = {handleCancel}
                onFormChange={handleChange}
                visible={registrandoEspaco}
            />

            <EspacosListScreen
                espacos={espacos}
                visible={espacos.length > 0 && !registrandoEspaco}
                onAddComodo={onAddComodo}
                onAddNewEspaco={handleAddButton}
            />
        </ImovelFormCard>
        
    )
}