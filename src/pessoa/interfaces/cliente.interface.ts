import { Pessoa } from './pessoa.interface';

export class Cliente extends Pessoa {
  CNPJ: string;
  telefone: string;
  contratoAtivo: boolean;
}
