import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { Cliente } from '../entities/cliente.entity';

@Injectable()
export class ClienteRepository {
  private cliente: Cliente[] = [];

  async salvar(cliente: Cliente) {
    try {
      this.cliente.push(cliente);
    } catch {
      throw new NotFoundException(`Não foi possível salvar`);
    }
  }

  async listar() {
    try {
      return this.cliente;
    } catch {
      throw new NotFoundException(`Não foi possível listar`);
    }
  }

  findOneById(CNPJ: string): Cliente {
    try {
      const possivelCliente = this.buscaCNPJ(CNPJ);
      if (!possivelCliente) {
        throw new Error(`Membro with ID ${CNPJ} not found`);
      }
      return possivelCliente;
    } catch {
      throw new NotFoundException(`Não foi possível encontrar`);
    }
  }

  private buscaCNPJ(CNPJ: string) {
    try {
      const possivelCliente = this.cliente.find(
        (clienteSalvo) => clienteSalvo.CNPJ === CNPJ,
      );
      return possivelCliente;
    } catch {
      throw new NotFoundException(`Não foi possível buscar`);
    }
  }

  async atualiza(CNPJ: string, dadosAtualizacao: Partial<Cliente>) {
    try {
      const cliente = this.buscaCNPJ(CNPJ);

      if (!cliente) {
        throw new Error(`Cliente with RG ${CNPJ} not found`);
      }

      Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
        if (chave === 'CNPJ') {
          return;
        }
        if (chave in cliente) {
          cliente[chave] = valor;
        } else {
          throw new NotAcceptableException();
        }
      });

      return cliente;
    } catch {
      throw new NotFoundException(`Não foi possível atualizar`);
    }
  }

  async remove(CNPJ: string) {
    try {
      const cliente = this.buscaCNPJ(CNPJ);

      this.cliente = this.cliente.filter(
        (clienteSalvo) => clienteSalvo.RG !== CNPJ,
      );

      return;
    } catch {
      throw new NotFoundException(`Não foi possível excluir`);
    }
  }
}
