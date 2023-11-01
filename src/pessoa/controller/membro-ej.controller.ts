import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMembroEjDto } from '../dto/create/create-membro-ej.dto';
import { UpdateMembroEjDto } from '../dto/update/update-membro-ej.dto';
import { MembroEj } from '../entities/membro-ej.entity';
import { MembroEjRepository } from '../repository/membro-ej.repository';
import { listaMembroEjDto } from '../dto/list/ListaMembroEj.dto';

@Controller('membro-ej')
export class MembroEjController {
  constructor(private readonly membroRepository: MembroEjRepository) {}

  @Post()
  async create(@Body() membro: CreateMembroEjDto) {
    try {
      const membroEjEntity = new MembroEj();
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
  findAll() {
    return this.membroEjService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membroEjService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMembroEjDto: UpdateMembroEjDto,
  ) {
    return this.membroEjService.update(+id, updateMembroEjDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membroEjService.remove(+id);
  }
}
