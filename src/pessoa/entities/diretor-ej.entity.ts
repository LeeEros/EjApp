import { Column } from 'typeorm';
import { MembroEj } from './membro-ej.entity';

export class DiretorEj extends MembroEj {
  @Column({ length: 25 })
  setor: string;

  @Column()
  conselheiroFederacao: boolean;
}
