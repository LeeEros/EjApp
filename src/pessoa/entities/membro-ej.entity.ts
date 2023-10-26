import { Column } from 'typeorm';
import { Pessoa } from './pessoa.entity';

export class MembroEj extends Pessoa {
  @Column()
  matriculaInstituicao: string;

  @Column()
  dataFiliacao: Date;

  @Column()
  enderecoResidencial: string;

  @Column()
  RG: string;
}
