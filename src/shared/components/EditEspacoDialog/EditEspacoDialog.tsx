import { Dialog, DialogTitle, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { DialogDiv, FormEspaco } from "./styles";
import { Espaco } from "../../../types/imovel";
import { useMutation } from "react-query";
import { updateEspaco } from "../../../api/services/Espaco";

export const EditEspacoDialog = ({espaco, imovelId, onClose, open=false} : {espaco: Espaco, imovelId: number, onClose:() => void, open?: boolean}) => {
    
    const [form, setForm] = useState<Espaco>(espaco);

    const updateMutation = useMutation(["update-espaco"], () => updateEspaco(imovelId, form), {
        onSuccess: () => {
            handleClose();
        }
    })

    const handleChange = (event : any) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    const handleClose = () => {
        setForm(espaco)
        onClose()
    }

    const handleSubmit = () => {
        updateMutation.mutate()
    }
    
    return(
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogDiv>
                <DialogTitle><Typography fontWeight="500" fontSize={20}>Editar espaço</Typography></DialogTitle>
                <Divider/>
                <FormEspaco>
                    <span>Escolha a categoria: </span>
                    <select 
                        name="tipo" 
                        onChange={handleChange}
                        value={form.tipo}
                    >
                        <option value="CASA">Casa</option>
                        <option value="APARTAMENTO">Apartamento</option>
                        <option value="PONTO_COMERCIAL">Ponto comercial</option>
                        <option value="ESCRITORIO">Escritório</option>
                    </select>
                    <span>Digite o andar: </span>
                    <input
                        name="andar"
                        type="number"
                        placeholder="Digite o andar"
                        value={form?.andar??""}
                        onChange={handleChange}
                    />

                    <span>Digite o número: </span>
                    <input
                        name="numero"
                        type="number"
                        placeholder="Digite o número"
                        value={form?.numero??""}
                        onChange={handleChange}
                    />

                    <span>Digite o tamanho: </span>
                    <input
                        name="metrosQuadrados"
                        type="number"
                        placeholder="Ex. 22.5"
                        value={form?.metrosQuadrados??""}
                        onChange={handleChange}
                    />
                </FormEspaco>

                <button>Editar cômodos</button>
                <button onClick={handleSubmit}>Salvar</button>

                
            </DialogDiv>
        </Dialog>
    )
}