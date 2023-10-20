import { Pessoa } from './pessoa.entity';

export class MembroEj extends Pessoa {
  matriculaInstituicao: string;
  dataFiliacao: Date;
  enderecoResidencial: string;
  RG: string;
}
