import React from "react";
import { AddComodoTag, ComodoTag, ComodosTags, DetailsContainer, SubHeader } from "./styles";
import { Espaco } from "../../../../../types/imovel";

type EspacoDetailsType = {
    espaco : Espaco,
    onAddComodo : () => void
}

export const EspacoDetails = ({espaco, onAddComodo} : EspacoDetailsType) => {
    return(
        <DetailsContainer>
            {/* {JSON.stringify(espaco)} */}
            <SubHeader>Cômodos:</SubHeader>
            <ComodosTags>
                <AddComodoTag onClick={onAddComodo}>Adicionar Comodo</AddComodoTag>
                {
                    espaco.comodos.map((comodo, index) => (
                        <ComodoTag>
                            {comodo.nome}
                        </ComodoTag>
                    ))
                }
            </ComodosTags>
            
        </DetailsContainer>
    )
}