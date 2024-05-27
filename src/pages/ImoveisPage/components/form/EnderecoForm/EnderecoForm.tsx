import React from "react";
import { Grid } from "@mui/material";
import { ImovelFormCard } from "../../../../../shared/components/ImovelFormCard/ImovelFormCard";
import { Imovel } from "../../../../../types/imovel";
import { FormGridTileVerticalDirection, InputLabel } from "../styles";
import { StepComponentProps } from "../../../../../shared/hooks/useImovelFormSteps";
import { ImovelFormStep } from "../ImovelForm/ImovelFormStep";


type EnderecoFormProps = {
    imovel: Imovel,
    onChange: (event:any) => void
}&StepComponentProps

export const EnderecoForm = ({onChange, imovel, visible} : EnderecoFormProps) => {
    const {endereco} = imovel;
    return (
        <ImovelFormStep visible={visible}>
            <ImovelFormCard
                label = "Qual o endereço do seu imóvel?"
                headerGridScreens={{xs:12}}
                bodyGridScreens={{xs:12}}
            >
                <form>
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
                                    onChange={onChange}
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
                                    onChange={onChange}
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
                                    onChange={onChange}
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
                                    onChange={onChange}
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
                                    onChange={onChange}
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
                                    onChange={onChange}
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
                                    onChange={onChange}
                                />
                            </FormGridTileVerticalDirection>
                        </Grid>
                    </Grid>
                </form>
            </ImovelFormCard>
        </ImovelFormStep>
        
    )
}