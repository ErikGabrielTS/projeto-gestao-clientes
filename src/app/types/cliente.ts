import { Estado } from './estado';
import { Municipio } from './Municipio';

export interface Cliente {
  id?: string;
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  uf: Estado | null;
  municipio: Municipio | null;
}
