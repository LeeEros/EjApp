import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateClienteDto } from '../dto/create/create-cliente.dto';
import { listaClienteDto } from '../dto/list/listaCliente.dto';
import { UpdateClienteDto } from '../dto/update/update-cliente.dto';
import { Cliente } from '../entities/cliente.entity';
import { ClienteRepository } from '../repository/cliente.repository';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  @Post()
  async create(@Body() cliente: CreateClienteDto) {
    try {
      const clienteEntity = new Cliente();
      clienteEntity.CNPJ = cliente.CNPJ;
      clienteEntity.telefone = cliente.telefone;
      clienteEntity.contratoAtivo = cliente.contratoAtivo;

      this.clienteRepository.salvar(clienteEntity);

      return {
        cliente: new listaClienteDto(
          clienteEntity.CNPJ,
          clienteEntity.telefone,
          clienteEntity.contratoAtivo,
        ),
      };
    } catch {
      throw new NotFoundException();
    }
  }

  @Get()
  async findAll() {
    try {
      const membroSalvos = await this.clienteRepository.listar();
      const membroLista = membroSalvos.map(
        (cliente) =>
          new listaClienteDto(
            cliente.CNPJ,
            cliente.telefone,
            cliente.contratoAtivo,
          ),
      );
      return membroLista;
    } catch {
      throw new NotFoundException();
    }
  }

  @Get(':CNPJ')
  async findOne(@Param('CNPJ') CNPJ: string) {
    try {
      return this.clienteRepository.findOneById(CNPJ);
    } catch {
      throw new NotFoundException('Cliente não encontrado');
    }
  }

  @Put('/:CNPJ')
  async update(
    @Param('CNPJ') CNPJ: string,
    @Body() updateClienteDto: UpdateClienteDto,
  ) {
    try {
      const clienteAtualizado = await this.clienteRepository.atualiza(
        CNPJ,
        updateClienteDto,
      );

      return {
        CNPJ: clienteAtualizado.CNPJ,
        telefone: clienteAtualizado.telefone,
        contratoAtivo: clienteAtualizado.contratoAtivo,
      };
    } catch {
      throw new NotFoundException('cliente não encontrado');
    }
  }

  @Delete('/:CNPJ')
  async removeCliente(@Param('CNPJ') CNPJ: string) {
    try {
      const clienteRepository = await this.clienteRepository.remove(CNPJ);
      return {
        cliente: clienteRepository,
        messagem: 'cliente removido com sucesso',
      };
    } catch {
      throw new NotFoundException('cliente não encontrado');
    }
  }
}
