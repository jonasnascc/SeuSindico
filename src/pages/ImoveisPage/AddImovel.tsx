import { SectionHeader } from "../../shared/components/SectionHeader/SectionHeader";
import { Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Comodo, Endereco, Espaco, Imovel, SimpleImovel } from "../../types/imovel";
import { NameForm } from "../../shared/components/ImovelForm/NameForm";
import { ImovelDataForm } from "../../shared/components/ImovelForm/ImovelDataForm";
import { EnderecoForm } from "../../shared/components/ImovelForm/EnderecoForm";
import { EspacosForm } from "../../shared/components/ImovelForm/EspacosForm/EspacosForm";
import { SaveButton, SaveDiv } from "./styles";
import { useMutation } from "react-query";
import { postImovel, updateImovel } from "../../api/services/Imoveis";
import { useLocation, useNavigate } from "react-router-dom";

export const AddImovel = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [editMode, setEditMode] = useState(false);
    const [imovel, setImovel] = useState<Imovel>({
        codigo: null,
        nome: "",
        descricao: "",
        quantidadeAndares: null,
        espacosPorAndar: null,
        endereco: {
            enderecoId: null,
            rua: "",
            numero: null,
            bairro: "",
            cidade: "",
            estado: "",
            cep: "",
            complemento: ""
        },
        espacos: []
    });

    useEffect(() => {
        if(location?.state?.imovelData??false) {
            setEditMode(true);
            setImovel(location.state.imovelData);
        }
    }, [])
    

    const saveMutation = useMutation(["save-imovel"], () => postImovel(imovel), {
        onSuccess: () => {
            navigate("/imoveis");
        }
    })

    const updateMutation = useMutation(["update-imovel"], () => updateImovel(imovel), {
        onSuccess: () => {
            navigate("/imoveis");
        }
    })

    useEffect(() => {
        console.log(imovel)
    } , [imovel])

    const handleSaveImovel = () => {
        if(editMode) {
            updateMutation.mutate();
        }else saveMutation.mutate();
    }


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

    const handleSaveEspaco = (espaco: Espaco) => {
        const {espacos} = imovel;
        if(espacos.filter(esp => esp.numero === espaco.numero).length === 0) {
            setImovel({
                ...imovel,
                espacos : [...espacos, espaco]
            })
        }
    }

    const handleAddComodo = (espaco:Espaco, comodo: Comodo) => {
        const espacoImv = imovel.espacos.filter(esp => esp.numero === espaco.numero);
        if(espacoImv.length > 0) {
            espacoImv.forEach(esp => esp.comodos = [...esp.comodos, comodo]);
            setImovel({
                ...imovel, 
                espacos : [
                    ...imovel.espacos.filter(esp => esp.numero !== espaco.numero),
                    ...espacoImv
                ]
            })
        }
    }

    return (
        <Container>
            <div style={{paddingBottom: "45px"}}>
                <SectionHeader label="Adicionar Imóvel"/>
                <ImovelDataForm 
                    imovel={imovel}
                    onChange={handleFormChange}
                />
                <NameForm 
                    imovel={imovel}
                    onChange={handleFormChange}
                />
                <EnderecoForm 
                    imovel={imovel}
                    onChange={(event:any) => handleFormChange(event, "endereco")}
                />
                <EspacosForm 
                    onSaveEspaco={handleSaveEspaco} 
                    espacos={imovel.espacos}
                    onAddComodo={handleAddComodo}
                />
                <SaveDiv>
                    <SaveButton onClick={handleSaveImovel}>Salvar Imóvel</SaveButton>
                </SaveDiv>
            </div>
        </Container>
    )
}