import React from "react";
import { CenteredAlignedFormDescription, FormDescription, FormGridTile, FormGridTileVerticalDirection, InputLabel } from "./styles";
import { Grid } from "@mui/material";
import { ImovelFormCard } from "../ImovelFormCard/ImovelFormCard";
import { Imovel } from "../../../types/imovel";

type EnderecoFormProps = {
    imovel: Imovel,
    onChange: (event:any) => void
}

export const EnderecoForm = ({onChange, imovel} : EnderecoFormProps) => {
    const {endereco} = imovel;
    return (
        <ImovelFormCard
            label = "Qual o endereço do seu imóvel?"
            headerGridScreens={{xs:12}}
            bodyGridScreens={{xs:12}}
        >
            <form onChange={onChange}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <FormGridTileVerticalDirection>
                            <InputLabel>Rua: </InputLabel>
                            <input
                                id="rua"
                                name="rua"
                                type="text"
                                placeholder="Digite a rua"
                                value={endereco?.rua??""}
                            />
                        </FormGridTileVerticalDirection>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <FormGridTileVerticalDirection>
                            <InputLabel>Bairro: </InputLabel>
                            <input
                                id="bairro"
                                name="bairro"
                                type="text"
                                placeholder="Digite o bairro"
                                value={endereco?.bairro??""}
                            />
                        </FormGridTileVerticalDirection>
                    </Grid>

                    <Grid item xs={12} sm={5} md={4}>
                        <FormGridTileVerticalDirection>
                            <InputLabel>Número: </InputLabel>
                            <input
                                id="numero"
                                name="numero"
                                type="text"
                                placeholder="ex.: 121 B"
                                value={endereco?.numero??""}
                            />
                        </FormGridTileVerticalDirection>
                    </Grid>
                    
                    <Grid item xs={12} sm={7}  md={4}>
                        <FormGridTileVerticalDirection>
                            <InputLabel>Cidade: </InputLabel>
                            <input
                                id="cidade"
                                name="cidade"
                                type="text"
                                placeholder="Digite a cidade"
                                value={endereco?.cidade??""}
                            />
                        </FormGridTileVerticalDirection>
                    </Grid>

                    <Grid item xs={12} sm={7}  md={4}>
                        <FormGridTileVerticalDirection>
                            <InputLabel>Estado: </InputLabel>
                            <input
                                id="estado"
                                name="estado"
                                type="text"
                                placeholder="Digite o estado"
                                value={endereco?.estado??""}
                            />
                        </FormGridTileVerticalDirection>
                    </Grid>

                    <Grid item xs={12} sm={5}  md={4}>
                        <FormGridTileVerticalDirection>
                            <InputLabel>CEP: </InputLabel>
                            <input
                                id="cep"
                                name="cep"
                                type="text"
                                placeholder="Digite o CEP"
                                value={endereco?.cep??""}
                            />
                        </FormGridTileVerticalDirection>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <FormGridTileVerticalDirection>
                            <InputLabel>Complemento: </InputLabel>
                            <input
                                id="complemento"
                                name="complemento"
                                type="text"
                                placeholder="Digite o complemento"
                                value={endereco?.complemento??""}
                            />
                        </FormGridTileVerticalDirection>
                    </Grid>
                </Grid>
            </form>

        </ImovelFormCard>
    )
}