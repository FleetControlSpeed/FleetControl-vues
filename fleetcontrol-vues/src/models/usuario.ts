import { AbstractEntity } from "./abstrac-tentity"
import { Cargo } from "./enuns/cargo"

export class Usuarios extends AbstractEntity{
    email!: string
    usuario!: string
    senha!: string
    cargo!: Cargo
    primeiroNome!: string
    sobrenome!: string
    cpf!: string
    telefone!: string
    dataNascimento!: string
    endereco!:string


}