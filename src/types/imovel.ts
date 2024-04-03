export type Imovel = {
    codigo: number,
    nome: string,
    descricao: string,
    quantidadeAndares: number,
    espacosPorAndar: number,
    endereco: Endereco,
    espacos: Espaco[],
    tipo: "CASA" | "EDIFICIO"
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
    tipo: "" | "APARTAMENTO" | "ESCRITORIO" | "PONTO_COMERCIAL"
    espacoId: number | null,
    andar: number | null,
    numero: number | null,
    quantidadeComodos: number | null,
    metrosQuadrados: number | null,
    comodos: Comodo[]
}

export type Comodo = {
    nome: string,
    metrosQuadrados: number,
    detalhes: string
} 