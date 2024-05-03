import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { sendContrato } from "../../api/services/Contrato";
import { useLocation, useNavigate } from "react-router-dom";
import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";

export const AluguelPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        codigoOcupante : "",
        preco : null,
        intervaloDias : null,
        pagamentoMensal : false,
        prePago : false,
        dataInicio : "",
        dataFim : "",
        observacoes: "",
        numeroParcelas: 100, //substituir,
        valorAdiantado: 100.0
    })
    

    const sendMutation = useMutation(["post-contrato"], (args : {imovelId:number, espacoId:number, contrato:any}) => sendContrato(args.imovelId, args.espacoId, args.contrato), {
        onSuccess: () => {
            navigate(-1)
        }
    });

    const handleChange = (event:any) => {
        const value = event.target.value === "on" ? true : (event.target.value === "off" ? false : event.target.value)
        setForm({
            ...form,
            [event.target.name] : value
        })
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if(location.state.imovelId && location.state.espacoId) {
            const {imovelId, espacoId} = location.state;
            sendMutation.mutate({imovelId, espacoId, contrato:form})
        }
    }

    return (
        <Container>
        <SectionHeader label="Alugar Espaço"/>
        <form name="contrato" method="POST" onChange={handleChange}>
            <Grid container>
                <Grid item xs={12}>
                    <span>CPF ou Email do Ocupante:</span>
                    <input 
                        name="codigoOcupante" 
                        type="text"
                    />
                </Grid>

                <Grid item xs={3}>
                    <span>Qual o preço do aluguel?</span>
                    <input name="preco" type="number"/>
                </Grid>

                <Grid item xs={6}>
                    <span>Qual o intervalo de dias entre cada pagamento?</span>
                    <input name="intervaloDias" type="number"/>
                </Grid>

                <Grid item xs={3}>
                    <span>Pagamento mensal</span>
                    <input name="pagamentoMensal" type="checkbox"/>
                </Grid>

                <Grid item xs={3}>
                    <span>Pagamento antes da ocupação</span>
                    <input name="prePago" type="checkbox"/>
                </Grid>

                <Grid item xs={3}>
                    <span>Data de inicio</span>
                    <input name="dataInicio" type="date"/>
                </Grid>

                <Grid item xs={3}>
                    <span>Data do fim</span>
                    <input name="dataFim" type="date"/>
                </Grid>

                <Grid item xs={12}>
                    <span>Se necessário, digite algumas observações:</span>
                    <textarea name="observacoes"/>
                </Grid>

                <Grid item xs={12}>
                    <button onClick={handleSubmit}>
                        Salvar
                    </button>
                </Grid>
                
            </Grid>
        </form>
        </Container>
        
    )
}