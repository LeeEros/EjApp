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
import { v4 as uuid } from 'uuid';
import { CreateProjetoDto } from '../dto/create-projeto.dto';
import { listaProjetoDto } from '../dto/listaProjeto.dto';
import { UpdateProjetoDto } from '../dto/update-projeto.dto';
import { Projeto } from '../entities/projeto.entity';
import { ProjetoRepository } from '../repository/projeto.repository';

@Controller('projeto')
export class ProjetoController {
  constructor(private readonly projetoRepository: ProjetoRepository) {}

  @Post()
  async create(@Body() projetoDto: CreateProjetoDto) {
    try {
      const projetoEntity = new Projeto();
      projetoEntity.id = uuid();
      projetoEntity.dataInicio = projetoDto.dataInicio;
      projetoEntity.dataPrevisao = projetoDto.dataPrevisao;
      projetoEntity.dataFim = projetoDto.dataFim;
      projetoEntity.nomeProjeto = projetoDto.nomeProjeto;
      projetoEntity.status = projetoDto.status;

      this.projetoRepository.salvar(projetoEntity);

      return {
        projeto: new listaProjetoDto(
          projetoEntity.id,
          projetoEntity.dataInicio,
          projetoEntity.dataPrevisao,
          projetoEntity.dataFim,
          projetoEntity.nomeProjeto,
          projetoEntity.status,
        ),
      };
    } catch {
      throw new NotFoundException();
    }
  }

  @Get()
  async findAll() {
    try {
      const projetosSalvos = await this.projetoRepository.listar();
      const projetosLista = projetosSalvos.map(
        (projeto) =>
          new listaProjetoDto(
            projeto.id,
            projeto.dataInicio,
            projeto.dataPrevisao,
            projeto.dataFim,
            projeto.nomeProjeto,
            projeto.status,
          ),
      );
      return projetosLista;
    } catch {
      throw new NotFoundException();
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return this.projetoRepository.findOneById(id);
    } catch {
      throw new NotFoundException('Projeto não encontrado');
    }
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateProjetoDto: UpdateProjetoDto,
  ) {
    try {
      const projetoAtualizado = await this.projetoRepository.atualiza(
        id,
        updateProjetoDto,
      );

      return {
        dataInicio: projetoAtualizado.dataInicio,
        dataPrevisao: projetoAtualizado.dataPrevisao,
        dataFim: projetoAtualizado.dataFim,
        nomeProjeto: projetoAtualizado.nomeProjeto,
        status: projetoAtualizado.status,
        messagem: 'Projeto atualizado com sucesso',
      };
    } catch {
      throw new NotFoundException('Projeto não encontrado');
    }
  }

  @Delete('/:id')
  async removeProjeto(@Param('id') id: string) {
    try {
      const projetoRepository = await this.projetoRepository.remove(id);
      return {
        projeto: projetoRepository,
        messagem: 'Projeto removido com sucesso',
      };
    } catch {
      throw new NotFoundException('Projeto não encontrado');
    }
  }
}
