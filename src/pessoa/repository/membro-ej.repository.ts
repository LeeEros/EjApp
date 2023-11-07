import { Injectable, NotAcceptableException } from '@nestjs/common';
import { MembroEj } from '../entities/membro-ej.entity';
import { Pessoa } from '../entities/pessoa.entity';
import { PessoaRepository } from './pessoa.repository';

@Injectable()
export class MembroEjRepository {
  private membro: MembroEj[] = [];

  salvar(membro: MembroEj) {
    this.membro.push(membro);
  }

  async listar() {
    return this.membro;
  }

  findOneById(id: string): MembroEj {
    const possivelMembro = this.buscaRG(id);
    if (!possivelMembro) {
      throw new Error(`Membro with ID ${id} not found`);
    }
    return possivelMembro;
  }

  private buscaRG(RG: string) {
    const possivelMembro = this.membro.find(
      (membroSalvo) => membroSalvo.RG === RG,
    );
    return possivelMembro;
  }

  async atualiza(RG: string, dadosAtualizacao: Partial<MembroEj>) {
    const membro = this.buscaRG(RG);

    if (!membro) {
      throw new Error(`Membro with RG ${RG} not found`);
    }

    Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'RG') {
        return;
      }
      if (chave in membro) {
        membro[chave] = valor;
      } else {
        throw new NotAcceptableException();
      }
    });

    return membro;
  }

  async remove(RG: string) {
    const membro = this.buscaRG(RG);

    this.membro = this.membro.filter((membroSalvo) => membroSalvo.RG !== RG);

    return;
  }
}
