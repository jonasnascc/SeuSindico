import React from "react";
import { CenteredAlignedFormDescription, FormDescription, FormGridTile, FormGridTileVerticalDirection, ImovelFormCard, InputLabel } from "./styles";
import { Grid } from "@mui/material";

type EnderecoFormProps = {
    onChange: (event:any) => void
}

export const EnderecoForm = ({onChange} : EnderecoFormProps) => {
    return (
        <ImovelFormCard onChange={onChange}>
            <CenteredAlignedFormDescription>Qual o endereço do seu imóvel?</CenteredAlignedFormDescription>
            <Grid container>
                <Grid item xs={6}>
                    <FormGridTileVerticalDirection>
                        <InputLabel>Rua: </InputLabel>
                        <input
                            id="rua"
                            name="rua"
                            type="text"
                            placeholder="Digite a rua"
                        />
                    </FormGridTileVerticalDirection>
                </Grid>

                <Grid item xs={6}>
                    <FormGridTileVerticalDirection>
                        <InputLabel>Bairro: </InputLabel>
                        <input
                            id="bairro"
                            name="bairro"
                            type="text"
                            placeholder="Digite o bairro"
                        />
                    </FormGridTileVerticalDirection>
                </Grid>

                <Grid item xs={4}>
                    <FormGridTileVerticalDirection>
                        <InputLabel>Número: </InputLabel>
                        <input
                            id="numero"
                            name="numero"
                            type="text"
                            placeholder="ex.: 121 B"
                        />
                    </FormGridTileVerticalDirection>
                </Grid>
                
                <Grid item xs={4}>
                    <FormGridTileVerticalDirection>
                        <InputLabel>Cidade: </InputLabel>
                        <input
                            id="cidade"
                            name="cidade"
                            type="text"
                            placeholder="Digite a cidade"
                        />
                    </FormGridTileVerticalDirection>
                </Grid>

                <Grid item xs={4}>
                    <FormGridTileVerticalDirection>
                        <InputLabel>Estado: </InputLabel>
                        <input
                            id="estado"
                            name="estado"
                            type="text"
                            placeholder="Digite o estado"
                        />
                    </FormGridTileVerticalDirection>
                </Grid>

                <Grid item xs={4}>
                    <FormGridTileVerticalDirection>
                        <InputLabel>CEP: </InputLabel>
                        <input
                            id="cep"
                            name="cep"
                            type="text"
                            placeholder="Digite o CEP"
                        />
                    </FormGridTileVerticalDirection>
                </Grid>
                <Grid item xs={8}>
                    <FormGridTileVerticalDirection>
                        <InputLabel>Complemento: </InputLabel>
                        <input
                            id="complemento"
                            name="complemento"
                            type="text"
                            placeholder="Digite o complemento"
                        />
                    </FormGridTileVerticalDirection>
                </Grid>
            </Grid>
        </ImovelFormCard>
    )
}