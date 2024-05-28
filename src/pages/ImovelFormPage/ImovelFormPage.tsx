import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";
import { Container } from "@mui/material"
import { ImovelForm } from "./components/Form/ImovelForm/ImovelForm";

export const ImovelFormPage = () => {
    return (
        <Container>
            <div style={{paddingBottom: "45px"}}>
                <SectionHeader label="Adicionar Imóvel"/>
                <ImovelForm/>
            </div>
        </Container>
    )
}