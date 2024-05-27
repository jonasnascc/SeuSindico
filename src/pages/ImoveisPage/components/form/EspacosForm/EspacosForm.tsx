import React, { useState } from "react";
import { Comodo, Espaco, EspacoVazio } from "../../../../../types/imovel";
import { ImovelFormCard } from "../../../../../shared/components/ImovelFormCard/ImovelFormCard";
import { EspacosListScreen } from "../../../../../shared/components/EspacosList/EspacosListScreen";
import { AddButtonScreen } from "./AddButtonScreen";
import { RegistroEspacoScreen } from "./RegistroEspacoScreen";
import { StepComponentProps } from "../../../../../shared/hooks/useImovelFormSteps";
import { ImovelFormStep } from "../ImovelForm/ImovelFormStep";

type EspacosFormProps = {
    onSaveEspaco : (espaco: Espaco) => void,
    espacos : Espaco[],
    onAddComodo : (espaco: Espaco, comodo:Comodo) => void
}&StepComponentProps

export const EspacosForm = ({onSaveEspaco, espacos, onAddComodo, visible} : EspacosFormProps) => {
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
        <ImovelFormStep visible={visible}>
            <ImovelFormCard
                label = "Adicione um espaço ao seu imóvel"
                headerGridScreens={{xs:12}}
                bodyGridScreens={{xs:12}}
            >
                <AddButtonScreen 
                    onButtonClick={handleAddButton}
                    visible={espacos.length === 0 && displayPlusPage}
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
        </ImovelFormStep>
    )
}