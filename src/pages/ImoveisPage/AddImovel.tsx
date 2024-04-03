import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";
import { Divider, Grid } from "@mui/material"
import styled from "styled-components"
import { StringInput } from "../../shared/components/Input/StringInput"
import { NumberInput } from "../../shared/components/Input/NumberInput"
import { useState } from "react"
import { EnderecoForm } from "../../shared/components/AddImovelForm/EnderecoForm";
import { Endereco, Espaco } from "../../types/imovel";
import { EspacoForm } from "../../shared/components/AddImovelForm/EspacoForm";

export const AddImovel = () => {
    const [endereco, setEndereco] = useState<Endereco>();
    const [espacos, setEspacos] = useState<Espaco[]>();
    const [isRegistrandoEspaco, setRegistrandoEspaco] = useState(false); 


    const handleRegistrarEspaco = (event : any) => {
        event.preventDefault();
        setRegistrandoEspaco(true);
    }

    const handleCancelarRegistroEspaco = (event : any) => {
        event.preventDefault();
        setRegistrandoEspaco(false);
    }

    const handleEnderecoChange = (novoValor : Endereco) => {
        setEndereco(novoValor);
    }

    return (
        <>
            <SectionHeader label="Adicionar Imóvel"/>
            <FormularioTitulo>Tipo do imóvel</FormularioTitulo>
            <select name="tipoImovel" defaultValue="CASA">
                <option value="CASA">Casa</option>
                <option value="EDIFICIO">Edificio</option>
            </select>
            <InputText>Quantidade de andares</InputText>
            <NumberInput name="quantidadeAndares" larguraMinima/>

            <EnderecoForm onFormChange={handleEnderecoChange}/>
            <FormularioTitulo>Seu espaço</FormularioTitulo>

            {
                !isRegistrandoEspaco ? (
                    <button onClick={handleRegistrarEspaco}> Registrar um espaco </button>
                ) : (
                    <>
                    <EspacoForm onFormChange={() => null}/>
                    <button onClick={handleCancelarRegistroEspaco}> Cancelar Tudo </button>
                    </>
                )
            }
        </>
    )
}


const FormularioTitulo = styled.h3`
    font-weight: 500;
`
const Subtitle = styled.h4`
    font-weight: 500;
`

const InputText = styled.span`
    margin: 0;
    padding: 0;
`