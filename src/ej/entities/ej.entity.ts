import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Ej' })
export class Ej {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ length: 14, nullable: false })
  CNPJ: string;

  @Column({ length: 200, nullable: false })
  nome: string;
}
