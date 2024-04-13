import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";
import { Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Endereco, Espaco, Imovel, SimpleImovel } from "../../types/imovel";
import { NameForm } from "../../shared/components/ImovelForm/NameForm";
import { ImovelDataForm } from "../../shared/components/ImovelForm/ImovelDataForm";
import { EnderecoForm } from "../../shared/components/ImovelForm/EnderecoForm";
import { EspacosForm } from "../../shared/components/ImovelForm/EspacosForm";

export const AddImovel = () => {
    const [imovel, setImovel] = useState<Imovel>({
        codigo: null,
        nome: "",
        descricao: "",
        quantidadeAndares: null,
        espacosPorAndar: null,
        endereco: {
            rua: "",
            numero: null,
            bairro: "",
            cidade: "",
            estado: "",
            cep: "",
            complemento: ""
        },
        espacos: [],
        tipo: ""
    });

    useEffect(() => {
        console.log(imovel)
    } , [imovel])


    const handleFormChange = (event: any, forProp ?: string) => {
        if(forProp) {
            const obj : any = imovel[forProp as keyof typeof imovel];
            obj[event.target.name] = event.target.value;
            setImovel({
                ...imovel,
                [forProp] : obj
            })
        }
        else setImovel({
            ...imovel,
            [event.target.name] : event.target.value
        })
    }

    return (
        <Container>
            <div style={{paddingBottom: "45px"}}>
                <SectionHeader label="Adicionar Imóvel"/>
                <ImovelDataForm onChange={handleFormChange}/>
                <NameForm onChange={handleFormChange}/>
                <EnderecoForm onChange={(event:any) => handleFormChange(event, "endereco")}/>
                <EspacosForm onSaveEspaco={(espaco:Espaco) => null}/>
            </div>
        </Container>
    )
}