import { AbstractEntity } from "./abstract-entity"
import { Marca } from "./enuns/marca"

export class Modelo extends AbstractEntity{
    nome!: string
    marca!: Marca
}