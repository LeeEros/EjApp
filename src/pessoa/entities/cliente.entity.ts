import { Pessoa } from './pessoa.entity';

export class Cliente extends Pessoa {
  CNPJ: string;
  telefone: string;
  contratoAtivo: boolean;
}
