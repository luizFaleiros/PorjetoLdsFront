import { PersonType } from "./person-type-enum";

export interface Aluno{
    id: number
    name: string
    lastName: string
    cpf: number
    personType: PersonType
}
