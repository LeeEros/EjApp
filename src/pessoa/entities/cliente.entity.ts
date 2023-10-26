import { Column } from 'typeorm';
import { Pessoa } from './pessoa.entity';

export class Cliente extends Pessoa {
  @Column({ length: 14 })
  CNPJ: string;

  @Column({ length: 12 })
  telefone: string;

  @Column()
  contratoAtivo: boolean;
}
