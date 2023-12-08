import { Injectable, NotFoundException } from '@nestjs/common';
import { DiretorEj } from '../entities/diretor-ej.entity';

@Injectable()
export class DiretorRepository {
  private DiretorEj: DiretorEj[] = [];

  async salvar(DiretorEj: DiretorEj) {
    try {
      this.DiretorEj.push(DiretorEj);
    } catch {
      throw new NotFoundException(`Não foi possível salvar`);
    }
  }

  async listar() {
    try {
      return this.DiretorEj;
    } catch {
      throw new NotFoundException(`Não foi possível listar`);
    }
  }

  async findOneById(id: string): Promise<DiretorEj> {
    try {
      const possivelDiretorEj = this.buscaId(id);
      if (!possivelDiretorEj) {
        throw new Error(`Não foi possível encontrar`);
      }
      return await possivelDiretorEj;
    } catch {
      throw new NotFoundException(`Usuário não encontrado`);
    }
  }

  private buscaId(id: string) {
    try {
      const possivelDiretorEj = this.DiretorEj.find(
        (diretorSalvo) => diretorSalvo.id === id,
      );

      if (!possivelDiretorEj) {
        throw new Error('Usuário não encontrado');
      }

      return possivelDiretorEj;
    } catch {
      throw new NotFoundException(`Não foi possível encontrar`);
    }
  }

  async atualiza(id: string, dadosAtualizacao: Partial<DiretorEj>) {
    try {
      const diretor = this.buscaId(id);
      Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
        if (chave === 'id') {
          return;
        }
        diretor[chave] = valor;
      });

      return diretor;
    } catch {
      throw new NotFoundException(`Não foi possível atualizar`);
    }
  }

  async remove(id: string) {
    try {
      const diretor = this.buscaId(id);

      this.DiretorEj = this.DiretorEj.filter(
        (diretorSalvo) => diretorSalvo.id !== id,
      );

      return;
    } catch {
      throw new NotFoundException(`Não foi possível excluir`);
    }
  }
}
