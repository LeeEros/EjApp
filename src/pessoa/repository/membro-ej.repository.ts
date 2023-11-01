import { Injectable } from '@nestjs/common';
import { MembroEj } from '../entities/membro-ej.entity';
import { PessoaRepository } from './pessoa.repository';

@Injectable()
export class MembroEjRepository extends PessoaRepository {
  private membro: MembroEj[] = [];

  salvar(membro: MembroEj) {
    this.membro.push(membro);
  }

  async listar() {
    return this.membro;
  }
}
