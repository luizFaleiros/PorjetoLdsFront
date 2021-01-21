import { PersonType } from './person-type-enum';

export interface Aluno{
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    personType: PersonType;
    password: string;
    code: string;
    cpf?: string;
}


