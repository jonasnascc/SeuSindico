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
import { FormButton, FormularioTitulo, FullWidthButtonDiv } from "../../shared/components/AddImovelForm/styles";
import { AddImovelBody } from "./styles";
import { EspacosTags } from "../../shared/components/AddImovelForm/EspacosTags";

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
    const [espacoSelecionado, setEspacoSelecionado] = useState<Espaco|null>(null);

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
        setEspacoSelecionado(null);
    }

    const handleEnderecoChange = (novoValor : Endereco) => {
        setImovel({
            ...imovel,
            endereco : novoValor
        })
    }

    const handleAddEspaco = (novoValor : Espaco) => {
        if(imovel.espacos.filter(espaco => espaco.numero === novoValor.numero).length === 0) {
            setImovel({
                ...imovel,
                espacos : [...imovel.espacos, novoValor]
            })
            setRegistrandoEspaco(false);
        }
    }

    const handleImovelChange = (newImovel : SimpleImovel) => {
        setImovel({
            ...imovel,
            ...newImovel
        });
    }

    const handleSelectEspaco = (espaco : Espaco) => {
        setRegistrandoEspaco(false);
        setEspacoSelecionado(espaco);
    }

    return (
        <>
        <SectionHeader label="Adicionar Imóvel"/>
        <AddImovelBody>
            <ImovelForm onImovelChange={handleImovelChange}/>

            <EnderecoForm onFormChange={handleEnderecoChange}/>

            <FormularioTitulo>Espaços</FormularioTitulo>

            <EspacosTags espacos={imovel.espacos} onSelectEspaco={handleSelectEspaco}/>

            {
                !(isRegistrandoEspaco || espacoSelecionado) ? (
                    <FullWidthButtonDiv>
                        <FormButton onClick={handleRegistrarEspaco}> Registrar um espaco </FormButton>
                    </FullWidthButtonDiv>
                ) : (
                    <>
                        <EspacoForm 
                            value = {espacoSelecionado}
                            onSaveEspaco={handleAddEspaco} 
                            onCancel={handleCancelarRegistroEspaco}
                        />
                    </>
                )
            }
        </AddImovelBody>
        </>
    )
}