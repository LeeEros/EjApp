import { Injectable, NotFoundException } from '@nestjs/common';
import { Ej } from '../entities/ej.entity';

@Injectable()
export class EjRepository {
  private Ej: Ej[] = [];

  async salvar(Ej: Ej) {
    try {
      this.Ej.push(Ej);
    } catch {
      throw new NotFoundException(`Não foi possível salvar`);
    }
  }

  async listar() {
    try {
      return this.Ej;
    } catch {
      throw new NotFoundException(`Não foi possível listar`);
    }
  }

  async findOneById(id: string): Promise<Ej> {
    const possivelEj = this.buscaId(id);
    if (!possivelEj) {
      throw new Error(`Não foi possível encontrar`);
    }
    return await possivelEj;
  }

  private buscaId(id: string) {
    try {
      const possivelEj = this.Ej.find((EjSalva) => EjSalva.id === id);

      if (!possivelEj) {
        throw new Error('Usuário não encontrado');
      }
      return possivelEj;
    } catch {
      throw new NotFoundException(`Não foi possível encontrar`);
    }
  }

  async atualiza(id: string, dadosAtualizacao: Partial<Ej>) {
    try {
      const Ej = this.buscaId(id);
      Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
        if (chave === 'id') {
          return;
        }
        Ej[chave] = valor;
      });

      return Ej;
    } catch {
      throw new NotFoundException(`Não foi possível atualizar`);
    }
  }

  async remove(id: string) {
    try {
      const Ej = this.buscaId(id);

      this.Ej = this.Ej.filter((Ej) => Ej.id !== id);

      return;
    } catch {
      throw new NotFoundException(`Não foi possível deletar`);
    }
  }
}
