import { Column } from 'typeorm';
import { Pessoa } from './pessoa.entity';

export class MembroEj extends Pessoa {
  matriculaInstituicao: string;

  dataFiliacao: string;

  enderecoResidencial: string;

  RG: string;

  [key: string]: any;
}
