export type Imovel = {
    codigo: number | null,
    nome: string,
    descricao: string,
    quantidadeAndares: number | null,
    espacosPorAndar: number | null,
    endereco: Endereco | null,
    espacos: Espaco[]
}

export type SimpleImovel = {
    nome: string,
    descricao: string,
    quantidadeAndares: number | null,
    espacosPorAndar: number | null
}

export type Endereco = {
    enderecoId : number | null,
    rua: string,
    numero: number | null,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    complemento: string
}

export type Espaco = {
    id:number|null
    tipo: "CASA" | "APARTAMENTO" | "ESCRITORIO" | "PONTO_COMERCIAL"
    espacoId: number | null,
    andar: number | null,
    numero: string,
    metrosQuadrados: number | null,
    comodos: Comodo[],
    contrato : {
        contratoId : number | null,
        statusContrato : "PENDENTE" | "ASSINADO"
    } | null
}

export type Comodo = {
    comodoId : number | null, 
    nome: string,
    metrosQuadrados: number | null,
    detalhes: string
} 