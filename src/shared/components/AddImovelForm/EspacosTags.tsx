import React from "react";
import { Espaco } from "../../../types/imovel";
import { EspacoTag, EspacosTagsDiv } from "./styles";

type EspacosTagsProps = {
    espacos : Espaco[],
    onSelectEspaco : (espaco:Espaco) => void
}

export const EspacosTags = ({espacos, onSelectEspaco} : EspacosTagsProps) => {
    return (
        <EspacosTagsDiv>
            {
                espacos.map((espaco, index) => (
                    <EspacoTag 
                        key={index} 
                        onClick={() => onSelectEspaco(espaco)}
                    >
                        {espaco.numero}
                    </EspacoTag>
                ))
            }
        </EspacosTagsDiv>
    )
}