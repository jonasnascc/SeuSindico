export type Imovel = {
    codigo: number,
    nome: string,
    descricao: string,
    quantidadeAndares: number,
    residenciasPorAndar: number,
    endereco: Endereco,
    residencias: Residencia[],
    tipo: "CASA" | "APARTAMENTO" | "ESCRITORIO" | "COMERCIO"
}

export type Endereco = {
    rua: string,
    numero: number,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    complemento: string
}

export type Residencia = {
    residenciaId: number,
    andar: number,
    numero: number,
    quantidadeComodos: number,
    metrosQuadrados: number,
    comodos: Comodo[]
}

export type Comodo = {
    nome: string,
    metrosQuadrados: number,
    detalhes: string
} 