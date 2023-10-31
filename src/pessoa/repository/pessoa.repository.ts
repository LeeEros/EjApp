import { Injectable } from '@nestjs/common';
import { Pessoa } from '../entities/pessoa.entity';

@Injectable()
export class PessoaRepository {
  private pessoa: Pessoa[] = [];

  salvar(pessoa: Pessoa) {
    this.pessoa.push(pessoa);
  }

  async listar() {
    return this.pessoa;
  }

  private buscaId(id: string) {
    const possivelPessoa = this.pessoa.find(
      (pessoaSalva) => pessoaSalva.id === id,
    );

    if (!possivelPessoa) {
      throw new Error('Usuário não encontrado');
    }

    return possivelPessoa;
  }

  /* async atualiza(id: string, pessoaAtualizada: Partial<Pessoa>) {
    const pessoa = this.buscaId(id);
    Object.entries(pessoaAtualizada).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      pessoa[chave] = valor;
    });

    return pessoa;
  }*/

  async atualiza(id: string, dadosAtualizacao: Partial<Pessoa>) {
    const usuario = this.buscaId(id);
    Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        usuario[chave] = valor;
      }
    });

    return usuario;
  }
}
