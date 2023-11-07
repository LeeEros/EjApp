import {
  Controller,
  Post,
  Body,
  NotFoundException,
  Delete,
  Get,
  Param,
  Put,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Ej } from '../entities/ej.entity';
import { EjRepository } from '../repository/ej.repository';
import { listaEjDto } from '../dto/listaEjDto';
import { UpdateEjDto } from '../dto/update-ej.dto';
import { CreateEjDto } from '../dto/create-ej.dto';

@Controller('ej')
export class EjController {
  constructor(private readonly ejRepository: EjRepository) {}

  @Post()
  async create(@Body() createEjDto: CreateEjDto) {
    try {
      const ejEntity = new Ej({
        id: uuid(),
        CNPJ: createEjDto.CNPJ,
        nome: createEjDto.nome,
      });

      this.ejRepository.salvar(ejEntity);

      return {
        ej: new listaEjDto(ejEntity.id, ejEntity.CNPJ, ejEntity.nome),
      };
    } catch {
      throw new NotFoundException();
    }
  }

  @Get()
  async findAll() {
    try {
      const pessoaSalvos = await this.ejRepository.listar();
      const pessoaLista = pessoaSalvos.map(
        (Ej) => new listaEjDto(Ej.id, Ej.CNPJ, Ej.nome),
      );
      return pessoaLista;
    } catch {
      throw new NotFoundException();
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return this.ejRepository.findOneById(id);
    } catch {
      throw new NotFoundException('Ej não encontrada');
    }
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() updateEjDto: UpdateEjDto) {
    try {
      const EjAtualizada = await this.ejRepository.atualiza(id, updateEjDto);

      return {
        CNPJ: EjAtualizada.CNPJ,
        nome: EjAtualizada.nome,
        messagem: 'Ej atualizada com sucesso',
      };
    } catch {
      throw new NotFoundException('Ej não encontrada');
    }
  }

  @Delete('/:id')
  async removeEj(@Param('id') id: string) {
    try {
      const EjRepository = await this.ejRepository.remove(id);
      return {
        usuario: EjRepository,
        messagem: 'Ej removida com sucesso',
      };
    } catch {
      throw new NotFoundException('Ej não encontrada');
    }
  }
}
