import { AbstractEntity } from "./abstrac-tentity"

export class Empresas extends AbstractEntity{
    nome!: string
    cep!: string
    endereco!: string
}