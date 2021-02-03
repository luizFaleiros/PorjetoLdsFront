import { FilesTccModel } from './files-tcc.model';
import { StudantTccModel } from './studats-tcc.model';
export interface TccResponseModel{
  id: number;
  name:string;
  studants: StudantTccModel[];
  subjects: string;
  files: FilesTccModel[];
}
