import { AbstractEntity } from "./abstrac-tentity"
import { Marca } from "./enuns/marca"

export class Modelo extends AbstractEntity{
    nome!: string
    marca!: Marca
}