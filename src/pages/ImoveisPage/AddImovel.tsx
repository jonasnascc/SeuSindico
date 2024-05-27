import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";
import { Container } from "@mui/material"
import { ImovelForm } from "./components/form/ImovelForm/ImovelForm";

export const AddImovel = () => {
    return (
        <Container>
            <div style={{paddingBottom: "45px"}}>
                <SectionHeader label="Adicionar Imóvel"/>
                <ImovelForm/>
            </div>
        </Container>
    )
}