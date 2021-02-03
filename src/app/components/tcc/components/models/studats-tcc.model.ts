import { PersonType } from './../../../../shared/enums/person-type-enum';
export interface StudantTccModel{
  id: number;
  email: string;
  firstName: string;
  lasName: string;
  personType: PersonType;
}
