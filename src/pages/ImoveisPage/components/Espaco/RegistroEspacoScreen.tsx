import { Grid } from "@mui/material";
import React from "react";
import { EspacoFormButtons } from "../../../../shared/components/EspacoFormButtons.tsx/EspacoFormButtons";
import { RegistroEspacoContainer, FormGridTile, TipoSelect, FormNumbersInput, InputLabel } from "../form/styles";
import { Espaco } from "../../../../types/imovel";

type RegistroEspacoScreenProps = {
    onFormChange : (event:any) => void,
    onSaveEspaco : (espaco: Espaco) => void,
    onCancel : () => void,
    visible ?: boolean
}

export const RegistroEspacoScreen = ({onFormChange, onSaveEspaco, onCancel, visible = true} : RegistroEspacoScreenProps) => {
    if(!visible) return null;
    return(
        <RegistroEspacoContainer  onChange={onFormChange}>
                <Grid container>
                    <Grid item xs={6} sm={12}>
                        <FormGridTile>
                            <InputLabel>Em qual categoria seu espaço melhor se encaixa?</InputLabel>
                            <TipoSelect name="tipo">
                                <option value="CASA">Casa</option>
                                <option value="APARTAMENTO">Apartamento</option>
                                <option value="PONTO_COMERCIAL">Ponto comercial</option>
                                <option value="ESCRITORIO">Escritório</option>
                            </TipoSelect>
                        </FormGridTile>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormGridTile>
                            <InputLabel>Quantos metros quadrados tem seu espaço?</InputLabel>
                            <FormNumbersInput
                                type="number"
                                id="metrosQuadrados"
                                name="metrosQuadrados"
                                placeholder="Ex.: 22.3"
                            />
                        </FormGridTile>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormGridTile>
                            <InputLabel>Qual o número do seu espaço?</InputLabel>
                            <FormNumbersInput
                                type="number"
                                id="numero"
                                name="numero"
                                placeholder="Ex.: 102 A"
                            />
                        </FormGridTile>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormGridTile>
                            <InputLabel>Em qual andar fica seu espaço?</InputLabel>
                            <FormNumbersInput
                                type="number"
                                id="andar"
                                name="andar"
                                placeholder="Ex.: 2"
                            />
                        </FormGridTile>
                    </Grid>
                </Grid>
                <EspacoFormButtons
                    onSave = {onSaveEspaco}
                    onCancel = {onCancel}
                />
            </RegistroEspacoContainer>
    )
}