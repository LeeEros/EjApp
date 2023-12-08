import { Catch, Injectable, NotFoundException } from '@nestjs/common';
import { Pessoa } from '../entities/pessoa.entity';

@Injectable()
export class PessoaRepository {
  private pessoa: Pessoa[] = [];

  async salvar(pessoa: Pessoa) {
    try {
      this.pessoa.push(pessoa);
    } catch {
      throw new NotFoundException(`Não foi possível salvar`);
    }
  }

  async listar() {
    try {
      return this.pessoa;
    } catch {
      throw new NotFoundException(`Não foi possível listar`);
    }
  }

  async findOneById(id: string): Promise<Pessoa> {
    try {
      const possivelPessoa = this.buscaId(id);
      if (!possivelPessoa) {
        throw new Error(`Não foi possível encontrar`);
      }
      return await possivelPessoa;
    } catch {
      throw new NotFoundException(`Não foi possível salvar`);
    }
  }

  private buscaId(id: string) {
    try {
      const possivelPessoa = this.pessoa.find(
        (pessoaSalva) => pessoaSalva.id === id,
      );

      if (!possivelPessoa) {
        throw new Error('Usuário não encontrado');
      }

      return possivelPessoa;
    } catch {
      throw new NotFoundException(`Usuário não encontrado`);
    }
  }

  async atualiza(id: string, dadosAtualizacao: Partial<Pessoa>) {
    try {
      const pessoa = this.buscaId(id);
      Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
        if (chave === 'id') {
          return;
        }
        pessoa[chave] = valor;
      });

      return pessoa;
    } catch {
      throw new NotFoundException(`Não foi possível atualizar`);
    }
  }

  async remove(id: string) {
    try {
      const pessoa = this.buscaId(id);

      this.pessoa = this.pessoa.filter((pessoaSalva) => pessoaSalva.id !== id);

      return;
    } catch {
      throw new NotFoundException(`Não foi possível excluir`);
    }
  }
}
