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
import { CreateMembroEjDto } from '../dto/create/create-membro-ej.dto';
import { listaMembroEjDto } from '../dto/list/ListaMembroEj.dto';
import { UpdateMembroEjDto } from '../dto/update/update-membro-ej.dto';
import { MembroEj } from '../entities/membro-ej.entity';
import { MembroEjRepository } from '../repository/membro-ej.repository';

@Controller('membro-ej')
export class MembroEjController {
  constructor(private readonly membroRepository: MembroEjRepository) {}

  @Post()
  async create(@Body() membro: CreateMembroEjDto) {
    try {
      const membroEjEntity = new MembroEj();
      membroEjEntity.id = membro.id;
      membroEjEntity.CPF = membro.CPF;
      membroEjEntity.nomeCompleto = membro.nomeCompleto;
      membroEjEntity.dataNascimento = membro.dataNascimento;
      membroEjEntity.email = membro.email;
      membroEjEntity.senha = membro.senha;
      membroEjEntity.matriculaInstituicao = membro.matriculaInstituicao;
      membroEjEntity.dataFiliacao = membro.dataFiliacao;
      membroEjEntity.enderecoResidencial = membro.enderecoResidencial;
      membroEjEntity.RG = membro.RG;

      this.membroRepository.salvar(membroEjEntity);

      return {
        membro: new listaMembroEjDto(
          membroEjEntity.matriculaInstituicao,
          membroEjEntity.dataFiliacao,
          membroEjEntity.enderecoResidencial,
          membroEjEntity.RG,
        ),
      };
    } catch {
      throw new NotFoundException();
    }
  }

  @Get()
  async findAll() {
    try {
      const membroSalvos = await this.membroRepository.listar();
      const membroLista = membroSalvos.map(
        (membro) =>
          new listaMembroEjDto(
            membro.matriculaInstituicao,
            membro.dataFiliacao,
            membro.enderecoResidencial,
            membro.RG,
          ),
      );
      return membroLista;
    } catch {
      throw new NotFoundException();
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return this.membroRepository.findOneById(id);
    } catch {
      throw new NotFoundException('Usuário não encontrado');
    }
  }

  @Put('/:RG')
  async update(
    @Param('RG') RG: string,
    @Body() updateMembroEjDto: UpdateMembroEjDto,
  ) {
    try {
      const membroAtualizado = await this.membroRepository.atualiza(
        RG,
        updateMembroEjDto,
      );

      return {
        matriculaInstituicao: membroAtualizado.matriculaInstituicao,
        dataFiliacao: membroAtualizado.dataFiliacao,
        enderecoResidencial: membroAtualizado.enderecoResidencial,
        RG: membroAtualizado.RG,
      };
    } catch {
      throw new NotFoundException('Usuário não encontrado');
    }
  }

  @Delete('/:RG')
  async removeUsuario(@Param('RG') RG: string) {
    try {
      const membroRepository = await this.membroRepository.remove(RG);
      return {
        usuario: membroRepository,
        messagem: 'Usuário removido com sucesso',
      };
    } catch {
      throw new NotFoundException('Usuário não encontrado');
    }
  }
}
