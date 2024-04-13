import React, { useEffect, useState } from "react";
import { AddEspacoContainer, AddEspacoText, CenteredAlignedFormDescription, ClickableArea, FadeContainer, FormGridTile, FormGridTileStackable, FormNumbersInput, ImovelFormCard, InputLabel, TipoSelect } from "./styles";
import { Fade, Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Espaco } from "../../../types/imovel";

type EspacosFormProps = {
    onSaveEspaco : (espaco: Espaco) => void
}

export const EspacosForm = ({onSaveEspaco} : EspacosFormProps) => {
    const [displayPlusPage, setDisplayPlusPage] = useState(true);
    const [registrandoEspaco, setRegistrandoEspaco] = useState(false);

    useEffect(() => {
        if(!displayPlusPage) {
            setInterval(() => {
                setRegistrandoEspaco(true)
            }, 1000)
        }
    }, [displayPlusPage])


    const handleAddButton = () => {
        setDisplayPlusPage(false);
    }

    const handleChange = (event:any) => {
        console.log(event.target.name, event.target.value)
    }
    

    return (
        <ImovelFormCard onChange={handleChange}>
            <CenteredAlignedFormDescription>Adicione um espaço ao seu imóvel</CenteredAlignedFormDescription>
            <FadeContainer>
                <Fade in={displayPlusPage}  timeout={500} unmountOnExit>
                    <ClickableArea onClick={handleAddButton}>
                            <AddEspacoContainer>
                                <AddIcon sx={{width:"70px", height:"70px"}}/>
                                <AddEspacoText>Clique para adicionar um novo espaço</AddEspacoText>
                            </AddEspacoContainer>
                    </ClickableArea>
                </Fade>

                <Fade in={registrandoEspaco}  timeout={500} mountOnEnter>
                    <Grid container>
                        <Grid item xs={12}>
                            <FormGridTileStackable>
                                <InputLabel>Em qual categoria seu espaço melhor se encaixa?</InputLabel>
                                <TipoSelect name="tipo">
                                    <option value="CASA">Casa</option>
                                    <option value="APARTAMENTO">Apartamento</option>
                                    <option value="PONTO_COMERCIAL">Ponto comercial</option>
                                    <option value="ESCRITORIO">Escritório</option>
                                </TipoSelect>
                            </FormGridTileStackable>
                        </Grid>
                        <Grid item xs={4}>
                            <FormGridTileStackable>
                            <InputLabel>Quantos metros quadrados tem seu espaço?</InputLabel>
                                <FormNumbersInput
                                    type="number"
                                    id="metrosQuadrados"
                                    name="metrosQuadrados"
                                    placeholder="Ex.: 22.3"
                                />
                            </FormGridTileStackable>
                        </Grid>
                        <Grid item xs={4}>
                            <FormGridTileStackable>
                                <InputLabel>Qual o número do seu espaço?</InputLabel>
                                <FormNumbersInput
                                    type="number"
                                    id="numero"
                                    name="numero"
                                    placeholder="Ex.: 102 A"
                                />
                            </FormGridTileStackable>
                        </Grid>
                        <Grid item xs={4}>
                            <FormGridTileStackable>
                                <InputLabel>Em qual andar fica seu espaço?</InputLabel>
                                <FormNumbersInput
                                    type="number"
                                    id="metrosQuadrados"
                                    name="metrosQuadrados"
                                    placeholder="Ex.: 2"
                                />
                            </FormGridTileStackable>
                        </Grid>
                    </Grid>
                </Fade>
            </FadeContainer>

        </ImovelFormCard>
    )
}