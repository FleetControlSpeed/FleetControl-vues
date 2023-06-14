import { AbstractEntity } from "./abstract-entity"
import { Cor } from "./enuns/cor"
import { Tipo } from "./enuns/tipo"
import { Modelo } from "./modelo"

export class Veiculo extends AbstractEntity{
    modelo!: Modelo
    placa!: string
    ano!: number
    cor!: Cor
    km!: number
    tipo!: Tipo
}