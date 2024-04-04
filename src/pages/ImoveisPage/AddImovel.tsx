import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";
import { Divider, Grid } from "@mui/material"
import styled from "styled-components"
import { StringInput } from "../../shared/components/Input/StringInput"
import { NumberInput } from "../../shared/components/Input/NumberInput"
import { useEffect, useState } from "react"
import { EnderecoForm } from "../../shared/components/AddImovelForm/EnderecoForm";
import { Endereco, Espaco, Imovel, SimpleImovel } from "../../types/imovel";
import { EspacoForm } from "../../shared/components/AddImovelForm/EspacoForm";
import { ImovelForm } from "../../shared/components/AddImovelForm/ImovelForm";
import { FormularioTitulo } from "../../shared/components/AddImovelForm/styles";
import { AddImovelBody } from "./styles";

export const AddImovel = () => {
    const [imovel, setImovel] = useState<Imovel>({
        codigo: null,
        nome: "",
        descricao: "",
        quantidadeAndares: null,
        espacosPorAndar: null,
        endereco: null,
        espacos: [],
        tipo: ""
    });
    const [isRegistrandoEspaco, setRegistrandoEspaco] = useState(false); 

    useEffect(() => {
        console.log(imovel)
    } , [imovel])


    const handleRegistrarEspaco = (event : any) => {
        event.preventDefault();
        setRegistrandoEspaco(true);
    }

    const handleCancelarRegistroEspaco = (event : any) => {
        event.preventDefault();
        setRegistrandoEspaco(false);
    }

    const handleEnderecoChange = (novoValor : Endereco) => {
        setImovel({
            ...imovel,
            endereco : novoValor
        })
    }

    const handleAddEspaco = (novoValor : Espaco) => {
        setImovel({
            ...imovel,
            espacos : [...imovel.espacos, novoValor]
        })
        setRegistrandoEspaco(false);
    }

    const handleImovelChange = (newImovel : SimpleImovel) => {
        setImovel({
            ...imovel,
            ...newImovel
        });
    }
    return (
        <AddImovelBody>
            <SectionHeader label="Adicionar Imóvel"/>

            <ImovelForm onImovelChange={handleImovelChange}/>

            <EnderecoForm onFormChange={handleEnderecoChange}/>

            <FormularioTitulo>Seu espaço</FormularioTitulo>

            {
                !isRegistrandoEspaco ? (
                    <button onClick={handleRegistrarEspaco}> Registrar um espaco </button>
                ) : (
                    <>
                    <EspacoForm onSaveEspaco={handleAddEspaco}/>
                    <button onClick={handleCancelarRegistroEspaco}> Cancelar Tudo </button>
                    </>
                )
            }
        </AddImovelBody>
    )
}