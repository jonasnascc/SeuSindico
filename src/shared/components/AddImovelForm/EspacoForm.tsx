import React, { useEffect, useState } from "react";
import { NumberInput } from "../Input/NumberInput";
import { StringInput } from "../Input/StringInput";
import { CancelFormButton, CenterGrid, FormButton, FormularioTitulo, FullWidthButtonDiv, InputText, SelectDiv, Subtitle } from "./styles";
import { Comodo, Espaco } from "../../../types/imovel";
import { ComodoForm } from "./ComodoForm";
import { Grid } from "@mui/material";


type EspacoFormProps = {
    value : Espaco | null,
    onSaveEspaco : (espaco : Espaco) => void, 
    onCancel: (event:any) => void
}

export const EspacoForm = ({value, onSaveEspaco, onCancel} : EspacoFormProps) => {
    const [espaco, setEspaco] = useState<Espaco>({
        tipo: "",
        espacoId: null,
        andar: null,
        numero: "",
        quantidadeComodos: null,
        metrosQuadrados: null,
        comodos: []
    })

    const [isRegistrandoComodo, setRegistrandoComodo] = useState(false); 

    useEffect(() => {
        if(value!==null) {
            setEspaco(value);
        }
    }, [value])

    const handleEspacoChange = (event : any) => {
        console.log(event.target.name, event.target.value)
        const newObject = {
            ...espaco,
            [event.target.name] : event.target.value
        }
        setEspaco(newObject);
    }
    
    const handleRegistrarComodo = (event : any) => {
        event.preventDefault();
        setRegistrandoComodo(true);
    }

    const handleCancelarRegistroComodo = (event : any) => {
        event.preventDefault();
        setRegistrandoComodo(false);
    }

    const handleSaveEspaco = (event : any) => {
        event.preventDefault();
        onSaveEspaco({...espaco, quantidadeComodos: espaco.comodos.length});
    }

    const handleSaveComodo = (comodo : Comodo) => {

        setEspaco({
            ...espaco,
            comodos : [...espaco.comodos, comodo]
        })
        setRegistrandoComodo(false);
    }

    return (
        <>
        <form onChange={handleEspacoChange}>
            <Grid container spacing={2}>
                <Grid item  xs={12}>                    
                    <SelectDiv>
                        <InputText>Tipo: </InputText>
                        <select name="tipo" defaultValue={espaco.tipo}>
                            <option value="APARTAMENTO">Apartamento</option>
                            <option value="ESCRITORIO">Escritório</option>
                            <option value="PONTO_COMERCIAL">Ponto comercial</option>
                        </select>
                    </SelectDiv>
                </Grid>
                
                <Grid item xs={3}>
                    <InputText>Numero</InputText>
                    <StringInput 
                        name="numero" 
                        defaultValue={espaco.numero}
                        placeholder="ex: 126 B"
                        larguraMinima
                    />
                </Grid>

                <Grid item xs={6}>
                    <InputText>Tamanho em metros quadrados: </InputText>
                    <NumberInput 
                        name="metrosQuadrados"
                        defaultValue={espaco?.metrosQuadrados??undefined}
                        placeholder="ex: 14"
                        larguraMinima
                    />
                </Grid>

                <Grid item xs={3}>
                    <InputText>Andar: </InputText>
                    <NumberInput 
                        name="andar" 
                        defaultValue={espaco?.andar??undefined}
                        placeholder="ex: 1"
                        larguraMinima
                    />
                </Grid>

            </Grid>

        </form>

        <FormularioTitulo>Registrar cômodos</FormularioTitulo>
        {!isRegistrandoComodo ? (
                <button onClick={handleRegistrarComodo}>Registrar comodo</button>
            ):(
                <>
                <ComodoForm onSaveComodo={handleSaveComodo}/>
                <button onClick={handleCancelarRegistroComodo}>Cancelar</button>
                </>
            )}
        
        <FullWidthButtonDiv>
            <FormButton onClick={handleSaveEspaco}>Salvar Espaco</FormButton>
            <CancelFormButton onClick={onCancel}> Cancelar </CancelFormButton>
        </FullWidthButtonDiv>
        </>
    )
}