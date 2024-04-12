import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";
import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import { Endereco, Espaco, Imovel, SimpleImovel } from "../../types/imovel";
import { NameForm } from "../../shared/components/ImovelForm/NameForm";
import { ImovelDataForm } from "../../shared/components/ImovelForm/ImovelDataForm";

export const AddImovel = () => {
    const [imovel, setImovel] = useState<Imovel>({
        codigo: null,
        nome: "",
        descricao: "",
        quantidadeAndares: null,
        espacosPorAndar: null,
        endereco: null,
        espacos: [],
        tipo: ""
    });
    const [isRegistrandoEspaco, setRegistrandoEspaco] = useState(false); 
    const [espacoSelecionado, setEspacoSelecionado] = useState<Espaco|null>(null);

    useEffect(() => {
        console.log(imovel)
    } , [imovel])


    const handleRegistrarEspaco = (event : any) => {
        event.preventDefault();
        setRegistrandoEspaco(true);
    }

    const handleCancelarRegistroEspaco = (event : any) => {
        event.preventDefault();
        setRegistrandoEspaco(false);
        setEspacoSelecionado(null);
    }

    const handleEnderecoChange = (novoValor : Endereco) => {
        setImovel({
            ...imovel,
            endereco : novoValor
        })
    }

    const handleAddEspaco = (novoValor : Espaco) => {
        if(imovel.espacos.filter(espaco => espaco.numero === novoValor.numero).length === 0) {
            setImovel({
                ...imovel,
                espacos : [...imovel.espacos, novoValor]
            })
            setRegistrandoEspaco(false);
        }
    }

    const handleImovelChange = (newImovel : SimpleImovel) => {
        setImovel({
            ...imovel,
            ...newImovel
        });
    }

    const handleSelectEspaco = (espaco : Espaco) => {
        setRegistrandoEspaco(false);
        setEspacoSelecionado(espaco);
    }

    const handleFormChange = (event: any) => {
        setImovel({
            ...imovel,
            [event.target.name] : event.target.value
        })
    }

    return (
        <Container>
            <SectionHeader label="Adicionar Imóvel"/>
            <ImovelDataForm onChange={handleFormChange}/>
            <NameForm onChange={handleFormChange}/>
        </Container>
    )
}