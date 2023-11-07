import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { MembroEj } from '../entities/membro-ej.entity';
import { Pessoa } from '../entities/pessoa.entity';
import { PessoaRepository } from './pessoa.repository';

@Injectable()
export class MembroEjRepository {
  private membro: MembroEj[] = [];

  salvar(membro: MembroEj) {
    try {
      this.membro.push(membro);
    } catch {
      throw new NotFoundException(`Não foi possível salvar`);
    }
  }

  async listar() {
    try {
      return this.membro;
    } catch {
      throw new NotFoundException(`Não foi possível listar`);
    }
  }

  findOneById(RG: string): MembroEj {
    try {
      const possivelMembro = this.buscaRG(RG);
      if (!possivelMembro) {
        throw new Error(`Membro with ID ${RG} not found`);
      }
      return possivelMembro;
    } catch {
      throw new NotFoundException(`Não foi possível encontrar`);
    }
  }

  private buscaRG(RG: string) {
    try {
      const possivelMembro = this.membro.find(
        (membroSalvo) => membroSalvo.RG === RG,
      );
      return possivelMembro;
    } catch {
      throw new NotFoundException(`Não foi possível buscar`);
    }
  }

  async atualiza(RG: string, dadosAtualizacao: Partial<MembroEj>) {
    try {
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
    } catch {
      throw new NotFoundException(`Não foi possível atualizar`);
    }
  }

  async remove(RG: string) {
    try {
      const membro = this.buscaRG(RG);

      this.membro = this.membro.filter((membroSalvo) => membroSalvo.RG !== RG);

      return;
    } catch {
      throw new NotFoundException(`Não foi possível excluir`);
    }
  }
}
