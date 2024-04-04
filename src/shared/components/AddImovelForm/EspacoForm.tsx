import React, { useState } from "react";
import { NumberInput } from "../Input/NumberInput";
import { StringInput } from "../Input/StringInput";
import { CenterGrid, FormularioTitulo, InputText, Subtitle } from "./styles";
import { Comodo, Espaco } from "../../../types/imovel";
import { ComodoForm } from "./ComodoForm";
import { Grid } from "@mui/material";

export const EspacoForm = ({onSaveEspaco} : {onSaveEspaco : (espaco : Espaco) => void}) => {
    const [espaco, setEspaco] = useState<Espaco>({
        tipo: "",
        espacoId: null,
        andar: null,
        numero: null,
        quantidadeComodos: null,
        metrosQuadrados: null,
        comodos: []
    })
    const [isRegistrandoComodo, setRegistrandoComodo] = useState(false); 

    const handleEspacoChange = (event : any) => {
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
                <Grid item  xs={8}>
                    <InputText>Tipo: </InputText>
                    <select name="tipo" defaultValue="">
                        <option value="APARTAMENTO">Apartamento</option>
                        <option value="ESCRITORIO">Escritório</option>
                        <option value="PONTO_COMERCIAL">Ponto comercial</option>
                    </select>
                </Grid>

                <Grid item xs={4}>
                    <InputText>Tamanho em metros quadrados: </InputText>
                    <NumberInput 
                        name="metrosQuadrados"
                        placeholder="ex: 14"
                        larguraMinima
                    />
                </Grid>

                <Grid item xs={2}>
                    <InputText>Andar: </InputText>
                    <NumberInput 
                        name="andar" 
                        placeholder="ex: 1"
                        larguraMinima
                    />
                </Grid>

                <Grid item xs={2}>
                    <InputText>Numero</InputText>
                    <StringInput 
                        name="numero" 
                        placeholder="ex: 126 B"
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
        
        <button onClick={handleSaveEspaco}>Salvar Espaco</button>
        </>
    )
}