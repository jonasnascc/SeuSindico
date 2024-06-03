import * as Yup from 'yup';

const requiredMsg = "Este campo é obrigatório."

export const EnderecoSchema = Yup.object().shape({
    rua: Yup.string()
        .required(requiredMsg),
    numero: Yup.string()
        .required(requiredMsg),
    bairro: Yup.string()
        .required(requiredMsg),
    cidade: Yup.string()
        .required(requiredMsg),
    estado: Yup.string()
        .required(requiredMsg),
    cep: Yup.string()
        .required(requiredMsg),
    complemento: Yup.string()
        .required(requiredMsg)
})

export const ComodoSchema = Yup.object().shape({
    nome: Yup.string()
        .required(),
    metrosQuadrados: Yup.number()
        .required(),
    detalhes: Yup.string()
        .required()
})

export const EspacoSchema = Yup.object().shape({
    tipo: Yup.string<"CASA" | "APARTAMENTO" | "ESCRITORIO" | "PONTO_COMERCIAL">()
        .required(),
    espacoId: Yup.number()
        .required(),
    andar: Yup.number()
        .required(),
    numero: Yup.string()
        .required(),
    metrosQuadrados: Yup.number()
        .required(),
    comodos: Yup.array(ComodoSchema),
})

export const ImovelSchema = Yup.object().shape({
    nome: Yup.string()
        .required(requiredMsg),
    descricao: Yup.string()
        .min(12, "O tamanho mínimo para a descrição é de 12 caracteres."),
    quantidadeAndares: Yup.number()
        .min(1, "A quantidade mínima de andares é 1.")
        .required(requiredMsg),
    espacosPorAndar: Yup.number()
        .min(1, "A quantidade mínima de espaços por andar é 1.")
        .required(requiredMsg),
    endereco: EnderecoSchema,
    espacos: Yup.array().of(EspacoSchema)
})

