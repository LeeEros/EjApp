import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Ej {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ length: 14 })
  CNPJ: string;

  @Column({ length: 200 })
  nome: string;
}
