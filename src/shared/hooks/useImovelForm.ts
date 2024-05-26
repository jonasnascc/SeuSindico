import { useEffect, useState } from "react";
import { Comodo, EmptyImovel, Espaco, Imovel } from "../../types/imovel";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { postImovel, updateImovel } from "../../api/services/Imoveis";

const useImovelForm = (imovelData ?: Imovel, imovelFromState?:boolean) => {
    const [imovel, setImovel] = useState<Imovel>(imovelData ?? {...EmptyImovel});
    const [isEditing, setIsEditing] = useState(false);
    
    const location = useLocation()
    const navigate = useNavigate()

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
        if(imovelFromState){
            const data = location.state?.imovelData

            if(data) setImovel(data);

            setIsEditing(true)
        }
    }, [imovelFromState, location.state])

    const handleSaveImovel = () => {
        if(isEditing) {
            updateMutation.mutate();
        }else saveMutation.mutate();
    }

    const handleImovelPropChange = (prop:string, value:string) => {
        if(!Object.keys(imovel).includes(prop)) return;

        setImovel({
            ...imovel,
            [prop] : value
        })
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

    return {
        imovel,
        handleImovelPropChange,
        handleFormChange,
        handleSaveImovel,
        handleSaveEspaco,
        handleAddComodo,
        isEditing
    }
}

export default useImovelForm;