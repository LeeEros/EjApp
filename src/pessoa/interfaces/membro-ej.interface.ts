import { Pessoa } from './pessoa.interface';

export class MembroEj extends Pessoa {
  matriculaInstituicao: string;
  dataFiliacao: Date;
  enderecoResidencial: string;
  RG: string;
}
