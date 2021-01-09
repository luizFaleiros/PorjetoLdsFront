import { PersonType } from "./person-type-enum";

export interface Professor{
    id: number
    name: string
    lastName: string
    cpf: number
    personType: PersonType
}
