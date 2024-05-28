import React from "react";
import { Grid } from "@mui/material";
import { Imovel } from "../../../../../types/imovel";
import { ImovelFormCard } from "../../../../../shared/components/ImovelFormCard/ImovelFormCard";
import { ImovelFormStep } from "./ImovelFormStep";
import { StepComponentProps } from "../../../../../shared/hooks/useImovelFormSteps";
import { FormGridTile, InputLabel, NameInput } from "../../../../../shared/components/Forms/styles";
import { DescricaoTextArea } from "../styles";

type NameFormProps = {
    imovel:Imovel,
    onChange : (event:any) => void
}&StepComponentProps

export const NameForm = ({onChange, imovel, visible} : NameFormProps) => { 
    const {nome, descricao} = imovel;
    return (
        <ImovelFormStep visible={visible}>
            <ImovelFormCard
                label = "Dê um nome ao seu imóvel e adicione uma descrição"
                headerGridScreens={{xs:12, sm:4}}
                bodyGridScreens={{xs:12, sm:8}}
            >
                <Grid container spacing={".3vw"} height={"100%"}>
                    <Grid item xs={12} sm={12} md={6}>
                        <FormGridTile>
                            <InputLabel>Nome</InputLabel>
                            <NameInput
                                id="nome"
                                name="nome"
                                type="text"
                                placeholder="Digite um nome único"
                                value={nome}
                                onChange={onChange}
                            />
                        </FormGridTile>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <FormGridTile>
                            <InputLabel>Descrição</InputLabel>
                            <DescricaoTextArea
                                id="descricao"
                                name="descricao"
                                placeholder="Digite uma descrição"
                                onChange={onChange}
                                value={descricao}
                            />
                        </FormGridTile>
                    </Grid>
                </Grid>
            </ImovelFormCard>
        </ImovelFormStep>
        
        
    )
}