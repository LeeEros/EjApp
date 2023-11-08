import { Injectable, NotFoundException } from '@nestjs/common';
import { Projeto } from '../entities/projeto.entity';

@Injectable()
export class ProjetoRepository {
  private projeto: Projeto[] = [];

  async salvar(Projeto: Projeto) {
    try {
      this.projeto.push(Projeto);
    } catch {
      throw new NotFoundException(`Não foi possível salvar`);
    }
  }

  async listar() {
    try {
      return this.projeto;
    } catch {
      throw new NotFoundException(`Não foi possível listar`);
    }
  }

  async findOneById(id: string): Promise<Projeto> {
    const possivelProjeto = this.buscaId(id);
    if (!possivelProjeto) {
      throw new Error(`Não foi possível encontrar`);
    }
    return await possivelProjeto;
  }

  private buscaId(id: string) {
    try {
      const possivelProjeto = this.projeto.find(
        (projetoSalvo) => projetoSalvo.id === id,
      );

      if (!possivelProjeto) {
        throw new Error('Projeto não encontrado');
      }
      return possivelProjeto;
    } catch {
      throw new NotFoundException(`Não foi possível encontrar`);
    }
  }

  async atualiza(id: string, dadosAtualizacao: Partial<Projeto>) {
    try {
      const projeto = this.buscaId(id);
      Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
        if (chave === 'id') {
          return;
        }
        projeto[chave] = valor;
      });

      return projeto;
    } catch {
      throw new NotFoundException(`Não foi possível atualizar`);
    }
  }

  async remove(id: string) {
    try {
      const projeto = this.buscaId(id);

      this.projeto = this.projeto.filter((projeto) => projeto.id !== id);

      return;
    } catch {
      throw new NotFoundException(`Não foi possível deletar`);
    }
  }
}
