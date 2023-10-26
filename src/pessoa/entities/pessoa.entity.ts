import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class Pessoa {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ length: 11 })
  CPF: string;

  @Column({ length: 300 })
  nomeCompleto: string;

  @Column()
  dataNascimento: Date;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 100 })
  senha: string;
}
