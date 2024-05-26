import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";
import { Container } from "@mui/material"
import { useEffect } from "react"
import { NameForm } from "../../shared/components/ImovelForm/NameForm";
import { ImovelDataForm } from "../../shared/components/ImovelForm/ImovelDataForm";
import { EnderecoForm } from "../../shared/components/ImovelForm/EnderecoForm";
import { EspacosForm } from "../../shared/components/ImovelForm/EspacosForm/EspacosForm";
import { SaveButton, SaveDiv } from "./styles";
import useImovelForm from "../../shared/hooks/useImovelForm";

export const AddImovel = () => {
    const {
        imovel,
        handleSaveImovel,
        handleFormChange,
        handleSaveEspaco,
        handleAddComodo
    } = useImovelForm()

    useEffect(() => {
        console.log(imovel)
    }, [imovel])

    return (
        <Container>
            <div style={{paddingBottom: "45px"}}>
                <SectionHeader label="Adicionar Imóvel"/>
                <ImovelDataForm 
                    imovel={imovel}
                    onChange={handleFormChange}
                />
                <NameForm 
                    imovel={imovel}
                    onChange={handleFormChange}
                />
                <EnderecoForm 
                    imovel={imovel}
                    onChange={(event:any) => handleFormChange(event, "endereco")}
                />
                <EspacosForm 
                    onSaveEspaco={handleSaveEspaco} 
                    espacos={imovel.espacos}
                    onAddComodo={handleAddComodo}
                />
                <SaveDiv>
                    <SaveButton onClick={handleSaveImovel}>Salvar Imóvel</SaveButton>
                </SaveDiv>
            </div>
        </Container>
    )
}