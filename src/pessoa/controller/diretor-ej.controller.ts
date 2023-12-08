import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateDiretorEjDto } from '../dto/create/create-diretor-ej.dto';
import { UpdateDiretorEjDto } from '../dto/update/update-diretor-ej.dto';
import { DiretorEj } from '../entities/diretor-ej.entity';
import { DiretorRepository } from '../repository/diretor.repository';
import { listaDiretorDto } from '../dto/list/listaDiretor.dto';

@Controller('diretor-ej')
export class DiretorEjController {
  constructor(private readonly diretorEjRepository: DiretorRepository) {}

  @Post()
  async create(@Body() diretor: CreateDiretorEjDto) {
    try {
      const membroEjEntity = new DiretorEj();

      this.diretorEjRepository.salvar(membroEjEntity);

      return {
        membro: new listaDiretorDto(
          membroEjEntity.setor,
          membroEjEntity.conselheiroFederacao,
        ),
      };
    } catch {
      throw new NotFoundException();
    }
  }

  @Get()
  async findAll() {
    try {
      const diretorSalvos = await this.diretorEjRepository.listar();
      const diretoresLista = diretorSalvos.map(
        (diretor) =>
          new listaDiretorDto(diretor.setor, diretor.conselheiroFederacao),
      );
      return diretoresLista;
    } catch {
      throw new NotFoundException();
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return this.diretorEjRepository.findOneById(id);
    } catch {
      throw new NotFoundException('Usuário não encontrado');
    }
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateDiretorDto: UpdateDiretorEjDto,
  ) {
    try {
      const diretorAtualizado = await this.diretorEjRepository.atualiza(
        id,
        updateDiretorDto,
      );

      return {
        setor: diretorAtualizado.setor,
        conselheiroFederacao: diretorAtualizado.conselheiroFederacao,
        messagem: 'Usuário atualizado com sucesso',
      };
    } catch {
      throw new NotFoundException('Usuário não encontrado');
    }
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    try {
      const diretor = await this.diretorEjRepository.remove(id);
      return {
        usuario: diretor,
        messagem: 'Usuário removido com sucesso',
      };
    } catch {
      throw new NotFoundException('Usuário não encontrado');
    }
  }
}
