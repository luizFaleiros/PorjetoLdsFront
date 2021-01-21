import { PersonType } from "./person-type-enum";

export interface Professor{
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    personType: PersonType;
    password: string;
    cpf?: string;

}
