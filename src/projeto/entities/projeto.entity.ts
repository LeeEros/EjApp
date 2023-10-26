import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Projeto {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column()
  dataInicio: Date;

  @Column()
  dataPrevisao: Date;

  @Column()
  dataFim: Date;

  @Column()
  nomeProjeto: string;

  @Column()
  status: string;
}
