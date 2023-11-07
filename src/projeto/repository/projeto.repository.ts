import { Injectable, NotFoundException } from '@nestjs/common';
import { Projeto } from '../entities/projeto.entity';

@Injectable()
export class ProjetoRepository {
  projeto: any;
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
}
