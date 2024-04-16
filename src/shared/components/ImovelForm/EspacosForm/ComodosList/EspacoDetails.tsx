import React from "react";
import { AddComodoTag, ComodoTag, ComodosTags, DetailsContainer, EditarButton, EspacoSubHeaderDiv, Prop, PropName, PropsTile, SubHeader } from "./styles";
import { Espaco } from "../../../../../types/imovel";

type EspacoDetailsType = {
    espaco : Espaco,
    onAddComodo : () => void
}

export const EspacoDetails = ({espaco, onAddComodo} : EspacoDetailsType) => {
    return(
        <DetailsContainer>
            {/* {JSON.stringify(espaco)} */}
            <EspacoSubHeaderDiv>
                <SubHeader>{`${espaco.numero} - ${espaco.tipo}`}</SubHeader>
                <EditarButton>Editar</EditarButton>
            </EspacoSubHeaderDiv>
            <PropsTile>
                <Prop><PropName>Andar:</PropName>{` ${espaco.metrosQuadrados}° andar`}</Prop>
                <Prop><PropName>Tamanho:</PropName>{` ${espaco.metrosQuadrados} m²`}</Prop>
            </PropsTile>

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