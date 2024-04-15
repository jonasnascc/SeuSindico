export type Imovel = {
    codigo: number | null,
    nome: string,
    descricao: string,
    quantidadeAndares: number | null,
    espacosPorAndar: number | null,
    endereco: Endereco | null,
    espacos: Espaco[],
    tipo: "" |"CASA" | "EDIFICIO"
}

export type SimpleImovel = {
    nome: string,
    descricao: string,
    quantidadeAndares: number | null,
    espacosPorAndar: number | null,
    tipo: "" |"CASA" | "EDIFICIO"
}

export type Endereco = {
    rua: string,
    numero: number | null,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    complemento: string
}

export type Espaco = {
    nome: string,
    tipo: "CASA" | "APARTAMENTO" | "ESCRITORIO" | "PONTO_COMERCIAL"
    espacoId: number | null,
    andar: number | null,
    numero: string,
    quantidadeComodos: number | null,
    metrosQuadrados: number | null,
    comodos: Comodo[]
}

export type Comodo = {
    nome: string,
    metrosQuadrados: number | null,
    detalhes: string
} 