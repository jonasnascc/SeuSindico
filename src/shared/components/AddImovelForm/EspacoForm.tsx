import React, { useState } from "react";
import { NumberInput } from "../Input/NumberInput";
import { StringInput } from "../Input/StringInput";
import { FormularioTitulo, InputText, Subtitle } from "./styles";
import { Espaco } from "../../../types/imovel";

export const EspacoForm = ({onFormChange} : {onFormChange : (espaco : Espaco) => void}) => {
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
        onFormChange(newObject);
    }
    
    const handleRegistrarComodo = (event : any) => {
        event.preventDefault();
        setRegistrandoComodo(true);
    }

    const handleCancelarRegistroComodo = (event : any) => {
        event.preventDefault();
        setRegistrandoComodo(false);
    }

    return (
        <form onChange={handleEspacoChange}>
            <FormularioTitulo>Detalhes sobre o seu espaço</FormularioTitulo>

            <InputText>Tamanho em metros quadrados</InputText>
            <NumberInput name="metrosQuadrados" larguraMinima/>

            <InputText>Andar</InputText>
            <NumberInput name="andar" larguraMinima/>

            <select name="tipo" defaultValue="">
                <option value="APARTAMENTO">Apartamento</option>
                <option value="ESCRITORIO">Escritório</option>
                <option value="PONTO_COMERCIAL">Ponto comercial</option>

            </select>

            {!isRegistrandoComodo ? (
                <button onClick={handleRegistrarComodo}>Registrar comodo</button>
            ):(
                <>
                <Subtitle>Registre um cômodo</Subtitle> 

                <InputText>Nome</InputText>
                <StringInput name="nomeComodo"/>

                <InputText>Metros quadrados</InputText>
                <NumberInput name="metrosComodo"/>

                <InputText>detalhes</InputText>
                <StringInput name="detalhesComodo"/>

                <button onClick={handleCancelarRegistroComodo}>Salvar</button>
                <button onClick={handleCancelarRegistroComodo}>Cancelar</button>
                </>
            )}
        </form>
    )
}