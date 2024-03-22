import { Label } from "@mui/icons-material"
import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader"
import { Typography } from "@mui/material"
import styled from "styled-components"
import { EnderecoFormBody } from "../../shared/components/Input/EnderecoFormBody"

export const AddImovel = () => {
    return (
        <>
        <SectionHeader label="Adicionar Imóvel"/>
        
        <Content>
            <FormsSlider>
                <Formulario>
                    <FormularioTitulo>Endereço do imóvel</FormularioTitulo>
                    <EnderecoFormBody/>
                </Formulario>
            </FormsSlider>
        </Content>
        </>
    )
}

const Content = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

const FormsSlider = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    overflow-x: auto; /* Adicionando rolagem horizontal */
    background-color: white;
    padding: 20px 2vw;
    margin: 20px 0;
    min-height: 50vh;
`

const FormularioTitulo = styled.h3`
    font-weight: 500;
`

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 90%;
    min-height: 100%;
    padding: 20px 2vw;
    background-color: rgb(243, 243, 243);
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    margin-right: 20px; /* Espaço entre os formulários */
`