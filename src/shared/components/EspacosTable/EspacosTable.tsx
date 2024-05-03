import React, { useState } from "react";
import { Espaco } from "../../../types/imovel";
import { EspacosTableComp, HeaderTableRow, TableBody, TableColumn, TableHeaderColumn, TableRow } from "./styles";
import { EspacosTableButtons } from "./EspacosTableButtons";
import { EditEspacoDialog } from "../EditEspacoDialog/EditEspacoDialog";

type EspacosTableProps = {
    imovelId : number,
    espacos : Espaco[],
}

export const EspacosTable = ({espacos, imovelId} : EspacosTableProps) => {
    return (
        <EspacosTableComp>
            <EspacosTableHeader/>
            <TableBody>
                {
                espacos.map((espaco, index)=> (
                    <EspacosTableRow 
                        key={index}
                        espaco={espaco}
                        imovelId={imovelId}
                    />
                ))
                }
            </TableBody>
        </EspacosTableComp>
    )
}

export const EspacosTableHeader = () => {
    return (
        <HeaderTableRow>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Andar</TableHeaderColumn>
            <TableHeaderColumn>Numero</TableHeaderColumn>
            <TableHeaderColumn>Categoria</TableHeaderColumn>
            <TableHeaderColumn>Metros Quadrados</TableHeaderColumn>
            <TableHeaderColumn>Ações</TableHeaderColumn>
        </HeaderTableRow>
    )
}

export const EspacosTableRow = ({espaco, imovelId} : {espaco : Espaco, imovelId:number}) => {
    const [isEditing, setEditing] = useState(false);
    
    const statusContrato = espaco.contrato == null ? "DESOCUPADO" : espaco.contrato.statusContrato;
    

    const handleEditEspaco = () => {
        setEditing(true)
    }

    const handleCloseEditEspaco = () => {
        setEditing(false)
    }

    return (
        <>
        <TableRow>
            <TableColumn>{statusContrato === "ASSINADO" ? "ALUGADO" : statusContrato}</TableColumn>
            <TableColumn>{`${espaco.andar}° andar`}</TableColumn>
            <TableColumn>{espaco.numero}</TableColumn>
            <TableColumn>{espaco.tipo}</TableColumn>
            <TableColumn>{`${espaco.metrosQuadrados} m²`}</TableColumn>
            <TableColumn>
                <EspacosTableButtons 
                    espacoId={espaco.espacoId??-1} 
                    imovelId={imovelId} 
                    contratoId={espaco?.contrato?.contratoId ?? null}
                    onEdit={handleEditEspaco}
                />
            </TableColumn>
        </TableRow>
        <EditEspacoDialog 
            espaco={espaco}
            imovelId={imovelId}
            open={isEditing} 
            onClose={handleCloseEditEspaco}
        />
        </>
    )
}