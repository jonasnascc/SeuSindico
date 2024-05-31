import React from "react";
import { Building, EspacoBlock, GroundLevel, LevelBlock } from "./styles";

type DinamicImovelProps = {
    qntAndares : number,
    espPorAndar : number
}

export const DinamicImovel = ({qntAndares, espPorAndar} : DinamicImovelProps) => {
    return (
        <Building>
            {
                (qntAndares>0 && espPorAndar>0) &&Array.from({length: qntAndares}, (_, i) => i + 1).map((andar) => (
                    <LevelBlock>
                        {
                            Array.from({length: espPorAndar}, (_, i) => i + 1).map((espaco) => (
                                 <EspacoBlock/>
                            ))
                        }
                    </LevelBlock>
                ))
            }
            <GroundLevel/>
        </Building>
    )
}   