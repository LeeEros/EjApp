import { Injectable } from '@nestjs/common';
import { MembroEj } from '../entities/membro-ej.entity';
import { Pessoa } from '../entities/pessoa.entity';
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

  findOneById(id: string): MembroEj {
    const possivelMembro = this.buscaId(id);
    if (!possivelMembro) {
      throw new Error(`Membro with ID ${id} not found`);
    }
    return possivelMembro;
  }


  private buscaId(id: string): Pessoa | undefined {
    const possivelMembro = this.membro.find((membroSalvo) => membroSalvo.id === id);
    return possivelMembro ? possivelMembro : undefined;
  }
  
}
